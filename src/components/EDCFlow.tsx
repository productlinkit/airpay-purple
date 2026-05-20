import Image from "next/image";
import {
  ShieldCheck,
  Rocket,
  Gauge,
  Headphones,
  TrendingUp,
  ScanLine,
  CreditCard,
  CheckCircle2,
  Landmark,
  FileCheck2,
  BarChart3,
  Smartphone,
  Lock,
  Monitor,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

/* ─────────────────────── 6-step workflow ─────────────────────── */

type Step = {
  number: number;
  title: string;
  bullets: string[];
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    number: 1,
    title: "Prepare Your EDC",
    bullets: [
      "Receive your EDC terminal from Airpay.",
      "Plug in, connect to Wi-Fi or SIM, and it’s ready to go.",
    ],
    icon: <StepIcon icon={Smartphone} />,
  },
  {
    number: 2,
    title: "Accept Payments",
    bullets: [
      "Let customers pay their way.",
      "Accept QRIS, NFC/contactless, chip, and magstripe.",
    ],
    icon: <StepIcon icon={CreditCard} />,
  },
  {
    number: 3,
    title: "Transaction Approval",
    bullets: [
      "Transaction is processed securely through Airpay network.",
      "Customer receives payment confirmation.",
    ],
    icon: <StepIcon icon={CheckCircle2} />,
  },
  {
    number: 4,
    title: "Settlement",
    bullets: ["Funds are settled directly to your bank account."],
    icon: <StepIcon icon={Landmark} />,
  },
  {
    number: 5,
    title: "Reconciliation",
    bullets: [
      "All transactions are reconciled automatically.",
      "View settlements, fees, and reports in real time.",
    ],
    icon: <StepIcon icon={FileCheck2} />,
  },
  {
    number: 6,
    title: "Business Insights",
    bullets: [
      "Track performance, monitor sales, and download reports.",
      "Make better decisions with real-time data.",
    ],
    icon: <StepIcon icon={BarChart3} />,
  },
];

function StepIcon({ icon: Icon }: { icon: LucideIcon }) {
  return <Icon className="h-9 w-9 text-[#8169FF] sm:h-10 sm:w-10" strokeWidth={1.6} />;
}

const bottomFeatures: { icon: LucideIcon; title: string; subtitle?: string }[] =
  [
    { icon: ShieldCheck, title: "Built for Your Business" },
    {
      icon: Rocket,
      title: "Fast Onboarding",
      subtitle: "Get your EDC up and running in minutes.",
    },
    {
      icon: Gauge,
      title: "Reliable Performance",
      subtitle: "Stable connection and high transaction success.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      subtitle: "Our team is always here when you need us.",
    },
    {
      icon: TrendingUp,
      title: "Scale with You",
      subtitle: "From single store to multi-location.",
    },
  ];

