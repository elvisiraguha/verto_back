module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Batteries", [
      {
        currentLocation: '"{ "lng": 30.14113, "lat": -1.910829 }',
        UserId: 1,
        status: "in-use",
        currentCapacity: 67,
        fullCapacityDistance: 80,
        fullCapacityCharge: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        currentLocation: '{ "lng": 30.117043, "lat": -1.931193 }',
        UserId: 2,
        status: "in-use",
        currentCapacity: 83,
        fullCapacityDistance: 80,
        fullCapacityCharge: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        currentLocation: '{ "lng": 30.074912, "lat": -1.941999 }',
        UserId: 3,
        status: "in-use",
        currentCapacity: 49,
        fullCapacityDistance: 80,
        fullCapacityCharge: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        currentLocation: '{ "lng": 30.094645, "lat": -1.984496 }',
        status: "at-station",
        currentCapacity: 100,
        fullCapacityDistance: 80,
        fullCapacityCharge: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Batteries", null, {});
  },
};
