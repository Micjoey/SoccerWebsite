"use strict";

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    "Games",
    [
      {
        date: new Date(),
        time: "15:00",
        opponent: "Sharks",
        location: "Stadium A",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  );
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("Games", null, {});
}
