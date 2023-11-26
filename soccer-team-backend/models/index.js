"use strict";

import { readdirSync } from "fs";
import { basename as _basename, join } from "path";
import { Sequelize, DataTypes } from "sequelize";
import { env as _env } from "process";
import config from "../config/config.json"; // Updated import statement

const basename = _basename(__filename);
const env = _env.NODE_ENV || "development";
const envConfig = config[env]; // Accessing the environment-specific config
const db: { [key: string]: never } = {}; // TypeScript type for db object

let sequelize: Sequelize;
if (envConfig.use_env_variable) {
  sequelize = new Sequelize(_env[envConfig.use_env_variable], envConfig);
} else {
  sequelize = new Sequelize(
    envConfig.database,
    envConfig.username,
    envConfig.password,
    envConfig,
  );
}

readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    // Dynamically import each model file
    import(join(__dirname, file)).then((module) => {
      const model = module.default(sequelize, DataTypes);
      db[model.name] = model;
    });
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
