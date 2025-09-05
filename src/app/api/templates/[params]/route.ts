import { getTemplate } from "./controller";

/**
 * GET: Retrieve a category by dynamic tpl
 * Endpoint: /api/templates/[param]
 * - If param is a number, fetch by dynamic tpl
 */
export const GET = (
  request: Request,
  { params }: { params: { params: string } }
) => {
  return getTemplate(+params.params);
};
