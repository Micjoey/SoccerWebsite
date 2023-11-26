"use strict";

export async function up(queryInterface, Sequelize) {
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
  await queryInterface.removeColumn("Users", "roleId");
}
