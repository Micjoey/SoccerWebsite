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
      {
        gameId: 2,
        score: "3-0",
        summary: "Dominant performance by the home team.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 3,
        score: "1-1",
        summary: "A hard-fought draw with equal goals.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 4,
        score: "4-2",
        summary: "Exciting game with multiple lead changes.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 5,
        score: "0-2",
        summary: "Away team secures a clean sheet victory.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 6,
        score: "2-3",
        summary: "High-scoring thriller with a last-minute winner.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 7,
        score: "1-0",
        summary: "Narrow victory with a single goal difference.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 8,
        score: "0-0",
        summary: "Goalless draw with solid defense from both sides.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 9,
        score: "3-1",
        summary: "Home team asserts dominance in the match.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 10,
        score: "2-2",
        summary: "An evenly contested match ends in a draw.",
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
