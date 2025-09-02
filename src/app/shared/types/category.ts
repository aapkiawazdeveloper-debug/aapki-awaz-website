export interface Category {
  id: number;
  name: string;
  description: string;
  status: string;
}

export interface CategoryData {
  id: number;
  catname: string;
  display_name: string;
  summary_template_name: string;
  typed: string;
  typeid: number;
  catdes: string;
  slug: string;
  category_icon: string | null;
  subcat: number;
  template_name: string;
  news_template: string;
  themename: string;
  show_in_top_menu: string;
  show_in_main_menu: string;
  show_in_main_tab: string;
  show_in_front: string;
  assign_group: number;
  top_ord: number;
  main_ord: number;
  main_tab_ord: number;
  left_side_order: number;
  default_open: number;
  show_left: string;
  show_right: string;
  status: string;
  ord: number;
  news_order: string;
  asc_desc: string;
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  link: string;
  link2: string;
  link3: string;
  profile_ids: string;
  alternative_name: string;
  column_number: number;
  height: number;
  display_title: string;
  hanging_menu: string;
  user_id_gallery: number;
  top_menu_ids: string;
  main_menu_ids: string;
  footer_menu_ids: string;
  category_slider: string;
  no_slider: string;
  cat_logo: string;
  no_logo: string;
  both_logo: string;
  top_mega_menu_column: string;
  main_mega_menu_column: string;
  topmenu_mega_col1: string;
  topmenu_mega_col2: string;
  topmenu_mega_col3: string;
  topmenu_mega_col4: string;
  topmenu_mega_col5: string;
  topmenu_mega_col6: string;
  mainmenu_mega_col1: string;
  mainmenu_mega_col2: string;
  mainmenu_mega_col3: string;
  mainmenu_mega_col4: string;
  mainmenu_mega_col5: string;
  mainmenu_mega_col6: string;
  without_ajax_search: string;
  keyword: string;
  category_block_setting: string;
  category_group: number;
  excelid: number;
  NumberOfRecord: number;
  MenuIdsWithSlider: string;
  ColsWithSlider: number;
  RowsWithSlider: number;
  eventdate: string;
  excelNumberOfRec: number;
  excelNumberOfRec_summary: string;
  ExcelColNum: number;
  searchingInTemplate: string;
  ListingTplContent: string;
  DetailTplContent: string;
  BriefTplContent: string;
  imagesDataForExcelListing: string;
  imagesDataForExcelDetail: string;
  setNewsDefaultView: string;
  MixTplContent: string;
  menuposition: string;
  viewed_number: number;
  left_side_sub_menu: string;
  left_menu_category_type: string;
  left_menu_top_priority: string;
  horizontal_top_height: string;
  vertical_bottom_scroll: string;
  scroller_record_detail_tpl: number;
  news_record_detail_tpl: string;
  summary_shortcode: string;
  detail_shortcode: string;
  created_at: string;
  created_by: number;
  upload_ip: string;
  upload_server_data: string;
  dynamic_column: string;
  dynamic_searching: string;
  dynamic_tpl: string | null;
  detail_dynamin_tpl: string | null;
  short_url: string;
  system_short_url: string;
  numeric_short_url: string;
  childColumns?: TopMenuMegaCols;
  footerMenu?: FooterMenu;
}

export interface CategoriesResponse {
  data: {
    success: boolean;
    message: string;
    categories: CategoryData[];
  };
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: Record<string, any>;
  request: Record<string, any>;
}

export interface TopMenuMegaCols {
  topmenu_mega_col1: CategoryData[];
  topmenu_mega_col2?: CategoryData[];
  topmenu_mega_col3?: CategoryData[];
  topmenu_mega_col4?: CategoryData[];
  topmenu_mega_col5?: CategoryData[];
  topmenu_mega_col6?: CategoryData[];
}

export interface FooterMenu {
  top_footer_menu_list: CategoryData[];
  bottom_footer_menu_list: CategoryData[];
}
