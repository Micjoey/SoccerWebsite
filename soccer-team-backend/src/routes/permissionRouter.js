import express from "express";

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const items = await req.db.permission.findAll();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching permissions" });
  }
});

router.post("/", async (req, res) => {
  // Logic to create a new permission
});

router.get("/:id", async (req, res) => {
  // Logic to fetch a single permission by id
});

router.put("/:id", async (req, res) => {
  // Logic to update a permission by id
});

router.delete("/:id", async (req, res) => {
  // Logic to delete a permission by id
});

export default router;