const allInOneCards: {
  icon: LucideIcon;
  title: string;
  description: string;
  extra: React.ReactNode;
}[] = [
  {
    icon: ScanLine,
    title: "Multiple Payment Methods",
    description:
      "Accept QRIS, e-wallets, cards (debit/credit), contactless, and chip payments.",
    extra: (
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <BrandChip>QRIS</BrandChip>
        <BrandChip>Gopay</BrandChip>
        <BrandChip>OVO</BrandChip>
        <BrandChip>DANA</BrandChip>
        <span className="text-[11px] font-semibold text-[#515A5E]">
          and more
        </span>
      </div>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Secure & Compliant",
    description:
      "PCI PTS certified terminals with end-to-end encryption for maximum security.",
    extra: (
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-md bg-[#F5F0FF] px-2.5 py-1.5 font-heading text-[10px] font-extrabold text-[#5a3fdb]">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8169FF]/20">
            <ShieldCheck className="h-3 w-3 text-[#8169FF]" />
          </span>
          PCI PTS
          <span className="text-[8px] font-bold text-[#515A5E]">CERTIFIED</span>
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-md bg-[#F5F0FF] px-2.5 py-1.5 font-heading text-[10px] font-extrabold text-[#5a3fdb]">
          <Lock className="h-3 w-3 text-[#8169FF]" />
          AES 256
          <span className="text-[8px] font-bold text-[#515A5E]">
            ENCRYPTION
          </span>
        </span>
      </div>
    ),
  },
  {
    icon: Monitor,
    title: "Unified Dashboard",
    description:
      "Manage all your EDC transactions, settlements, and performance from one dashboard.",
    extra: (
      <span className="mt-3 inline-flex w-fit items-center rounded-full bg-[#8169FF]/15 px-3 py-1 font-heading text-[11px] font-extrabold text-[#5a3fdb]">
        Real-time Reporting
      </span>
    ),
  },
];

export function EDCFlow() {
  return (
    <section className="mt-4 px-4 sm:px-6 lg:mt-6 lg:px-20">
      <ScrollReveal>
        <div className="rounded-[24px] bg-gradient-to-br from-[#F5F0FF] via-[#EDE5FF] to-[#E2D8FF] p-6 sm:p-8 lg:rounded-[30px] lg:p-10">
          {/* Top — header + steps */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr] lg:gap-10 xl:grid-cols-[320px_1fr]">
            {/* Header */}
            <div>
              <span className="inline-flex w-fit items-center rounded-full bg-[#8169FF]/15 px-4 py-1.5 font-heading text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#5a3fdb] sm:text-[12px]">
                EDC Workflow
              </span>
              <h2 className="mt-4 font-heading text-[28px] font-extrabold leading-[1.1] text-black sm:text-[34px] lg:text-[40px]">
                How EDC Works
              </h2>
              <p className="mt-3 max-w-[300px] text-[13px] leading-relaxed text-[#515A5E] sm:text-[14px]">
                Simple end-to-end flow to accept payments, settle funds, and
                manage your business.
              </p>

              <div className="mt-5">
                <EDCWithCardIllustration />
              </div>
            </div>

            {/* 6 steps */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:flex lg:items-stretch lg:gap-1.5 xl:gap-2">
              {steps.map((s, i) => (
                <StepFragment key={s.number}>
                  <ScrollReveal delay={i * 60} className="flex-1">
                    <article className="relative flex h-full flex-col rounded-2xl bg-white p-4 shadow-[0_6px_18px_rgba(80,60,180,0.08)] sm:p-5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#8169FF] to-[#A486FF] font-heading text-[12px] font-extrabold text-white shadow-[0_6px_14px_rgba(128,105,255,0.35)]">
                        {s.number}
                      </span>
                      <h3 className="mt-3 font-heading text-[14px] font-extrabold leading-tight text-black sm:text-[15px]">
                        {s.title}
                      </h3>

                      <div className="mt-3 flex justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#8169FF]/10 sm:h-20 sm:w-20">
                          {s.icon}
                        </div>
                      </div>

                      <ul className="mt-3 space-y-1.5">
                        {s.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-1.5 text-[11px] leading-snug text-[#515A5E] sm:text-[12px]">
                            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#8169FF]" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </ScrollReveal>

                  {/* Connector arrow */}
                  {i < steps.length - 1 && (
                    <div className="hidden flex-shrink-0 items-center justify-center lg:flex">
                      <DottedArrow />
                    </div>
                  )}
                </StepFragment>
              ))}
            </div>
          </div>

          {/* Bottom feature strip */}
          <div className="mt-8 rounded-2xl bg-white/65 p-5 backdrop-blur-sm sm:mt-10 sm:p-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
              {bottomFeatures.map((b) => (
                <div key={b.title} className="flex items-start gap-3">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#8169FF]/15 text-[#8169FF]">
                    <b.icon className="h-5 w-5" />
                  </span>
                  <div className="leading-tight">
                    <div className="font-heading text-[13px] font-extrabold text-black sm:text-[14px]">
                      {b.title}
                    </div>
                    {b.subtitle && (
                      <p className="mt-1 text-[11px] leading-snug text-[#515A5E] sm:text-[12px]">
                        {b.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Everything You Need section */}
          <div className="mt-8 sm:mt-10 lg:mt-12">
            <div className="mb-6 flex items-center gap-4 sm:mb-7">
              <span className="h-px flex-1 bg-[#8169FF]/20" />
              <span className="font-heading text-[16px] font-extrabold text-black sm:text-[20px] lg:text-[24px]">
                Everything You Need in One Solution
              </span>
              <span className="h-px flex-1 bg-[#8169FF]/20" />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {allInOneCards.map((c, i) => (
                <ScrollReveal key={c.title} delay={i * 80}>
                  <article className="flex h-full flex-col rounded-2xl bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(80,60,180,0.15)] sm:p-6">
                    <div className="flex items-start gap-3">
                      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#8169FF]/15 text-[#8169FF]">
                        <c.icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-heading text-[15px] font-extrabold leading-tight text-black sm:text-[16px]">
                        {c.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-[12px] leading-relaxed text-[#515A5E] sm:text-[13px]">
                      {c.description}
                    </p>
                    {c.extra}
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function StepFragment({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function DottedArrow() {
  return (
    <svg
      width="24"
      height="8"
      viewBox="0 0 24 8"
      fill="none"
      aria-hidden="true">
      <line
        x1="0"
        y1="4"
        x2="20"
        y2="4"
        stroke="#8169FF"
        strokeOpacity="0.5"
        strokeWidth="1.5"
        strokeDasharray="2.5 2.5"
      />
      <polyline
        points="18,1 22,4 18,7"
        stroke="#8169FF"
        strokeOpacity="0.6"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BrandChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-[#F5F0FF] px-2.5 py-1.5 font-heading text-[10px] font-extrabold text-[#5a3fdb]">
      {children}
    </span>
  );
}

/* ─────────────────────── Left-side EDC illustration ─────────────────────── */

function EDCWithCardIllustration() {
  return (
    <div className="relative h-[200px] w-full max-w-[280px] sm:h-[240px]">
      <Image
        src="/images/new/edc-workflow.webp"
        alt="Airpay EDC workflow"
        fill
        className="object-contain object-left-bottom"
        sizes="(min-width: 1024px) 280px, 50vw"
      />
    </div>
  );
}
