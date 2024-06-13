import { productSchema } from "@/components/template/form/productForm";
import { z } from "zod";
import api from "./axiosInstance";

export default class productService {
  static async getProduct({
    page = 1,
    material,
  }: {
    page: number;
    material: string | null;
  }) {
    const res = await api.get(
      `/product?page=${page}&${material ? `material=${material}` : ""}`
    );
    return res.data;
  }

  static async createProduct(data: z.infer<typeof productSchema>) {
    const res = await api.post("/product", data);
    return res.data;
  }

  static async updateProduct() {}

  static async deleteProduct() {}
}
