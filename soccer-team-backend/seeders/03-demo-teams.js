"use strict";

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    "Teams",
    [
      {
        name: "Eagles",
        logo: "eagles_logo_url",
        description: "Eagles football team",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sharks",
        logo: "sharks_logo_url",
        description: "Sharks football team",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  );
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("Teams", null, {});
}
