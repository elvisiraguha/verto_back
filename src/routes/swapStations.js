import express from "express";
import controller from "../controllers/swapStation";
import asyncErrorHandler from "../middlewares/asyncErrorHandler";

const router = express.Router();

router.get("/", asyncErrorHandler(controller.getAllSwapStations));
router.post("/", asyncErrorHandler(controller.createStation));

export default router;
