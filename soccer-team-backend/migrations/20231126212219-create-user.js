"use strict";
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  // Create the Users table
  await queryInterface.createTable("Users", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    username: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });

  // Add the roleId column to the Users table
  await queryInterface.addColumn("Users", "roleId", {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "Roles",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  });
}

export async function down(queryInterface, Sequelize) {
  // Drop the Users table
  await queryInterface.dropTable("Users");
}
