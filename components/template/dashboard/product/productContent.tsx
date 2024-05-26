import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ProductContent() {
  return (
    <div className="flex w-full mt-8">
      <Card className="w-full">
        <CardHeader>
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors">
            Products
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-sm text-gray-400">
            Manage your products and view their sales performance.
          </p>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]"></TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }, (_, i) => i + 1).map((i, k) => (
                <TableRow key={k}>
                  <TableCell className="font-medium">Image</TableCell>
                  <TableCell className="font-medium">Product Name</TableCell>
                  <TableCell>Status Product</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>Product Price</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
