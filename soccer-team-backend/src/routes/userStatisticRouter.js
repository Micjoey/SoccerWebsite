import express from "express";

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const items = await req.db.UserStatistic.findAll();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching UserStatistics" });
  }
});

router.post("/", async (req, res) => {
  // Logic to create a new UserStatistic
});

router.get("/:id", async (req, res) => {
  // Logic to fetch a single UserStatistic by id
});

router.put("/:id", async (req, res) => {
  // Logic to update a UserStatistic by id
});

router.delete("/:id", async (req, res) => {
  // Logic to delete a UserStatistic by id
});

export default router;
