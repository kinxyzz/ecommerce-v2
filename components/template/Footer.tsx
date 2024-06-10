import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground w-full">
      <section className="container  border-t mx-auto h-full items-center">
        <div className="flex w-full py-4 lg:flex-row flex-col h-full lg:items-center gap-4 justify-between">
          <div className="flex-1">
            <p className="text-2xl lg:text-3xl font-semibold">Your Logo</p>
            <p>Exclusive Batik HandPainted</p>
          </div>
          <div className="flex-1">
            <h3 className="scroll-m-20 text-xl  font-semibold tracking-tight">
              Tentang akun
            </h3>

            <ul className="mt-2">
              <li>
                <Link className="hover:underline" href="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/register">
                  register
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/profile">
                  profile
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/cart">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="scroll-m-20 text-xl  font-semibold tracking-tight">
              Menu Lainnya
            </h3>

            <ul className="mt-2">
              <li>
                <Link className="hover:underline" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/product">
                  Product
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="scroll-m-20 text-xl  font-semibold tracking-tight">
              Lokasi
            </h3>
            <p className="mt-2">
              JL. gg Fagansa, Kepatihan, Kecamatan Wiradesa, Pekalongan, Jawa
              Tengah
            </p>
            <h3 className="mt-2 scroll-m-20 text-xl  font-semibold tracking-tight">
              Contact
            </h3>
            <p className="mt-2">+6285201745541</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
