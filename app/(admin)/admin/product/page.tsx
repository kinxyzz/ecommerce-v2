import ProductContent from "@/components/template/dashboard/product/productContent";
import ProductHeader from "@/components/template/dashboard/product/productHeader";
import ProductOperation from "@/components/template/dashboard/product/productOperation";

export default function page() {
  return (
    <div className="h-screen w-full p-4">
      <ProductHeader />
      <ProductOperation />
      <ProductContent />
    </div>
  );
}
