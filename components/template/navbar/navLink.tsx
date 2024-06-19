"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface INavLinkProps {
  hideLarge?: boolean;
  setMounted?: React.Dispatch<React.SetStateAction<boolean>>;
  mounted?: boolean;
}

const dataLink = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "product",
    url: "/products",
  },
  {
    name: "Batik Tulis Katun",
    url: "/products?material=katun",
  },
  {
    name: "Batik Tulis Satin",
    url: "/products?material=satin",
  },
  {
    name: "Batik Tulis Sutra",
    url: "/products?material=sutra",
  },
];

export default function NavLink(props: INavLinkProps) {
  const { hideLarge, setMounted } = props;
  const pathname = usePathname();
  const hideWhenPath = pathname.startsWith("/products");
  const newDataLink = hideWhenPath
    ? dataLink.filter((_, i) => i < 2)
    : dataLink;

  function handleClose() {
    if (setMounted) setMounted(false);
  }

  return (
    <ul
      className={`${
        hideLarge
          ? "flex w-full gap-1 flex-col lg:hidden"
          : "lg:flex gap-6 hidden"
      }`}
    >
      {newDataLink.map((link) => (
        <li
          className={`${
            hideLarge
              ? "w-full flex items-center  rounded-sm h-12  hover:bg-primary hover:text-white"
              : ""
          }`}
          key={link.name}
          onClick={handleClose}
        >
          <Link
            href={link.url}
            className={`block w-full leading-7 ${
              hideLarge
                ? ""
                : "[&:not(:first-child)]:mt-6 underline-offset-4 hover:underline"
            } font-semibold text-sm duration-300 transition-all ease-in`}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
