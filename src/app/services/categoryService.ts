import api from "./api";

export const categoryService = {
  getCategoryByDynamicTpl: async (dynamic_tpl: number) => {
    const { data } = await api.get(`/categories/${dynamic_tpl}`);
    return data;
  },
};
