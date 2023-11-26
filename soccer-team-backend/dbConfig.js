import pgPromise from "pg-promise";
import { getSecret } from "./utils/getAwsSecret.js";

// Create an AWS Secrets Manager client
const pgp = pgPromise();

// Access Secrets from AWS Secrets Manager
const fetchSecrets = async () => {
  console.log("Fetch Secrets");
  const POSTGRES_USER = await getSecret("soccerwebapp_DB_secret");
  if (POSTGRES_USER) {
    // Use the secrets in your application
    const { username, password, dbname } = POSTGRES_USER;
    const db = pgp({
      user: username.toLowerCase(),
      host: "localhost", // Use "localhost" for local PostgreSQL server
      database: dbname,
      password: password,
      port: 5432, // Default PostgreSQL port
    });
    return db;
  }
};

export default fetchSecrets; // Export the result of fetchSecrets as default
