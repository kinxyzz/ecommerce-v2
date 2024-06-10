"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import NavLink from "./navLink";

export default function NavMenu({ children }: React.PropsWithChildren) {
  const [mounted, setMounted] = React.useState(false);

  return (
    <div className="lg:hidden w-1/3">
      <Sheet open={mounted} onOpenChange={setMounted}>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <Menu size={20} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="mb-2">
              <Link href="/">Sripadi Batik</Link>
            </SheetTitle>
          </SheetHeader>

          <NavLink mounted={mounted} setMounted={setMounted} hideLarge={true} />
        </SheetContent>
      </Sheet>
    </div>
  );
}
