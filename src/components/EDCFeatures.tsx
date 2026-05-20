import Image from "next/image";
import {
  ScanLine,
  Landmark,
  Database,
  ShieldCheck,
  Gauge,
  BatteryFull,
  Wifi,
  Headphones,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  illustration: React.ReactNode;
};

const features: Feature[] = [
  {
    icon: ScanLine,
    title: "All-in-One Payments (QR + Tap-to-Pay)",
    description:
      "Accept QRIS, NFC/contactless, chip cards, and magnetic stripe — every payment method on one smart EDC device.",
    illustration: <FeatureImage src="/images/new/edc-feature-01.webp" alt="All-in-One Payments" />,
  },
  {
    icon: Landmark,
    title: "Acquiring & Settlement",
    description:
      "Direct acquiring with trusted bank partners and flexible settlement options.",
    illustration: <FeatureImage src="/images/new/edc-feature-02.webp" alt="Acquiring & Settlement" />,
  },
  {
    icon: Database,
    title: "Unified Back Office",
    description:
      "Monitor in-store and online transactions in one dashboard. Real-time reporting, reconciliation, and performance insights for better decision-making.",
    illustration: <FeatureImage src="/images/new/edc-feature-03.webp" alt="Unified Back Office" />,
  },
  {
    icon: ShieldCheck,
    title: "EMV & PCI Compliant",
    description:
      "Certified EDC terminals with EMV chip technology and PCI PTS security standards to keep every transaction safe.",
    illustration: <FeatureImage src="/images/new/edc-feature-04.webp" alt="EMV & PCI Compliant" />,
  },
];

function FeatureImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[120px] w-[140px] sm:h-[150px] sm:w-[180px]">
      <Image src={src} alt={alt} fill className="object-contain" sizes="180px" />
    </div>
  );
}

const bottomFeatures: { icon: LucideIcon; title: string; subtitle: string }[] = [
  {
    icon: Gauge,
    title: "Fast Transactions",
    subtitle: "High-speed processing for shorter checkout time.",
  },
  {
    icon: BatteryFull,
    title: "Long Battery Life",
    subtitle: "Built to last all day for your business.",
  },
  {
    icon: Wifi,
    title: "Multi-Connectivity",
    subtitle: "Wi-Fi, 4G, and Ethernet for stable performance.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    subtitle: "Dedicated support whenever you need it.",
  },
];

export function EDCFeatures() {
  return (
    <section id="features" className="mt-4 px-4 sm:px-6 lg:mt-6 lg:px-20">
      <ScrollReveal>
        {/* Header */}
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#8169FF]/15 px-4 py-1.5 font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#5a3fdb] sm:text-[12px]">
            EDC Features
          </span>
          <h2 className="font-heading text-[20px] font-extrabold text-black sm:text-[24px] lg:text-[28px]">
            Power every payment at your store
          </h2>
        </div>

        {/* 4 feature cards */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-7 sm:gap-5 lg:mt-8 lg:grid-cols-2 lg:gap-6">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 100}>
              <article className="flex h-full items-start gap-5 rounded-[24px] bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(80,60,180,0.15)] sm:gap-6 sm:p-7 lg:rounded-[28px]">
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#8169FF]/10 text-[#8169FF]">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-[18px] font-extrabold leading-tight text-black sm:text-[20px]">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#515A5E] sm:text-[14px]">
                    {f.description}
                  </p>
                </div>
                <div className="flex-shrink-0">{f.illustration}</div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom feature strip */}
        <div className="mt-6 rounded-[24px] bg-white p-5 sm:mt-7 sm:p-6 lg:mt-8 lg:rounded-[28px]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {bottomFeatures.map((b) => (
              <div key={b.title} className="flex items-start gap-3">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#8169FF]/15 text-[#8169FF]">
                  <b.icon className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <div className="font-heading text-[13px] font-extrabold text-black sm:text-[14px]">
                    {b.title}
                  </div>
                  <div className="mt-1 text-[11px] leading-snug text-[#515A5E] sm:text-[12px]">
                    {b.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

