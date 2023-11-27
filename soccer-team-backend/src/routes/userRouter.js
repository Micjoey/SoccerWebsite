import express from "express";

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const items = await req.db.user.findAll();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching users" });
  }
});

router.post("/", async (req, res) => {
  // Logic to create a new user
});

router.get("/:id", async (req, res) => {
  // Logic to fetch a single user by id
});

router.put("/:id", async (req, res) => {
  // Logic to update a user by id
});

router.delete("/:id", async (req, res) => {
  // Logic to delete a user by id
});

export default router;
