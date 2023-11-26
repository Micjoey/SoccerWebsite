"use strict";

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    "Users",
    [
      {
        username: "admin",
        email: "admin@example.com",
        password: "hashed_password",
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  );
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("Users", null, {});
}
