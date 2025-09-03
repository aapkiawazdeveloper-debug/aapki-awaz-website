import { RowDataPacket } from "mysql2";
import { Template } from "./types";
import pool from "@/app/core/database/db";

/**
 * Get all templates
 * Returns an array of templates objects
 */
export const getAllTemplate = async (): Promise<Template[]> => {
  const [rows] = await pool.execute<RowDataPacket[]>(
    "SELECT * FROM page_templates"
  );
  return rows as Template[];
};
