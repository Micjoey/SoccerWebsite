// dbConfig.js
import { getSecret } from "../utils/getAwsSecret.js";

const fetchSecrets = async () => {
  try {
    console.log("Fetching database credentials from AWS Secrets Manager...");
    const dbCredentials = await getSecret("soccerwebapp_DB_secret");
    if (!dbCredentials) {
      console.error("Database credentials not available");
      return null;
    }
    return dbCredentials; // Return credentials
  } catch (error) {
    console.error("Error fetching database credentials:", error);
    return null;
  }
};

export default fetchSecrets;
