"use strict";

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    "GameResults",
    [
      {
        gameId: 1,
        score: "2-1",
        summary: "Close match with a late winning goal.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  );
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("GameResults", null, {});
}
