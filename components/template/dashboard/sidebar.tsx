"use client";

import SidebarPiece from "@/components/fragment/dashboard/sidebarPiece";
import { Button } from "@/components/ui/button";
import { PackageOpen, Settings, icons } from "lucide-react";
import { useState } from "react";

interface IsideLink<T> {
  icon: keyof typeof icons;
  name: T;
  path: T;
}

const sideLink: IsideLink<string>[] = [
  { icon: "Home", name: "dashboard", path: "/admin" },
  {
    icon: "PackageSearch",
    name: "product",
    path: "/admin/product",
  },
  { icon: "Users", name: "customer", path: "/admin/customer" },
  {
    icon: "LineChart",
    name: "analytic",
    path: "/admin/analythic",
  },
];

export default function DashboardSidebar() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <aside
        className={`flex fixed lg:static top-16 right-4  ${
          open ? "h-72" : "h-0"
        } overflow-hidden lg:h-full w-fit  px-2 justify-center duration-300 bg-primary-foreground text-primary z-50 rounded-md ease-linear transition-all`}
      >
        <div className="flex flex-col  justify-between items-center">
          <div className="flex flex-col gap-4 pt-2 justify-between">
            <Button
              onClick={() => setOpen(!open)}
              className="rounded-full mb-10 h-fit w-fit p-2 top-4 right-6 lg:static fixed"
              size="icon"
            >
              <PackageOpen />
            </Button>
            {sideLink.map((item) => (
              <SidebarPiece
                key={item.name}
                name={item.name}
                icon={item.icon}
                path={item.path}
              />
            ))}
          </div>
          <div className="pb-2 lg:pb-12">
            <Button className="rounded-full" variant="ghost" size="icon">
              <Settings />
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
