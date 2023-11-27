// db.js
import { Sequelize } from "sequelize";
import GameModel from "../models/game.js";
import fetchSecrets from "./configDb.js"; // Import fetchSecrets

const initDb = async () => {
  const { username, password, dbname, host, port } = await fetchSecrets();

  const sequelize = new Sequelize(dbname, username.toLowerCase(), password, {
    host: host || "localhost",
    port: port || 5432,
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  });

  // Model initialization
  const Game = GameModel(sequelize, Sequelize.DataTypes);
  // ... initialize other models

  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Database connection and synchronization successful");
  } catch (error) {
    console.error("Error during Sequelize initialization:", error);
  }

  return { sequelize, Game }; // Return Sequelize instance and models
};

export default initDb;
