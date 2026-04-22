import Image from "next/image";
import {
  CreditCard,
  ShieldCheck,
  Repeat,
  BellRing,
  PackageCheck,
  Building2,
  ShoppingBag,
  Gamepad2,
  Repeat2,
  Film,
  ArrowRight,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const steps = [
  {
    icon: CreditCard,
    title: "Customer Selects Payment Method",
    description:
      "Customer chooses their preferred payment method such as carrier billing, e-wallet, virtual account, or card.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment Authorization",
    description:
      "Payment is authenticated through OTP, SMS verification, or wallet authorization.",
  },
  {
    icon: Repeat,
    title: "Transaction Processing",
    description:
      "Airpay securely processes the payment through its integrated global payment infrastructure.",
  },
  {
    icon: BellRing,
    title: "Real-Time Confirmation",
    description:
      "Merchant and customer receive instant confirmation of the successful transaction.",
  },
  {
    icon: PackageCheck,
    title: "Service Delivery or Payout Execution",
    description:
      "Digital service is activated instantly or funds are transferred to the recipient.",
  },
];

const audiences = [
  { icon: Building2, label: "Fintech Platforms" },
  { icon: ShoppingBag, label: "Digital Marketplaces" },
  { icon: Gamepad2, label: "Gaming & Entertainment" },
  { icon: Repeat2, label: "Subscription & SaaS Businesses" },
  { icon: Film, label: "Streaming & Digital Media" },
];

export function NewsCTA() {
  return (
    <section className="mt-4 grid grid-cols-1 gap-4 px-4 sm:gap-6 sm:px-6 lg:mt-6 lg:grid-cols-3 lg:px-20">
      {/* How It Works card */}
      <ScrollReveal className="lg:col-span-2">
        <div className="h-full rounded-[24px] bg-[#F2F2F2] p-6 transition-all hover:shadow-xl sm:p-8 lg:rounded-[30px] lg:p-10">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#8169FF]/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider text-[#8169FF]">
            How It Works
          </div>
          <h2 className="mt-3 font-heading text-[28px] font-bold leading-[1.25] text-black">
            From checkout to settlement — DCB &amp; Digital Payment, one flow.
          </h2>

          <ol className="mt-8 space-y-5">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 80}>
                <li className="group flex gap-5 rounded-2xl bg-white p-5 transition-all hover:shadow-md hover:-translate-y-0.5">
                  <div className="relative flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#8169FF] to-[#A486FF] text-white transition-transform group-hover:scale-110">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white font-heading text-[12px] font-bold text-[#8169FF] shadow-[0_3px_8px_rgba(128,105,255,0.35)]">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-[16px] font-bold leading-snug text-black transition-colors group-hover:text-[#8169FF]">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-[14px] leading-relaxed text-[#515A5E]">
                      {step.description}
                    </p>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </ScrollReveal>

      {/* Who Airpay Is Built For */}
      <ScrollReveal delay={160} className="lg:col-span-1">
        <div className="relative flex h-full flex-col overflow-hidden rounded-[24px] bg-[#E4EEFA] p-6 transition-all hover:shadow-xl sm:p-8 lg:rounded-[30px] lg:p-10">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#8169FF]/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider text-[#8169FF]">
            Built For
          </div>
          <h2 className="mt-4 font-heading text-[26px] font-extrabold leading-[1.2] text-black">
            Who Airpay is built for
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#2b2f38]">
            Powering modern businesses with flexible infrastructure for
            payments, payouts, and carrier billing.
          </p>

          <ul className="mt-6 space-y-2.5">
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

          {/* Bottom illustration — enlarged & top-cropped */}
          <div className="relative mt-auto h-[180px] w-full overflow-hidden">
            <Image
              src="/images/illustration/illustration07.webp"
              alt="Airpay infrastructure"
              width={520}
              height={520}
              className="absolute left-1/2 top-0 -translate-x-1/2 h-auto w-[460px] max-w-none drop-shadow-[0_12px_30px_rgba(80,60,180,0.18)]"
            />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
