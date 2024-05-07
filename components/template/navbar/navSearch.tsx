import { Search } from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

export default function NavSearch({
  size = "small",
  hideLarge = true,
}: {
  size?: string;
  hideLarge?: boolean;
}) {
  return (
    <div
      className={`mx-auto ${
        size === "small" ? "w-60" : size === "large" ? "w-96" : "w-fit"
      }  ${hideLarge ? "block lg:hidden" : "hidden lg:block"} relative`}
    >
      <Button
        variant="ghost"
        className="absolute justify-center right-0 items-center pl-3 "
        aria-label="Search"
      >
        <Search />
      </Button>
      <Input type="text" placeholder="search" />
    </div>
  );
}
