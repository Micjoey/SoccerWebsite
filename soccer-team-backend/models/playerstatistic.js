"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class PlayerStatistic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relationship with Player
      PlayerStatistic.belongsTo(models.Player, { foreignKey: "playerId" });

      // Relationship with Game
      PlayerStatistic.belongsTo(models.Game, { foreignKey: "gameId" });
    }
  }
  PlayerStatistic.init(
    {
      playerId: DataTypes.INTEGER,
      gameId: DataTypes.INTEGER,
      stats: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "PlayerStatistic",
      timestamps: true,
    },
  );
  return PlayerStatistic;
};
