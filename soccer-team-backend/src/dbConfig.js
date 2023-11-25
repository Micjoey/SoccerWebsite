import { SecretsManager } from "aws-sdk";

const secretsManager = new SecretsManager();

// Helper function to fetch secrets
const getSecret = async (secretName) => {
  try {
    const response = await secretsManager
      .getSecretValue({ SecretId: secretName })
      .promise();
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
  if (POSTGRES_USER) {
    // Use the secrets in your application
    const { username, password, dbname } = POSTGRES_USER;
    const pool = new Pool({
      user: username,
      host: "soccerwebapp_db", // Adjust if your DB host is different
      database: dbname,
      password: password,
      port: 5432, // Adjust if your DB port is different
    });
    return pool;
  }
};

export const pool = fetchSecrets();
