"use client";

import { UseGetCart } from "@/app/hook/useCart";
import { CreateOrder } from "@/app/hook/useOrder";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

export default function CartCheckout({
  setMounted,
}: {
  setMounted: Dispatch<SetStateAction<boolean>>;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const { createOrder } = CreateOrder();
  const { myCart = [] } = UseGetCart();
  const router = useRouter();
  const totalPrice = myCart?.reduce(
    (acc: number, curr: { product: { price: number } }) =>
      acc + curr.product.price,
    0
  );

  if (myCart?.length === 0) return;

  function handlCheckout() {
    setLoading(true);
    createOrder(undefined, {
      onSuccess: () => {
        setMounted(false);
        setLoading(false);
        router.push("/profile/order");
      },
      onError(error, variables, context) {
        setLoading(false);
      },
    });
  }

  return (
    <div className="flex justify-center items-center gap-4 flex-col">
      <div className="flex w-full text-sm justify-between">
        <p>Subtotal</p>
        <p>
          {totalPrice.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </p>
      </div>
      <p className="text-xs text-center font-light text-muted-foreground">
        Shipping, taxes, and discount calculated at checkout
      </p>
      <Button
        disabled={loading}
        onClick={() => handlCheckout()}
        className="w-full"
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Checkout
      </Button>
    </div>
  );
}
