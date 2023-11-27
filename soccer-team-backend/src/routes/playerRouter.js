import express from "express";

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const items = await req.db.player.findAll();
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
  // Logic to fetch a single player by id
});

router.put("/:id", async (req, res) => {
  // Logic to update a player by id
});

router.delete("/:id", async (req, res) => {
  // Logic to delete a player by id
});

export default router;
