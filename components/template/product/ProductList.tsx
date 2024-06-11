"use client";
import { IitemList } from "@/@types/interface";
import { UseGetCart } from "@/app/hook/useCart";
import { UseGetProduct } from "@/app/hook/useProduct";
import CollectionPiece from "@/components/fragment/CollectionPiece";

export default function ProductList() {
  const { productList = {} } = UseGetProduct();
  const { myCart = [] } = UseGetCart();

  return (
    <div className="grow grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-2 justify-center items">
      {productList?.data?.map((item: IitemList<number, string>) => (
        <CollectionPiece key={item.product_id} cart={myCart} item={item} />
      ))}
    </div>
  );
}
