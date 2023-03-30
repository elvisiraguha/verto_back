import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { redisClient } from "../server";

config();

const privateKey = process.env.JWT_SIGNING_KEY;
export default class AuthHelper {
  static hashPassword = async (plainText) => {
    const hashedText = await bcrypt.hash(plainText, bcrypt.genSaltSync(10));
    return hashedText;
  };

  static comparePasswords = async (plainText = "", hashedText) => {
    const isSame = await bcrypt.compare(plainText, hashedText);
    return isSame;
  };

  static signToken = async (data) => {
    const token = await jwt.sign(data, privateKey, {
      expiresIn: "10h",
    });
    await redisClient.set(`token-${data.userName}`, token, {
      EX: 60 * 60 * 10,
    });
    return token;
  };
}
