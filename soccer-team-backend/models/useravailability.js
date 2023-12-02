"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class UserAvailability extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relationship with Player
      UserAvailability.belongsTo(models.User, { foreignKey: "userId" });

      // Relationship with Game
      UserAvailability.belongsTo(models.Game, { foreignKey: "gameId" });
    }
  }
  UserAvailability.init(
    {
      userId: DataTypes.INTEGER,
      gameId: DataTypes.INTEGER,
      availability: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "UserAvailability",
      timestamps: true,
    },
  );
  return UserAvailability;
};
