import initializeDatabase from "../models/index.js";
import { app, setDatabase } from "./app.js"; // Import setDatabase function

const port = process.env.PORT || 3001;

(async () => {
  try {
    const db = await initializeDatabase();
    if (!db) {
      console.error("Database connection is undefined.");
      return;
    }

    setDatabase(db); // Set the db object for the app

    console.log(`Server is starting on http://localhost:${port}`);
    app.listen(port, () => {
      console.log(`Server is now listening on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
})();
