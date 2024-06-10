import { Shirt, Truck, Wallet } from "lucide-react";
import { Card, CardFooter, CardHeader } from "../ui/card";

export default function Featured() {
  return (
    <div className="bg-primary text-primary-foreground py-12 w-full mt-24">
      <div className="container mx-auto flex-wrap flex justify-between gap-4 items-center h-full">
        <Card className="flex-1">
          <CardHeader>
            <h3 className="scroll-m-20 flex items-center text-xl lg:text-2xl font-semibold tracking-tight">
              Bebas Ongkir
              <Truck className="ml-3" size={24} />
            </h3>
          </CardHeader>
          <CardFooter>
            <p className="text-muted-foreground">
              Layanan pengiriman Gratis ke Seluruh Indonesia
            </p>
          </CardFooter>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <h3 className="scroll-m-20 flex items-center text-xl lg:text-2xl font-semibold tracking-tight">
              Price To Value
              <Wallet className="ml-3" size={24} />
            </h3>
          </CardHeader>
          <CardFooter>
            <p className="text-muted-foreground">
              Menyediakan produk batik berkualitas tinggi dengan Harga Terbaik
            </p>
          </CardFooter>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <h3 className="scroll-m-20 flex items-center text-xl lg:text-2xl font-semibold tracking-tight">
              Exclusive Products
              <Shirt className="ml-3" size={24} />
            </h3>
          </CardHeader>
          <CardFooter>
            <p className="text-muted-foreground">
              Produk eksklusif yang tidak tersedia di tempat lain
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
