import express from "express";
import controller from "../controllers/swaps";
import asyncErrorHandler from "../middlewares/asyncErrorHandler";
import AuthMiddleware from "../middlewares/auth";

const router = express.Router();

/**
 * get all battery swap records
 * this endpoint will be used by inventory entities to monitor which station should be supplied with more batteries
 */
router.get("/", asyncErrorHandler(controller.getAllSwaps));

/**
 * get swap records from a station
 * this endpoint will be used by station to look at their past battery swaps
 */
router.get("/:stationId", asyncErrorHandler(controller.getSwapsByStation));

/**
 * create a battery swap record
 * accessed only by swap station manager
 */
router.post(
  "/",
  AuthMiddleware.isUserAuthenticated,
  AuthMiddleware.isManager,
  asyncErrorHandler(controller.newSwap)
);

export default router;
