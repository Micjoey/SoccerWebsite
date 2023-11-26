import fetchSecrets from "../dbConfig.js";
import { app } from "./app.js";

const port = process.env.PORT || 3001;

(async () => {
  try {
    const db = await fetchSecrets();
    await db.sequelize.sync();

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });

    db.query("SELECT version()")
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
})();
