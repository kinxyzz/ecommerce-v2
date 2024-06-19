"use client";

import { Button } from "@/components/ui/button";
import { Package, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function OrderSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const regex = /^\/profile\/order\/.*$/;

  if (regex.test(pathname)) {
    return null;
  }

  return (
    <aside className="shrink py-2 mb-2 border-b md:w-56 w-full">
      <h2 className="scroll-m-20 hidden md:block text-xl font-semibold tracking-tight">
        Menu
      </h2>
      <ul className="flex  md:flex-col gap-2 mt-4 md:justify-center">
        <li>
          <Button
            className="w-full border-none justify-start"
            variant="outline"
            onClick={() => router.push("/profile")}
          >
            <User className="mr-2" size={20} />
            Profile
          </Button>
        </li>
        <li>
          <Button
            className="w-full border-none justify-start"
            variant="outline"
            onClick={() => router.push("/profile/order")}
          >
            <Package className="mr-2" size={20} />
            Orders
          </Button>
        </li>
      </ul>
    </aside>
  );
}
