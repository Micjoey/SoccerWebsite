"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // If users are players, too
      User.hasOne(models.Player, { foreignKey: "userId" });

      // Relationship with AdminTask
      User.hasMany(models.AdminTask, { foreignKey: "userId" });

      // Relationship with Role
      User.belongsTo(models.Role, { foreignKey: "roleId" });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      timestamps: true,
    },
  );
  return User;
};
