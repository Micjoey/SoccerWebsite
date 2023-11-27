"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relationship with Player
      // Assuming a player belongs to a team
      Team.hasMany(models.Player, { foreignKey: "teamId" });
    }
  }
  Team.init(
    {
      name: DataTypes.STRING,
      logo: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Team",
    },
  );
  return Team;
};
