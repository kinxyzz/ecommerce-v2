import OrderService from "@/services/orderService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function CreateOrder() {
  const queryClient = useQueryClient();
  const { mutate: createOrder } = useMutation({
    mutationKey: ["createOrder"],
    mutationFn: () => OrderService.createOrder(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["order"] });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  return { createOrder };
}

export function GetOrder() {
  const { data: order, isLoading } = useQuery({
    queryKey: ["order"],
    queryFn: () => OrderService.getOrder(),
  });

  return { order, isLoading };
}

export function getDetailOrder(id: string | undefined) {
  const { data: order, isLoading } = useQuery({
    queryKey: ["order", id],
    queryFn: () => OrderService.getDetailOrder(id),
  });

  return { order, isLoading };
}
