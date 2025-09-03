import { getTemplates } from "./controller";

/**
 * GET: Retrieve all templates
 * Endpoint: /api/templates
 */
export const GET = () => {
  return getTemplates();
};
