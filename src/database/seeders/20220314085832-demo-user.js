import AuthHelper from "../../helpers/authHelper";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await AuthHelper.hashPassword("password");
    return queryInterface.bulkInsert("Users", [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "manager1@example.com",
        role: "stationManager",
        password,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        firstName: "John",
        lastName: "Doe",
        email: "manager2@example.com",
        role: "stationManager",
        password,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        firstName: "John",
        lastName: "Doe",
        email: "manager3@example.com",
        role: "stationManager",
        password,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        firstName: "John",
        lastName: "Doe",
        email: "manager4@example.com",
        role: "stationManager",
        password,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        firstName: "John",
        lastName: "Doe",
        email: "inventory@example.com",
        role: "inventory",
        password,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        firstName: "John",
        lastName: "Doe",
        email: "driver1@example.com",
        role: "driver",
        password,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        firstName: "John",
        lastName: "Doe",
        email: "driver2@example.com",
        role: "driver",
        password,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        firstName: "John",
        lastName: "Doe",
        email: "driver3@example.com",
        role: "driver",
        password,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", 1, {});
  },
};
