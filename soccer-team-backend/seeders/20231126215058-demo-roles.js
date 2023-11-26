"use strict";

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    "Roles",
    [
      {
        roleName: "Admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleName: "Player",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  );
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("Roles", null, {});
}
