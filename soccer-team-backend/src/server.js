import { pool } from "./dbConfig.js";
import app from "./app.js"; // Import the configured express app

const port = process.env.PORT || 3001; // Use environment port or default to 3001

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);

  pool.query("SELECT version()", (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(res.rows[0]);
    }
    pool.end();
  });
});
