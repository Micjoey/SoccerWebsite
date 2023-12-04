"use strict";
import { readdirSync } from "fs";
import path from "path"; // Correct import for path
import { fileURLToPath } from "url";
import { Sequelize, DataTypes } from "sequelize";
import config from "../config/config.js";

const initializeDatabase = async () => {
  // Derive __filename and __dirname using fileURLToPath and import.meta.url
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const basename_filename = path.basename(__filename);
  const envConfig = await config(); // Directly fetching the development config
  const db = {};
  const sequelize = new Sequelize(
    envConfig.database,
    envConfig.username,
    envConfig.password,
    { ...envConfig },
  );

  const modelFiles = readdirSync(__dirname).filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename_filename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  });

  for (const file of modelFiles) {
    const modelPath = path.join(__dirname, file); // Use path.join here
    const module = await import(modelPath);
    const model = module.default(sequelize, DataTypes);
    db[model.name] = model;
  }

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  // // Synchronize the database with the models (create tables if they don't exist)
  // await sequelize.sync();

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
  return db;
};

export default initializeDatabase;
