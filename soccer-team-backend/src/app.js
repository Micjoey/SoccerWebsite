import express from "express";
import cors from "cors";
import scheduleRouter from "./routes/scheduleRoutes.js";
import rankingRouter from "./routes/rankingRoutes.js";
import initializeDatabase from "../models/index.js";

const app = express();
app.use(cors());

app.use("/", scheduleRouter);
app.use("/", rankingRouter);

export { app, initializeDatabase };
