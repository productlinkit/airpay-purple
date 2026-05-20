import Image from "next/image";
import {
  Sparkles,
  Smartphone,
  ShieldCheck,
  Landmark,
  Globe,
  Lock,
  TrendingUp,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

type Card = {
  number: string;
  title: string;
  description: string;
  illustration: React.ReactNode;
  footer: React.ReactNode;
};

const cards: Card[] = [
  {
    number: "01",
    title: "One API Integration",
    description:
      "Connect Digital Carrier Billing and diverse local payment methods through one seamless integration designed for scalable global commerce.",
    illustration: <BuiltForImage src="/images/new/home-builtfor-01.webp" alt="One API Integration" />,
    footer: (
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        <FooterPill>DCB</FooterPill>
        <FooterPill>
          <Smartphone className="mr-1 h-3 w-3" /> e-wallet
        </FooterPill>
        <FooterPill>
          <Landmark className="mr-1 h-3 w-3" />
          BANK TRANSFER
        </FooterPill>
        <FooterPill>VISA</FooterPill>
        <FooterPill>+</FooterPill>
      </div>
    ),
  },
  {
    number: "02",
    title: "Global Payment Reach",
    description:
      "Access localized payment channels and mobile payment ecosystems across 15+ high-growth markets worldwide.",
    illustration: <BuiltForImage src="/images/new/home-builtfor-02.webp" alt="Global Payment Reach" />,
    footer: (
      <div className="flex items-center gap-3 rounded-2xl bg-white/70 p-3 backdrop-blur-sm">
        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#8169FF]/15 text-[#8169FF]">
          <Globe className="h-6 w-6" />
        </span>
        <div className="flex items-center gap-3">
          <div className="leading-tight">
            <div className="font-heading text-[20px] font-extrabold text-[#5a3fdb]">
              15+
            </div>
            <div className="text-[10px] font-semibold text-[#2b2f38]">
              Countries
            </div>
          </div>
          <div className="h-8 w-px bg-[#8169FF]/20" />
          <p className="text-[10px] leading-tight text-[#515A5E]">
            Multiple local
            <br />
            payment methods
            <br />
            and carrier partners
          </p>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Secure & Reliable",
    description:
      "Built with enterprise-grade infrastructure, real-time transaction monitoring, and reliable payment connectivity for modern digital businesses.",
    illustration: <BuiltForImage src="/images/new/home-builtfor-03.webp" alt="Secure & Reliable" />,
    footer: (
      <div className="flex items-center gap-3 rounded-2xl bg-white/70 p-3 backdrop-blur-sm">
        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#8169FF]/15 text-[#8169FF]">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <ul className="space-y-0.5 text-[11px] font-semibold text-[#2b2f38]">
          <li>Enterprise-grade security</li>
          <li>Reliable infrastructure</li>
          <li>Real-time monitoring</li>
        </ul>
      </div>
    ),
  },
  {
    number: "04",
    title: "Optimized Payment Performance",
    description:
      "Deliver frictionless payment experiences through intelligent routing and localized payment optimization across global digital markets.",
    illustration: <BuiltForImage src="/images/new/home-builtfor-04.webp" alt="Optimized Payment Performance" />,
    footer: (
      <div className="flex items-center gap-3 rounded-2xl bg-white/70 p-3 backdrop-blur-sm">
        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#8169FF]/15 text-[#8169FF]">
          <TrendingUp className="h-5 w-5" />
        </span>
        <ul className="space-y-0.5 text-[11px] font-semibold text-[#2b2f38]">
          <li>Intelligent routing</li>
          <li>Local optimization</li>
          <li>Better transaction flow</li>
        </ul>
      </div>
    ),
  },
];

export function BuiltForDigitalGrowth() {
  return (
    <section className="mt-4 px-3 sm:px-6 lg:mt-6 lg:px-20">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#F5F0FF] via-[#EDE5FF] to-[#E2D8FF] p-6 sm:rounded-[24px] sm:p-10 lg:rounded-[30px] lg:p-14">
          {/* Decorative world-map background */}
          <WorldMapBackdrop />

          {/* Header */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#5a3fdb] shadow-sm backdrop-blur-sm sm:text-[12px]">
              <Sparkles className="h-3.5 w-3.5" />
              Built For Digital Growth
            </div>

            <h2 className="mt-4 max-w-[820px] font-heading text-[24px] font-extrabold leading-[1.15] text-black sm:text-[36px] lg:text-[44px]">
              <span className="bg-gradient-to-r from-[#7E5BFF] via-[#9F7CFF] to-[#B47BFF] bg-clip-text text-transparent">
                Airpay.
              </span>{" "}
              Powering Seamless Payments, Globally Connected.
            </h2>

            <p className="mt-3 max-w-[700px] text-[13px] leading-relaxed text-[#515A5E] sm:mt-4 sm:text-[15px] lg:text-[16px]">
              Enterprise-grade payment infrastructure for DCB and digital
              payments, designed to scale your business across high-growth
              markets.
            </p>
          </div>

          {/* Cards grid */}
          <div className="relative z-10 mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-4 lg:gap-6">
            {cards.map((c, i) => (
              <ScrollReveal key={c.number} delay={i * 100}>
                <article className="group relative flex h-full flex-col rounded-[20px] bg-white/85 p-5 shadow-[0_10px_30px_rgba(80,60,180,0.10)] backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(80,60,180,0.18)] sm:rounded-[24px] sm:p-6">
                  {/* Number badge */}
                  <div className="flex w-fit items-center justify-center rounded-xl bg-[#8169FF]/12 px-2.5 py-1 font-heading text-[12px] font-extrabold text-[#5a3fdb]">
                    {c.number}
                  </div>

                  {/* Illustration */}
                  <div className="mt-4 flex h-[140px] items-center justify-center sm:h-[160px]">
                    {c.illustration}
                  </div>

                  {/* Title + underline accent */}
                  <h3 className="mt-4 font-heading text-[17px] font-extrabold leading-tight text-black sm:text-[18px]">
                    {c.title}
                  </h3>
                  <span className="mt-2 block h-[3px] w-10 rounded-full bg-gradient-to-r from-[#7E5BFF] to-[#B47BFF]" />

                  {/* Description */}
                  <p className="mt-3 text-[12px] leading-relaxed text-[#515A5E] sm:text-[13px]">
                    {c.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-5">{c.footer}</div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom strip */}
          <div className="relative z-10 mt-8 sm:mt-10 lg:mt-12">
            <div className="mx-auto flex max-w-[860px] items-center justify-between gap-3 rounded-full bg-gradient-to-r from-[#7E5BFF] via-[#8169FF] to-[#9F7CFF] px-5 py-3 shadow-[0_12px_30px_rgba(80,60,180,0.30)] sm:px-7 sm:py-4">
              <div className="flex items-center gap-2 text-white sm:gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/20 font-heading text-[11px] font-extrabold sm:h-7 sm:w-7 sm:text-[12px]">
                  A
                </span>
                <span className="font-heading text-[13px] font-extrabold sm:text-[15px]">
                  Airpay
                </span>
                <span className="h-4 w-px bg-white/40" />
                <span className="text-[10px] leading-snug text-white/90 sm:text-[12px]">
                  Enabling{" "}
                  <strong className="font-bold">DCB &amp; Digital Payments</strong>{" "}
                  for the Future of Global Digital Commerce.
                </span>
              </div>
              <div className="hidden flex-shrink-0 items-center gap-2 sm:flex">
                <StripIcon icon={Lock} />
                <StripIcon icon={Settings} />
                <StripIcon icon={Smartphone} />
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function StripIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white sm:h-8 sm:w-8">
      <Icon className="h-3.5 w-3.5" />
    </span>
  );
}

function FooterPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-[#8169FF]/10 px-2 py-1 font-heading text-[10px] font-bold text-[#5a3fdb]">
      {children}
    </span>
  );
}

function WorldMapBackdrop() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
      viewBox="0 0 1200 600"
      fill="none"
      aria-hidden="true">
      <defs>
        <pattern
          id="bfdg-dot"
          x="0"
          y="0"
          width="14"
          height="14"
          patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill="#5a3fdb" />
        </pattern>
        <mask id="bfdg-mask">
          <rect width="1200" height="600" fill="black" />
          <ellipse cx="240" cy="240" rx="220" ry="120" fill="white" />
          <ellipse cx="540" cy="220" rx="180" ry="120" fill="white" />
          <ellipse cx="820" cy="260" rx="200" ry="130" fill="white" />
          <ellipse cx="1020" cy="340" rx="150" ry="90" fill="white" />
          <ellipse cx="400" cy="420" rx="160" ry="100" fill="white" />
          <ellipse cx="780" cy="430" rx="170" ry="80" fill="white" />
        </mask>
      </defs>
      <rect
        width="1200"
        height="600"
        fill="url(#bfdg-dot)"
        mask="url(#bfdg-mask)"
      />
      {/* Curved connection arcs */}
      <path
        d="M 80 240 Q 600 -60 1120 280"
        stroke="#8169FF"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        opacity="0.25"
        fill="none"
      />
      <path
        d="M 120 360 Q 600 700 1080 360"
        stroke="#8169FF"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        opacity="0.25"
        fill="none"
      />
    </svg>
  );
}

/* ─────────────────────────── Card illustration ─────────────────────────── */

function BuiltForImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-full w-full">
      <Image src={src} alt={alt} fill className="object-contain" sizes="240px" />
    </div>
  );
}
