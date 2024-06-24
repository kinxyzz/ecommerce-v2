"use client";

import { UseGetCart } from "@/app/hook/useCart";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Cart from "../cart/Cart";
import CartCheckout from "../cart/cartCheckout";

export default function NavCart() {
  const { myCart = [] } = UseGetCart();

  const [mounted, setMounted] = useState(false);

  return (
    <Sheet open={mounted} onOpenChange={setMounted}>
      <SheetTrigger className="" asChild>
        <Button
          variant="outline"
          className="rounded-md w-fit items-center flex p-1 px-2"
        >
          <ShoppingCart size={16} className="mr-1" />
          <p className="text-sm text-muted-foreground">{myCart?.length || 0}</p>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full" side="right">
        <SheetHeader>
          <SheetTitle className="mb-2">
            <Link href="/">Your Cart</Link>
          </SheetTitle>
        </SheetHeader>
        <div className="h-[95%] flex flex-col justify-between">
          <div className="flex flex-col">
            <Cart />
          </div>
          <CartCheckout setMounted={setMounted} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
