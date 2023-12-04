"use strict";
import bcrypt from "bcrypt";

async function generateHashedPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

export async function up(queryInterface, Sequelize) {
  const users = [
    {
      username: "admin",
      name: "admin",
      email: "admin@example.com",
      phone: "1234567890",
      contactPreference: "email",
      password: await generateHashedPassword("password1"),
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: "admin2",
      name: "admin2",
      email: "admin2@example.com",
      phone: "1234567890",
      contactPreference: "email",
      password: 123,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  await queryInterface.bulkInsert("Users", users, {});
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("Users", null, {});
}
