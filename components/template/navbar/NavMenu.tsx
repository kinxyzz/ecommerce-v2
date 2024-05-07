"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import * as React from "react";
import NavMenuModal from "./NavMenuModal";

export default function NavMenu({ children }: React.PropsWithChildren) {
  const [mounted, setMounted] = React.useState(false);

  return (
    <>
      <Button
        onClick={() => setMounted(!mounted)}
        variant="outline"
        size="icon"
        className="lg:hidden"
      >
        <Menu size={16} strokeWidth={0.75} absoluteStrokeWidth />
      </Button>
      {/* {mounted
        ? createPortal(
            <NavMenuModal mounted={mounted} setMounted={setMounted} />,
            document.body
          )
        : null} */}
      <NavMenuModal mounted={mounted} setMounted={setMounted} />
    </>
  );
}
