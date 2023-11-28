import express from "express";

const router = express.Router();

// Get all games
router.get("/games", async (req, res) => {
  try {
    const games = await req.db.Game.findAll();
    res.json(games);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching games" });
  }
});

// Create a new game
router.post("/", async (req, res) => {
  try {
    const newGame = await req.db.Game.create(req.body);
    res.status(201).json(newGame);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating game" });
  }
});

// Get a single game by ID
router.get("/:id", async (req, res) => {
  try {
    const game = await req.db.Game.findByPk(req.params.id);
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    res.json(game);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching game" });
  }
});

// Update a game by ID
router.put("/:id", async (req, res) => {
  try {
    const game = await req.db.Game.findByPk(req.params.id);
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    await game.update(req.body);
    res.json(game);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating game" });
  }
});

// Delete a game by ID
router.delete("/:id", async (req, res) => {
  try {
    const game = await req.db.Game.findByPk(req.params.id);
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    await game.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting game" });
  }
});

export default router;
