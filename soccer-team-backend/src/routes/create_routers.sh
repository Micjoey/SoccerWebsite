#!/bin/bash
# To run: ./soccer-team-backend/src/routes/create_routers.sh
# Define the paths to the models and routes directories
MODELS_DIR="/Users/macallansavett/code/soccer-website/soccer-team-backend/models"
ROUTES_DIR="/Users/macallansavett/code/soccer-website/soccer-team-backend/src/routes"

# Iterate over each file in the models directory
for model in "$MODELS_DIR"/*.js; do
  # Extract the basename without the extension
  basename=$(basename "$model" .js)
  
  # Create a new router file with the 'Router' suffix
  routerFile="$ROUTES_DIR/${basename}Router.js"

  # Check if the router file already exists
  if [ ! -f "$routerFile" ]; then
    # Use a heredoc to write the contents to the router file
    cat > "$routerFile" <<EOF
import express from "express";

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const items = await req.db.${basename}.findAll();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching ${basename}s" });
  }
});

router.post('/', async (req, res) => {
  // Logic to create a new ${basename}
});

router.get('/:id', async (req, res) => {
  // Logic to fetch a single ${basename} by id
});

router.put('/:id', async (req, res) => {
  // Logic to update a ${basename} by id
});

router.delete('/:id', async (req, res) => {
  // Logic to delete a ${basename} by id
});

export default router;
EOF
  else
    echo "Router file ${routerFile} already exists. Skipping..."
  fi

done