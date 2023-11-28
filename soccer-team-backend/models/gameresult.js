"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class GameResult extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relationship with Game
      GameResult.belongsTo(models.Game, { foreignKey: "gameId" });
    }
  }
  GameResult.init(
    {
      gameId: DataTypes.INTEGER,
      score: DataTypes.STRING,
      summary: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "GameResult",
      timestamps: true,
    },
  );
  return GameResult;
};
