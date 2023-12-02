"use strict";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require("bcrypt");

async function generateHashedPassword(password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

export async function up(queryInterface, Sequelize) {
  const users = [
    {
      username: "admin",
      email: "admin@example.com",
      password: await generateHashedPassword("password1"),
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: "user1",
      email: "user1@example.com",
      password: await generateHashedPassword("password2"),
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: "user2",
      email: "user2@example.com",
      password: await generateHashedPassword("password3"),
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: "user3",
      email: "user3@example.com",
      password: await generateHashedPassword("password4"),
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: "user4",
      email: "user4@example.com",
      password: await generateHashedPassword("password5"),
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: "user5",
      email: "user5@example.com",
      password: await generateHashedPassword("password6"),
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: "user6",
      email: "user6@example.com",
      password: await generateHashedPassword("password7"),
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: "user7",
      email: "user7@example.com",
      password: await generateHashedPassword("password8"),
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: "user8",
      email: "user8@example.com",
      password: await generateHashedPassword("password9"),
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: "user9",
      email: "user9@example.com",
      password: await generateHashedPassword("password10"),
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  await queryInterface.bulkInsert("Users", users, {});
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("Users", null, {});
}
