"use strict";

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    "UserStatistics",
    [
      {
        userId: 1,
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
  await queryInterface.bulkDelete("UserStatistics", null, {});
}
