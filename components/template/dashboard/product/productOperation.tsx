import { Button } from "@/components/ui/button";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { CirclePlus, File, ListFilter } from "lucide-react";

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
        <Button>
          <CirclePlus size={16} className="mr-2" /> Add Product
        </Button>
      </div>
    </div>
  );
}
