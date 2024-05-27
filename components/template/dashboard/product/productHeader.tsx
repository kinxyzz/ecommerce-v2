import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Search, User } from "lucide-react";

export default function ProductHeader() {
  return (
    <div className="flex justify-end lg:justify-between items-center ">
      <Breadcrumb className="hidden lg:block">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin/product">Product</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>All Product</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-center w-full gap-4">
        <div className="relative grow flex gap-2 items-center pl-2 rounded-sm">
          <Search className="ml-3 absolute" />
          <Input className="w-full pl-12" type="text" placeholder="Search..." />
          <User size={36} />
        </div>
      </div>
    </div>
  );
}
