import app from "./app"; // Import the configured express app

const port = process.env.PORT || 3001; // Use environment port or default to 3001

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
