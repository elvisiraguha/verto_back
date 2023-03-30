import express from "express";
import controller from "../controllers/battery";
import asyncErrorHandler from "../middlewares/asyncErrorHandler";
import AuthMiddleware from "../middlewares/auth";

const router = express.Router();

// get all batteries
router.get("/", asyncErrorHandler(controller.getAllBatteries));

// register a new batter
router.post("/", asyncErrorHandler(controller.createBattery));

/**
 *
 * update battery capacity
 * it is assumed that batteries used are smart
 * and those which are in use will be the one calling this endpoint frequently
 * to update their current capacity
 */
router.patch("/:batteryId", asyncErrorHandler(controller.updateBatteryStatus));

// get current batter capacity, by a driver
router.get(
  "/status",
  AuthMiddleware.isUserAuthenticated,
  asyncErrorHandler(controller.getBatteryStatus)
);
export default router;
