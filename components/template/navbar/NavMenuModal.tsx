"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import NavLink from "./navLink";

export default function NavMenuModal({
  mounted,
  setMounted,
}: {
  mounted: boolean;
  setMounted: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const menuRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMounted(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef.current]);

  return (
    <div
      className={`z-50 fixed h-screen ${
        !mounted ? "-left-full" : "left-0"
      } w-screen top-0 backdrop-blur-sm lg:hidden transition-all ease-in duration-300`}
    >
      <div
        ref={menuRef}
        className="bg-white px-2 text-slate-900 drop-shadow-md h-full w-72 "
      >
        <div className="flex justify-between items-center">
          <p className="text-2xl lg:text-3xl font-semibold">NextLogo</p>
          <Button size="icon" variant="ghost" onClick={() => setMounted(false)}>
            <X size={16} strokeWidth={1.75} />
          </Button>
        </div>
        <div id="hamcontent" className="w-full mt-4 h-full">
          <NavLink hideLarge />
        </div>
      </div>
    </div>
  );
}
