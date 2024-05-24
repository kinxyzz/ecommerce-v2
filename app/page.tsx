import Collection from "@/components/template/Collection";
import Hero from "@/components/template/Hero";
import LinkProduct from "@/components/template/LinkProduct";

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <LinkProduct />
      <Collection />
    </main>
  );
}
