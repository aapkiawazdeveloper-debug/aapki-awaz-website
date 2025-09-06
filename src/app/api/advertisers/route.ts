import { getAdvertisers } from "./controller";

/**
 * GET: Retrieve all advertisers
 * Endpoint: /api/advertisers
 */
export const GET = async () => {
  return getAdvertisers();
};
