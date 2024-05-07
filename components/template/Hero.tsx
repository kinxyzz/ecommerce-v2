"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex w-full mt-4">
      <AspectRatio ratio={16} className="h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          fill
          className="rounded-md object-cover"
        />
      </AspectRatio>
      <div className="absolute">hehe</div>
    </div>
  );
}
