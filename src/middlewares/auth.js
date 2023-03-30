import { User, OrganizerRequest } from "../database/models/index";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { redisClient } from "../server";

config();

const privateKey = process.env.JWT_SIGNING_KEY;

export default class AuthMiddleware {
  static isUserAuthenticated = async (req, res, next) => {
    const token = req.headers.authorization?.split("Bearer ")[1];
    if (!token) {
      return res.status(401).json({
        status: 401,
        message: "unauthenticated attempt, invalid token",
      });
    } else {
      try {
        const data = await jwt.verify(token, privateKey);
        const unExpiredToken = await redisClient.get(`token-${data.userName}`);

        if (!unExpiredToken) {
          return res.status(401).json({
            status: 401,
            message: "unauthenticated attempt, token unregistered",
          });
        }

        const user = await User.findOne({
          where: { email: data.email },
          raw: true,
        });

        if (!user) {
          return res.status(401).json({
            status: 401,
            message: "unauthenticated attempt, unregistered user",
          });
        }
        req.__user = { user };

        return next();
      } catch (err) {
        return res.status(401).json({
          status: 401,
          message: `unauthenticated attempt, ${err.message}`,
        });
      }
    }
  };

  static isManager = async (req, res, next) => {
    const { user } = req.__user;
    if (user.role !== "stationManager") {
      return res.status(403).json({
        status: 403,
        message:
          "unauthorized attempt, you are not allowed to access this resource",
      });
    } else {
      return next();
    }
  };

  static isInventory = async (req, res, next) => {
    const { user } = req.__user;
    if (user.role !== "inventory") {
      return res.status(403).json({
        status: 403,
        message:
          "unauthorized attempt, you are not allowed to access this resource",
      });
    } else {
      return next();
    }
  };

  static isDriver = async (req, res, next) => {
    const { user } = req.__user;
    if (user.role !== "driver") {
      return res.status(403).json({
        status: 403,
        message:
          "unauthorized attempt, you are not allowed to access this resource",
      });
    } else {
      return next();
    }
  };
}
