import { SwapStation } from "../database/models/index";

class Controller {
  static async createStation(req, res) {
    const location = JSON.stringify(req.body.location);
    const swap = await SwapStation.create({ location, ...req.body });
    return res.status(201).json({
      status: 201,
      message: "swap station successfully created",
      swap,
    });
  }

  static async getAllSwapStations(req, res) {
    const swaps = await SwapStation.findAll({ include: ["User"] });
    return res.status(200).json({
      status: 200,
      message: "success",
      swaps,
    });
  }
}

export default Controller;
