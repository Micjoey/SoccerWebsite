import express from "express";

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const items = await req.db.index.findAll();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching indexs" });
  }
});

router.post("/", async (req, res) => {
  // Logic to create a new index
});

router.get("/:id", async (req, res) => {
  // Logic to fetch a single index by id
});

router.put("/:id", async (req, res) => {
  // Logic to update a index by id
});

router.delete("/:id", async (req, res) => {
  // Logic to delete a index by id
});

export default router;
