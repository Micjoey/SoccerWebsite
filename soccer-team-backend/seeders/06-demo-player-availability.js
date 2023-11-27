"use strict";

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    "PlayerAvailabilities",
    [
      {
        playerId: 1,
        gameId: 1,
        availability: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  );
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("PlayerAvailabilities", null, {});
}
