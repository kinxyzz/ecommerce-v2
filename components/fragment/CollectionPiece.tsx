import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

export default function CollectionPiece() {
  return (
    <Card className="border-none shadow-md">
      <CardContent className="px-0">
        <Image
          className="rounded-md"
          src="https://grrbndzjljmvpcgqddpg.supabase.co/storage/v1/object/public/bahan/0.26720228373226584-bstr58.jpg"
          alt="kain batik"
          width={250}
          height={200}
        />
        <div className="flex flex-col gap-3 mt-4 px-2">
          <h3 className="text-lg font-semibold">Batik Tulis Katun</h3>
          <h3 className="text-base font-medium">SRIKTN001</h3>
          <p className="text-sm font-light">
            {(750000).toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}{" "}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex p-2 justify-end">
        <Button>
          <ShoppingCart className="mr-3" /> Add To Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
