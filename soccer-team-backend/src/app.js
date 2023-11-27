// src/app.js

import express from "express";
import cors from "cors";
import setupRoutes from "./routeHandler.js"; // Import the central route setup function

const app = express();
app.use(cors());

let dbInstance = null;
export const setDatabase = (db) => {
  dbInstance = db;
};

app.use((req, res, next) => {
  req.db = dbInstance;
  next();
});

// Set up all routes
setupRoutes(app);

export { app };
