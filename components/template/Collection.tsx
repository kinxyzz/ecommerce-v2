"use client";
import { IitemList } from "@/@types/interface";
import { UseGetCart } from "@/app/hook/useCart";
import { UseGetProduct } from "@/app/hook/useProduct";
import CollectionPiece from "../fragment/CollectionPiece";

export default function Collection() {
  const { productList = {} } = UseGetProduct();
  const { myCart } = UseGetCart();

  return (
    <div className="mt-16 w-full">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Koleksi Batik Terbaru
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-6 justify-between mt-4 w-full gap-4">
        {productList?.data
          ?.slice(0, 5)
          ?.map((item: IitemList<number, string>) => (
            <CollectionPiece key={item.product_id} item={item} cart={myCart} />
          ))}
      </div>
    </div>
  );
}
