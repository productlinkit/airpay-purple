import {
  Link2,
  Share2,
  Smartphone,
  CreditCard,
  CheckCircle2,
  ChevronRight,
  Wallet,
  Landmark,
  Building2,
  ScanLine,
  Globe,
  ShieldCheck,
  Rocket,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

type Step = {
  icon: LucideIcon;
  number: number;
  highlight: string;
  rest: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: Link2,
    number: 1,
    highlight: "Create",
    rest: "Payment Link",
    description: "Enter amount, details, and payment settings.",
  },
  {
    icon: Share2,
    number: 2,
    highlight: "Share",
    rest: "Payment Link",
    description: "Share the link through your preferred channels.",
  },
  {
    icon: Smartphone,
    number: 3,
    highlight: "Customer",
    rest: "Opens Link",
    description: "Your customer opens the link and reviews the details.",
  },
  {
    icon: CreditCard,
    number: 4,
    highlight: "Customer",
    rest: "Pays",
    description:
      "Customer completes the payment using their preferred method.",
  },
  {
    icon: CheckCircle2,
    number: 5,
    highlight: "Payment",
    rest: "Successful",
    description: "You receive payment instantly and can track it in dashboard.",
  },
];

const channels: { icon: LucideIcon; label: string }[] = [
  { icon: Wallet, label: "E-Wallets" },
  { icon: Landmark, label: "Virtual Accounts" },
  { icon: Building2, label: "Bank Transfer" },
  { icon: CreditCard, label: "Cards" },
  { icon: ScanLine, label: "QRIS" },
  { icon: Globe, label: "Digital Banking" },
];

const trustCards: {
  icon: LucideIcon;
  title: string;
  description: string;
  extra?: React.ReactNode;
}[] = [
  {
    icon: Globe,
    title: "Trusted by 100+ Merchants Across 15+ Countries",
    description:
      "Helping businesses of all sizes grow globally with reliable payment infrastructure.",
    extra: <MiniMap />,
  },
  {
    icon: ShieldCheck,
    title: "Bank-grade Security & PSP Partner Compliance",
    description:
      "PCI-DSS compliant, encrypted transactions, fraud protection, and trusted PSP partners.",
    extra: <ComplianceBadges />,
  },
  {
    icon: Rocket,
    title: "Quick Onboarding via Airpay Dashboard",
    description:
      "Self-serve onboarding, API key management, test mode, and SDKs — all in one dashboard.",
  },
];

