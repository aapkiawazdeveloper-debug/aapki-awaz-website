/**
 * Helper: Convert DB Category to CategoryData
 * Converts numeric flags to string to match CategoryData type
 */

export const convertNumericFlagToString = (data: any) => ({
  ...data,
  show_in_top_menu: data.show_in_top_menu?.toString() ?? null,
  show_in_main_menu: data.show_in_main_menu?.toString() ?? null,
  show_in_main_tab: data.show_in_main_tab?.toString() ?? null,
  show_in_front: data.show_in_front?.toString() ?? null,
  status: data.status?.toString() ?? null,
  category_slider: data.category_slider?.toString() ?? null,
  no_slider: data.no_slider?.toString() ?? null,
  hanging_menu: data.hanging_menu?.toString() ?? null,
  without_ajax_search: data.without_ajax_search?.toString() ?? null,
  left_menu_top_priority: data.left_menu_top_priority?.toString() ?? null,
  horizontal_top_height: data.horizontal_top_height?.toString() ?? null,
  vertical_bottom_scroll: data.vertical_bottom_scroll?.toString() ?? null,
});
