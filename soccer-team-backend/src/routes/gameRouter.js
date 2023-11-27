import express from "express";

const router = express.Router();

router.get("/games", async (req, res) => {
  try {
    const games = await req.db.Game.findAll();
    res.json(games);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching games" });
  }
});

export default router;
