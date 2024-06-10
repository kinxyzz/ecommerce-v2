import cartService from "@/services/cartService";
import { useTokenStore } from "@/store/authenticated/store";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function UseGetCart() {
  const token = useTokenStore((state) => state.token);
  const { data: myCart, ...rest } = useQuery({
    queryKey: ["cart"],
    queryFn: () => cartService.getMyCart(),
    enabled: !!token,
  });
  return { myCart, ...rest };
}

export function UseAddCart() {
  const queryClient = useQueryClient();
  const { mutate: addCart, error } = useMutation({
    mutationKey: ["addCart"],
    mutationFn: (product_id: number) => cartService.addToCart(product_id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  return { addCart, error };
}

export function UseDeleteCart() {
  const queryClient = useQueryClient();
  const { mutate: deleteCart } = useMutation({
    mutationKey: ["deleteCart"],
    mutationFn: (cart_id: number | undefined) =>
      cartService.deleteCart(cart_id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  return { deleteCart };
}
