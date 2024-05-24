import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

export default function LinkProduct() {
  return (
    <div className="flex justify-between flex-wrap md:flex-nowrap items-center gap-4 mt-4 w-full">
      <Card>
        <CardHeader>
          <CardTitle>Kain Batik Katun</CardTitle>
          <CardDescription>Elegant and classy</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Kami menyediakan batik tulis berbahan sutra yang bagus dan elegant
            yang sangat cocok digunakan untuk berbagai acara penting.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>
            Show More <ChevronRight className="ml-3" />
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Kain Batik Sutra</CardTitle>
          <CardDescription>
            Glamour,Elegant,Ekslusif, High Quality
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Kami menyediakan batik tulis berbahan sutra yang bagus dan elegant
            yang sangat cocok digunakan untuk berbagai acara penting.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>
            Show More <ChevronRight className="ml-3" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
