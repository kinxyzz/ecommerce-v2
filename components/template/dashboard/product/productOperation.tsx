import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { CirclePlus, File, ListFilter } from "lucide-react";
import ProductForm from "../../form/productForm";

export default function ProductOperation() {
  return (
    <div className="flex w-full justify-between mt-8">
      <div>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>All</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Ready</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Sold</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Booked</MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>
      <div className="flex gap-4">
        <Button variant="outline" size="sm">
          <ListFilter size={16} className="mr-2" /> Filter
        </Button>
        <Button variant="outline" size="sm">
          <File size={16} className="mr-2" /> Export
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <CirclePlus size={16} className="mr-2" /> Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Product</DialogTitle>
              <DialogDescription>
                Add a new product to your marketshop.
              </DialogDescription>
            </DialogHeader>
            <ProductForm />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
