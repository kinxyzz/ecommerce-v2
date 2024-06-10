import { productSchema } from "@/components/template/form/productForm";
import { z } from "zod";
import api from "./axiosInstance";

export default class productService {
  static async getProduct() {
    const res = await api.get("/product");
    return res.data;
  }

  static async createProduct(data: z.infer<typeof productSchema>) {
    const res = await api.post("/product", data);
    return res.data;
  }

  static async updateProduct() {}

  static async deleteProduct() {}
}
