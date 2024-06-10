import api from "./axiosInstance";

export default class cartService {
  static async getMyCart() {
    const res = await api.get("/cart");
    return res.data.data;
  }

  static async addToCart(product_id: number) {
    const res = await api.post(`/product/${product_id}/cart`);
    return res.data;
  }

  static async deleteCart(cart_id: number | undefined) {
    try {
      const res = await api.delete(`/cart/${cart_id}`);
      return res.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
