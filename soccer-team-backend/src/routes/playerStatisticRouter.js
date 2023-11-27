import express from "express";

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const items = await req.db.playerStatistic.findAll();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching playerStatistics" });
  }
});

router.post("/", async (req, res) => {
  // Logic to create a new playerStatistic
});

router.get("/:id", async (req, res) => {
  // Logic to fetch a single playerStatistic by id
});

router.put("/:id", async (req, res) => {
  // Logic to update a playerStatistic by id
});

router.delete("/:id", async (req, res) => {
  // Logic to delete a playerStatistic by id
});

export default router;
