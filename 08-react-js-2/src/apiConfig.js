const API_MODE = "public";

const URL = {
  public: "https://dummyjson.com/products?limit=20",
  local: "data/products.json",
};

export const BASE_URL = URL[API_MODE];
