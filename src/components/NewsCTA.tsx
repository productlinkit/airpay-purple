import {
  RadioTower,
  User as UserIcon,
  Smartphone,
  Wallet,
  ShieldCheck,
  Building2,
  ShoppingBag,
  Gamepad2,
  Film,
  Lock,
  Send,
  FilePlus2,
  Shuffle,
  CheckCircle2,
  Landmark,
  Bell,
  BarChart3,
  Puzzle,
  Globe,
  TrendingUp,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type FlowRow = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  shield: string;
  steps: Step[];
};

const flowRows: FlowRow[] = [
  {
    icon: RadioTower,
    title: "Digital Carrier Billing (DCB)",
    subtitle: "Let users pay using their mobile balance.",
    shield:
      "Secure, fast, and seamless payments directly through mobile operators.",
    steps: [
      {
        icon: UserIcon,
        title: "User selects mobile billing",
        description: "Customer chooses to pay using their mobile balance.",
      },
      {
        icon: RadioTower,
        title: "Airpay connects to telco",
        description:
          "We securely connect and validate with the mobile operator.",
      },
      {
        icon: Smartphone,
        title: "Charged to mobile balance",
        description:
          "The amount is charged directly to the user’s mobile balance.",
      },
      {
        icon: CheckCircle2,
        title: "Payment confirmed",
        description: "Payment is authorized and confirmed in real-time.",
      },
      {
        icon: Landmark,
        title: "Settlement to merchant",
        description: "Payment is settled to the merchant securely and on time.",
      },
    ],
  },
  {
    icon: Wallet,
    title: "Digital Payment",
    subtitle: "Accept payments via multiple methods and channels.",
    shield: "All major payment methods. One integration. Global reach.",
    steps: [
      {
        icon: UserIcon,
        title: "User selects payment method",
        description: "Customer chooses their preferred payment method.",
      },
      {
        icon: Shuffle,
        title: "Airpay routes to channel",
        description: "We route the payment to the best available channel.",
      },
      {
        icon: Lock,
        title: "Payment processed",
        description: "The payment is authorized and processed securely.",
      },
      {
        icon: CheckCircle2,
        title: "Payment confirmed",
        description:
          "Transaction status is updated in real-time to your system.",
      },
      {
        icon: Landmark,
        title: "Settlement to merchant",
        description: "Funds are settled to the merchant quickly and securely.",
      },
    ],
  },
  {
    icon: Send,
    title: "Disbursement (Payout)",
    subtitle: "Send funds easily to bank accounts, e-wallets, and VA.",
    shield: "Reliable payouts with smart routing and real-time tracking.",
    steps: [
      {
        icon: FilePlus2,
        title: "Create payout",
        description:
          "Initiate payout via API or dashboard. Upload or input beneficiary details.",
      },
      {
        icon: Shuffle,
        title: "Airpay validates & routes",
        description:
          "We validate account/wallet details and route to the best channel.",
      },
      {
        icon: Send,
        title: "Funds disbursed",
        description: "Funds are sent to bank account, e-wallet, or VA.",
      },
      {
        icon: Bell,
        title: "Payout completed",
        description:
          "Beneficiary receives funds and status is updated in real-time.",
      },
      {
        icon: BarChart3,
        title: "Track & reconcile",
        description:
          "Monitor payout status, history, and reports in one dashboard.",
      },
    ],
  },
];

const features: { icon: LucideIcon; title: string; subtitle: string }[] = [
  {
    icon: Puzzle,
    title: "One Integration",
    subtitle:
      "Integrate once and access DCB, payments, and disbursements through a single API.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    subtitle:
      "Connect to 85+ payment channels, 100+ telcos, and banks across 15+ countries.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Compliant",
    subtitle:
      "Bank-grade security with PCI DSS compliance and end-to-end encryption.",
  },
  {
    icon: TrendingUp,
    title: "Higher Success",
    subtitle:
      "Smart routing and real-time monitoring for higher approval rates and fewer failures.",
  },
];

const audiences: { icon: LucideIcon; label: string; description: string }[] = [
  {
    icon: Building2,
    label: "Fintech & Digital Financial Services",
    description:
      "Enable scalable payment experiences, localized transactions, and seamless financial connectivity across emerging and global markets.",
  },
  {
    icon: Gamepad2,
    label: "Gaming, Entertainment & Interactive Platforms",
    description:
      "Maximize user reach and monetization through frictionless Digital Carrier Billing and localized digital payment experiences.",
  },
  {
    icon: Film,
    label: "Streaming, Subscription & Digital Content",
    description:
      "Deliver seamless recurring billing and optimized payment accessibility designed for mobile-first digital audiences.",
  },
  {
    icon: ShoppingBag,
    label: "Digital Commerce & Online Marketplaces",
    description:
      "Accelerate global expansion through connected payment ecosystems, alternative payment methods, and enterprise-grade transaction infrastructure.",
  },
];

