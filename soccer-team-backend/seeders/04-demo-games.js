"use strict";

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    "Games",
    [
      {
        date: new Date(),
        time: "15:00",
        opponent: "Sharks",
        location: "Stadium A, Seattle",
        homeTeamColor: "Blue",
        awayTeamColor: "Red",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: new Date(),
        time: "14:30",
        opponent: "Dolphins",
        location: "Field B, Seattle",
        homeTeamColor: "Green",
        awayTeamColor: "Yellow",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: new Date(),
        time: "16:15",
        opponent: "Orcas",
        location: "Stadium C, Seattle",
        homeTeamColor: "Purple",
        awayTeamColor: "Orange",
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
