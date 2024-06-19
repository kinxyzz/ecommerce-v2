import { IOrderItems } from "@/@types/interface";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function OrderProductDetail({
  orderItems,
}: {
  orderItems: IOrderItems;
}) {
  return (
    <Card>
      <CardContent className="pt-6 h-full">
        <div>
          <div className="flex gap-4">
            <Image
              src="https://grrbndzjljmvpcgqddpg.supabase.co/storage/v1/object/public/bahan/0.26720228373226584-bstr58.jpg"
              alt="kain batik"
              className="rounded-md w-20 md:w-28"
              width={120}
              priority
              height={120}
            />
            <div>
              <h3 className="scroll-m-20 font-semibold tracking-tight">
                {orderItems.product.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {orderItems.product.description}
              </p>
              <p className="mt-2 text-light">
                {orderItems.quantity} x{" "}
                {orderItems.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </p>
            </div>
          </div>
          <div className="mt-4 border-t pt-2">
            <p className="text-xs">Total price:</p>
            <h4 className="font-semibold">
              {orderItems.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </h4>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
