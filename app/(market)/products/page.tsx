import FilterProduct from "@/components/fragment/FilterProduct";
import ProductList from "@/components/template/product/ProductList";
import { Suspense } from "react";

const filterOption = [
  {
    label: "Batik Tulis Katun",
    value: "katun",
  },
  {
    label: "Batik Tulis Sutra",
    value: "sutra",
  },
  {
    label: "Batik Tulis Satin",
    value: "satin",
  },
];

export default function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="flex gap-4 w-full ">
        <div className="shrink min-w-72 border-r hidden lg:flex">
          <div className="flex flex-col gap-12">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Filter Products
            </h2>
            <FilterProduct filterField="material" options={filterOption} />
          </div>
        </div>
        <ProductList />
      </section>
    </Suspense>
  );
}
