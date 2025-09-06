import pool from "@/app/core/database/db";
import { Advertiser, AdvertiserImage } from "./types";
import { RowDataPacket } from "mysql2";

const IMAGE_BASE_URL =
  process.env.IMAGE_BASE_URL || "https://example.com/uploads/";

/**
 * Get all advertisers without images
 * @returns Promise<Advertiser[]>
 */
export const getAllAdvertisers = async (): Promise<Advertiser[]> => {
  const [rows] = await pool.execute<RowDataPacket[]>(
    "SELECT * FROM advertiser"
  );

  return rows as Advertiser[];
};

/**
 * Get all advertisers along with their associated images
 * @returns Promise<Advertiser[]>
 */
export const getAllAdvertisersWithImages = async (): Promise<Advertiser[]> => {
  const [rows] = await pool.execute<RowDataPacket[]>(
    `
    SELECT 
      a.*,
      i.id AS image_id,
      i.name AS image_name,
      i.link AS image_link,
      i.top_caption,
      i.bottom_caption,
      i.type AS image_type,
      i.type_id AS image_type_id,
      i.dir_path,
      i.path AS image_path,
      i.height,
      i.width,
      i.alt_text,
      i.ord,
      i.status AS image_status,
      i.uploaderid,
      i.userid,
      i.image_section,
      i.img_section_category,
      i.date_time,
      i.created_at AS image_created_at,
      i.created_by AS image_created_by,
      i.updated_at AS image_updated_at,
      i.updated_by AS image_updated_by,
      i.deleted_by,
      i.deleted_at,
      i.upload_ip,
      i.upload_server_data,
      i.user_type
    FROM advertiser a
    LEFT JOIN images i ON i.userid = a.id
    WHERE a.status = 'A'
    ORDER BY a.id, i.ord;
    `
  );

  const advertisersMap: Record<number, Advertiser> = {};

  rows.forEach((row: any) => {
    if (!advertisersMap[row.id]) {
      advertisersMap[row.id] = {
        id: row.id,
        company_name: row.company_name,
        address: row.address,
        phone_number: row.phone_number,
        contact_person: row.contact_person,
        industry_id: row.industry_id,
        subscription_start: row.subscription_start,
        subscription_end: row.subscription_end,
        status: row.status,
        total_ads: row.total_ads,
        website: row.website,
        email: row.email,
        company_detail: row.company_detail,
        images: [],
      };
    }

    if (row.image_id) {
      const image: AdvertiserImage = {
        id: row.image_id,
        name: row.image_name,
        link: row.image_link,
        top_caption: row.top_caption,
        bottom_caption: row.bottom_caption,
        type: row.image_type,
        type_id: row.image_type_id,
        dir_path: row.dir_path,
        path: row.image_path,
        height: row.height,
        width: row.width,
        alt_text: row.alt_text,
        ord: row.ord,
        status: row.image_status,
        uploaderid: row.uploaderid,
        userid: row.userid,
        image_section: row.image_section,
        img_section_category: row.img_section_category,
        date_time: row.date_time,
        created_at: row.image_created_at,
        created_by: row.image_created_by,
        updated_at: row.image_updated_at,
        updated_by: row.image_updated_by,
        deleted_by: row.deleted_by,
        deleted_at: row.deleted_at,
        upload_ip: row.upload_ip,
        upload_server_data: row.upload_server_data,
        user_type: row.user_type,
        url: row.image_path ? `${IMAGE_BASE_URL}${row.image_path}` : null,
      };

      advertisersMap[row.id].images.push(image);
    }
  });

  return Object.values(advertisersMap);
};
