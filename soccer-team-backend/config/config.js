import fetchSecrets from "./fetchSecrets.js";

const getDatabaseConfig = async () => {
  const secrets = await fetchSecrets();
  // Extract and transform the secrets into the format Sequelize expects
  const config = {
    username: secrets.username.toLowerCase(),
    password: secrets.password,
    database: secrets.dbname,
    host: secrets.host || "localhost",
    port: secrets.port || 5432,
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  };
  return config;
};

export default getDatabaseConfig;
