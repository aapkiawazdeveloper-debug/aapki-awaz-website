import { RowDataPacket } from "mysql2";
import { Template } from "./types";
import pool from "@/app/core/database/db";
import { Category } from "../categories/types";

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

/**
 * Get template
 * Returns an array of templates objects
 */
export const getCategoryByDynamicTpl = async (
  dynamic_tpl: string
): Promise<Category | null> => {
  const [rows] = await pool.execute<RowDataPacket[]>(
    "SELECT * FROM categories WHERE dynamic_tpl = ? LIMIT 1",
    [dynamic_tpl]
  );

  if (rows.length === 0) return null;
  return rows[0] as Category;
};
