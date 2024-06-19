"use client";
import { ICartList } from "@/@types/interface";
import { UseGetCart } from "@/app/hook/useCart";
import CartPiece from "@/components/fragment/CartPiece";

export default function Cart() {
  const { myCart = [] } = UseGetCart();

  if (myCart?.length <= 0)
    return <p className="text-muted-foreground text-xs">Your Cart is Empty</p>;

  return (
    <>
      {myCart?.map((item: ICartList<number, string>) => (
        <CartPiece key={item.cart_id} item={item} />
      ))}
    </>
  );
}
