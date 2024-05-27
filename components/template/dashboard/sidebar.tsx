"use client";

import SidebarPiece from "@/components/fragment/dashboard/sidebarPiece";
import { Button } from "@/components/ui/button";
import { Settings, icons } from "lucide-react";

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
  return (
    <nav className="flex border-b shadow-sm p-4 w-full px-2 justify-center duration-300  rounded-md ease-linear transition-all">
      <div className="flex justify-between w-full items-center">
        <div className="flex gap-4 items-center justify-between">
          {/* <Button className="rounded-full" size="icon">
            <PackageOpen />
          </Button> */}
          {sideLink.map((item) => (
            <SidebarPiece
              key={item.name}
              name={item.name}
              icon={item.icon}
              path={item.path}
            />
          ))}
        </div>
        <div className="">
          <Button className="rounded-full" variant="ghost" size="icon">
            <Settings />
          </Button>
        </div>
      </div>
    </nav>
  );
}
