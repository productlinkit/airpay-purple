import {
  Receipt,
  ShieldCheck,
  Network,
  Landmark,
  FilePlus2,
  Send,
  Activity,
  CheckCircle2,
  Globe,
  Gauge,
  BarChart3,
  ChevronRight,
  Smartphone,
  Wallet,
  CreditCard,
  Banknote,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const payInSteps: Step[] = [
  {
    icon: Receipt,
    title: "Customer Initiates Payment",
    description:
      "Customer selects preferred payment method (QRIS, e-wallets, virtual accounts, cards, bank transfer, etc.).",
  },
  {
    icon: ShieldCheck,
    title: "Authentication & Authorization",
    description:
      "Payment details are securely validated through 3DS, OTP, or wallet authentication as required by the rail.",
  },
  {
    icon: Network,
    title: "Transaction Processing",
    description:
      "Airpay routes the transaction through the optimal network for real-time processing and fraud screening.",
  },
  {
    icon: Landmark,
    title: "Settlement & Reconciliation",
    description:
      "Funds are settled to your account. Airpay reconciles transactions with full visibility and reporting.",
  },
];

const payoutSteps: Step[] = [
  {
    icon: FilePlus2,
    title: "Create Payout",
    description:
      "Initiate single or bulk payouts via Airpay dashboard, API, or file upload with recipient details.",
  },
  {
    icon: ShieldCheck,
    title: "Validation & Compliance Check",
    description:
      "Airpay validates account details and performs compliance and risk screening.",
  },
  {
    icon: Send,
    title: "Payout Execution",
    description:
      "Funds are sent to recipients via local bank rails, e-wallets, or alternative payout networks.",
  },
  {
    icon: Activity,
    title: "Confirmation & Tracking",
    description:
      "Track payout status in real time with detailed reports and webhook notifications.",
  },
];

const trustFeatures: { icon: LucideIcon; title: string; subtitle: string }[] = [
  {
    icon: Globe,
    title: "Global Coverage",
    subtitle: "Local payment methods across multiple markets",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    subtitle: "PCI-DSS certified with advanced fraud protection",
  },
  {
    icon: Gauge,
    title: "High Performance",
    subtitle: "Optimized routing for higher success rates",
  },
  {
    icon: BarChart3,
    title: "Real-Time Visibility",
    subtitle: "End-to-end tracking and reconciliation",
  },
];

export function DigitalPaymentsFlow() {
  return (
    <section className="mt-4 px-4 sm:px-6 lg:mt-6 lg:px-20">
      <ScrollReveal>
        <div className="rounded-[24px] bg-[#F5F5F7] p-5 sm:p-8 lg:rounded-[30px] lg:p-10">
          {/* Pay-In flow */}
          <FlowRow
            badge="Payment In Flow"
            title="Seamless Payment Collection"
            description="Enable frictionless payment experiences with a wide range of local payment methods across global markets."
            sideBadges={
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <BrandPill>QRIS</BrandPill>
                <BrandPill>
                  <Smartphone className="mr-1 h-3 w-3" /> e-Wallet
                </BrandPill>
                <BrandPill>
                  <Wallet className="mr-1 h-3 w-3" /> VIRTUAL ACCOUNT
                </BrandPill>
                <BrandPill>
                  <CreditCard className="mr-1 h-3 w-3" /> VISA
                </BrandPill>
                <BrandPill>
                  <CreditCard className="mr-1 h-3 w-3" /> Mastercard
                </BrandPill>
              </div>
            }
            steps={payInSteps}
            successLabel="Payment Successful"
            successColor="purple"
          />

          {/* Divider */}
          <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-[#8169FF]/20 to-transparent sm:my-10 lg:my-12" />

          {/* Disbursement flow */}
          <FlowRow
            badge="Disbursement Flow"
            title="Reliable Disbursement at Scale"
            description="Disburse funds to recipients seamlessly through our connected payout network across multiple markets."
            sideBadges={
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <BrandPill>
                  <Landmark className="mr-1 h-3 w-3" /> BANK TRANSFER
                </BrandPill>
                <BrandPill>
                  <Wallet className="mr-1 h-3 w-3" /> E-WALLET
                </BrandPill>
                <BrandPill>
                  <Banknote className="mr-1 h-3 w-3" /> MOBILE MONEY
                </BrandPill>
              </div>
            }
            steps={payoutSteps}
            successLabel="Disbursement Successful"
            successColor="purple"
          />

          {/* Trust strip */}
          <div className="mt-8 rounded-2xl bg-white p-5 sm:mt-10 sm:p-6 lg:mt-12 lg:p-7">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {trustFeatures.map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#8169FF]/12 text-[#8169FF]">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div className="leading-tight">
                    <div className="font-heading text-[13px] font-extrabold text-[#5a3fdb] sm:text-[14px]">
                      {f.title}
                    </div>
                    <div className="mt-1 text-[11px] leading-snug text-[#515A5E] sm:text-[12px]">
                      {f.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function FlowRow({
  badge,
  title,
  description,
  sideBadges,
  steps,
  successLabel,
  successColor,
}: {
  badge: string;
  title: string;
  description: string;
  sideBadges: React.ReactNode;
  steps: Step[];
  successLabel: string;
  successColor: "emerald" | "purple";
}) {
  const successRing =
    successColor === "emerald" ? "bg-[#22C55E]/15" : "bg-[#8169FF]/15";
  const successCheck =
    successColor === "emerald" ? "text-[#22C55E]" : "text-[#8169FF]";
  const successText =
    successColor === "emerald" ? "text-[#16A34A]" : "text-[#5a3fdb]";

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr] lg:gap-8 xl:grid-cols-[300px_1fr]">
      {/* Left column — heading */}
      <div className="flex flex-col">
        <span className="inline-flex w-fit items-center rounded-full bg-[#8169FF]/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#5a3fdb] sm:text-[11px]">
          {badge}
        </span>
        <h3 className="mt-3 font-heading text-[22px] font-extrabold leading-[1.15] text-black sm:text-[26px] lg:text-[30px]">
          {title}
        </h3>
        <p className="mt-3 max-w-[300px] text-[13px] leading-relaxed text-[#515A5E] sm:text-[14px]">
          {description}
        </p>
        {sideBadges}
      </div>

      {/* Right column — flow */}
      <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-4 lg:flex lg:flex-row lg:items-stretch lg:gap-2">
        {steps.map((s, i) => (
          <FlowFragment key={s.title}>
            <article className="relative flex h-full flex-1 flex-col rounded-2xl bg-white p-4 shadow-[0_6px_18px_rgba(80,60,180,0.06)] sm:p-5">
              {/* Number badge */}
              <span className="absolute -top-3 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#8169FF] to-[#A486FF] font-heading text-[12px] font-extrabold text-white shadow-[0_6px_14px_rgba(128,105,255,0.35)]">
                {i + 1}
              </span>

              {/* Icon */}
              <div className="mt-3 flex justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#8169FF]/10 text-[#8169FF]">
                  <s.icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
              </div>

              <h4 className="mt-3 text-center font-heading text-[13px] font-extrabold leading-tight text-black sm:text-[14px]">
                {s.title}
              </h4>
              <p className="mt-2 text-center text-[11px] leading-snug text-[#515A5E] sm:text-[12px]">
                {s.description}
              </p>
            </article>

            {/* Connector arrow between cards (lg only) */}
            {i < steps.length - 1 && (
              <div className="hidden flex-shrink-0 items-center justify-center lg:flex">
                <ChevronRight className="h-5 w-5 text-[#8169FF]/60" strokeWidth={2.5} />
              </div>
            )}
          </FlowFragment>
        ))}

        {/* Final arrow before success (lg only) */}
        <div className="hidden flex-shrink-0 items-center justify-center lg:flex">
          <ChevronRight className="h-5 w-5 text-[#8169FF]/60" strokeWidth={2.5} />
        </div>

        {/* Success indicator */}
        <div className="flex flex-shrink-0 flex-col items-center justify-center sm:col-span-2 lg:w-[110px]">
          <span className={`flex h-14 w-14 items-center justify-center rounded-full ${successRing} sm:h-16 sm:w-16`}>
            <CheckCircle2 className={`h-8 w-8 ${successCheck} sm:h-9 sm:w-9`} strokeWidth={2.5} />
          </span>
          <span className={`mt-2 text-center font-heading text-[12px] font-extrabold leading-tight ${successText} sm:text-[13px]`}>
            {successLabel}
          </span>
        </div>
      </div>
    </div>
  );
}

function FlowFragment({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function BrandPill({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 font-heading text-[10px] font-extrabold uppercase tracking-wider ${className ?? "bg-[#8169FF]/10 text-[#5a3fdb]"}`}>
      {children}
    </span>
  );
}
