import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  Globe,
  ShieldCheck,
  Rocket,
  Send,
  Wallet,
  ArrowRight,
  Bell,
  Key,
  FileText,
  Code2,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  extra?: React.ReactNode;
};

const features: Feature[] = [
  {
    icon: Code2,
    title: "85+ Payment Channels through one unified API",
    description:
      "Accept payments from e-wallets, virtual accounts, bank transfers, QRIS, cards, and more — all in one simple integration.",
  },
  {
    icon: Globe,
    title: "Trusted by 100+ Merchants across 15+ Countries",
    description:
      "Powering digital businesses, marketplaces, fintechs, and platforms across multiple industries and regions.",
    extra: <MapStrip />,
  },
  {
    icon: ShieldCheck,
    title: "Bank-Grade Security & PSP Partner Compliance",
    description:
      "Enterprise-grade security with smart routing, fraud protection, and full compliance with leading PSP partners.",
    extra: <ComplianceBadges />,
  },
  {
    icon: Rocket,
    title: "Quick Onboarding via Airpay Dashboard",
    description:
      "Self-serve onboarding, API key management, and developer-ready SDKs — everything you need to go live faster.",
    extra: <DashboardCta />,
  },
];

export function AirpayForBusiness() {
  return (
    <section className="mt-4 px-3 sm:px-6 lg:mt-6 lg:px-20">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-[20px] bg-white p-6 sm:rounded-[24px] sm:p-10 lg:rounded-[30px] lg:p-14">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
            {/* Left — hero copy + feature list */}
            <div className="flex flex-col">
              <Link href="/" className="inline-block w-fit transition-transform hover:scale-105">
                <Image
                  src="/images/airpay-logo.png"
                  alt="Airpay"
                  width={1000}
                  height={284}
                  className="h-auto w-[120px] sm:w-[140px]"
                />
              </Link>

              <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#8169FF]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#5a3fdb] sm:px-4 sm:py-1.5 sm:text-[11px]">
                Payments &amp; Disbursements Platform
              </div>

              <h2 className="mt-4 font-heading text-[26px] font-extrabold leading-[1.1] text-black sm:text-[36px] lg:text-[44px]">
                One Platform for
                <br />
                <span className="bg-gradient-to-r from-[#7E5BFF] via-[#9F7CFF] to-[#B47BFF] bg-clip-text text-transparent">
                  Payments &amp; Disbursements
                </span>
              </h2>

              <p className="mt-4 max-w-[520px] text-[14px] leading-relaxed text-[#515A5E] sm:text-[15px] lg:text-[16px]">
                Airpay powers business growth with a unified payment and
                disbursement infrastructure that&rsquo;s secure, reliable, and
                built for scale across global markets.
              </p>

              <ul className="mt-7 space-y-3 sm:mt-8 sm:space-y-4">
                {features.map((f, i) => (
                  <ScrollReveal key={f.title} delay={i * 80}>
                    <li className="flex gap-4 rounded-2xl bg-[#F5F0FF]/60 p-4 transition-all hover:bg-[#F5F0FF] sm:p-5">
                      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#8169FF]/15 text-[#8169FF]">
                        <f.icon className="h-5 w-5" />
                      </span>
                      <div className="flex-1 leading-tight">
                        <h3 className="font-heading text-[14px] font-extrabold leading-snug text-black sm:text-[15px]">
                          {f.title}
                        </h3>
                        <p className="mt-1.5 text-[12px] leading-relaxed text-[#515A5E] sm:text-[13px]">
                          {f.description}
                        </p>
                        {f.extra && <div className="mt-3">{f.extra}</div>}
                      </div>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </div>

            {/* Right — payments/disbursements summary + dashboard mockup */}
            <div className="flex flex-col gap-4 sm:gap-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                <SummaryCard
                  badge="Payments"
                  icon={Layers}
                  tagline="Accept payments globally"
                  metric="85+"
                  metricLabel="Payment Channel Options"
                  metricSub="through one unified API"
                />
                <SummaryCard
                  badge="Disbursements"
                  icon={Send}
                  tagline="Disburse to accounts globally"
                  copyTitle="Disburse to"
                  copyHighlight="Bank Account, VA Account and E-Wallet Account"
                  illustration={<DisbursementIllustration />}
                />
              </div>

              <DashboardMockup />
            </div>
          </div>

          {/* Trusted PSP Partners label */}
          <div className="mt-8 flex items-center gap-4 sm:mt-10 lg:mt-12">
            <span className="h-px flex-1 bg-[#8169FF]/20" />
            <span className="font-heading text-[12px] font-extrabold tracking-[0.08em] text-black sm:text-[14px]">
              Trusted PSP Partners
            </span>
            <span className="h-px flex-1 bg-[#8169FF]/20" />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

/* ──────────────────────── Sub-components ──────────────────────── */

function SummaryCard({
  badge,
  icon: Icon,
  tagline,
  metric,
  metricLabel,
  metricSub,
  copyTitle,
  copyHighlight,
  illustration,
}: {
  badge: string;
  icon: LucideIcon;
  tagline: string;
  metric?: string;
  metricLabel?: string;
  metricSub?: string;
  copyTitle?: string;
  copyHighlight?: string;
  illustration?: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F5F0FF] to-[#E2D8FF] p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#8169FF] text-white shadow-[0_6px_14px_rgba(128,105,255,0.35)]">
          <Icon className="h-4 w-4" />
        </span>
        <div className="leading-tight">
          <div className="font-heading text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5a3fdb]">
            {badge}
          </div>
          <div className="mt-0.5 text-[11px] text-[#515A5E]">{tagline}</div>
        </div>
      </div>

      {metric ? (
        <>
          <div className="mt-5 font-heading text-[40px] font-extrabold leading-none text-black sm:text-[48px]">
            {metric}
          </div>
          {metricLabel && (
            <div className="mt-2 font-heading text-[14px] font-bold text-black">
              {metricLabel}
            </div>
          )}
          {metricSub && (
            <div className="mt-0.5 text-[11px] text-[#515A5E]">{metricSub}</div>
          )}
        </>
      ) : (
        <>
          <div className="mt-5 font-heading text-[18px] font-extrabold leading-tight text-black sm:text-[20px]">
            {copyTitle}
          </div>
          {copyHighlight && (
            <div className="mt-1 font-heading text-[15px] font-extrabold leading-snug">
              <span className="bg-gradient-to-r from-[#7E5BFF] to-[#B47BFF] bg-clip-text text-transparent">
                {copyHighlight}
              </span>
            </div>
          )}
        </>
      )}

      {illustration && (
        <div className="pointer-events-none absolute -bottom-3 -right-3 opacity-90 sm:-bottom-4 sm:-right-2">
          {illustration}
        </div>
      )}
    </div>
  );
}

function DisbursementIllustration() {
  return (
    <div className="relative h-[80px] w-[80px] sm:h-[100px] sm:w-[100px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <Wallet className="h-12 w-12 text-[#8169FF] sm:h-14 sm:w-14" strokeWidth={1.6} />
      </div>
      {/* Floating coin dots */}
      <span className="absolute right-1 top-2 h-3 w-3 rounded-full bg-[#8169FF]/60" />
      <span className="absolute right-3 top-9 h-2 w-2 rounded-full bg-[#8169FF]/40" />
      <span className="absolute right-6 top-0 h-2.5 w-2.5 rounded-full bg-[#8169FF]/30" />
    </div>
  );
}

function MapStrip() {
  return (
    <div className="relative h-[64px] w-full overflow-hidden rounded-xl bg-white/60 sm:h-[72px]">
      <svg
        viewBox="0 0 400 80"
        className="absolute inset-0 h-full w-full opacity-90"
        fill="none"
        aria-hidden="true">
        <defs>
          <pattern id="map-dot" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#8169FF" />
          </pattern>
          <mask id="map-mask">
            <rect width="400" height="80" fill="black" />
            <ellipse cx="60" cy="35" rx="50" ry="22" fill="white" />
            <ellipse cx="160" cy="32" rx="45" ry="20" fill="white" />
            <ellipse cx="240" cy="40" rx="55" ry="25" fill="white" />
            <ellipse cx="330" cy="38" rx="45" ry="22" fill="white" />
          </mask>
        </defs>
        <rect width="400" height="80" fill="url(#map-dot)" mask="url(#map-mask)" opacity="0.55" />
      </svg>
      <span className="absolute left-[14%] top-[40%] h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#8169FF] ring-4 ring-[#8169FF]/20" />
      <span className="absolute left-[38%] top-[35%] h-2 w-2 -translate-y-1/2 rounded-full bg-[#8169FF] ring-4 ring-[#8169FF]/20" />
      <span className="absolute left-[60%] top-[50%] h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#8169FF] ring-4 ring-[#8169FF]/20" />
      <span className="absolute left-[82%] top-[42%] h-2 w-2 -translate-y-1/2 rounded-full bg-[#8169FF] ring-4 ring-[#8169FF]/20" />
    </div>
  );
}

function ComplianceBadges() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="inline-flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1.5 font-heading text-[10px] font-extrabold text-[#5a3fdb] shadow-sm">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8169FF]/15">
          <ShieldCheck className="h-3 w-3 text-[#8169FF]" />
        </span>
        PCI-DSS
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1.5 font-heading text-[10px] font-extrabold text-[#5a3fdb] shadow-sm">
        ISO 27001
        <span className="text-[8px] font-bold text-[#515A5E]">CERTIFIED</span>
      </span>
      <span className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 font-heading text-[10px] font-extrabold text-[#5a3fdb] shadow-sm">
        PSP PARTNER COMPLIANCE
      </span>
    </div>
  );
}

function DashboardCta() {
  return (
    <Link
      href="/contact"
      className="group inline-flex items-center gap-2 rounded-full bg-[#8169FF] px-5 py-2 text-[12px] font-bold text-white transition-all hover:scale-105 hover:shadow-[0_10px_28px_rgba(128,105,255,0.4)] sm:text-[13px]">
      Go to Dashboard
      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

/* ──────────────────────── Dashboard mockup ──────────────────────── */

function DashboardMockup() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_14px_36px_rgba(80,60,180,0.12)] ring-1 ring-[#8169FF]/10">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#F0EDFB] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#8169FF] to-[#A486FF] font-heading text-[12px] font-extrabold text-white">
            A
          </span>
          <span className="font-heading text-[13px] font-extrabold text-black sm:text-[14px]">
            Airpay Dashboard
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-1 rounded-md bg-[#F5F0FF] px-2 py-1 text-[9px] font-semibold text-[#5a3fdb] sm:inline-flex">
            This Month (May 1 – May 31)
          </span>
          <Bell className="h-3.5 w-3.5 text-[#8169FF]" />
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#8169FF] text-[10px] font-extrabold text-white">
            A
          </span>
        </div>
      </div>

      {/* Body — sidebar + content */}
      <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr]">
        {/* Sidebar */}
        <nav className="flex flex-col gap-0.5 border-r border-[#F0EDFB] p-2 sm:p-3">
          {[
            { label: "Overview", active: true },
            { label: "Transactions" },
            { label: "Settlements" },
            { label: "Disbursements" },
            { label: "Merchants" },
            { label: "Developers" },
            { label: "Settings" },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[9px] font-semibold sm:text-[10px] ${
                item.active
                  ? "bg-[#8169FF]/12 text-[#5a3fdb]"
                  : "text-[#515A5E]"
              }`}>
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  item.active ? "bg-[#8169FF]" : "bg-[#8169FF]/30"
                }`}
              />
              {item.label}
            </div>
          ))}
        </nav>

        {/* Content */}
        <div className="space-y-3 p-3 sm:p-4">
          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-2">
            <StatCard
              label="Total Transaction Volume"
              value="Rp. 12.540.000.000"
              delta="+18.6% vs last month"
              graph={<LineGraph />}
            />
            <StatCard
              label="Successful Transactions"
              value="98.7%"
              delta="Success Rate"
              graph={<DonutGraph />}
            />
            <StatCard
              label="Total Disbursement Volume"
              value="Rp. 8.340.000.000"
              delta="+22.4% vs last month"
              graph={<BarGraph />}
            />
          </div>

          {/* Recent transactions */}
          <div className="rounded-lg bg-[#FBFAFE] p-2.5 sm:p-3">
            <div className="mb-2 font-heading text-[10px] font-extrabold text-black">
              Recent Transactions
            </div>
            <table className="w-full text-[8px] sm:text-[9px]">
              <thead>
                <tr className="text-left text-[#515A5E]">
                  <th className="py-1 font-semibold">Transaction ID</th>
                  <th className="py-1 font-semibold">Type</th>
                  <th className="hidden py-1 font-semibold sm:table-cell">
                    Channel
                  </th>
                  <th className="py-1 font-semibold">Amount</th>
                  <th className="py-1 font-semibold">Status</th>
                  <th className="hidden py-1 font-semibold sm:table-cell">Date</th>
                </tr>
              </thead>
              <tbody className="text-black">
                <TxRow
                  id="TRX-20240520-001"
                  type="Payment"
                  channel="E-Wallet"
                  amount="Rp. 250.000"
                  status="Success"
                  date="20 May 2024 10:22"
                />
                <TxRow
                  id="TRX-20240520-002"
                  type="Payment"
                  channel="Virtual Account"
                  amount="Rp. 125.000"
                  status="Success"
                  date="20 May 2024 10:18"
                />
                <TxRow
                  id="TRX-20240520-003"
                  type="Payout"
                  channel="Bank Account"
                  amount="Rp. 1.000.000"
                  status="Success"
                  date="20 May 2024 10:15"
                />
                <TxRow
                  id="TRX-20240520-004"
                  type="Payout"
                  channel="E-Wallet"
                  amount="Rp. 75.000"
                  status="Pending"
                  date="20 May 2024 10:10"
                />
              </tbody>
            </table>
          </div>

          {/* Developer tools */}
          <div className="rounded-lg bg-[#FBFAFE] p-2.5 sm:p-3">
            <div className="mb-2 font-heading text-[10px] font-extrabold text-black">
              Developer Tools
            </div>
            <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-3">
              <DevToolRow icon={Key} title="API Keys" subtitle="Manage your API keys" />
              <DevToolRow icon={FileText} title="Documentation" subtitle="View API reference" />
              <DevToolRow icon={Code2} title="SDKs" subtitle="Download SDKs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  delta,
  graph,
}: {
  label: string;
  value: string;
  delta: string;
  graph: React.ReactNode;
}) {
  return (
    <div className="rounded-lg bg-[#FBFAFE] p-2 sm:p-2.5">
      <div className="text-[8px] font-semibold text-[#515A5E] sm:text-[9px]">
        {label}
      </div>
      <div className="mt-1 font-heading text-[10px] font-extrabold leading-tight text-black sm:text-[11px]">
        {value}
      </div>
      <div className="mt-0.5 text-[7px] font-semibold text-[#5a3fdb] sm:text-[8px]">
        {delta}
      </div>
      <div className="mt-1.5 h-8">{graph}</div>
    </div>
  );
}

function LineGraph() {
  return (
    <svg viewBox="0 0 80 32" className="h-full w-full" fill="none">
      <polyline
        points="0,24 12,18 22,22 32,14 44,16 56,8 68,12 80,6"
        stroke="#8169FF"
        strokeWidth="1.5"
        fill="none"
      />
      <polyline
        points="0,24 12,18 22,22 32,14 44,16 56,8 68,12 80,6 80,32 0,32"
        fill="#8169FF"
        opacity="0.12"
      />
    </svg>
  );
}

function DonutGraph() {
  return (
    <div className="flex h-full items-center justify-center">
      <svg viewBox="0 0 32 32" className="h-7 w-7">
        <circle cx="16" cy="16" r="12" stroke="#8169FF" strokeOpacity="0.15" strokeWidth="4" fill="none" />
        <circle
          cx="16"
          cy="16"
          r="12"
          stroke="#8169FF"
          strokeWidth="4"
          fill="none"
          strokeDasharray="74 75"
          strokeLinecap="round"
          transform="rotate(-90 16 16)"
        />
      </svg>
    </div>
  );
}

function BarGraph() {
  return (
    <div className="flex h-full items-end justify-around gap-0.5">
      {[40, 55, 35, 65, 50, 80, 60].map((h, i) => (
        <span
          key={i}
          className="w-1 rounded-t bg-[#8169FF]"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

function TxRow({
  id,
  type,
  channel,
  amount,
  status,
  date,
}: {
  id: string;
  type: string;
  channel: string;
  amount: string;
  status: "Success" | "Pending";
  date: string;
}) {
  const statusClass =
    status === "Success"
      ? "bg-[#8169FF]/15 text-[#5a3fdb]"
      : "bg-[#A486FF]/15 text-[#7E5BFF]";
  return (
    <tr className="border-t border-[#F0EDFB]">
      <td className="py-1.5 font-medium text-[#1f2230]">{id}</td>
      <td className="py-1.5 text-[#515A5E]">{type}</td>
      <td className="hidden py-1.5 text-[#515A5E] sm:table-cell">{channel}</td>
      <td className="py-1.5 font-medium text-[#1f2230]">{amount}</td>
      <td className="py-1.5">
        <span className={`rounded-full px-1.5 py-0.5 text-[7px] font-bold sm:text-[8px] ${statusClass}`}>
          {status}
        </span>
      </td>
      <td className="hidden py-1.5 text-[#515A5E] sm:table-cell">{date}</td>
    </tr>
  );
}

function DevToolRow({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-md bg-white p-1.5">
      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-[#8169FF]/15 text-[#8169FF]">
        <Icon className="h-3 w-3" />
      </span>
      <div className="flex-1 leading-tight">
        <div className="font-heading text-[9px] font-extrabold text-black sm:text-[10px]">
          {title}
        </div>
        <div className="text-[7px] text-[#515A5E] sm:text-[8px]">{subtitle}</div>
      </div>
      <ChevronRight className="h-2.5 w-2.5 text-[#8169FF]" />
    </div>
  );
}
