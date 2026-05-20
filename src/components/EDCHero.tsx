import Image from "next/image";
import Link from "next/link";
import {
  CreditCard,
  ScanLine,
  BarChart3,
  ShieldCheck,
  Zap,
  Globe,
  PieChart,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const highlights: { icon: LucideIcon; title: string; subtitle: string }[] = [
  {
    icon: CreditCard,
    title: "Card & Contactless",
    subtitle: "Payments",
  },
  {
    icon: ScanLine,
    title: "QR & Digital Wallet",
    subtitle: "Acceptance",
  },
  {
    icon: BarChart3,
    title: "Unified Settlement",
    subtitle: "& Reporting",
  },
];

const trustFeatures: { icon: LucideIcon; title: string; subtitle: string }[] = [
  {
    icon: ShieldCheck,
    title: "Secure & Compliant",
    subtitle: "PCI-DSS certified and EMV compliant for maximum security.",
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    subtitle:
      "High-performing terminals with 99.9% uptime and real-time processing.",
  },
  {
    icon: Globe,
    title: "Nationwide Coverage",
    subtitle: "Wide coverage and 24/7 support to power your business anywhere.",
  },
  {
    icon: PieChart,
    title: "Real-time Insights",
    subtitle:
      "Monitor transactions, settlements, and performance from a single dashboard.",
  },
];

export function EDCHero() {
  return (
    <section className="px-4 pt-28 sm:px-6 sm:pt-32 lg:px-20">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#F5F0FF] via-[#EDE5FF] to-[#E2D8FF] lg:rounded-[40px]">
          <span className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full bg-white/40 blur-3xl" />
          <span className="pointer-events-none absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-white/30 blur-3xl" />

          <div className="relative p-6 sm:p-10 lg:p-14">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
              {/* LEFT — copy */}
              <div className="flex flex-col">
                <Link
                  href="/"
                  className="inline-block w-fit transition-transform hover:scale-105">
                  <Image
                    src="/images/airpay-logo.png"
                    alt="Airpay"
                    width={1000}
                    height={284}
                    className="h-auto w-[120px] sm:w-[140px]"
                  />
                </Link>

                <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#5a3fdb] backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-[11px]">
                  <CreditCard className="h-3.5 w-3.5" />
                  In-Store Payments
                </div>

                <h1 className="mt-4 font-heading text-[30px] font-extrabold leading-[1.05] text-black sm:text-[40px] lg:text-[52px]">
                  EDC Payment Solutions
                </h1>

                <p className="mt-4 font-heading text-[18px] font-extrabold leading-snug sm:text-[22px] lg:text-[26px]">
                  <span className="bg-gradient-to-r from-[#7E5BFF] via-[#9F7CFF] to-[#B47BFF] bg-clip-text text-transparent">
                    Modern In-Store Payments
                    <br />
                    Built for Connected Commerce
                  </span>
                </p>

                <p className="mt-4 max-w-[520px] text-[13px] leading-relaxed text-[#515A5E] sm:text-[15px]">
                  Enable seamless in-store payment experiences through
                  Airpay&rsquo;s enterprise-grade acquiring infrastructure.
                  Accept card, QR, and contactless transactions while managing
                  settlements and reporting through one unified payment
                  ecosystem.
                </p>

                {/* Highlight pills */}
                <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
                  {highlights.map((h) => (
                    <div
                      key={h.title}
                      className="flex items-start gap-2 rounded-2xl bg-white/65 px-3 py-2.5 backdrop-blur-sm">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#8169FF]/15 text-[#8169FF]">
                        <h.icon className="h-4 w-4" />
                      </span>
                      <div className="leading-tight">
                        <div className="font-heading text-[11px] font-extrabold text-black sm:text-[12px]">
                          {h.title}
                        </div>
                        <div className="text-[10px] font-semibold text-[#515A5E]">
                          {h.subtitle}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="mt-6 flex flex-wrap gap-3 sm:mt-7">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 rounded-full bg-[#8169FF] py-2 pl-6 pr-2 text-[14px] font-bold text-white transition-all hover:scale-105 hover:shadow-[0_10px_28px_rgba(128,105,255,0.4)] sm:pl-7 sm:text-[15px]">
                    Talk to Sales
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#8169FF] transition-transform group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                  <Link
                    href="#features"
                    className="inline-flex items-center rounded-full border-2 border-[#8169FF] bg-white px-6 py-2.5 text-[14px] font-bold text-[#8169FF] transition-all hover:scale-105 sm:px-7 sm:text-[15px]">
                    Explore Features
                  </Link>
                </div>
              </div>

              {/* RIGHT — terminal + dashboard + card + QR */}
              <div className="relative">
                <HeroMockup />
              </div>
            </div>

            {/* Bottom trust strip */}
            <div className="mt-8 rounded-2xl bg-white/75 p-5 backdrop-blur-sm sm:mt-10 sm:p-6 lg:mt-12">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {trustFeatures.map((f) => (
                  <div key={f.title} className="flex items-start gap-3">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#8169FF]/15 text-[#8169FF]">
                      <f.icon className="h-5 w-5" />
                    </span>
                    <div className="leading-tight">
                      <div className="font-heading text-[13px] font-extrabold text-black sm:text-[14px]">
                        {f.title}
                      </div>
                      <p className="mt-1 text-[11px] leading-snug text-[#515A5E] sm:text-[12px]">
                        {f.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

/* ──────────────────────── Hero image ──────────────────────── */

function HeroMockup() {
  return (
    <div className="relative mx-auto h-[320px] w-full max-w-[640px] sm:h-[420px] lg:h-[520px]">
      <Image
        src="/images/new/hero-edc.webp"
        alt="Airpay EDC terminal and dashboard"
        fill
        priority
        className="object-contain object-center"
        sizes="(min-width: 1024px) 55vw, 100vw"
      />
    </div>
  );
}
