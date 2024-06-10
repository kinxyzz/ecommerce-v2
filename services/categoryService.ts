import api from "./axiosInstance";

export default class categoryService {
  static async getAllCategory() {
    const res = await api.get("/product/category");
    return res.data;
  }
}
