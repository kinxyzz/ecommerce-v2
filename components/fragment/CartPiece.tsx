"use client";

import { ICartList } from "@/@types/interface";
import { UseDeleteCart } from "@/app/hook/useCart";
import { Trash } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function CartPiece({
  item,
}: {
  item?: ICartList<number, string>;
}) {
  const { deleteCart } = UseDeleteCart();
  return (
    <div className="w-full h-28 bg-primary rounded-md overflow-hidden text-primary-foreground flex  border shadow-md">
      <Image
        src="https://grrbndzjljmvpcgqddpg.supabase.co/storage/v1/object/public/bahan/0.26720228373226584-bstr58.jpg"
        alt="kain batik"
        width={90}
        height={200}
      />
      <div className="h-full justify-between p-2 flex flex-col w-full">
        <div>
          <h2 className="scroll-m-20 text-sm font-semibold tracking-tight">
            {item?.product?.name || "your product"}
          </h2>
          <p className="text-xs text-muted-foreground">
            {item?.product?.description || "your product description"}
          </p>
          <p className="mt-1 text-sm">
            {item?.product?.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            }) || "Rp.500.50"}
          </p>
        </div>
        <div className="justify-end flex">
          <Button
            onClick={() => deleteCart(item?.cart_id)}
            size="icon"
            className="h-fit w-fit p-1"
            variant="destructive"
          >
            <Trash size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
