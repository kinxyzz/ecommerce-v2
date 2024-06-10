import Collection from "@/components/template/Collection";
import Consultation from "@/components/template/Consultation";
import Featured from "@/components/template/Featured";
import Footer from "@/components/template/Footer";
import Hero from "@/components/template/Hero";
import LinkProduct from "@/components/template/LinkProduct";

export default function Home() {
  return (
    <>
      <main className="container">
        <Hero />
        <LinkProduct />
        <Collection />
        <Consultation />
      </main>
      <Featured />
      <Footer />
    </>
  );
}
