"use strict";

import { readdirSync } from "fs";
import { basename as _basename, join } from "path";
import { Sequelize, DataTypes } from "sequelize";
import config from "../config/config.js";

const initializeDatabase = async () => {
  const basename = _basename(__filename);
  const envConfig = await config; // Directly fetching the development config
  const db = {};

  const sequelize = new Sequelize(
    envConfig.database,
    envConfig.username,
    envConfig.password,
    envConfig,
  );

  const modelFiles = readdirSync(__dirname).filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  });

  for (const file of modelFiles) {
    const module = await import(join(__dirname, file));
    const model = module.default(sequelize, DataTypes);
    db[model.name] = model;
  }

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
  return db;
};

export default initializeDatabase;
