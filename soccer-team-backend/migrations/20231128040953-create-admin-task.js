export async function up(queryInterface, Sequelize) {
  const tables = [
    "AdminTask",
    "Game",
    "GameResult",
    "Permission",
    "Player",
    "PlayerAvailability",
    "PlayerStatistic",
    "Role",
    "Team",
    "User",
  ];
  for (const table of tables) {
    await queryInterface.addColumn(table, "createdAt", {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    });
    await queryInterface.addColumn(table, "updatedAt", {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    });
  }
}
export async function down(queryInterface, Sequelize) {
  const tables = [
    "AdminTask",
    "Game",
    "GameResult",
    "Permission",
    "Player",
    "PlayerAvailability",
    "PlayerStatistic",
    "Role",
    "Team",
    "User",
  ];
  for (const table of tables) {
    await queryInterface.removeColumn(table, "createdAt");
    await queryInterface.removeColumn(table, "updatedAt");
  }
}
