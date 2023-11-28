"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class AdminTask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relationship with User
      AdminTask.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  AdminTask.init(
    {
      userId: DataTypes.INTEGER,
      task: DataTypes.TEXT,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "AdminTask",
      timestamps: true,
    },
  );
  return AdminTask;
};
