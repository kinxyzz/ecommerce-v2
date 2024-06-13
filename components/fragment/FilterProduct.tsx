"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IFilterOption {
  label: string;
  value: string;
}

export default function FilterProduct({
  filterField,
  options,
}: {
  filterField: string;
  options?: IFilterOption[];
}) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const currentValue = searchParams.get("material");

  function handleChange(e: string) {
    const search = searchParams.get("search");
    if (search) {
      params.delete("search");
    }

    const isSameValue = searchParams.get(filterField) === e;

    e = isSameValue ? "all" : e;

    params.set(filterField, e);

    if (e === "all") {
      params.delete(filterField);
    }

    if (searchParams.get("page")) params.set("page", "1");

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <RadioGroup
      onValueChange={(e) => handleChange(e)}
      className="flex gap-4 flex-col"
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem checked={currentValue === null} value="all" id="all" />
        <Label htmlFor="all">All Products</Label>
      </div>
      {options?.map((option) => (
        <div key={option.label} className="flex items-center space-x-2">
          <RadioGroupItem
            checked={option.value === currentValue}
            value={option.value}
            id={option.value}
          />
          <Label htmlFor={option.value}>{option.label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
