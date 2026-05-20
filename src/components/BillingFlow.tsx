import {
  FilePlus2,
  UserPlus,
  CreditCard,
  PieChart,
  Bell,
  BarChart2,
  FileText,
  Share2,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const rowOneSteps: Step[] = [
  {
    icon: FilePlus2,
    title: "Define plans & prices",
    description:
      "Create flexible pricing models, billing cycles, usage tiers, coupons, and tax rules.",
  },
  {
    icon: UserPlus,
    title: "Subscribe customers via API",
    description:
      "One API call to create, upgrade, downgrade, or cancel subscriptions.",
  },
  {
    icon: CreditCard,
    title: "Auto-charge & retry",
    description:
      "Airpay automatically charges customers on schedule. Smart retry recovers soft declines.",
  },
  {
    icon: PieChart,
    title: "Settle & reconcile",
    description:
      "Payments are settled and reconciled. Data flows into your finance stack.",
  },
];

const rowTwoSteps: Step[] = [
  {
    icon: Bell,
    title: "Dunning & notifications",
    description:
      "Automated email & in-app notifications keep your customers informed and reduce involuntary churn.",
  },
  {
    icon: BarChart2,
    title: "Usage & metering",
    description:
      "Track usage in real-time and bill accurately with flexible metering rules.",
  },
  {
    icon: FileText,
    title: "Invoicing (optional)",
    description:
      "Generate branded invoices automatically for record keeping and compliance.",
  },
  {
    icon: Share2,
    title: "Insights & reporting",
    description:
      "Real-time dashboards and reports to monitor MRR, churn, revenue, and collections.",
  },
];

export function BillingFlow() {
  return (
    <section className="mt-4 px-4 sm:px-6 lg:mt-6 lg:px-20">
      <ScrollReveal>
        <div className="rounded-[24px] bg-[#F5F5F7] p-6 sm:p-8 lg:rounded-[30px] lg:p-10">
          {/* Header */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#8169FF]/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider text-[#8169FF]">
              How it works
            </div>
            <h2 className="mt-4 font-heading text-[28px] font-extrabold text-black sm:text-[32px]">
              A simple flow, end-to-end.
            </h2>
            <p className="mt-2 max-w-[640px] text-[13px] leading-relaxed text-[#515A5E] sm:text-[14px]">
              From plan setup to revenue reconciliation — built for modern
              businesses.
            </p>
          </div>

          {/* Row 1 — steps 1–4 */}
          <FlowRow steps={rowOneSteps} startIndex={1} />

          {/* Continues divider */}
          <div className="my-6 flex items-center justify-center sm:my-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-[#8169FF]/30 sm:w-20" />
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#8169FF]/10 px-3 py-1 font-heading text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#5a3fdb] sm:px-4 sm:text-[10px]">
                <Sparkles className="h-3 w-3" />
                Continues: What Happens Next
              </span>
              <span className="h-px w-12 bg-[#8169FF]/30 sm:w-20" />
            </div>
          </div>

          {/* Row 2 — steps 5–8 + Revenue, optimized */}
          <FlowRow
            steps={rowTwoSteps}
            startIndex={5}
            finalCard={
              <RevenueOptimizedCard />
            }
          />
        </div>
      </ScrollReveal>
    </section>
  );
}

function FlowRow({
  steps,
  startIndex,
  finalCard,
}: {
  steps: Step[];
  startIndex: number;
  finalCard?: React.ReactNode;
}) {
  return (
    <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:grid sm:grid-cols-2 sm:gap-4 lg:mt-8 lg:flex lg:flex-row lg:items-stretch lg:gap-2">
      {steps.map((s, i) => (
        <FlowItem key={s.title}>
          <article className="relative flex h-full flex-1 flex-col rounded-2xl bg-white p-4 shadow-[0_6px_18px_rgba(80,60,180,0.06)] sm:p-5">
            <span className="absolute -top-3 left-4 flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#8169FF] to-[#A486FF] font-heading text-[12px] font-extrabold text-white shadow-[0_6px_14px_rgba(128,105,255,0.35)]">
              {startIndex + i}
            </span>

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

          {i < steps.length - 1 && (
            <div className="hidden flex-shrink-0 items-center justify-center lg:flex">
              <ChevronRight className="h-5 w-5 text-[#8169FF]/60" strokeWidth={2.5} />
            </div>
          )}
        </FlowItem>
      ))}

      {finalCard && (
        <>
          <div className="hidden flex-shrink-0 items-center justify-center lg:flex">
            <ChevronRight className="h-5 w-5 text-[#8169FF]/60" strokeWidth={2.5} />
          </div>
          <div className="sm:col-span-2 lg:col-span-1 lg:flex lg:flex-1">
            {finalCard}
          </div>
        </>
      )}
    </div>
  );
}

function FlowItem({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function RevenueOptimizedCard() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-[#8169FF] to-[#5a3fdb] p-5 text-white shadow-[0_14px_36px_rgba(80,60,180,0.30)] sm:p-6">
      <Sparkles className="absolute right-3 top-3 h-3.5 w-3.5 opacity-70" />
      <Sparkles className="absolute left-3 top-5 h-2.5 w-2.5 opacity-50" />
      <Sparkles className="absolute bottom-4 right-5 h-3 w-3 opacity-60" />

      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
        <CheckCircle2 className="h-8 w-8 text-white" strokeWidth={2.5} />
      </span>
      <h4 className="mt-3 text-center font-heading text-[15px] font-extrabold sm:text-[16px]">
        Revenue, optimized
      </h4>
      <p className="mt-2 text-center text-[11px] leading-snug text-white/85 sm:text-[12px]">
        Reliable recurring revenue with automation, less churn, and complete
        visibility.
      </p>
    </div>
  );
}