export function PaymentLinkFlow() {
  return (
    <section className="mt-4 px-4 sm:px-6 lg:mt-6 lg:px-20">
      <ScrollReveal>
        <div className="rounded-[24px] bg-[#F5F5F7] p-6 sm:p-8 lg:rounded-[30px] lg:p-10">
          {/* Header */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#8169FF]/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider text-[#8169FF]">
              How It Works
            </div>
            <h2 className="mt-4 font-heading text-[28px] font-extrabold text-black sm:text-[32px]">
              Create. Share.{" "}
              <span className="bg-gradient-to-r from-[#7E5BFF] via-[#9F7CFF] to-[#B47BFF] bg-clip-text text-transparent">
                Get Paid.
              </span>
            </h2>
            <p className="mt-2 max-w-[640px] text-[13px] leading-relaxed text-[#515A5E] sm:text-[14px]">
              A simple 5-step flow — from creating your link to receiving
              payment confirmation.
            </p>
          </div>

          {/* Flow grid */}
          <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:mt-10 lg:flex lg:items-stretch lg:gap-2">
            {steps.map((s, i) => (
              <StepFragment key={s.number}>
                <ScrollReveal delay={i * 80} className="flex-1">
                  <article
                    className={`relative flex h-full flex-col items-center rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(80,60,180,0.18)] sm:p-6 ${
                      s.number === 5
                        ? "bg-gradient-to-br from-[#8169FF] to-[#5a3fdb] text-white shadow-[0_14px_32px_rgba(80,60,180,0.30)]"
                        : "bg-white text-black shadow-[0_6px_18px_rgba(80,60,180,0.08)]"
                    }`}>
                    {/* Number badge */}
                    <span
                      className={`absolute -top-3 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full font-heading text-[13px] font-extrabold shadow-[0_6px_14px_rgba(128,105,255,0.35)] ${
                        s.number === 5
                          ? "bg-white text-[#5a3fdb]"
                          : "bg-gradient-to-br from-[#8169FF] to-[#A486FF] text-white"
                      }`}>
                      {s.number}
                    </span>

                    {/* Sparkles only on final card */}
                    {s.number === 5 && (
                      <>
                        <Sparkles className="absolute right-3 top-3 h-3 w-3 opacity-70" />
                        <Sparkles className="absolute left-3 top-6 h-2.5 w-2.5 opacity-50" />
                      </>
                    )}

                    {/* Icon */}
                    <div className="mt-4 flex justify-center">
                      <span
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
                          s.number === 5
                            ? "bg-white/15 text-white"
                            : "bg-[#8169FF]/10 text-[#8169FF]"
                        }`}>
                        <s.icon className="h-7 w-7" strokeWidth={1.8} />
                      </span>
                    </div>

                    <h3
                      className={`mt-4 text-center font-heading text-[14px] font-extrabold leading-tight sm:text-[15px] ${
                        s.number === 5 ? "text-white" : "text-black"
                      }`}>
                      <span
                        className={
                          s.number === 5 ? "text-white" : "text-[#5a3fdb]"
                        }>
                        {s.highlight}
                      </span>{" "}
                      {s.rest}
                    </h3>

                    <p
                      className={`mt-2 text-center text-[11px] leading-relaxed sm:text-[12px] ${
                        s.number === 5 ? "text-white/85" : "text-[#515A5E]"
                      }`}>
                      {s.description}
                    </p>
                  </article>
                </ScrollReveal>

                {/* Connector arrow */}
                {i < steps.length - 1 && (
                  <div className="hidden flex-shrink-0 items-center justify-center lg:flex">
                    <ChevronRight
                      className="h-5 w-5 text-[#8169FF]/50"
                      strokeWidth={2.5}
                    />
                  </div>
                )}
              </StepFragment>
            ))}
          </div>

          {/* Channels strip */}
          <div className="mt-8 rounded-2xl bg-white p-4 sm:mt-10 sm:p-5">
            <div className="text-center font-heading text-[12px] font-extrabold text-black sm:text-[14px]">
              Accept payments via{" "}
              <span className="bg-gradient-to-r from-[#7E5BFF] to-[#B47BFF] bg-clip-text text-transparent">
                85+ channels
              </span>
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-x-8">
              {channels.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-1.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#8169FF]/10 text-[#8169FF]">
                    <c.icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-heading text-[11px] font-bold text-[#1f2230] sm:text-[12px]">
                    {c.label}
                  </span>
                </div>
              ))}
              <span className="text-[11px] font-semibold text-[#515A5E]">
                · and more…
              </span>
            </div>
          </div>

          {/* Trust feature cards */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {trustCards.map((t, i) => (
              <ScrollReveal key={t.title} delay={i * 80}>
                <article className="flex h-full flex-col rounded-2xl bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(80,60,180,0.18)] sm:p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#8169FF]/15 text-[#8169FF]">
                    <t.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-[14px] font-extrabold leading-tight text-black sm:text-[15px]">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-[12px] leading-relaxed text-[#515A5E] sm:text-[13px]">
                    {t.description}
                  </p>
                  {t.extra && <div className="mt-3">{t.extra}</div>}
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function StepFragment({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function MiniMap() {
  return (
    <div className="relative h-[70px] w-full overflow-hidden rounded-xl bg-[#F5F0FF]">
      <svg viewBox="0 0 300 70" className="h-full w-full" fill="none">
        <defs>
          <pattern
            id="plf-map-dot"
            x="0"
            y="0"
            width="6"
            height="6"
            patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#8169FF" />
          </pattern>
          <mask id="plf-map-mask">
            <rect width="300" height="70" fill="black" />
            <ellipse cx="50" cy="32" rx="40" ry="20" fill="white" />
            <ellipse cx="130" cy="28" rx="35" ry="18" fill="white" />
            <ellipse cx="200" cy="38" rx="42" ry="20" fill="white" />
            <ellipse cx="265" cy="32" rx="30" ry="16" fill="white" />
          </mask>
        </defs>
        <rect
          width="300"
          height="70"
          fill="url(#plf-map-dot)"
          mask="url(#plf-map-mask)"
          opacity="0.5"
        />
      </svg>
      <span className="absolute left-[16%] top-[44%] h-2 w-2 -translate-y-1/2 rounded-full bg-[#8169FF] ring-4 ring-[#8169FF]/20" />
      <span className="absolute left-[42%] top-[38%] h-2 w-2 -translate-y-1/2 rounded-full bg-[#8169FF] ring-4 ring-[#8169FF]/20" />
      <span className="absolute left-[64%] top-[54%] h-2 w-2 -translate-y-1/2 rounded-full bg-[#8169FF] ring-4 ring-[#8169FF]/20" />
      <span className="absolute left-[85%] top-[44%] h-2 w-2 -translate-y-1/2 rounded-full bg-[#8169FF] ring-4 ring-[#8169FF]/20" />
    </div>
  );
}

function ComplianceBadges() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="inline-flex items-center gap-1.5 rounded-md bg-[#F5F0FF] px-2.5 py-1.5 font-heading text-[10px] font-extrabold text-[#5a3fdb]">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8169FF]/20">
          <ShieldCheck className="h-3 w-3 text-[#8169FF]" />
        </span>
        PCI-DSS
      </span>
      <span className="inline-flex items-center rounded-md bg-[#F5F0FF] px-2.5 py-1.5 font-heading text-[10px] font-extrabold text-[#5a3fdb]">
        ISO 27001
      </span>
      <span className="inline-flex items-center rounded-md bg-[#F5F0FF] px-2.5 py-1.5 font-heading text-[10px] font-extrabold text-[#5a3fdb]">
        PSP PARTNER COMPLIANCE
      </span>
    </div>
  );
}
