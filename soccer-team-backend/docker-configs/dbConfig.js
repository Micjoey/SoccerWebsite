import pg from "pg";

// Access the Pool class from the pg module
const { Pool } = pg;

// Access environment variables directly
const POSTGRES_USER = process.env.POSTGRES_USER;
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
const POSTGRES_DB = process.env.POSTGRES_DB;

export const pool = new Pool({
  user: POSTGRES_USER,
  host: "soccerwebapp_db", // Adjust if your DB host is different
  database: POSTGRES_DB,
  password: POSTGRES_PASSWORD,
  port: 5432, // Adjust if your DB port is different
});
