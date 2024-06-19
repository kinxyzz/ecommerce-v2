import { IOrderCardProps } from "@/@types/interface";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function OrderCard({
  orderItem,
}: {
  orderItem: IOrderCardProps;
}) {
  return (
    <Link
      className="hover:cursor-pointer"
      href={`order/${orderItem?.order_id}`}
    >
      <Card>
        <CardContent className="pt-6 h-full">
          <div className="flex gap-6 h-full">
            <div className="shrink">
              <Image
                src={
                  orderItem?.orderItems[0]?.product?.image ||
                  "https://grrbndzjljmvpcgqddpg.supabase.co/storage/v1/object/public/bahan/0.26720228373226584-bstr58.jpg"
                }
                alt="kain batik"
                className="rounded-md w-20 md:w-28"
                width={120}
                priority
                height={120}
              />
            </div>
            <div className="grow flex flex-col justify-between gap-2">
              <div>
                <div className="w-full flex justify-between items-center">
                  <p className="text-muted-foreground text-xs">19 juni 2024</p>
                  <Badge variant="secondary">{orderItem?.status}</Badge>
                </div>
                <div className="mt-2">
                  <h3 className="scroll-m-20 font-semibold tracking-tight">
                    {orderItem?.orderItems[0]?.product?.name}
                  </h3>
                  {orderItem?.orderItems?.length > 1 && (
                    <p className="scroll-m-20 text-xs">
                      +{orderItem.orderItems.length - 1} other product
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-4 justify-self-end border-t pt-2">
                <p className="scroll-m-20 text-xs">Total Order</p>
                <p className="font-semibold text-sm">
                  {orderItem?.totalPrice?.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
