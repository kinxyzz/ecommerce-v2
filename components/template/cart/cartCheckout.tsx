"use client";

import { UseGetCart } from "@/app/hook/useCart";
import { CreateOrder } from "@/app/hook/useOrder";
import { Button } from "@/components/ui/button";

export default function CartCheckout() {
  const { createOrder } = CreateOrder();
  const { myCart = [] } = UseGetCart();

  if (myCart?.length === 0)
    return <p className="text-muted-foreground text-sm">Your cart is empty</p>;

  function handlCheckout() {
    console.log("checkout");
    createOrder(undefined, {
      onSuccess: (data) => {
        console.log(data);
      },
    });
  }

  return (
    <div className="flex justify-center items-center gap-4 flex-col">
      <div className="flex w-full text-sm justify-between">
        <p>Subtotal</p>
        <p>$250.00</p>
      </div>
      <p className="text-xs text-center font-light text-muted-foreground">
        Shipping, taxes, and discount calculated at checkout
      </p>
      <Button onClick={() => handlCheckout()} className="w-full">
        Checkout
      </Button>
    </div>
  );
}
