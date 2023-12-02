import express from "express";

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const items = await req.db.UserAvailability.findAll();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching UserAvailabilitys" });
  }
});

router.post("/", async (req, res) => {
  // Logic to create a new UserAvailability
});

router.get("/:id", async (req, res) => {
  // Logic to fetch a single UserAvailability by id
});

router.put("/:id", async (req, res) => {
  // Logic to update a UserAvailability by id
});

router.delete("/:id", async (req, res) => {
  // Logic to delete a UserAvailability by id
});

export default router;
