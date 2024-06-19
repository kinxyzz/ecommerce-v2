import OrderSidebar from "@/components/template/order/orderSidebar";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto w-screen">
      <div className="flex flex-col md:flex-row h-full md:mt-8">
        <OrderSidebar />
        <main className="grow">{children}</main>
      </div>
    </div>
  );
}
