import { getCategoryById } from "@/app/api/categories/service";
import { Category } from "@/app/api/categories/types";

/**
 * Parse footer_menu_ids into a structured object
 * with top + bottom footer category lists.
 */
export const parseFooterMenu = async (
  footerMenuIds: string | null
): Promise<{
  footer_menu_ids: {
    top_footer_menu_list: Category[];
    bottom_footer_menu_list: Category[];
  };
}> => {
  // Ensure both arrays exist
  const top_footer_menu_list: Category[] = [];
  const bottom_footer_menu_list: Category[] = [];

  if (!footerMenuIds) {
    return {
      footer_menu_ids: { top_footer_menu_list, bottom_footer_menu_list },
    };
  }

  // Split top/bottom if using '||||' format
  const [topRaw = "", bottomRaw = ""] = footerMenuIds.includes("||||")
    ? footerMenuIds.split("||||")
    : [footerMenuIds, ""];

  const parseIds = async (raw: string) => {
    if (!raw) return [];
    const ids = raw
      .split(",")
      .map((id) => Number(id.trim()))
      .filter((id) => !isNaN(id));
    const categories = await Promise.all(ids.map(getCategoryById));
    return categories.filter((c): c is Category => !!c);
  };

  const topCategories = await parseIds(topRaw);
  const bottomCategories = await parseIds(bottomRaw);

  return {
    footer_menu_ids: {
      top_footer_menu_list: topCategories,
      bottom_footer_menu_list: bottomCategories,
    },
  };
};
