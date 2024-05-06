import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Button>Click me</Button>
        <Card>
          <CardHeader>
            <CardTitle>GHRKTN55</CardTitle>
            <CardDescription>Batik tulis katun</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline">detail</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}

