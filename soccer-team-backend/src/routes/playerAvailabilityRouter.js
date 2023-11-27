import express from "express";

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const items = await req.db.playerAvailability.findAll();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching playerAvailabilitys" });
  }
});

router.post("/", async (req, res) => {
  // Logic to create a new playerAvailability
});

router.get("/:id", async (req, res) => {
  // Logic to fetch a single playerAvailability by id
});

router.put("/:id", async (req, res) => {
  // Logic to update a playerAvailability by id
});

router.delete("/:id", async (req, res) => {
  // Logic to delete a playerAvailability by id
});

export default router;
