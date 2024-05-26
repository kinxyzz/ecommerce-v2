import DashboardCount from "@/components/fragment/DashboardCount";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CircleUser } from "lucide-react";

export default function page() {
  const price = 500000;
  return (
    <div className="w-full mt-16 lg:mt-12 overflow-y-auto">
      <div className="flex gap-4 m-4 flex-wrap md:flex-row md:flex-nowrap justify-center">
        <DashboardCount
          dataNum={price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
          iconName="DollarSign"
          percent="+20.1 from last month"
          title="Total Revenue"
        />
        <DashboardCount
          dataNum="+200.450"
          iconName="User"
          percent="+20.1 from last month"
          title="Subscription"
        />
        <DashboardCount
          dataNum="+12.450"
          iconName="CreditCard"
          percent="+20.1 from last month"
          title="Sales"
        />
        <DashboardCount
          dataNum="+200"
          iconName="Activity"
          percent="+20.1 since last day"
          title="Active Now"
        />
      </div>
      <div className="flex m-4 mt-8 gap-4 flex-col flex-wrap  md:flex-row md:flex-nowrap justify-center">
        <Card className="grow-[2]">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <h2 className="scroll-m-20 text-xl lg:text-2xl font-semibold tracking-tight">
                  Transaction
                </h2>
                <p className="text-sm text-gray-400">
                  Recent transactions from store.
                </p>
              </div>
              <div>
                <Button>View All</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Customer</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    <p>kudamuda</p>
                    <p className="text-sm text-gray-400">kudamuda@gmil.com</p>
                  </TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <p>kudamuda</p>
                    <p className="text-sm text-gray-400">kudamuda@gmil.com</p>
                  </TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <p>kudamuda</p>
                    <p className="text-sm text-gray-400">kudamuda@gmil.com</p>
                  </TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <p>kudamuda</p>
                    <p className="text-sm text-gray-400">kudamuda@gmil.com</p>
                  </TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="grow">
          <CardHeader>
            <h2 className="scroll-m-20 text-xl lg:text-2xl font-semibold tracking-tight">
              Recent Sales
            </h2>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between">
              <div className="flex gap-4 items-center">
                <CircleUser size={40} />
                <div className="font-medium">
                  <p>Your name</p>
                  <p className="text-sm text-gray-400">YourEmail@email.com</p>
                </div>
              </div>
              <div>
                <p>$250.00</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
