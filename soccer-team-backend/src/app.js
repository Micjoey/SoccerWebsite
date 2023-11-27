import express from "express";
import cors from "cors";
import scheduleRouter from "./routes/scheduleRouter.js";
import rankingRouter from "./routes/rankingRouter.js";
import initializeDatabase from "../models/index.js";
import gameRouter from "./routes/gameRouter.js";

const app = express();
app.use(cors());

// Add a middleware to attach db to the request object
let dbInstance = null;
export const setDatabase = (db) => {
  dbInstance = db;
};

app.use((req, res, next) => {
  req.db = dbInstance;
  next();
});

app.use("/", scheduleRouter);
app.use("/", rankingRouter);
app.use("/", gameRouter);

export { app };
