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
    <>
      <Sheet open={mounted} onOpenChange={setMounted}>
        <SheetTrigger className="lg:hidden" asChild>
          <Button size="icon" variant="outline">
            <Menu size={20} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              <Link href="/">NextLogo</Link>
            </SheetTitle>
          </SheetHeader>

          <NavLink mounted={mounted} setMounted={setMounted} hideLarge={true} />
        </SheetContent>
      </Sheet>
    </>
  );
}
