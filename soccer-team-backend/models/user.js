"use strict";
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Define associations here
      User.hasMany(models.UserAvailability, { foreignKey: "userId" });
      User.hasMany(models.UserStatistic, { foreignKey: "userId" });
      User.belongsTo(models.Team, { foreignKey: "teamId" });
      User.hasMany(models.AdminTask, { foreignKey: "userId" });
      User.belongsTo(models.Role, { foreignKey: "roleId" });
    }
  }

  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      phone: DataTypes.STRING,
      contactPreference: DataTypes.ENUM("email", "phone"),
      role: DataTypes.STRING,
      name: DataTypes.STRING,
      position: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      timestamps: true,
    },
  );

  return User;
};
