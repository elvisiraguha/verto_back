"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Battery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Battery.belongsTo(models.User);
    }
  }
  Battery.init(
    {
      currentLocation: DataTypes.STRING,
      status: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
      currentCapacity: DataTypes.INTEGER,
      fullCapacityDistance: DataTypes.INTEGER,
      fullCapacityCharge: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Battery",
    }
  );
  return Battery;
};
