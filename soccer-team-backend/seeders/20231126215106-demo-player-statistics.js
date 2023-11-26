"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "PlayerStatistics",
      [
        {
          playerId: 1,
          gameId: 1,
          stats: "Scored 2 goals",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("PlayerStatistics", null, {});
  },
};
