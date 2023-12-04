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
      allowNull: true, // Allow null as per model
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true, // Allow null as per model
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true, // Ensure email is unique as per model
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    contactPreference: {
      type: Sequelize.ENUM("email", "phone"),
      allowNull: false,
    },
    role: {
      type: Sequelize.STRING,
      allowNull: true, // Allow null as per model
    },
    position: {
      type: Sequelize.STRING,
      allowNull: true, // Added position, allow null as it's not in the initial migration
    },
    teamId: {
      type: Sequelize.INTEGER,
      allowNull: true, // Assuming teamId can be null if the association is optional
      references: {
        model: "Teams", // Make sure this matches the table name exactly
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
    roleId: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "Roles", // Make sure this matches the table name exactly
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  });
}

export async function down(queryInterface, Sequelize) {
  // Drop the Users table
  await queryInterface.dropTable("Users");
}
