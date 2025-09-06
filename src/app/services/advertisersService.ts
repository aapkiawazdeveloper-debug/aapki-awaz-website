import api from "./api";

export const advertisersService = {
  getAdvertisers: async () => {
    const { data } = await api.get("/advertisers");
    return data;
  },
};
