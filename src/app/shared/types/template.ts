export interface Template {
  id: string;
  type: number;
  name: string;
  user_id: number;
  template_typ: string;
  lefttemplate: string;
  righttemplate: string;
  description: string;
  layout_data: string;
  created_at: string;
  updated_at: string;
}

export interface TemplateResponse {
  data: TempalteData;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: Record<string, any>;
  request: Record<string, any>;
}

export interface TempalteData {
  success: boolean;
  message: string;
  templates: Template[];
}
