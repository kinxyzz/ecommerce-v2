"use client";
import { ICartList, IitemList } from "@/@types/interface";
import { UseAddCart, UseDeleteCart } from "@/app/hook/useCart";
import { useTokenStore } from "@/store/authenticated/store";
import { ToastAction } from "@radix-ui/react-toast";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { useToast } from "../ui/use-toast";

export default function CollectionPiece({
  item,
  cart,
}: {
  item: IitemList<number, string>;
  cart?: ICartList<number, string>[];
}) {
  const { toast } = useToast();
  const token = useTokenStore((state) => state.token);
  const { addCart } = UseAddCart();
  const { deleteCart } = UseDeleteCart();
  const inCart = cart?.find((c) => c.product_id === item.product_id);
  const router = useRouter();

  function handleCart() {
    if (!token) {
      toast({
        title: "User Not Login",
        description: "Please Login First",
        action: (
          <Button asChild>
            <ToastAction altText="Login" onClick={() => router.push("/login")}>
              Login
            </ToastAction>
          </Button>
        ),
      });

      return;
    }

    if (inCart) {
      deleteCart(inCart.cart_id);
    } else {
      addCart(item.product_id);
    }
  }

  return (
    <Card className="border shadow-md">
      <CardContent className="px-0">
        <Image
          className="rounded-md mx-auto"
          src="https://grrbndzjljmvpcgqddpg.supabase.co/storage/v1/object/public/bahan/0.26720228373226584-bstr58.jpg"
          alt="kain batik"
          width={250}
          priority
          height={200}
        />
        <div className="flex flex-col gap-3 mt-4 px-2">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <h3 className="text-base font-medium">{item.description}</h3>
          <p className="text-sm font-light">
            {item.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}{" "}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex p-2 justify-end">
        <Button
          onClick={() => handleCart()}
          size="sm"
          variant={inCart ? "outline" : "default"}
          className="text-sm"
        >
          <ShoppingCart size={16} className="mr-2" />
          {inCart ? "In Cart" : "To Cart"}
        </Button>
      </CardFooter>
    </Card>
  );
}
