"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { icons } from "lucide-react";
import { usePathname } from "next/navigation";

export default function SidebarPiece({
  icon,
  name,
  path,
}: {
  icon: keyof typeof icons;
  name: string;
  path: string;
}) {
  const pathname = usePathname();
  const LucideIcon = icons[icon];
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            className={`${
              pathname === path ? "bg-primary/90 text-primary-foreground" : ""
            }`}
            size="icon"
          >
            <LucideIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
