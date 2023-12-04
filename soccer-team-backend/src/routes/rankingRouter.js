import express from "express";
import scrapeRankings from "../scrapers/soccerRanking.js";

const router = express.Router();

// Endpoint to get the soccer schedule
router.get("/", async (req, res) => {
  try {
    const data = await scrapeRankings();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

export default router;
