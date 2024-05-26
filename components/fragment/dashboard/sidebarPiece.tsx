"use client";

import { IsidebarPiece } from "@/@types/interface";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { icons } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function SidebarPiece({ icon, name, path }: IsidebarPiece) {
  const router = useRouter();
  const pathname = usePathname();
  const LucideIcon = icons[icon];
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={() => router.push(path)}
            variant="ghost"
            className={`${
              pathname === path
                ? "bg-primary/90 rounded-full text-primary-foreground"
                : ""
            }`}
            disabled={pathname === path}
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
