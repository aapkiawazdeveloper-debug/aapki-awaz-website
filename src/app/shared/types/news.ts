export interface News {
  id: number;
  page_id: number;
  cat_id: number;
  bulk_id: number;
  news_name: string;
  news_desc: string;
  news_keyword: string;
  date: string;
  time: string;
  date_display: string;
  activate: string;
  expiry: string;
  member_id: number;
  scroll1: "A" | "I";
  scroll2: "A" | "I";
  scroll3: "A" | "I";
  ful_content: string;
  ord: number;
  status: "A" | "I";
  editedby: string;
  source: string;
  slug: string;
  breaking_news_home: "A" | "I";
  breaking_news: "A" | "I";
  news_read: number;
  server_var: string;
  column_scroller: "A" | "I";
  updated_at: string;
  updated_by: number;
  created_at: string;
  created_by: number;
  title: string;
  meta: string;
  keyword: string;
  description: string;
  deleted_at: string;
  deleted_by: number;
  deletedby_ip: string;
  deletedby_data: string;
  upload_ip: string;
  upload_server_data: string;
  user_type: "user" | "admin";
  old_id: number;
  data_type: string;
  short_url: string;
  system_short_url: string;
  numeric_short_url: string;
  dynamic_tpl: number;
}

export interface NewsResponse {
  data: {
    success: boolean;
    message: string;
    newsList: News[];
    pagination?: Pagination;
  };
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: Record<string, any>;
  request: Record<string, any>;
}

export interface Pagination {
  currentPage: number;
  limit: number;
  totalItems: number;
}
