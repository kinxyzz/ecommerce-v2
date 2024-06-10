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

export default function NavCart() {
  const [mounted, setMounted] = useState(false);

  return (
    <Sheet open={mounted} onOpenChange={setMounted}>
      <SheetTrigger className="" asChild>
        <Button variant="outline" size="icon" className="rouned-md">
          <ShoppingCart size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle className="mb-2">
            <Link href="/">Your Cart</Link>
          </SheetTitle>
        </SheetHeader>
        <Cart />
      </SheetContent>
    </Sheet>
  );
}
