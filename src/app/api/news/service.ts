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

/**
 * Get paginated news
 * Returns an array of News objects
 */
export const getPaginatedNews = async (
  page: number,
  limit: number
): Promise<News[]> => {
  const offset = (page - 1) * limit;

  const query = `
    SELECT * FROM news 
    WHERE deleted_at IS NULL
    ORDER BY created_at DESC
    LIMIT ${limit} OFFSET ${offset}
  `;

  const [rows] = await pool.execute<RowDataPacket[]>(query);
  return rows as News[];
};
