import { StickyNav } from "@/components/StickyNav";
import { HeroSlider } from "@/components/HeroSlider";
import { PartnersStats } from "@/components/PartnersStats";
import { ProductsCarousel } from "@/components/ProductsCarousel";
import { NewsCTA } from "@/components/NewsCTA";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <StickyNav />
      <main>
        <HeroSlider />
        <PartnersStats />
        <ProductsCarousel />
        <NewsCTA />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
