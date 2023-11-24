import fs from "fs";
import pg from "pg";

// Access the Pool class from the pg module
const { Pool } = pg;

// These paths should exactly match the secret names in your Docker setup
const POSTGRES_USER = fs.readFileSync("/run/secrets/Admin", "utf8").trim();
const POSTGRES_PASSWORD = fs
  .readFileSync("/run/secrets/SoccerWebsitePwd", "utf8")
  .trim();
const POSTGRES_DB = fs
  .readFileSync("/run/secrets/SoccerWebsiteDb", "utf8")
  .trim();

export const pool = new Pool({
  user: POSTGRES_USER,
  host: "soccerwebapp_db",
  database: POSTGRES_DB,
  password: POSTGRES_PASSWORD,
  port: 5432,
});
