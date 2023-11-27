"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relationship with PlayerAvailability
      Player.hasMany(models.PlayerAvailability, { foreignKey: "playerId" });

      // Relationship with PlayerStatistic
      Player.hasMany(models.PlayerStatistic, { foreignKey: "playerId" });

      // Relationship with Team
      // Assuming a player belongs to a team
      Player.belongsTo(models.Team, { foreignKey: "teamId" });
    }
  }
  Player.init(
    {
      name: DataTypes.STRING,
      position: DataTypes.STRING,
      contactDetails: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Player",
    },
  );
  return Player;
};
