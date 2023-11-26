"use strict";

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    "Permissions",
    [
      {
        permissionName: "manage_teams",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        permissionName: "edit_games",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  );
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("Permissions", null, {});
}
