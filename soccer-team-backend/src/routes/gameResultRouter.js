import express from "express";

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const items = await req.db.gameResult.findAll();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching gameResults" });
  }
});

router.post("/", async (req, res) => {
  // Logic to create a new gameResult
});

router.get("/:id", async (req, res) => {
  // Logic to fetch a single gameResult by id
});

router.put("/:id", async (req, res) => {
  // Logic to update a gameResult by id
});

router.delete("/:id", async (req, res) => {
  // Logic to delete a gameResult by id
});

export default router;
