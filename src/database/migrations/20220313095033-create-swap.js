module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Swaps", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      SwapStationId: {
        type: Sequelize.INTEGER,
        references: {
          model: "SwapStations",
          key: "id",
        },
      },
      batteryTaken: {
        type: Sequelize.INTEGER,
        references: {
          model: "Batteries",
          key: "id",
        },
      },
      batterySubmitted: {
        type: Sequelize.INTEGER,
        references: {
          model: "Batteries",
          key: "id",
        },
      },
      batterySubmittedStatus: {
        type: Sequelize.STRING,
      },
      time: {
        type: Sequelize.DATE,
      },
      waitingTime: {
        type: Sequelize.STRING,
      },
      charge: {
        type: Sequelize.INTEGER,
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Swaps");
  },
};
