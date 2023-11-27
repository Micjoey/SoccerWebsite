import express from "express";

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const items = await req.db.adminTask.findAll();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching adminTasks" });
  }
});

router.post("/", async (req, res) => {
  // Logic to create a new adminTask
});

router.get("/:id", async (req, res) => {
  // Logic to fetch a single adminTask by id
});

router.put("/:id", async (req, res) => {
  // Logic to update a adminTask by id
});

router.delete("/:id", async (req, res) => {
  // Logic to delete a adminTask by id
});

export default router;
