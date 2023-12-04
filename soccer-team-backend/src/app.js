import express from "express";
import cors from "cors";
import bodyParser from "body-parser"; // Import bodyParser
import setupRoutes from "./routeHandler.js";
import { verifyToken } from "./middleware/authMiddleware.js"; // Import your token verification middleware

const app = express();
app.use(cors());
app.use(bodyParser.json()); // Add this line to parse JSON request bodies

let dbInstance = null;

export const setDatabase = (db) => {
  dbInstance = db;
};

app.use((req, res, next) => {
  req.db = dbInstance;
  next();
});

export { app };
