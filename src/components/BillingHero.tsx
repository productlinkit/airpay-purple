import Link from "next/link";
import {
  RefreshCw,
  Link2,
  ShieldCheck,
  Globe,
  BarChart3,
  ArrowRight,
  Calendar,
  Copy,
  ChevronDown,
  CreditCard,
  Wallet,
  ScanLine,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const heroFeatures: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: RefreshCw,
    title: "Recurring Billing",
    description:
      "Automate subscriptions, retries, and renewals. Flexible cycles, proration, and dunning management.",
  },
  {
    icon: Link2,
    title: "Payment Link",
    description:
      "Create secure payment links in seconds. Share anywhere and get paid instantly.",
  },
];

const heroPills: { icon: LucideIcon; title: string; subtitle: string }[] = [
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    subtitle: "PCI-DSS compliant infrastructure",
  },
  {
    icon: Globe,
    title: "Global Reach",
    subtitle: "Multiple payment methods worldwide",
  },
  {
    icon: BarChart3,
    title: "Real-time Visibility",
    subtitle: "Track payments and reconciliation in one place",
  },
];

export function BillingHero() {
  return (
    <section className="px-4 pt-28 sm:px-6 sm:pt-32 lg:px-20">
      <ScrollReveal>
        <div
          className="relative overflow-hidden rounded-[24px] lg:rounded-[40px]"
          style={{
            background: "linear-gradient(135deg, #9EC6FE 0%, #A486FF 100%)",
          }}>
          <span className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
          <span className="pointer-events-none absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

          <div className="relative p-6 sm:p-10 lg:p-14">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
              {/* LEFT — copy + feature cards + pills */}
              <div className="flex flex-col">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-black backdrop-blur-sm sm:px-4 sm:text-[11px]">
                  <Calendar className="h-3.5 w-3.5" />
                  Recurring Billing &amp; Payment Link
                </div>

                <h1 className="mt-4 font-heading text-[32px] font-extrabold leading-[1.05] text-black sm:mt-5 sm:text-[44px] lg:text-[56px]">
                  Recurring Billing
                  <br />
                  &amp; Payment Link
                </h1>

                <p className="mt-4 text-[16px] font-semibold text-black sm:text-[18px]">
                  Flexible payments. Seamless collections.
                </p>

                <p className="mt-3 max-w-[520px] text-[13px] leading-relaxed text-[#1f2230] sm:text-[15px]">
                  Automate recurring payments and collect one-time payments
                  easily with AirPay. Built for subscriptions, invoices, and
                  modern digital businesses.
                </p>

                {/* Feature cards */}
                <ul className="mt-6 space-y-3 sm:mt-7">
                  {heroFeatures.map((f) => (
                    <li
                      key={f.title}
                      className="flex gap-3 rounded-2xl bg-white/55 p-4 backdrop-blur-sm">
                      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#8169FF] text-white shadow-[0_8px_18px_rgba(80,60,180,0.30)]">
                        <f.icon className="h-5 w-5" />
                      </span>
                      <div className="leading-tight">
                        <h3 className="font-heading text-[14px] font-extrabold text-black sm:text-[15px]">
                          {f.title}
                        </h3>
                        <p className="mt-1 text-[12px] leading-snug text-[#1f2230] sm:text-[13px]">
                          {f.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Small pills row */}
                <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
                  {heroPills.map((p) => (
                    <div
                      key={p.title}
                      className="flex items-start gap-2 rounded-xl bg-white/40 px-3 py-2 backdrop-blur-sm">
                      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-[#8169FF]/20 text-[#5a3fdb]">
                        <p.icon className="h-3.5 w-3.5" />
                      </span>
                      <div className="leading-tight">
                        <div className="font-heading text-[11px] font-extrabold text-black sm:text-[12px]">
                          {p.title}
                        </div>
                        <div className="mt-0.5 text-[10px] leading-snug text-[#1f2230]">
                          {p.subtitle}
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

              {/* RIGHT — mockups */}
              <div className="flex flex-col gap-4 sm:gap-5">
                <RecurringBillingMockup />
                <PaymentLinkMockup />
              </div>
            </div>

            {/* Trusted PSP Partners label */}
            <div className="mt-8 flex items-center gap-4 sm:mt-10">
              <span className="h-px flex-1 bg-black/15" />
              <span className="font-heading text-[12px] font-extrabold tracking-[0.08em] text-black sm:text-[14px]">
                Trusted PSP Partners
              </span>
              <span className="h-px flex-1 bg-black/15" />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

/* ─────────────────────── Recurring Billing mockup ─────────────────────── */

function RecurringBillingMockup() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1.6fr_1fr] sm:gap-4">
      <div className="rounded-2xl bg-white p-4 shadow-[0_14px_36px_rgba(80,60,180,0.18)] sm:p-5">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#8169FF]/15 text-[#8169FF]">
            <Calendar className="h-4 w-4" />
          </span>
          <div className="leading-tight">
            <div className="font-heading text-[13px] font-extrabold text-black">
              Recurring Billing
            </div>
            <div className="text-[10px] text-[#515A5E]">
              Automate subscriptions and recurring payments
            </div>
          </div>
        </div>

        <div className="mt-3 rounded-xl bg-[#FBFAFE] p-3">
          <div className="text-[11px] font-bold text-black">Subscriptions</div>
          <table className="mt-2 w-full text-[9px]">
            <thead>
              <tr className="text-left text-[#8B8FA6]">
                <th className="py-1 font-medium">Customer</th>
                <th className="py-1 font-medium">Plan</th>
                <th className="py-1 font-medium">Amount</th>
                <th className="hidden py-1 font-medium sm:table-cell">Status</th>
              </tr>
            </thead>
            <tbody className="text-black">
              <SubRow initials="AF" name="Alex Farrell" plan="Pro Monthly" amount="$29.00" />
              <SubRow initials="JT" name="Jane Thompson" plan="Business" amount="$99.00" />
              <SubRow initials="MC" name="Michael Chen" plan="Pro Monthly" amount="$29.00" />
              <SubRow initials="SP" name="Sarah Park" plan="Premium" amount="$199.00" />
            </tbody>
          </table>
        </div>

        <div className="mt-3 flex items-end justify-between gap-3 rounded-xl bg-[#FBFAFE] p-3">
          <div>
            <div className="text-[9px] font-semibold text-[#8B8FA6]">
              Success Rate
            </div>
            <div className="font-heading text-[16px] font-extrabold text-black">
              98.6%{" "}
              <span className="text-[10px] font-bold text-[#22C55E]">
                ↑ 12.4%
              </span>
            </div>
          </div>
          <div>
            <div className="text-[9px] font-semibold text-[#8B8FA6]">
              Total Volume
            </div>
            <div className="font-heading text-[14px] font-extrabold text-black">
              Rp. 2.540.000.000
            </div>
          </div>
          <svg viewBox="0 0 60 24" className="h-6 w-16">
            <polyline
              points="0,20 10,16 18,18 26,10 36,12 46,6 60,4"
              stroke="#8169FF"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Phone mockup */}
      <div className="relative mx-auto h-[260px] w-[150px] rounded-[28px] bg-black p-1.5 shadow-[0_18px_40px_rgba(80,60,180,0.30)] sm:h-[300px] sm:w-[170px]">
        <div className="absolute left-1/2 top-1 h-2 w-12 -translate-x-1/2 rounded-full bg-black" />
        <div className="h-full w-full overflow-hidden rounded-[22px] bg-white p-3">
          <div className="flex justify-between text-[8px] font-bold text-black">
            <span>9:41</span>
            <span>•••</span>
          </div>
          <div className="mt-3 rounded-xl bg-gradient-to-br from-[#8169FF] to-[#5a3fdb] p-2.5 text-white">
            <div className="text-[7px] font-semibold opacity-80">
              Your Subscription
            </div>
            <div className="mt-1 font-heading text-[11px] font-extrabold">
              Pro Monthly
            </div>
            <div className="font-heading text-[14px] font-extrabold">
              $28.00{" "}
              <span className="text-[7px] font-semibold opacity-80">/ month</span>
            </div>
          </div>
          <div className="mt-2 space-y-1.5">
            <div className="text-[7px] font-semibold text-[#8B8FA6]">
              Next billing
            </div>
            <div className="text-[9px] font-bold text-black">May 20, 2024</div>
            <div className="text-[7px] font-semibold text-[#8B8FA6]">
              Payment Method
            </div>
            <div className="flex items-center gap-1.5 rounded-md bg-[#FBFAFE] px-1.5 py-1">
              <CreditCard className="h-2.5 w-2.5 text-[#1A1F71]" />
              <span className="text-[8px] font-bold text-black">
                VISA •••• 4242
              </span>
              <ChevronDown className="ml-auto h-2 w-2 text-[#8B8FA6]" />
            </div>
          </div>
          <button className="mt-3 w-full rounded-full bg-[#8169FF] py-1.5 text-[8px] font-bold text-white">
            Manage Subscription
          </button>
          <div className="mt-2 text-center text-[6px] text-[#8B8FA6]">
            Secure payments powered by{" "}
            <span className="font-bold text-[#5a3fdb]">airpay</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubRow({
  initials,
  name,
  plan,
  amount,
}: {
  initials: string;
  name: string;
  plan: string;
  amount: string;
}) {
  return (
    <tr className="border-t border-[#F0EDFB]">
      <td className="py-1.5">
        <div className="flex items-center gap-1.5">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#8169FF]/20 font-heading text-[6px] font-extrabold text-[#5a3fdb]">
            {initials}
          </span>
          <span className="font-medium">{name}</span>
        </div>
      </td>
      <td className="py-1.5">{plan}</td>
      <td className="py-1.5 font-medium">{amount}</td>
      <td className="hidden py-1.5 sm:table-cell">
        <span className="rounded-full bg-[#22C55E]/15 px-1.5 py-0.5 text-[7px] font-bold text-[#16A34A]">
          Active
        </span>
      </td>
    </tr>
  );
}

/* ─────────────────────── Payment Link mockup ─────────────────────── */

function PaymentLinkMockup() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_1fr] sm:gap-4">
      {/* Payment Link generator card */}
      <div className="rounded-2xl bg-white p-4 shadow-[0_14px_36px_rgba(80,60,180,0.18)] sm:p-5">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#8169FF]/15 text-[#8169FF]">
            <Link2 className="h-4 w-4" />
          </span>
          <div className="leading-tight">
            <div className="font-heading text-[13px] font-extrabold text-black">
              Payment Link
            </div>
            <div className="text-[10px] text-[#515A5E]">
              Create and share payment links instantly
            </div>
          </div>
        </div>

        <div className="mt-3 space-y-2.5">
          <div>
            <div className="flex items-center gap-1.5 text-[9px] font-semibold text-[#8B8FA6]">
              Payment Link{" "}
              <span className="rounded-full bg-[#8169FF]/15 px-1.5 text-[7px] font-bold text-[#5a3fdb]">
                New
              </span>
            </div>
            <div className="mt-1 flex items-center gap-1 rounded-md bg-[#FBFAFE] px-2 py-1.5">
              <span className="flex-1 truncate text-[9px] font-medium text-black">
                https://pay.airpay.co/pay/PL_9F8H2K
              </span>
              <button className="inline-flex items-center gap-1 rounded-md bg-[#8169FF] px-2 py-0.5 text-[8px] font-bold text-white">
                <Copy className="h-2.5 w-2.5" /> Copy Link
              </button>
            </div>
          </div>

          <div>
            <div className="text-[9px] font-semibold text-[#8B8FA6]">
              Amount
            </div>
            <div className="mt-1 rounded-md bg-[#FBFAFE] px-2 py-1.5 text-[10px] font-bold text-black">
              Rp. 500.000
            </div>
          </div>

          <div>
            <div className="text-[9px] font-semibold text-[#8B8FA6]">
              Description
            </div>
            <div className="mt-1 rounded-md bg-[#FBFAFE] px-2 py-1.5 text-[10px] text-black">
              Premium Plan - Annual
            </div>
          </div>

          <div className="flex items-center justify-between gap-2">
            <div className="flex-1">
              <div className="text-[9px] font-semibold text-[#8B8FA6]">
                Expires
              </div>
              <div className="mt-1 flex items-center gap-1 rounded-md bg-[#FBFAFE] px-2 py-1.5 text-[9px] font-medium text-black">
                <Calendar className="h-2.5 w-2.5 text-[#8169FF]" />
                May 30, 2024
              </div>
            </div>
            <button className="flex-shrink-0 rounded-full bg-[#8169FF] px-4 py-2 text-[9px] font-bold text-white shadow-[0_6px_14px_rgba(128,105,255,0.35)]">
              Create Link
            </button>
          </div>
        </div>
      </div>

      {/* Browser checkout mockup */}
      <div className="rounded-2xl bg-white p-2.5 shadow-[0_14px_36px_rgba(80,60,180,0.18)] sm:p-3">
        {/* Browser top bar */}
        <div className="flex items-center gap-1.5 border-b border-[#F0EDFB] pb-2">
          <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
          <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
          <span className="h-2 w-2 rounded-full bg-[#28C840]" />
          <div className="ml-1.5 flex-1 truncate rounded-md bg-[#FBFAFE] px-1.5 py-0.5 text-[7px] text-[#515A5E]">
            🔒 pay.airpay.co/pay/PL_9F8H2K
          </div>
        </div>

        <div className="mt-2.5 px-1">
          <div className="font-heading text-[12px] font-extrabold text-black">
            AirPay Payment
          </div>
          <div className="text-[8px] text-[#515A5E]">Premium Plan - Annual</div>

          <div className="mt-2 font-heading text-[16px] font-extrabold text-black">
            Rp. 500.000
          </div>

          <div className="mt-3 text-[8px] font-semibold text-[#8B8FA6]">
            Choose your payment method
          </div>
          <div className="mt-1.5 space-y-1">
            <PayMethodRow icon={ScanLine} label="QRIS" />
            <PayMethodRow icon={Wallet} label="Virtual Account" trailing="VA" />
            <PayMethodRow icon={Wallet} label="E-Wallet" />
            <PayMethodRow icon={CreditCard} label="Credit / Debit Card" />
          </div>

          <div className="mt-2 text-center text-[6px] text-[#8B8FA6]">
            Secure payments powered by{" "}
            <span className="font-bold text-[#5a3fdb]">airpay</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PayMethodRow({
  icon: Icon,
  label,
  trailing,
}: {
  icon: LucideIcon;
  label: string;
  trailing?: string;
}) {
  return (
    <div className="flex items-center gap-1.5 rounded-md border border-[#F0EDFB] px-1.5 py-1">
      <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded bg-[#8169FF]/15 text-[#8169FF]">
        <Icon className="h-2.5 w-2.5" />
      </span>
      <span className="flex-1 text-[8px] font-semibold text-black">
        {label}
      </span>
      {trailing && (
        <span className="rounded bg-[#8169FF]/10 px-1 font-heading text-[7px] font-extrabold text-[#5a3fdb]">
          {trailing}
        </span>
      )}
    </div>
  );
}