export function NewsCTA() {
  return (
    <section className="mt-4 grid grid-cols-1 gap-4 px-3 sm:gap-6 sm:px-6 lg:mt-6 lg:px-20">
      {/* How It Works — full width */}
      <ScrollReveal>
        <div className="rounded-[20px] bg-[#F5F5F7] p-5 sm:rounded-[24px] sm:p-8 lg:rounded-[30px] lg:p-10">
          {/* Header */}
          <div className="text-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#8169FF]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8169FF] sm:px-4 sm:py-1.5 sm:text-[12px]">
              How It Works
            </div>
            <h2 className="mx-auto mt-3 max-w-[820px] font-heading text-[22px] font-extrabold leading-[1.15] text-black sm:mt-4 sm:text-[32px] lg:text-[40px]">
              From Checkout to Payout,
              <br className="hidden sm:block" />{" "}
              <span className="">One Unified Payment Ecosystem.</span>
            </h2>
            <p className="mx-auto mt-2 max-w-[680px] text-[13px] leading-relaxed text-[#515A5E] sm:mt-3 sm:text-[15px]">
              Airpay simplifies Digital Carrier Billing, payments,
              disbursements, and merchant operations through scalable
              infrastructure built for global commerce.
            </p>
          </div>

          {/* 3 flow rows */}
          <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
            {flowRows.map((row, i) => (
              <ScrollReveal key={row.title} delay={i * 100}>
                <FlowRowCard row={row} />
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom feature strip */}
          <div className="mt-6 rounded-2xl bg-white p-5 sm:mt-8 sm:p-6 lg:mt-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#8169FF]/15 text-[#8169FF]">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div className="leading-tight">
                    <div className="font-heading text-[13px] font-extrabold text-black sm:text-[14px]">
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

      {/* Who Airpay Is Built For — full width below */}
      <ScrollReveal delay={120}>
        <div className="relative flex flex-col overflow-hidden rounded-[20px] bg-[#E4EEFA] p-5 transition-all hover:shadow-xl sm:rounded-[24px] sm:p-8 lg:rounded-[30px] lg:p-10">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#8169FF]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8169FF] sm:px-4 sm:py-1.5 sm:text-[12px]">
            Built For
          </div>
          <h2 className="mt-3 max-w-[820px] font-heading text-[22px] font-extrabold leading-[1.2] text-black sm:mt-4 sm:text-[26px] lg:text-[30px]">
            From Checkout to Payout, One Unified Payment Ecosystem.
          </h2>
          <p className="mt-2 max-w-[820px] text-[13px] leading-relaxed text-[#2b2f38] sm:mt-3 sm:text-[15px]">
            Airpay simplifies Digital Carrier Billing, payments, disbursements,
            and merchant operations through scalable infrastructure built for
            global commerce.
          </p>

          <ul className="mt-5 grid gap-3 sm:mt-6 lg:grid-cols-2 lg:gap-4">
            {audiences.map((a, i) => (
              <ScrollReveal key={a.label} delay={i * 60}>
                <li className="h-full rounded-2xl bg-white p-4 transition-all hover:shadow-md sm:p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#A486FF]/15 text-[#8169FF]">
                      <a.icon className="h-4 w-4" />
                    </span>
                    <span className="text-[13px] font-semibold leading-snug text-black sm:text-[14px]">
                      {a.label}
                    </span>
                  </div>
                  <p className="mt-3 pl-[48px] text-[12px] leading-relaxed text-[#515A5E] sm:text-[13px]">
                    {a.description}
                  </p>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </ScrollReveal>
    </section>
  );
}

/* ─────────────────────── Flow Row ─────────────────────── */

function FlowRowCard({ row }: { row: FlowRow }) {
  return (
    <div className="rounded-[20px] bg-gradient-to-br from-[#F5F0FF] to-[#EDE5FF] p-4 sm:rounded-[24px] sm:p-5 lg:p-6">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[260px_1fr] lg:gap-5">
        {/* Left — summary */}
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#8169FF]/15 text-[#8169FF]">
              <row.icon className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <h3 className="font-heading text-[15px] font-extrabold text-[#5a3fdb] sm:text-[16px]">
                {row.title}
              </h3>
              <p className="mt-1 text-[12px] leading-snug text-[#1f2230] sm:text-[13px]">
                {row.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2 rounded-xl bg-white/65 px-3 py-2 backdrop-blur-sm">
            <ShieldCheck className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#8169FF]" />
            <p className="text-[11px] leading-snug text-[#515A5E] sm:text-[12px]">
              {row.shield}
            </p>
          </div>
        </div>

        {/* Right — 5 step cards */}
        <div className="flex flex-col gap-2 sm:grid sm:grid-cols-2 sm:gap-3 lg:flex lg:flex-row lg:items-stretch lg:gap-1.5 xl:gap-2">
          {row.steps.map((s, i) => (
            <FlowItem key={s.title}>
              <article className="relative flex h-full flex-1 flex-col items-center rounded-2xl bg-white p-3 shadow-[0_4px_12px_rgba(80,60,180,0.06)] sm:p-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#8169FF] to-[#A486FF] font-heading text-[10px] font-extrabold text-white shadow-[0_4px_10px_rgba(128,105,255,0.30)] sm:h-7 sm:w-7 sm:text-[11px]">
                  {i + 1}
                </span>
                <span className="mt-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#8169FF]/10 text-[#8169FF] sm:h-12 sm:w-12">
                  <s.icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.8} />
                </span>
                <h4 className="mt-2 text-center font-heading text-[11px] font-extrabold leading-tight text-black sm:text-[12px]">
                  {s.title}
                </h4>
                <p className="mt-1.5 text-center text-[10px] leading-snug text-[#515A5E] sm:text-[11px]">
                  {s.description}
                </p>
              </article>

              {i < row.steps.length - 1 && (
                <div className="hidden flex-shrink-0 items-center justify-center lg:flex">
                  <ChevronRight
                    className="h-4 w-4 text-[#8169FF]/60"
                    strokeWidth={2.5}
                  />
                </div>
              )}
            </FlowItem>
          ))}
        </div>
      </div>
    </div>
  );
}

function FlowItem({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
