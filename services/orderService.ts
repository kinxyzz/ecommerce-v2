import api from "./axiosInstance";

export default class OrderService {
  static async createOrder() {
    const res = await api.post("/cart/order");
    return res.data;
  }

  static async getOrder(id: string | null = null) {
    const res = await api.get("/cart/order");
    return res.data;
  }

  static async getDetailOrder(id: string | null = null) {
    const res = await api.get(`/cart/order/${id}`);
    return res.data;
  }
}
