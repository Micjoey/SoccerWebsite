"use strict";

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    "PlayerAvailability",
    [
      {
        userId: 1,
        gameId: 1,
        availability: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        gameId: 2,
        availability: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        gameId: 1,
        availability: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        gameId: 3,
        availability: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        gameId: 2,
        availability: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        gameId: 3,
        availability: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        gameId: 1,
        availability: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        gameId: 3,
        availability: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        gameId: 4,
        availability: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        gameId: 4,
        availability: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more PlayerAvailability here
    ],
    {},
  );
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("PlayerAvailability", null, {});
}