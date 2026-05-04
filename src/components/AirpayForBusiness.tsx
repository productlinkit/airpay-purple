import Link from "next/link";
import {
  Globe,
  ShieldCheck,
  Zap,
  Layers,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const bullets: { icon: LucideIcon; label: string }[] = [
  {
    icon: Layers,
    label: "100+ payment channels through one unified API",
  },
  {
    icon: Globe,
    label: "Trusted by 1,000+ merchants across 20+ countries",
  },
  {
    icon: ShieldCheck,
    label: "Bank-grade security with smart routing for higher approval",
  },
  {
    icon: Zap,
    label: "Quick onboarding with developer-ready SDKs",
  },
];

export function AirpayForBusiness() {
  return (
    <section className="mt-4 px-3 sm:px-6 lg:mt-6 lg:px-20">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-[20px] bg-white p-6 sm:rounded-[24px] sm:p-10 lg:rounded-[30px] lg:p-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
            {/* Left: copy */}
            <div className="flex flex-col">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#8169FF]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8169FF] sm:px-4 sm:py-1.5 sm:text-[12px]">
                Airpay Business
              </div>
              <h2 className="mt-4 font-heading text-[28px] font-extrabold leading-[1.15] text-black sm:text-[36px] lg:text-[44px]">
                One Payment Platform
                <br />
                <span className="bg-gradient-to-r from-[#7E5BFF] via-[#9F7CFF] to-[#B47BFF] bg-clip-text text-transparent">
                  For Your Business
                </span>
              </h2>
              <p className="mt-4 max-w-[520px] text-[14px] leading-relaxed text-[#515A5E] sm:text-[15px] lg:text-[16px]">
                Airpay powers digital payments for fintechs, marketplaces,
                gaming, streaming, and SaaS businesses — DCB, e-wallets, bank
                transfers, QR, cards, and more, all through a single
                integration.
              </p>

              <ul className="mt-7 space-y-4">
                {bullets.map((b) => (
                  <li key={b.label} className="flex items-center gap-3">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-[#8169FF]/12 text-[#8169FF]">
                      <b.icon className="h-5 w-5" />
                    </span>
                    <span className="text-[14px] font-medium text-[#1f2230] sm:text-[15px]">
                      {b.label}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#8169FF] px-8 py-3 text-[14px] font-bold text-white transition-all hover:bg-[#6952e6] hover:scale-105 hover:shadow-[0_10px_28px_rgba(128,105,255,0.4)] sm:px-10 sm:py-3.5 sm:text-[15px]"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>

            {/* Right: payment-flow illustration */}
            <PaymentFlowIllustration />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function PaymentFlowIllustration() {
  return (
    <div className="relative mx-auto h-[360px] w-full max-w-[520px] sm:h-[420px] lg:h-[480px]">
      {/* Layered purple shape backdrops */}
      <div className="absolute right-[6%] top-[4%] h-[78%] w-[78%] rotate-[12deg] rounded-[56px] bg-gradient-to-br from-[#8169FF] to-[#A486FF]" />
      <div className="absolute right-[16%] top-[10%] h-[78%] w-[78%] -rotate-[6deg] rounded-[56px] bg-gradient-to-br from-[#9F7CFF] to-[#C9B6FF]" />

      {/* Left card — Payment Confirmation */}
      <div className="absolute left-0 top-[12%] z-10 w-[58%] rounded-[20px] bg-white p-4 shadow-[0_18px_40px_rgba(80,60,180,0.25)] sm:p-5">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#8169FF] sm:text-[11px]">
          <span className="flex h-2 w-2 rounded-full bg-[#22C55E]" />
          Transaction Successful
        </div>

        <div className="mt-4 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#22C55E]/12 sm:h-16 sm:w-16">
            <CheckCircle2 className="h-8 w-8 text-[#22C55E] sm:h-9 sm:w-9" strokeWidth={2.5} />
          </div>
        </div>

        <div className="mt-3 text-center">
          <div className="font-heading text-[18px] font-extrabold text-black sm:text-[20px]">
            Rp. 200.000
          </div>
          <div className="mt-0.5 text-[10px] text-[#515A5E] sm:text-[11px]">
            Paid via BCA Virtual Account
          </div>
        </div>

        <div className="mt-4 space-y-1.5 text-[10px] sm:text-[11px]">
          <div className="flex justify-between text-[#515A5E]">
            <span>Reference</span>
            <span className="font-medium text-[#1f2230]">AP-9F2C81</span>
          </div>
          <div className="flex justify-between text-[#515A5E]">
            <span>Channel</span>
            <span className="font-medium text-[#1f2230]">Virtual Account</span>
          </div>
          <div className="flex justify-between text-[#515A5E]">
            <span>Settlement</span>
            <span className="font-medium text-[#22C55E]">T+0</span>
          </div>
        </div>

        <button
          type="button"
          className="mt-4 w-full rounded-full bg-[#1f2230] py-2 text-[10px] font-bold uppercase tracking-wider text-white sm:py-2.5 sm:text-[11px]"
        >
          View Receipt
        </button>
      </div>

      {/* Right card — Payment Method */}
      <div className="absolute right-0 top-[26%] z-20 w-[52%] rounded-[20px] bg-white p-4 shadow-[0_18px_40px_rgba(80,60,180,0.3)] sm:p-5">
        <div className="flex items-center justify-end">
          <div className="text-right leading-tight">
            <div className="font-heading text-[14px] font-extrabold text-black sm:text-[16px]">
              MERCHANT
            </div>
            <div className="font-heading text-[10px] font-bold tracking-[0.18em] text-[#8169FF] sm:text-[11px]">
              CHECKOUT
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-[10px] sm:text-[11px]">
          <span className="text-[#515A5E]">Order Ref:</span>
          <span className="font-medium text-[#1f2230]">AP-2026050001</span>
        </div>

        <div className="mt-4 text-[12px] font-bold text-black sm:text-[13px]">
          Choose Your Payment Method
        </div>

        <div className="mt-3 space-y-1.5">
          <PaymentRow label="Direct Carrier Billing" brand="DCB" />
          <PaymentRow label="BCA Virtual Account" highlighted brand="BCA" />
          <PaymentRow label="GoPay E-Wallet" brand="GoPay" />
          <PaymentRow label="QRIS" expandable />
          <PaymentRow label="Credit / Debit Card" expandable />
        </div>

        <button
          type="button"
          className="mt-4 w-full rounded-full bg-[#8169FF] py-2 text-[11px] font-bold uppercase tracking-wider text-white shadow-[0_8px_18px_rgba(128,105,255,0.4)] sm:py-2.5 sm:text-[12px]"
        >
          Pay Rp. 200.000
        </button>
      </div>
    </div>
  );
}

function PaymentRow({
  label,
  brand,
  highlighted,
  expandable,
}: {
  label: string;
  brand?: string;
  highlighted?: boolean;
  expandable?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between rounded-lg px-2.5 py-1.5 text-[10px] sm:text-[11px] ${
        highlighted
          ? "border border-[#8169FF] bg-[#8169FF]/5"
          : "border border-transparent"
      }`}
    >
      <div className="flex items-center gap-2">
        {brand && (
          <span className="flex h-5 items-center justify-center rounded bg-[#8169FF]/12 px-1.5 font-heading text-[8px] font-extrabold text-[#8169FF] sm:text-[9px]">
            {brand}
          </span>
        )}
        <span className={highlighted ? "font-bold text-[#1f2230]" : "text-[#515A5E]"}>
          {label}
        </span>
      </div>
      {expandable ? (
        <span className="text-[#A486FF]">▾</span>
      ) : (
        <span className="text-[#A486FF]">›</span>
      )}
    </div>
  );
}
