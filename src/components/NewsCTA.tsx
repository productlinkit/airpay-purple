import Image from "next/image";
import {
  RadioTower,
  CreditCard,
  User as UserIcon,
  Smartphone,
  Wallet,
  ShieldCheck,
  Network,
  Globe,
  Lock,
  TrendingUp,
  Building2,
  ShoppingBag,
  Gamepad2,
  Repeat2,
  Film,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const dcbSteps: Step[] = [
  {
    icon: UserIcon,
    title: "User selects mobile billing",
    description: "Customer chooses to pay using their mobile balance.",
  },
  {
    icon: RadioTower,
    title: "Airpay connects to telco",
    description: "We securely connect and validate with the mobile operator.",
  },
  {
    icon: Smartphone,
    title: "Charged to mobile balance",
    description: "The amount is charged directly to the user's mobile balance.",
  },
  {
    icon: Wallet,
    title: "Settlement to merchant",
    description: "Payment is settled to the merchant securely.",
  },
];

const digitalSteps: Step[] = [
  {
    icon: UserIcon,
    title: "User selects payment method",
    description: "Customer chooses their preferred payment method.",
  },
  {
    icon: Network,
    title: "Airpay routes to channel",
    description: "We route the payment to the best available channel.",
  },
  {
    icon: ShieldCheck,
    title: "Payment processed",
    description: "The payment is authorized and processed successfully.",
  },
  {
    icon: Wallet,
    title: "Settlement to merchant",
    description: "Funds are settled to the merchant quickly and securely.",
  },
];

const features: { icon: LucideIcon; title: string; subtitle: string }[] = [
  {
    icon: Lock,
    title: "One Integration",
    subtitle: "Access DCB and 100+ payment methods",
  },
  {
    icon: Globe,
    title: "Global Reach",
    subtitle: "Connect to telcos and payment channels worldwide",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    subtitle: "Bank-grade security and 99.9% uptime",
  },
  {
    icon: TrendingUp,
    title: "Higher Success Rate",
    subtitle: "Smart routing for better approval rates",
  },
];

const audiences = [
  { icon: Building2, label: "Fintech Platforms" },
  { icon: ShoppingBag, label: "Digital Marketplaces" },
  { icon: Gamepad2, label: "Gaming & Entertainment" },
  { icon: Film, label: "Streaming & Digital Media" },
];

export function NewsCTA() {
  return (
    <section className="mt-4 grid grid-cols-1 gap-4 px-3 sm:gap-6 sm:px-6 lg:mt-6 lg:grid-cols-3 lg:px-20">
      {/* How It Works card */}
      <ScrollReveal className="lg:col-span-2">
        <div className="h-full rounded-[20px] bg-[#F5F5F7] p-5 sm:rounded-[24px] sm:p-8 lg:rounded-[30px] lg:p-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#8169FF]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8169FF] sm:px-4 sm:py-1.5 sm:text-[12px]">
            How It Works
          </div>
          <h2 className="mt-3 font-heading text-[22px] font-extrabold leading-[1.15] text-black sm:mt-4 sm:text-[32px] lg:text-[36px]">
            From checkout to settlement —<br />
            DCB &amp; Digital Payment,{" "}
            <span className="bg-gradient-to-r from-[#7E5BFF] via-[#9F7CFF] to-[#B47BFF] bg-clip-text text-transparent">
              one flow.
            </span>
          </h2>
          <p className="mt-2 max-w-[560px] text-[13px] leading-relaxed text-[#515A5E] sm:mt-3 sm:text-[15px]">
            Airpay simplifies payments with two powerful solutions through a
            single integration.
          </p>

          {/* Two flow columns */}
          <div className="mt-5 grid grid-cols-1 gap-4 sm:mt-7 lg:mt-8 lg:grid-cols-2 lg:gap-5">
            <ScrollReveal>
              <FlowColumn
                accent="purple"
                headerIcon={RadioTower}
                title="Direct Carrier Billing (DCB)"
                subtitle="Let users pay using their mobile balance."
                steps={dcbSteps}
              />
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <FlowColumn
                accent="pink"
                headerIcon={CreditCard}
                title="Digital Payment"
                subtitle="Accept payments via multiple methods and channels."
                steps={digitalSteps}
              />
            </ScrollReveal>
          </div>

          {/* Feature pills */}
          <div className="mt-4 grid grid-cols-1 gap-4 rounded-[16px] bg-white p-4 sm:mt-5 sm:grid-cols-2 sm:rounded-[20px] sm:p-6 lg:mt-6 lg:grid-cols-4 lg:gap-4 lg:p-6">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#8169FF]/12 text-[#8169FF]">
                  <f.icon className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <div className="font-heading text-[14px] font-bold text-black">
                    {f.title}
                  </div>
                  <div className="mt-1 text-[12px] leading-snug text-[#515A5E]">
                    {f.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Who Airpay Is Built For */}
      <ScrollReveal delay={160} className="lg:col-span-1">
        <div className="relative flex h-full flex-col overflow-hidden rounded-[20px] bg-[#E4EEFA] p-5 transition-all hover:shadow-xl sm:rounded-[24px] sm:p-8 lg:rounded-[30px] lg:p-10">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#8169FF]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8169FF] sm:px-4 sm:py-1.5 sm:text-[12px]">
            Built For
          </div>
          <h2 className="mt-3 font-heading text-[22px] font-extrabold leading-[1.2] text-black sm:mt-4 sm:text-[26px]">
            Who Airpay is built for
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-[#2b2f38] sm:mt-3 sm:text-[15px]">
            Powering modern businesses with flexible infrastructure for
            payments, payouts, and carrier billing.
          </p>

          <ul className="mt-5 space-y-2.5 sm:mt-6">
            {audiences.map((a, i) => (
              <ScrollReveal key={a.label} delay={i * 60}>
                <li className="group flex items-center gap-3 rounded-2xl bg-white px-4 py-3 transition-all hover:bg-[#8169FF] hover:text-white hover:scale-[1.02] hover:shadow-md">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#A486FF]/15 text-[#8169FF] transition-colors group-hover:bg-white/25 group-hover:text-white">
                    <a.icon className="h-4 w-4" />
                  </span>
                  <span className="text-[14px] font-semibold text-black transition-colors group-hover:text-white">
                    {a.label}
                  </span>
                  <ArrowRight className="ml-auto h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                </li>
              </ScrollReveal>
            ))}
          </ul>

          {/* Bottom illustration — enlarged & pulled up */}
          <div className="relative mt-4 h-[260px] w-full overflow-hidden rounded-[24px] sm:mt-6 sm:h-[300px] sm:rounded-[28px] lg:h-[340px] lg:rounded-[32px]">
            <Image
              src="/images/photos/payment-photo.webp"
              alt="Airpay infrastructure"
              width={640}
              height={640}
              className="absolute left-1/2 top-0 h-auto w-[360px] max-w-none -translate-x-1/2 drop-shadow-[0_12px_30px_rgba(80,60,180,0.18)] sm:w-[440px] lg:w-[560px]"
            />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function FlowColumn({
  accent,
  headerIcon: HeaderIcon,
  title,
  subtitle,
  steps,
}: {
  accent: "purple" | "pink";
  headerIcon: LucideIcon;
  title: string;
  subtitle: string;
  steps: Step[];
}) {
  const isPurple = accent === "purple";
  const accentText = isPurple ? "text-[#8169FF]" : "text-[#E64681]";
  const headerIconBg = isPurple ? "bg-[#8169FF]/12" : "bg-[#E64681]/12";
  const stepIconBg = isPurple ? "bg-[#8169FF]/10" : "bg-[#E64681]/10";
  const numberBg = isPurple ? "bg-[#8169FF]" : "bg-[#E64681]";
  const ringColor = isPurple ? "ring-[#8169FF]/15" : "ring-[#E64681]/15";
  const dotColor = isPurple ? "bg-[#8169FF]/30" : "bg-[#E64681]/30";

  return (
    <div
      className={`flex h-full flex-col rounded-[24px] bg-white p-5 ring-1 ${ringColor} sm:p-6`}>
      {/* Column header */}
      <div className="flex items-start gap-3">
        <span
          className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl ${headerIconBg} ${accentText}`}>
          <HeaderIcon className="h-5 w-5" />
        </span>
        <div>
          <h3
            className={`font-heading text-[16px] font-extrabold leading-tight ${accentText} sm:text-[18px]`}>
            {title}
          </h3>
          <p className="mt-1.5 text-[12px] leading-snug text-[#515A5E] sm:text-[13px]">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Steps */}
      <ol className="mt-5 space-y-2.5">
        {steps.map((step, i) => (
          <li key={step.title} className="relative flex items-start gap-3">
            {/* Step icon column with vertical dotted connector */}
            <div className="flex flex-col items-center">
              <span
                className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl ${stepIconBg} ${accentText}`}>
                <step.icon className="h-4 w-4" />
              </span>
              {i < steps.length - 1 && (
                <span
                  className={`my-1 h-3 w-px border-l-2 border-dashed ${dotColor.replace("bg-", "border-")}`}
                />
              )}
            </div>

            {/* Step body */}
            <div className="flex-1 rounded-2xl bg-[#F8F8FB] p-3.5 transition-all hover:bg-white hover:shadow-md">
              <div className="flex items-center gap-2">
                <span
                  className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${numberBg} font-heading text-[10px] font-bold text-white`}>
                  {i + 1}
                </span>
                <h4 className="font-heading text-[13px] font-bold leading-tight text-black sm:text-[14px]">
                  {step.title}
                </h4>
              </div>
              <p className="mt-1.5 text-[11px] leading-snug text-[#515A5E] sm:text-[12px]">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
