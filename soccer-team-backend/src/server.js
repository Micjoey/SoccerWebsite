import initializeDatabase from "../models/index.js";
import { app } from "./app.js"; // Import the configured express app

const port = process.env.PORT || 3001; // Use environment port or default to 3001

(async () => {
  try {
    // Initialize Sequelize and database connection
    const db = await initializeDatabase();
    if (!db) {
      console.error("Database connection is undefined.");
      return; // Exit the application gracefully
    }

    // Log server startup message
    console.log(`Server is starting on http://localhost:${port}`);

    // Start Express server
    app.listen(port, () => {
      console.log(`Server is now listening on port ${port}`);
    });
  } catch (error) {
    // Log any errors that occurred during startup
    console.error("Failed to start the server:", error);
  }
})();
