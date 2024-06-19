"use client";
import { IOrderCardProps } from "@/@types/interface";
import { GetOrder } from "@/app/hook/useOrder";
import OrderCard from "./orderCard";

export default function OrderList() {
  const { order } = GetOrder();

  if (order?.data.length <= 0)
    return (
      <p className="text-sm text-muted-foreground">
        your order currently empty
      </p>
    );

  return (
    <div className="w-full md:px-4">
      {order?.data?.map((item: IOrderCardProps) => (
        <OrderCard key={item.order_id} orderItem={item} />
      ))}
    </div>
  );
}
