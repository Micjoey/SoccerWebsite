"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class UserStatistic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relationship with Player
      UserStatistic.belongsTo(models.Player, { foreignKey: "userId" });

      // Relationship with Game
      UserStatistic.belongsTo(models.Game, { foreignKey: "gameId" });
    }
  }
  UserStatistic.init(
    {
      userId: DataTypes.INTEGER,
      gameId: DataTypes.INTEGER,
      stats: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "UserStatistic",
      timestamps: true,
    },
  );
  return UserStatistic;
};
