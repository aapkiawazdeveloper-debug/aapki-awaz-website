import { error, success } from "@/app/core/utils/response";
import { getAllAdvertisers } from "./service";

/**
 * Controller: Get all advertisers
 */
export const getAdvertisers = async () => {
  try {
    const advertisers = await getAllAdvertisers();

    return success(
      {
        message: "Advertisers data retrieved successfully",
        advertisers,
      },
      200
    );
  } catch (err) {
    console.error("Failed to retrieve advertisers:", err);
    return error("Internal Server Error", 500);
  }
};
