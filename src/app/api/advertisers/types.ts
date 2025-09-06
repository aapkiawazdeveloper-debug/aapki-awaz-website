export interface AdvertiserImage {
  id: number;
  name: string;
  link: string;
  top_caption: string;
  bottom_caption: string;
  type: string;
  type_id: number;
  dir_path: string;
  path: string;
  height: number;
  width: number;
  alt_text: string;
  ord: number;
  status: "A" | "I";
  uploaderid: number;
  userid: number;
  image_section: string;
  img_section_category: string;
  date_time: string;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  deleted_by: number | null;
  deleted_at: string | null;
  upload_ip: string;
  upload_server_data: string;
  user_type: UserType;
  url?: string | null;
}

export interface Advertiser {
  id: number;
  company_name: string;
  address: string;
  phone_number: string;
  contact_person: string;
  industry_id: number;
  subscription_start: string;
  subscription_end: string;
  status: Status;
  total_ads: number;
  website: string;
  email: string;
  company_detail: string;
  images: AdvertiserImage[];
}

export enum Status {
  Active = "A",
  Inactive = "I",
}

enum UserType {
  User = "user",
  Admin = "admin",
}
