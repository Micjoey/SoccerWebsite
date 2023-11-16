import express from "express";
import cors from "cors";
import scheduleRouter from "./routes/scheduleRoutes.js"; // Adjust the path as necessary

const app = express();
app.use(cors()); // Enable CORS for all routes

app.use("/", scheduleRouter); // Mount the router on the '/api' path

export default app;
