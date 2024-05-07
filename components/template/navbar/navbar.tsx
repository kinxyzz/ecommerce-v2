import NavMenu from "./NavMenu";
import NavbarAction from "./navAction";
import NavLink from "./navLink";
import NavSearch from "./navSearch";

export default function navbar() {
  return (
    <header className="block border-b">
      <nav className="container mx-auto">
        <div className="flex items-center justify-between pt-2">
          <NavMenu />
          <div className="flex items-center justify-center h-12 rounded-md">
            <p className="text-2xl lg:text-3xl font-semibold">NextLogo</p>
          </div>
          <NavSearch hideLarge={false} size="large" />
          <NavbarAction />
        </div>
        <div className="mt-5 mb-3">
          <NavLink hideLarge={false} />
          <NavSearch />
        </div>
      </nav>
    </header>
  );
}
