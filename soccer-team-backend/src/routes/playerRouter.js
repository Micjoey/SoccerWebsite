import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const items = await req.db.Player.findAll();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching players" });
  }
});

router.post("/", async (req, res) => {
  // Logic to create a new player
});

router.get("/:id", async (req, res) => {
  try {
    const player = await req.db.Player.findByPk(req.params.id);
    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching player" });
  }
});

router.put("/:id", async (req, res) => {
  // Logic to update a player by id
});

router.delete("/:id", async (req, res) => {
  // Logic to delete a player by id
});

export default router;
