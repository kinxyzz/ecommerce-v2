"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="relative flex w-full mt-4">
      <AspectRatio ratio={16} className="h-[500px] ">
        <Image
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          fill
          className="rounded-md object-cover"
        />
      </AspectRatio>
      <div className="absolute flex h-[500px] justify-between gap-4">
        <div className="w-1/2 object-contain bg-auto bg-center bg-no-repeat bg-fixed bg-[url(https://images.unsplash.com/photo-1627053836048-d1c1a2fe7517?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"></div>
        <div className="flex w-1/2  justify-center flex-col mt-4 mr-2">
          <h3 className=" scroll-m-20 text-xl lg:text-2xl font-semibold tracking-tight">
            Discover the Artistry of HandPainted Batik. Elevate Your Style with
            Unique Designs
          </h3>
          <div>
            <blockquote className="mt-4 text-sm lg:text-base border-l-2 pl-2 italic">
              "Clothing is not just fabric, but a canvas on which we express
              ourselves, adding an elegant touch to every stride."
            </blockquote>
          </div>
          <div className="mt-4">
            <Button variant="outline">Koleksi Terbaru</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
