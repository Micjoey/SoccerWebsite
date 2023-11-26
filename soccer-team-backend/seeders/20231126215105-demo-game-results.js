"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "GameResults",
      [
        {
          gameId: 1, // Link to a game
          score: "2-1",
          summary: "Close match with a late winning goal.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("GameResults", null, {});
  },
};
