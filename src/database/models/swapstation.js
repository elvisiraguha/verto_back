"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SwapStation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SwapStation.hasMany(models.Swap);
      SwapStation.belongsTo(models.User);
    }
  }
  SwapStation.init(
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "SwapStation",
    }
  );
  return SwapStation;
};
