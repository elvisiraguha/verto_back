import express from "express";
import controller from "../controllers/auth";
import asyncErrorHandler from "../middlewares/asyncErrorHandler";
import AuthMiddleware from "../middlewares/auth";

const router = express.Router();

router.post("/login", asyncErrorHandler(controller.login));
router.post(
  "/logout",
  AuthMiddleware.isUserAuthenticated,
  asyncErrorHandler(controller.logoutUser)
);

export default router;
