import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";
import pgPromise from "pg-promise";

// Create an AWS Secrets Manager client
const secretsManager = new SecretsManagerClient({ region: "us-west-1" });
const pgp = pgPromise();

// Helper function to fetch secrets
const getSecret = async (secretName) => {
  try {
    const command = new GetSecretValueCommand({ SecretId: secretName });
    const response = await secretsManager.send(command);

    if (response.SecretString) {
      const secret = JSON.parse(response.SecretString);
      console.log(`Secret ${secretName} retrieved successfully.`);
      return secret;
    } else {
      console.error(`Secret ${secretName} does not contain SecretString.`);
      return undefined;
    }
  } catch (err) {
    console.error(`Unable to fetch secret ${secretName}: `, err);
    return undefined;
  }
};

// Access Secrets from AWS Secrets Manager
const fetchSecrets = async () => {
  const POSTGRES_USER = await getSecret("soccerwebapp_DB_secret");
  console.log(POSTGRES_USER);
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
