"use client";
import { ICartList } from "@/@types/interface";
import { UseGetCart } from "@/app/hook/useCart";
import CartPiece from "@/components/fragment/CartPiece";

export default function Cart() {
  const { myCart = [] } = UseGetCart();
  return (
    <>
      {myCart?.map((item: ICartList<number, string>) => (
        <CartPiece key={item.cart_id} item={item} />
      ))}
    </>
  );
}
