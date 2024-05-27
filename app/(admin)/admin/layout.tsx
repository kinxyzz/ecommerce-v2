import DashboardSidebar from "@/components/template/dashboard/sidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex lg:container flex-col  justify-center mx-auto shadow-sm">
      <DashboardSidebar />

      <section className="flex h-full justify-center w-full">
        {children}
      </section>
    </main>
  );
}
