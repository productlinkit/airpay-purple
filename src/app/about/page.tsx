import type { Metadata } from "next";
import Image from "next/image";
import {
  Globe,
  Building2,
  Wallet,
  Network,
  Sparkles,
  ShieldCheck,
  Rocket,
  HeartHandshake,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { ContactCTA } from "@/components/ContactCTA";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About — One platform for every payment method",
  description:
    "Airpay is a payment technology platform that connects businesses with telecom operators, banks, e-wallet providers, and global payment networks.",
};

const partners = [
  { icon: Network, label: "Telecom Operators" },
  { icon: Building2, label: "Banks" },
  { icon: Wallet, label: "E-Wallet Providers" },
  { icon: Globe, label: "Global Payment Networks" },
];

const values = [
  {
    icon: Sparkles,
    title: "Simplicity at Scale",
    description:
      "Complex payment infrastructure made simple — one integration, every market.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Compliance",
    description:
      "Bank-grade security, fraud prevention, and regional compliance built-in.",
  },
  {
    icon: Rocket,
    title: "Built to Scale",
    description:
      "Engineered for high-volume merchants expanding across borders and verticals.",
  },
  {
    icon: HeartHandshake,
    title: "Partner-First",
    description:
      "Long-term relationships with operators, banks, and merchants — not transactions.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader />
      <main>
        <PageHero
          eyebrow="About Airpay"
          title="One platform. Every payment method."
          description="Airpay is a payment technology platform that enables businesses to accept and manage payments through a unified integration — connecting them to telecom operators, banks, e-wallets, and global payment networks."
        />

        {/* Mission + Vision bento */}
        <section className="mt-4 grid grid-cols-1 gap-4 px-4 sm:gap-6 sm:px-6 lg:mt-6 lg:grid-cols-3 lg:px-20">
          <ScrollReveal className="lg:col-span-2">
            <div className="relative h-full overflow-hidden rounded-[24px] bg-[#E4EEFA] p-6 sm:p-8 lg:rounded-[30px] lg:p-10 transition-all hover:shadow-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#8169FF]/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider text-[#8169FF]">
                What we do
              </div>
              <h2 className="mt-5 font-heading text-[32px] font-extrabold leading-[1.2] text-black">
                Connecting businesses to the world&apos;s payment rails.
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-[#2b2f38]">
                Our platform connects businesses with telecom operators, banks,
                e-wallet providers, and global payment networks — enabling
                seamless transactions across both local and international
                markets. With core solutions in{" "}
                <strong className="font-bold text-[#8169FF]">
                  Direct Carrier Billing (DCB)
                </strong>{" "}
                and{" "}
                <strong className="font-bold text-[#8169FF]">
                  Digital Payments
                </strong>
                , Airpay helps businesses reach more users, streamline payment
                operations, and scale services across multiple markets.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {partners.map((p) => (
                  <div
                    key={p.label}
                    className="group flex items-center gap-3 rounded-2xl bg-white px-4 py-3 transition-all hover:bg-[#8169FF] hover:scale-[1.02] hover:shadow-md">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A486FF]/15 text-[#8169FF] transition-colors group-hover:bg-white/25 group-hover:text-white">
                      <p.icon className="h-5 w-5" />
                    </span>
                    <span className="text-[14px] font-semibold text-black transition-colors group-hover:text-white">
                      {p.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120} className="lg:col-span-1">
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-[24px] sm:min-h-[460px] lg:rounded-[30px]">
              <Image
                src="/images/photos/team.webp"
                alt="Airpay team"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
            </div>
          </ScrollReveal>
        </section>

        {/* Mission / Vision split */}
        <section className="mt-4 grid grid-cols-1 gap-4 px-4 sm:gap-6 sm:px-6 lg:mt-6 lg:grid-cols-2 lg:px-20">
          <ScrollReveal>
            <div className="h-full rounded-[24px] bg-[#F2F2F2] p-6 sm:p-8 lg:rounded-[30px] lg:p-10 transition-all hover:shadow-xl">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8169FF] to-[#A486FF] text-white">
                <Rocket className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-heading text-[24px] font-bold text-black">
                Our Mission
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#2b2f38]">
                To remove friction from global payments — letting any merchant,
                anywhere, accept and send money through a single, trusted
                platform.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="h-full rounded-[24px] bg-[#F2F2F2] p-6 sm:p-8 lg:rounded-[30px] lg:p-10 transition-all hover:shadow-xl">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8169FF] to-[#A486FF] text-white">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-heading text-[24px] font-bold text-black">
                Our Vision
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#2b2f38]">
                A world where every business has equal access to the same
                payment infrastructure — regardless of size, geography, or
                vertical.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Values bento */}
        <section className="mt-4 grid grid-cols-2 gap-4 px-4 sm:gap-6 sm:px-6 lg:mt-6 lg:grid-cols-4 lg:px-20">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 100}>
              <div className="group h-full rounded-[24px] bg-[#E4EEFA] p-6 transition-all hover:bg-[#8169FF] hover:shadow-xl sm:p-7 lg:rounded-[30px]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#8169FF] transition-colors group-hover:bg-white/25 group-hover:text-white">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-heading text-[18px] font-bold text-black transition-colors group-hover:text-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#2b2f38] transition-colors group-hover:text-white/90">
                  {v.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
