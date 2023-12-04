"use strict";

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    "Roles",
    [
      {
        roleName: "admin", // Changed to lowercase to match model validation
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleName: "player", // Changed to lowercase to match model validation
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleName: "player-admin", // Added to reflect the third valid role option
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  );
}

export async function down(queryInterface, Sequelize) {
  // In the down migration, we want to remove only the entries we've added
  await queryInterface.bulkDelete("Roles", {
    roleName: ["admin", "player", "player-admin"],
  });
}
