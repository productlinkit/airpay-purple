"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";

interface LogoPage {
  category: "Telco Partners" | "Payment Channels";
  region: string;
  flag: string;
  logos: string[];
}

const logoPages: LogoPage[] = [
  {
    category: "Telco Partners",
    region: "Southeast Asia",
    flag: "🌏",
    logos: [
      "/images/telco/telkomsel.png",
      "/images/telco/xl.png",
      "/images/telco/indosat.png",
      "/images/telco/smartfren.png",
      "/images/telco/ais.png",
      "/images/telco/true.png",
      "/images/telco/dtac.png",
      "/images/telco/smart.png",
    ],
  },
  {
    category: "Telco Partners",
    region: "Middle East & Africa",
    flag: "🌍",
    logos: [
      "/images/telco/ooredoo.png",
      "/images/telco/orange.png",
      "/images/telco/etisalat.png",
      "/images/telco/stc.png",
      "/images/telco/mobily.png",
      "/images/telco/zain.png",
      "/images/telco/inwi.png",
      "/images/telco/jazz.png",
    ],
  },
  {
    category: "Telco Partners",
    region: "Other Markets",
    flag: "🌐",
    logos: [
      "/images/telco/djezzy.png",
      "/images/telco/atom.png",
      "/images/telco/korek.png",
      "/images/telco/ltc.png",
      "/images/telco/tplus.png",
    ],
  },
  {
    category: "Payment Channels",
    region: "Indonesia",
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
];

interface StatItem {
  icon: string;
  target: number;
  suffix?: string;
  decimals: number;
  label: string;
}

const stats: StatItem[] = [
  {
    icon: "/images/mingcute_bank-line-1.svg",
    target: 100,
    suffix: "+",
    decimals: 0,
    label: "Banks",
  },
  {
    icon: "/images/lucide_wallet-1.svg",
    target: 20,
    suffix: "+",
    decimals: 0,
    label: "E-Wallets",
  },
  {
    icon: "/images/ps_globe-1.svg",
    target: 1000,
    decimals: 0,
    label: "Active\nMerchants",
  },
  {
    icon: "/images/bx_wifi-1.svg",
    target: 100,
    suffix: "+",
    decimals: 0,
    label: "Services\nLive",
  },
];

function useCounterAnimation(
  target: number,
  decimals: number,
  enabled: boolean,
  duration = 2000
) {
  const [value, setValue] = useState(0);
  const frameRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;
    startRef.current = null;
    const animate = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Number((eased * target).toFixed(decimals)));
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [target, decimals, duration, enabled]);

  return value;
}

function StatCounter({ stat, active }: { stat: StatItem; active: boolean }) {
  const value = useCounterAnimation(stat.target, stat.decimals, active);
  return (
    <div className="group flex flex-col">
      <div className="mb-2 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gradient-to-br from-[#A486FF]/60 to-[#9EC6FE]/60 transition-transform group-hover:scale-110 group-hover:rotate-6 sm:mb-3 sm:h-[64px] sm:w-[64px]">
        <Image
          src={stat.icon}
          alt={stat.label}
          width={30}
          height={30}
          className="h-[24px] w-[24px] sm:h-[30px] sm:w-[30px]"
        />
      </div>
      <span className="font-heading text-[32px] font-extrabold leading-none text-black sm:text-[40px] lg:text-[44px]">
        {stat.decimals > 0 ? value.toFixed(stat.decimals) : value}
        {stat.suffix}
      </span>
      <span className="mt-1.5 whitespace-pre-line text-[12px] leading-tight text-black sm:mt-2 sm:text-[14px]">
        {stat.label}
      </span>
    </div>
  );
}

export function PartnersStats() {
  const [activePage, setActivePage] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const goToPage = useCallback((p: number) => setActivePage(p), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePage((p) => (p + 1) % logoPages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const currentPage = logoPages[activePage];
  const currentLogos = currentPage.logos;
  const isPaymentChannels = currentPage.category === "Payment Channels";

  return (
    <section className="mt-4 grid grid-cols-1 items-stretch gap-4 px-3 sm:mt-6 sm:gap-6 sm:px-6 lg:mt-8 lg:grid-cols-3 lg:px-20">
      {/* Merchants / Telco card */}
      <ScrollReveal className="h-full lg:col-span-1">
        <div className="flex h-full flex-col rounded-[20px] bg-[#E4EEFA] p-5 transition-all hover:shadow-xl sm:rounded-[24px] sm:p-8 lg:rounded-[30px] lg:p-9">
          <div
            key={activePage}
            className="flex animate-fade-in items-center justify-between gap-3"
          >
            <div>
              <span
                className={cn(
                  "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider",
                  isPaymentChannels
                    ? "bg-[#8169FF]/15 text-[#8169FF]"
                    : "bg-[#9EC6FE]/40 text-[#1f4ea1]"
                )}
              >
                {currentPage.category}
              </span>
              <div className="mt-2 font-heading text-[18px] font-bold text-black sm:text-[20px]">
                {currentPage.region}
              </div>
            </div>
            <span className="text-[36px] leading-none" aria-hidden>
              {currentPage.flag}
            </span>
          </div>

          <div
            key={`logos-${activePage}`}
            className={cn(
              "mt-6 grid flex-1 animate-fade-in content-start gap-x-3 gap-y-5",
              currentLogos.length > 8 ? "grid-cols-3" : "grid-cols-2"
            )}
          >
            {currentLogos.map((src, i) => (
              <div
                key={i}
                className={cn(
                  "flex items-center justify-center transition-transform hover:scale-110",
                  currentLogos.length > 8 ? "h-16" : "h-12"
                )}
              >
                <Image
                  src={src}
                  alt={`Partner ${i + 1}`}
                  width={120}
                  height={48}
                  className={cn(
                    "w-auto object-contain",
                    currentLogos.length > 8 ? "h-11" : "h-9"
                  )}
                />
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-2">
            {logoPages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToPage(i)}
                aria-label={`Go to page ${i + 1}`}
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

      {/* Stats card */}
      <ScrollReveal delay={120} className="h-full lg:col-span-2">
        <div
          ref={statsRef}
          className="flex h-full flex-col rounded-[20px] bg-[#F2F2F2] p-5 transition-all hover:shadow-xl sm:rounded-[24px] sm:p-8 lg:rounded-[30px] lg:p-10"
        >
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <h2 className="max-w-[540px] font-heading text-[20px] font-bold leading-[1.25] text-black sm:text-[26px] lg:text-[32px]">
              When it comes to payments, borders are never an obstacle!
            </h2>
            <button
              type="button"
              className="flex-shrink-0 rounded-full bg-[#8169FF] px-6 py-2 text-[12px] font-bold text-white transition-all hover:bg-[#6952e6] hover:scale-105 hover:shadow-[0_10px_24px_rgba(128,105,255,0.35)] sm:px-9 sm:py-3 sm:text-[14px]"
            >
              Learn More
            </button>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-5 sm:mt-8 sm:grid-cols-4 sm:gap-5 lg:mt-12 lg:gap-8">
            {stats.map((s) => (
              <StatCounter key={s.label} stat={s} active={statsVisible} />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
