"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class PlayerAvailability extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relationship with Player
      PlayerAvailability.belongsTo(models.Player, { foreignKey: "playerId" });

      // Relationship with Game
      PlayerAvailability.belongsTo(models.Game, { foreignKey: "gameId" });
    }
  }
  PlayerAvailability.init(
    {
      playerId: DataTypes.INTEGER,
      gameId: DataTypes.INTEGER,
      availability: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "PlayerAvailability",
      timestamps: true,
    },
  );
  return PlayerAvailability;
};
