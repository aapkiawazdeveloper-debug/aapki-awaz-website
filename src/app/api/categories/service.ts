import pool from "@/app/core/database/db";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { Category } from "./types";

/**
 * Get all categories
 * Returns an array of Category objects
 */
export const getAllCategories = async (): Promise<Category[]> => {
  const [rows] = await pool.execute<RowDataPacket[]>(
    "SELECT * FROM categories"
  );
  return rows as Category[];
};

/**
 * Get a single category by numeric ID
 * @param id - numeric ID of the category
 * @returns Category object or null if not found
 */
export const getCategoryById = async (id: number): Promise<Category | null> => {
  const [rows] = await pool.execute<RowDataPacket[]>(
    "SELECT * FROM categories WHERE id = ? LIMIT 1",
    [id]
  );

  if (rows.length === 0) return null;
  return rows[0] as Category;
};

/**
 * Get a single category by system_short_url
 * @param system_short_url - string unique identifier for the category
 * @returns Category object or null if not found
 */
export const getCategoryBySystemShortUrl = async (
  system_short_url: string
): Promise<Category | null> => {
  const [rows] = await pool.execute<RowDataPacket[]>(
    "SELECT * FROM categories WHERE system_short_url = ? LIMIT 1",
    [system_short_url]
  );

  if (rows.length === 0) return null;
  return rows[0] as Category;
};

/**
 * Create a new category
 * @param columns - array of column names
 * @param values - array of corresponding values
 * @returns the insert ID of the newly created category
 */
export const createCategory = async (columns: string[], values: any[]) => {
  const placeholders = columns.map(() => "?").join(", ");
  const sql = `INSERT INTO categories (${columns.join(
    ", "
  )}) VALUES (${placeholders})`;

  const [result] = await pool.execute<ResultSetHeader>(sql, values);
  return result.insertId;
};

/**
 * Update a category by ID
 * @param id - numeric ID of the category to update
 * @param data - partial Category object with fields to update
 * @returns number of affected rows or null if no fields to update
 */
export const updateCategoryById = async (
  id: number,
  data: Partial<Category>
) => {
  const columns = Object.keys(data);
  const values = Object.values(data);

  if (columns.length === 0) return null;

  const setClause = columns.map((col) => `${col} = ?`).join(", ");
  const sql = `UPDATE categories SET ${setClause} WHERE id = ?`;

  const [result] = await pool.execute<ResultSetHeader>(sql, [...values, id]);
  return result.affectedRows;
};

/**
 * Delete a category by ID
 * @param id - numeric ID of the category to delete
 * @returns number of affected rows
 */
export const deleteCategoryById = async (id: number) => {
  const [result] = await pool.execute<ResultSetHeader>(
    "DELETE FROM categories WHERE id = ?",
    [id]
  );
  return result.affectedRows;
};
