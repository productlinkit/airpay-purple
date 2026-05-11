import {
  ShieldCheck,
  Lock,
  Landmark,
  Gauge,
  type LucideIcon,
} from "lucide-react";

interface WhyItem {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

const whyItems: WhyItem[] = [
  { icon: Landmark, title: "Bank Indonesia", subtitle: "Licensed" },
  { icon: Lock, title: "ISO 27001", subtitle: "Compliant" },
  { icon: ShieldCheck, title: "PCI DSS", subtitle: "Level 1 Verified" },
  { icon: Gauge, title: "Fast Integration", subtitle: "Unified Dashboard" },
];

interface WhyChooseCardProps {
  /** Number of columns in the inner grid on lg screens. */
  cols?: 2 | 4;
}

export function WhyChooseCard({ cols = 4 }: WhyChooseCardProps = {}) {
  return (
    <div className="flex h-full flex-col rounded-[24px] bg-[#F2F2F2] p-6 transition-all hover:shadow-xl sm:p-8 lg:rounded-[30px] lg:p-10">
      <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#8169FF]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#8169FF]">
        Why Choose
      </div>
      <h2 className="mt-3 font-heading text-[22px] font-bold leading-[1.25] text-black sm:text-[26px] lg:text-[32px]">
        Why choose <span className="text-[#8169FF]">Airpay</span>
      </h2>

      <div
        className={
          cols === 2
            ? "mt-7 grid flex-1 grid-cols-2 gap-4 sm:gap-5 lg:mt-9"
            : "mt-7 grid flex-1 grid-cols-2 gap-4 sm:gap-5 lg:mt-9 lg:grid-cols-4"
        }>
        {whyItems.map((item) => (
          <div
            key={item.title}
            className="group flex flex-col items-start rounded-[20px] bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-lg sm:p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#A486FF]/20 to-[#9EC6FE]/20 text-[#8169FF] transition-transform group-hover:scale-110 group-hover:rotate-6 sm:h-14 sm:w-14">
              <item.icon className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <div className="mt-4 font-heading text-[16px] font-bold text-black sm:text-[18px]">
              {item.title}
            </div>
            <div className="mt-1 text-[13px] text-[#515A5E]">
              {item.subtitle}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
