import fetchSecrets from "./dbConfig.js";
import app from "./app.js"; // Import the configured express app

const port = process.env.PORT || 3001; // Use environment port or default to 3001

app.listen(port, async () => {
  console.log(`Server running on http://localhost:${port}`);

  const db = await fetchSecrets(); // Call fetchSecrets to get the database connection

  db.query("SELECT version()")
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
});
