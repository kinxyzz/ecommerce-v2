"use client";
import { IOrderCardProps } from "@/@types/interface";
import { GetOrder } from "@/app/hook/useOrder";
import OrderCard from "./orderCard";

export default function OrderList() {
  const { order } = GetOrder();

  return (
    <div className="w-full md:px-4">
      {order?.data?.map((item: IOrderCardProps) => (
        <OrderCard key={item.order_id} orderItem={item} />
      ))}
    </div>
  );
}
