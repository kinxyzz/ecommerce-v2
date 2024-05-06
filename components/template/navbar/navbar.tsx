import NavbarAction from "./navAction";

export default function navbar() {
  return (
    <header className="block bg-slate-300">
      <nav className="container mx-auto">
        <div className="flex  items-center justify-between">
          <div className="bg-cyan-900 w-12 flex items-center justify-center h-12 rounded-full">
            Logo
          </div>
          <div>Link</div>
          <NavbarAction />
        </div>
      </nav>
    </header>
  );
}
