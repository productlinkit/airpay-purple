import { ScrollReveal } from "./ScrollReveal";
import { WhyChooseCard } from "./WhyChooseCard";

export function PaymentNetwork() {
  return (
    <section className="mt-4 px-4 sm:px-6 lg:mt-6 lg:px-20">
      <ScrollReveal>
        <WhyChooseCard cols={4} />
      </ScrollReveal>
    </section>
  );
}
