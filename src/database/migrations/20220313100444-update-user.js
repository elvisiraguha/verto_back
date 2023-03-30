module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Users", "role", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Users", "password", {
      type: Sequelize.STRING,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Users", "role", {
      type: Sequelize.STRING,
    });
    await queryInterface.removeColumn("Users", "password", {
      type: Sequelize.STRING,
    });
  },
};
