import { Category } from "@/app/api/categories/types";

/**
 * Utility to filter out null values from categories.
 */
export const filterCategories = (items: (Category | null)[]): Category[] => {
  return items.filter((c): c is Category => Boolean(c));
};
