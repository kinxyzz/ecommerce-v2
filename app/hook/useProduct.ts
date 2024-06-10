import { productSchema } from "@/components/template/form/productForm";
import categoryService from "@/services/categoryService";
import productService from "@/services/productService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { z } from "zod";

export function UseCreateProduct() {
  const { mutate: createProduct } = useMutation({
    mutationKey: ["createProduct"],
    mutationFn: (productData: z.infer<typeof productSchema>) => {
      return productService.createProduct(productData);
    },
  });

  return { createProduct };
}

export function UseGetProduct() {
  const { data: productList } = useQuery({
    queryKey: ["product"],
    queryFn: () => productService.getProduct(),
  });

  return { productList };
}

export function UseGetCategory() {
  const { data: category, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: () => categoryService.getAllCategory(),
  });

  return { category, isLoading };
}
