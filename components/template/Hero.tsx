"use client";

import { Images } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="relative h-[35rem] flex w-full mt-4">
      <Image
        src="/hero.png"
        alt="Photo by Drew Beamer"
        fill
        className="rounded-md object-cover"
      />
      <div className="absolute text-slate-50 flex h-full gap-4">
        <div className="flex w-1/2 ml-12 h-full justify-center flex-col">
          <h3 className="scroll-m-20 text-xl lg:text-2xl font-semibold tracking-tight">
            Discover the Artistry of HandPainted Batik. Elevate Your Style with
            Unique Designs
          </h3>
          <div>
            <blockquote className="mt-8 text-yellow-400 text-sm lg:text-base border-l-2 pl-2 italic">
              "Clothing is not just fabric, but a canvas on which we express
              ourselves, adding an elegant touch to every stride."
            </blockquote>
          </div>
          <div className="mt-8">
            <Button variant="outline">
              <Images className="mr-4" />
              Koleksi Terbaru
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
