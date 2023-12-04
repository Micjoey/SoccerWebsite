"use strict";
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Role.hasMany(models.User, { foreignKey: "roleId" });
      Role.belongsToMany(models.Permission, { through: "RolePermission" });
    }
  }
  Role.init(
    {
      roleName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [["player", "admin", "player-admin"]],
        },
      },
    },
    {
      sequelize,
      modelName: "Role",
      timestamps: true,
    },
  );

  return Role;
};
