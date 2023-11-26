"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "PlayerAvailabilities",
      [
        {
          playerId: 1, // Assuming '1' is a player ID
          gameId: 1, // Assuming '1' is a game ID
          availability: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("PlayerAvailabilities", null, {});
  },
};
