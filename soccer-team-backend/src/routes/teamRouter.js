import express from "express";

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const items = await req.db.team.findAll();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching teams" });
  }
});

router.post("/", async (req, res) => {
  // Logic to create a new team
});

router.get("/:id", async (req, res) => {
  // Logic to fetch a single team by id
});

router.put("/:id", async (req, res) => {
  // Logic to update a team by id
});

router.delete("/:id", async (req, res) => {
  // Logic to delete a team by id
});

export default router;
