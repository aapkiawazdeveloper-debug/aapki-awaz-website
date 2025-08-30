import { getCategoryById } from "@/app/api/categories/service";
import { Category } from "@/app/api/categories/types";
import { filterCategories } from "./category-helpers";

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
  if (!footerMenuIds) {
    return {
      footer_menu_ids: {
        top_footer_menu_list: [],
        bottom_footer_menu_list: [],
      },
    };
  }

  // ---- Social theme format (upper + lower with "||||")
  if (footerMenuIds.includes("||||")) {
    const [upperRaw, lowerRaw] = footerMenuIds.split("||||");

    const parseSection = async (section: string): Promise<Category[]> => {
      if (!section) return [];
      const ids = section
        .split("|")
        .flatMap((col) => col.split(",").map((id) => Number(id.trim())));
      const children = await Promise.all(ids.map(getCategoryById));
      return filterCategories(children).sort((a, b) =>
        (a.catname ?? "").localeCompare(b.catname ?? "")
      );
    };

    return {
      footer_menu_ids: {
        top_footer_menu_list: await parseSection(upperRaw),
        bottom_footer_menu_list: await parseSection(lowerRaw),
      },
    };
  }

  // ---- Directory section (comma-separated IDs only)
  if (footerMenuIds.includes(",")) {
    const ids = footerMenuIds.split(",").map((id) => Number(id.trim()));
    const children = await Promise.all(ids.map(getCategoryById));
    const sorted = filterCategories(children).sort((a, b) =>
      (a.catname ?? "").localeCompare(b.catname ?? "")
    );
    return {
      footer_menu_ids: {
        top_footer_menu_list: sorted,
        bottom_footer_menu_list: [],
      },
    };
  }

  // ---- Fallback: single ID
  const single = await getCategoryById(Number(footerMenuIds.trim()));
  return {
    footer_menu_ids: {
      top_footer_menu_list: single ? [single] : [],
      bottom_footer_menu_list: [],
    },
  };
};
