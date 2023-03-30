import { Swap, Battery } from "../database/models/index";

class Controller {
  /**
   * record a new batter swap
   * check if the battery submitted exist
   * calculate the charge to pay by current capacity percentage
   * check if the requested battter is not already in use
   */
  static async newSwap(req, res) {
    const batterySubmitted = await Battery.findOne({
      where: { id: req.body.batterySubmitted },
      raw: true,
    });

    if (!batterySubmitted) {
      return res.status(404).json({
        status: 404,
        message: "battery not found",
      });
    }

    if (batterySubmitted.status !== "in-use") {
      return res.status(409).json({
        status: 409,
        message: "battery submitted is not in use",
      });
    }

    const charge =
      batterySubmitted.fullCapacityCharge -
      (batterySubmitted.currentCapacity / 100) *
        batterySubmitted.fullCapacityCharge;

    const batteryRequested = await Battery.findOne({
      where: { id: req.body.batteryTaken },
      raw: true,
    });

    if (batteryRequested.status === "in-use") {
      return res.status(409).json({
        status: 409,
        message: "battery requested is already in use",
      });
    }
    await Battery.update(
      { status: "at-station" },
      { where: { id: batterySubmitted.id } }
    );
    await Battery.update(
      { status: "in-use", UserId: req.body.UserId, currentCapacity: 100 },
      { where: { id: batteryRequested.id } }
    );

    const time = new Date();
    const swap = await Swap.create({ time, charge, ...req.body });
    return res.status(201).json({
      status: 201,
      message: `swap successfully created, charge is Frw${charge}`,
      swap,
    });
  }

  static async getAllSwaps(req, res) {
    const swaps = await Swap.findAll({ include: ["SwapStation", "User"] });
    return res.status(200).json({
      status: 200,
      message: "success",
      swaps,
    });
  }

  static async getSwapsByStation(req, res) {
    const swaps = await Swap.findAll({
      where: { SwapStationId: req.params.stationId },
      include: ["User"],
    });
    return res.status(200).json({
      status: 200,
      message: "success",
      swaps,
    });
  }
}

export default Controller;
