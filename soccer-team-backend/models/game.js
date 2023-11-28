"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Game extends Model {
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
      time: DataTypes.TIME, // Updated to TIME type
      opponent: DataTypes.STRING,
      location: DataTypes.STRING,
      homeTeamColor: DataTypes.STRING, // Added home team color
      awayTeamColor: DataTypes.STRING, // Added away team color
    },
    {
      sequelize,
      modelName: "Game",
      timestamps: true,
    },
  );
  return Game;
};
