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
      {
        playerId: 2,
        gameId: 2,
        availability: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        playerId: 3,
        gameId: 1,
        availability: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        playerId: 1,
        gameId: 3,
        availability: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        playerId: 4,
        gameId: 2,
        availability: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        playerId: 2,
        gameId: 3,
        availability: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        playerId: 5,
        gameId: 1,
        availability: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        playerId: 3,
        gameId: 3,
        availability: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        playerId: 1,
        gameId: 4,
        availability: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        playerId: 4,
        gameId: 4,
        availability: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more PlayerAvailabilities here
    ],
    {},
  );
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("PlayerAvailabilities", null, {});
}
