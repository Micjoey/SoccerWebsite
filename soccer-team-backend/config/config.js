import { getSecret } from "../utils/getAwsSecret.js";

const getDatabaseConfig = async () => {
  // Modify this function to directly return the development configuration
  const secret = await getSecret("soccerwebapp_DB_secret");
  if (!secret) {
    throw new Error("Database configuration secret not found");
  }

  return {
    username: secret.username.toLowerCase(),
    password: secret.password,
    database: secret.dbname,
    host: secret.host || "localhost",
    dialect: "postgres",
    port: secret.port || 5432,
  };
};

export default getDatabaseConfig;
