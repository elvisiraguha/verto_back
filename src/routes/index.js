import express from "express";
import authRouter from "./auth";
import swapRouter from "./swaps";
import swapStationRouter from "./swapStations";
import batteryRouter from "./battery";

const router = express.Router();

router.use("/*", (req, res, next) => {
  next();
});

router.get("/", (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

router.use("/auth", authRouter);
router.use("/swap", swapRouter);
router.use("/swapStation", swapStationRouter);
router.use("/battery", batteryRouter);
router.use((err, req, res, next) => {
  res.status(500).json({
    status: 500,
    message: err.message,
  });
});

export default router;
