"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Game extends Model {
    static associate(models) {
      // Relationship with UserAvailability
      Game.hasMany(models.UserAvailability, { foreignKey: "gameId" });

      // Relationship with GameResult
      Game.hasOne(models.GameResult, { foreignKey: "gameId" });

      // Relationship with UserStatistic
      Game.hasMany(models.UserStatistic, { foreignKey: "gameId" });
    }
  }
  Game.init(
    {
      date: DataTypes.DATE,
      time: DataTypes.TIME,
      opponent: DataTypes.STRING,
      location: DataTypes.STRING,
      homeTeamColor: DataTypes.STRING,
      awayTeamColor: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Game",
      timestamps: true,
    },
  );
  return Game;
};
