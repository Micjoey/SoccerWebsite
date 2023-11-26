"use strict";

export async function up(queryInterface, Sequelize) {
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
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("PlayerStatistics", null, {});
}
