import { StickyNav } from "@/components/StickyNav";
import { HeroSlider } from "@/components/HeroSlider";
import { PartnersStats } from "@/components/PartnersStats";
import { ProductsCarousel } from "@/components/ProductsCarousel";
import { NewsCTA } from "@/components/NewsCTA";
import { BuiltForDigitalGrowth } from "@/components/BuiltForDigitalGrowth";
import { PaymentNetwork } from "@/components/PaymentNetwork";
import { ContactForm } from "@/components/ContactForm";
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
        <BuiltForDigitalGrowth />
        <PaymentNetwork />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
