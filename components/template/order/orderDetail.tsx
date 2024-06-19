"use client";
import { IOrderItems } from "@/@types/interface";
import { GetDetailOrder } from "@/app/hook/useOrder";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";
import OrderProductDetail from "./orderProductDetail";

export default function OrderDetail({ id }: { id: string }) {
  const { order } = GetDetailOrder(id);
  const router = useRouter();

  if (!order)
    return (
      <div className="text-sm text-muted-foreground">your order is empty</div>
    );

  return (
    <div className="flex flex-col h-full">
      <Button
        onClick={() => router.back()}
        className="w-fit my-4"
        variant="ghost"
      >
        <Undo2 size={16} className="mr-2" /> back
      </Button>
      <div className="flex flex-col gap-2">
        {order?.data?.orderItems?.map((item: IOrderItems) => (
          <OrderProductDetail key={item.id} orderItems={item} />
        ))}
      </div>
      <div className="mt-8 w-fit">
        <h3 className="scroll-m-20 text-large font-semibold tracking-tight">
          Payment Details
        </h3>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <p className="text-sm">Order Date</p>
          <p className="text-sm">19/10/2022</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <p className="text-sm">Payment Status</p>
          <Badge variant="secondary" className="w-fit text-sm">
            {order?.data?.status}
          </Badge>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <p className="text-sm">
            Total Price ({order?.data?.orderItems?.length} product)
          </p>
          <p>
            {order?.data?.totalPrice.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </p>
        </div>
      </div>
      <Button className="mt-4 w-fit text-sm" size="sm">
        Create Payment
      </Button>
    </div>
  );
}
