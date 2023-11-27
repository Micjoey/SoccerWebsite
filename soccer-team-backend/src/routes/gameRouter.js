import express from "express";
import Game from "../../models/game.js";

const router = express.Router();

// Endpoint to get a list of all games
router.get("/games", async (req, res) => {
  try {
    console.log(0, Game);
    const games = await Game.findAll(); // Use Sequelize to fetch all games
    console.log(1, games);
    res.json(games);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching games" });
  }
});

export default router;
