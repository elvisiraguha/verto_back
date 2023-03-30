const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Swap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Swap.belongsTo(models.SwapStation);
      Swap.belongsTo(models.User);
    }
  }
  Swap.init(
    {
      SwapStationId: DataTypes.INTEGER,
      batteryTaken: DataTypes.INTEGER,
      batterySubmitted: DataTypes.INTEGER,
      batterySubmittedStatus: DataTypes.INTEGER,
      time: DataTypes.DATE,
      waitingTime: DataTypes.INTEGER,
      charge: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Swap",
    }
  );
  return Swap;
};
