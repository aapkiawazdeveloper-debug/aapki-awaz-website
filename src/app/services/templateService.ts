import api from "./api";

export const templateService = {
  // get templates list
  async getTemplates() {
    const { data } = await api.get("/templates");
    return data;
  },

  // get template by id
  async getTemplateById(id: string) {
    const { data } = await api.get(`/templates/${id}`);
    return data;
  },

  // get template by the dynamic tpl
  // getTemplat

  // get category by dynamic tpl
  getCategoryByDynamicTpl: async (dynamic_tpl: number) => {
    const { data } = await api.get(`/templates?dynamic_tpl=${dynamic_tpl}`);
    return data;
  },

  // create template
  async createTemplate(payload: { title: string; content: string }) {
    const { data } = await api.post("/templates", payload);
    return data;
  },

  // update template
  async updateTemplate(
    id: string,
    payload: { title?: string; content?: string }
  ) {
    const { data } = await api.put(`/templates/${id}`, payload);
    return data;
  },

  // delete template
  async deleteTemplate(id: string) {
    const { data } = await api.delete(`/templates/${id}`);
    return data;
  },
};
