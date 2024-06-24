"use client";

import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import { Images } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <motion.div
      variants={fadeIn("down", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
      className="relative after:absolute overflow-hidden after:inset-0 after:bg-gradient-to-t from-5% via-black/20 via-30% from-background  to-transparent rounded-md  h-[35rem] flex w-full mt-4"
    >
      <div className="  rounded-md">
        <Image
          src="/hero.jpg"
          alt="Photo by Drew Beamer"
          width={1000}
          height={1000}
          className="brightness-75 h-[99%] border-none object-cover"
        />
      </div>
      <div className="absolute z-50 text-slate-50 flex h-full gap-4">
        <div className="flex w-1/2 ml-12 h-full justify-center flex-col">
          <h3 className="scroll-m-20 text-xl lg:text-2xl font-semibold tracking-tight">
            Discover the Artistry of HandPainted Batik. Elevate Your Style with
            Unique Designs
          </h3>
          <div>
            <blockquote className="mt-8 text-[#FFBB70] text-sm lg:text-base border-l-2 pl-2 italic">
              Clothing is not just fabric, but a canvas on which we express
              ourselves, adding an elegant touch to every stride.
            </blockquote>
          </div>
          <div className="mt-8">
            <Button>
              <Images className="mr-4" />
              Koleksi Terbaru
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
