import path from "path";
import dotenv from "dotenv";

// Decide which env file to load
const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";

// Load environment variables from src/env
dotenv.config({
  path: path.resolve(process.cwd(), "src/env", envFile),
});
