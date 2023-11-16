import express from "express";
import cors from "cors";
import scrapeData from "./scrapers/soccerSchedule"; // Adjust the import path as needed
const app = express();

app.use(cors()); // Enable CORS for all routes

// Setup API endpoint for schedule
app.get("/schedule", async (req, res) => {
  try {
    const data = await scrapeData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving schedule" });
  }
});

export default app;
