"use client";

import SidebarPiece from "@/components/fragment/dashboard/sidebarPiece";
import { Button } from "@/components/ui/button";
import { PackageOpen, Settings, icons } from "lucide-react";

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
    <aside className="flex border  w-14 px-2 justify-center py-4 pb-16">
      <div className="flex flex-col justify-between items-center">
        <div className="flex flex-col gap-8">
          <Button className="rounded-full" size="icon">
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
        <div>
          <Button className="rounded-full" size="icon">
            <Settings />
          </Button>
        </div>
      </div>
    </aside>
  );
}
