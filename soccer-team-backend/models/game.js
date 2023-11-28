"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relationship with PlayerAvailability
      Game.hasMany(models.PlayerAvailability, { foreignKey: "gameId" });

      // Relationship with GameResult
      Game.hasOne(models.GameResult, { foreignKey: "gameId" });

      // Relationship with PlayerStatistic
      Game.hasMany(models.PlayerStatistic, { foreignKey: "gameId" });
    }
  }
  Game.init(
    {
      date: DataTypes.DATE,
      time: DataTypes.STRING,
      opponent: DataTypes.STRING,
      location: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Game",
      timestamps: true,
    },
  );
  return Game;
};
