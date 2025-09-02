import pool from "@/app/core/database/db";
import { RowDataPacket } from "mysql2";
import { News } from "./types";

/**
 * Get all news
 * Returns an array of News objects
 */
export const getAllNews = async (): Promise<News[]> => {
  const [rows] = await pool.execute<RowDataPacket[]>(
    "SELECT * FROM news WHERE deleted_at IS NULL ORDER BY created_at DESC"
  );
  return rows as News[];
};
