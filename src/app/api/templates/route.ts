import { getTemplateByDynamicTpl, getTemplates } from "./controller";

/**
 * GET /api/templates
 * Endpoint: /api/templates
 * Optional query: dynamic_tpl
 */
export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const dynamic_tpl = url.searchParams.get("dynamic_tpl");

  if (dynamic_tpl) {
    return getTemplateByDynamicTpl(+dynamic_tpl);
  } else {
    return getTemplates();
  }
};
