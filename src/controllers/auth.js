import { User } from "../database/models/index";
import AuthHelper from "../helpers/authHelper";
import { redisClient } from "../server";

class Controller {
  static async login(req, res) {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
      raw: true,
      include: ["SwapStation"],
    });

    if (!user) {
      return res.status(404).json({
        status: 404,
        message: "user not found",
      });
    }

    const isPasswordCorrect = await AuthHelper.comparePasswords(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(403).json({
        stats: 403,
        message: "incorrect email or password",
      });
    }

    const { firstName, lastName, email, role, id } = user;

    const userPayload = { firstName, lastName, email, role };

    const token = await AuthHelper.signToken(userPayload);

    return res.status(200).json({
      status: 200,
      message: "successfully logged in",
      user: { ...user, password: undefined },
      token,
    });
  }
  static logoutUser = async (req, res) => {
    const { user } = req.__user;

    await redisClient.del(`token-${user.userName}`);
    return res.status(200).json({
      status: 200,
      message: "logout success",
    });
  };
}

export default Controller;
