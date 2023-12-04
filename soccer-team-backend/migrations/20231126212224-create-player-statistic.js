"use strict";
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("PlayerStatistics", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    playerId: {
      type: Sequelize.INTEGER,
    },
    gameId: {
      type: Sequelize.INTEGER,
    },
    stats: {
      type: Sequelize.TEXT,
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
  await queryInterface.dropTable("PlayerStatistics");
}
