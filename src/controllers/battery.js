import { Battery } from "../database/models/index";

class Controller {
  static async createBattery(req, res) {
    const battery = await Battery.create({ ...req.body });
    return res.status(201).json({
      status: 201,
      message: "batttery successfully created",
      battery,
    });
  }

  static async updateBatteryStatus(req, res) {
    const battery = await Battery.update(
      { currentCapacity: parseInt(req.query.capacity) },
      { where: { id: req.params.batteryId } }
    );
    return res.status(201).json({
      status: 201,
      message: "batttery successfully updated",
      battery,
    });
  }

  static async getAllBatteries(req, res) {
    const batteries = await Battery.findAll({ include: ["User"] });
    return res.status(200).json({
      status: 200,
      message: "success",
      batteries,
    });
  }

  static async getBatteryStatus(req, res) {
    const { user } = req.__user;

    const currentBattery = await Battery.findOne({
      where: { UserId: user.id },
      raw: true,
    });
    if (!currentBattery) {
      return res.status(404).json({
        status: 404,
        message: "no battery currently registered under this driver",
      });
    }

    const charge =
      currentBattery.fullCapacityCharge -
      (currentBattery.currentCapacity / 100) *
        currentBattery.fullCapacityCharge;

    return res.status(200).json({
      status: 200,
      message: "success",
      capacity: currentBattery.currentCapacity,
      charge: `estimated charge: Frw${charge}`,
      id: currentBattery.id,
    });
  }
}

export default Controller;
