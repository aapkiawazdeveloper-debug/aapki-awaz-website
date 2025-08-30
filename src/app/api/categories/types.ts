export interface Category {
  id: number;
  catname: string | null;
  display_name: string | null;
  summary_template_name: string | null;
  typed: string | null;
  typeid: number | null;
  catdes: string | null;
  slug: string | null;
  category_icon: string | null;
  subcat: number | null;
  template_name: string | null;
  news_template: string | null;
  themename: string | null;
  show_in_top_menu: number | null;
  show_in_main_menu: number | null;
  show_in_main_tab: number | null;
  show_in_front: number | null;
  assign_group: string | null;
  top_ord: number | null;
  main_ord: number | null;
  main_tab_ord: number | null;
  left_side_order: number | null;
  default_open: number | null;
  show_left: number | null;
  show_right: number | null;
  status: number | null;
  ord: number | null;
  news_order: string | null;
  asc_desc: string | null;
  field1: string | null;
  field2: string | null;
  field3: string | null;
  field4: string | null;
  link: string | null;
  link2: string | null;
  link3: string | null;
  profile_ids: string | null;
  alternative_name: string | null;
  column_number: number | null;
  height: number | null;
  display_title: string | null;
  hanging_menu: number | null;
  user_id_gallery: number | null;
  top_menu_ids: string | null;
  main_menu_ids: string | null;
  footer_menu_ids: string | null;
  category_slider: number | null;
  no_slider: number | null;
  cat_logo: string | null;
  no_logo: number | null;
  both_logo: number | null;
  top_mega_menu_column: number | null;
  main_mega_menu_column: number | null;
  topmenu_mega_col1: string | null;
  topmenu_mega_col2: string | null;
  topmenu_mega_col3: string | null;
  topmenu_mega_col4: string | null;
  topmenu_mega_col5: string | null;
  topmenu_mega_col6: string | null;
  mainmenu_mega_col1: string | null;
  mainmenu_mega_col2: string | null;
  mainmenu_mega_col3: string | null;
  mainmenu_mega_col4: string | null;
  mainmenu_mega_col5: string | null;
  mainmenu_mega_col6: string | null;
  without_ajax_search: number | null;
  keyword: string | null;
  category_block_setting: string | null;
  category_group: string | null;
  excelid: number | null;
  NumberOfRecord: number | null;
  MenuIdsWithSlider: string | null;
  ColsWithSlider: number | null;
  RowsWithSlider: number | null;
  eventdate: string | null;
  excelNumberOfRec: number | null;
  excelNumberOfRec_summary: number | null;
  ExcelColNum: number | null;
  searchingInTemplate: string | null;
  ListingTplContent: string | null;
  DetailTplContent: string | null;
  BriefTplContent: string | null;
  imagesDataForExcelListing: string | null;
  imagesDataForExcelDetail: string | null;
  setNewsDefaultView: string | null;
  MixTplContent: string | null;
  menuposition: string | null;
  viewed_number: number | null;
  left_side_sub_menu: string | null;
  left_menu_category_type: string | null;
  left_menu_top_priority: number | null;
  horizontal_top_height: number | null;
  vertical_bottom_scroll: number | null;
  scroller_record_detail_tpl: string | null;
  news_record_detail_tpl: string | null;
  summary_shortcode: string | null;
  detail_shortcode: string | null;
  created_at: string | null;
  created_by: string | null;
  upload_ip: string | null;
  upload_server_data: string | null;
  dynamic_column: string | null;
  dynamic_searching: string | null;
  dynamic_tpl: string | null;
  detail_dynamin_tpl: string | null;
  short_url: string | null;
  system_short_url: string | null;
  numeric_short_url: string | null;
}

export type TopMegaCols =
  | "topmenu_mega_col1"
  | "topmenu_mega_col2"
  | "topmenu_mega_col3"
  | "topmenu_mega_col4"
  | "topmenu_mega_col5"
  | "topmenu_mega_col6";

export type MainMegaCols =
  | "mainmenu_mega_col1"
  | "mainmenu_mega_col2"
  | "mainmenu_mega_col3"
  | "mainmenu_mega_col4"
  | "mainmenu_mega_col5"
  | "mainmenu_mega_col6";

// Arrays to loop through in your code
export const topMegaColsArray: TopMegaCols[] = [
  "topmenu_mega_col1",
  "topmenu_mega_col2",
  "topmenu_mega_col3",
  "topmenu_mega_col4",
  "topmenu_mega_col5",
  "topmenu_mega_col6",
];

export const mainMegaColsArray: MainMegaCols[] = [
  "mainmenu_mega_col1",
  "mainmenu_mega_col2",
  "mainmenu_mega_col3",
  "mainmenu_mega_col4",
  "mainmenu_mega_col5",
  "mainmenu_mega_col6",
];
