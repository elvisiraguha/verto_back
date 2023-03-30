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
    return queryInterface.bulkInsert("SwapStations", [
      {
        id: 1,
        name: "Quick charge Remera",
        location: '"{ "lng": 30.12113, "lat": -1.950829 }',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Quick charge Down town",
        location: '{ "lng": 30.117043, "lat": -1.935193 }',
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "Quick charge Nyamiramgo",
        location: '{ "lng": 30.074912, "lat": -1.931999 }',
        UserId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: "Quick charge Kicukiro",
        location: '{ "lng": 30.094645, "lat": -1.984496 }',
        UserId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("SwapStations", null, {});
  },
};
