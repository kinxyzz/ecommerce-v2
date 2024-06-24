"use client";

import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import { CircleHelp, Instagram } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

export default function Consultation() {
  return (
    <motion.div
      variants={fadeIn("down", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 1 }}
      className="flex flex-wrap gap-8 mt-12"
    >
      <Card className="flex-1">
        <CardHeader>
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Bingung Memilih Batik? Kami Bantu Anda!
          </h3>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          Kesulitan menentukan pilihan batik yang tepat? Tim ahli kami siap
          membantu Anda! Dapatkan rekomendasi personal berdasarkan preferensi
          dan kebutuhan Anda. Hubungi kami untuk sesi konsultasi dan temukan
          batik yang sempurna untuk Anda.
        </CardContent>
        <CardFooter>
          <Button type="button">
            <CircleHelp className="mr-3" />
            Konsultasikan Sekarang
          </Button>
        </CardFooter>
      </Card>
      <Card className="flex-1">
        <CardHeader>
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Dapatkan Informasi Terbaru
          </h3>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          Ingin mencari informasi terbaru tentang batik? Follow Kami Melalu
          Platform Media Sosial Instagram, Jangan Lewatkan Penawaran Penawaran
          Penarik yang memuaskan dan yang pastinya menguntungkan untuk customer
          kami
        </CardContent>
        <CardFooter>
          <Button type="button">
            <Instagram className="mr-3" /> Follow Instagram
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
