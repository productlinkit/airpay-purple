"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ShieldCheck, Lock, Landmark, LineChart, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";

interface CountryChannels {
  country: string;
  flag: string;
  logos: string[];
}

const countryPages: CountryChannels[] = [
  {
    country: "Indonesia",
    flag: "🇮🇩",
    logos: [
      "/images/channels/Indonesia/QRIS.png",
      "/images/channels/Indonesia/DANA.png",
      "/images/channels/Indonesia/GOPAY.png",
      "/images/channels/Indonesia/OVO.png",
      "/images/channels/Indonesia/ShopeePay.png",
      "/images/channels/Indonesia/LinkAja.png",
      "/images/channels/Indonesia/BCA.png",
      "/images/channels/Indonesia/Mandiri.png",
      "/images/channels/Indonesia/BNI.png",
      "/images/channels/Indonesia/BRI.png",
      "/images/channels/Indonesia/PermataBank.png",
      "/images/channels/Indonesia/CIMB.png",
    ],
  },
  {
    country: "Thailand",
    flag: "🇹🇭",
    logos: [
      "/images/channels/Thailand/PromptPay.png",
      "/images/channels/Thailand/TrueMoney.png",
      "/images/channels/Thailand/KBank.png",
      "/images/channels/Thailand/BangkokBank.png",
      "/images/channels/Thailand/SCB.png",
      "/images/channels/Thailand/BAY.png",
    ],
  },
  {
    country: "Philippines",
    flag: "🇵🇭",
    logos: [
      "/images/channels/Philippines/GCash.png",
      "/images/channels/Philippines/MayBank.png",
      "/images/channels/Philippines/GrabPay.png",
      "/images/channels/Philippines/gotyme.png",
    ],
  },
  {
    country: "India",
    flag: "🇮🇳",
    logos: [
      "/images/channels/India/UPI.png",
      "/images/channels/India/IMPS.png",
      "/images/channels/India/NEFT.png",
    ],
  },
  {
    country: "Mexico",
    flag: "🇲🇽",
    logos: [
      "/images/channels/Mexico/VISA.png",
      "/images/channels/Mexico/Mastercard.png",
      "/images/channels/Mexico/CARNET.png",
      "/images/channels/Mexico/SPEI.png",
      "/images/channels/Mexico/BBVA.png",
      "/images/channels/Mexico/Santander.png",
      "/images/channels/Mexico/Banorte.png",
      "/images/channels/Mexico/Spin.png",
      "/images/channels/Mexico/CoDi.png",
      "/images/channels/Mexico/Dimo.png",
      "/images/channels/Mexico/OXXO.png",
      "/images/channels/Mexico/7-Eleven.png",
    ],
  },
];

interface WhyItem {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

const whyItems: WhyItem[] = [
  {
    icon: ShieldCheck,
    title: "PCI DSS",
    subtitle: "Fast Integration",
  },
  {
    icon: Lock,
    title: "ISO 27001",
    subtitle: "Compliant",
  },
  {
    icon: Landmark,
    title: "Bank Indonesia",
    subtitle: "Licensed",
  },
  {
    icon: LineChart,
    title: "Real-Time",
    subtitle: "Analytics",
  },
];

export function PaymentNetwork() {
  const [activePage, setActivePage] = useState(0);

  const goToPage = useCallback((p: number) => setActivePage(p), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePage((p) => (p + 1) % countryPages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = countryPages[activePage];

  return (
    <section className="mt-4 grid grid-cols-1 gap-4 px-4 sm:gap-6 sm:px-6 lg:mt-6 lg:grid-cols-3 lg:px-20">
      {/* Payment channels by country */}
      <ScrollReveal className="lg:col-span-1">
        <div className="h-full rounded-[24px] bg-[#E4EEFA] p-6 transition-all hover:shadow-xl sm:p-8 lg:rounded-[30px] lg:p-9">
          <div className="flex items-center justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#8169FF]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#8169FF]">
                Coverage
              </div>
              <h3 className="mt-3 font-heading text-[22px] font-bold leading-tight text-black sm:text-[24px]">
                Payment channels in{" "}
                <span className="text-[#8169FF]">{current.country}</span>
              </h3>
            </div>
            <span className="text-[32px]" aria-hidden>
              {current.flag}
            </span>
          </div>

          <p className="mt-3 text-[13px] leading-relaxed text-[#515A5E]">
            Accept payments through the most trusted local channels in{" "}
            {current.country}.
          </p>

          <div
            key={activePage}
            className="mt-6 grid animate-fade-in grid-cols-3 gap-3"
          >
            {current.logos.map((src, i) => (
              <div
                key={i}
                className="flex h-14 items-center justify-center rounded-xl bg-white px-2 transition-transform hover:scale-105"
              >
                <Image
                  src={src}
                  alt={`${current.country} partner ${i + 1}`}
                  width={80}
                  height={32}
                  className="max-h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2">
            {countryPages.map((p, i) => (
              <button
                key={p.country}
                type="button"
                onClick={() => goToPage(i)}
                aria-label={`Show ${p.country}`}
                className={cn(
                  "rounded-full transition-all",
                  i === activePage
                    ? "h-2 w-7 bg-[#8169FF]"
                    : "h-2 w-2 bg-[#A486FF]/60 hover:bg-[#A486FF]"
                )}
              />
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Why choose Airpay */}
      <ScrollReveal delay={120} className="lg:col-span-2">
        <div className="flex h-full flex-col rounded-[24px] bg-[#F2F2F2] p-6 transition-all hover:shadow-xl sm:p-8 lg:rounded-[30px] lg:p-10">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#8169FF]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#8169FF]">
            Why Choose
          </div>
          <h2 className="mt-3 font-heading text-[22px] font-bold leading-[1.25] text-black sm:text-[26px] lg:text-[32px]">
            Why businesses choose{" "}
            <span className="text-[#8169FF]">Airpay</span>
          </h2>

          <div className="mt-7 grid flex-1 grid-cols-2 gap-4 sm:gap-5 lg:mt-9 lg:grid-cols-4">
            {whyItems.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col items-start rounded-[20px] bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-lg sm:p-6"
              >
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
      </ScrollReveal>
    </section>
  );
}
