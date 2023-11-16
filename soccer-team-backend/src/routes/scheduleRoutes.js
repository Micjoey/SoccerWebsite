import express from "express";
import scrapeData from "../scrapers/soccerSchedule.js"; // Make sure this path is correct
const router = express.Router();

// Endpoint to get the soccer schedule
router.get("/schedule", async (req, res) => {
  try {
    const data = await scrapeData();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

export default router;
