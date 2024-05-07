import Link from "next/link";

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
    url: "/products?category=katun",
  },
  {
    name: "Batik Tulis Satin",
    url: "/products?category=satin",
  },
  {
    name: "Batik Tulis Sutra",
    url: "/products?category=sutra",
  },
];

export default function NavLink({ hideLarge }: { hideLarge?: boolean }) {
  return (
    <ul
      className={`${
        hideLarge
          ? "flex w-full gap-1 flex-col lg:hidden"
          : "lg:flex gap-6 hidden"
      }`}
    >
      {dataLink.map((link) => (
        <Link
          href={link.url}
          className={`${
            hideLarge
              ? "w-full flex justify-center items-center rounded-sm h-12 border hover:bg-primary hover:text-white"
              : ""
          }`}
          key={link.name}
        >
          <p
            className={`block leading-7 ${
              hideLarge
                ? ""
                : "[&:not(:first-child)]:mt-6 underline-offset-4 hover:underline"
            } font-semibold text-sm duration-300 transition-all ease-in`}
          >
            {link.name}
          </p>
        </Link>
      ))}
    </ul>
  );
}
