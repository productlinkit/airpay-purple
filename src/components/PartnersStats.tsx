"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";

const logoPages: string[][] = [
  [
    "/images/telco/telkomsel.png",
    "/images/telco/xl.png",
    "/images/telco/indosat.png",
    "/images/telco/smartfren.png",
    "/images/telco/ais.png",
    "/images/telco/true.png",
    "/images/telco/dtac.png",
    "/images/telco/smart.png",
  ],
  [
    "/images/telco/ooredoo.png",
    "/images/telco/orange.png",
    "/images/telco/etisalat.png",
    "/images/telco/stc.png",
    "/images/telco/mobily.png",
    "/images/telco/zain.png",
    "/images/telco/inwi.png",
    "/images/telco/jazz.png",
  ],
  [
    "/images/telco/djezzy.png",
    "/images/telco/atom.png",
    "/images/telco/korek.png",
    "/images/telco/ltc.png",
    "/images/telco/tplus.png",
  ],
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
      <div className="mb-3 flex h-[64px] w-[64px] items-center justify-center rounded-full bg-gradient-to-br from-[#A486FF]/60 to-[#9EC6FE]/60 transition-transform group-hover:scale-110 group-hover:rotate-6">
        <Image
          src={stat.icon}
          alt={stat.label}
          width={30}
          height={30}
          className="h-[30px] w-[30px]"
        />
      </div>
      <span className="font-heading text-[44px] font-extrabold leading-none text-black">
        {stat.decimals > 0 ? value.toFixed(stat.decimals) : value}
        {stat.suffix}
      </span>
      <span className="mt-2 whitespace-pre-line text-[14px] leading-tight text-black">
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

  const currentLogos = logoPages[activePage];

  return (
    <section className="mt-6 grid grid-cols-1 gap-4 px-4 sm:gap-6 sm:px-6 lg:mt-8 lg:grid-cols-3 lg:px-20">
      {/* Merchants / Telco card */}
      <ScrollReveal className="lg:col-span-1">
        <div className="rounded-[24px] bg-[#E4EEFA] p-6 transition-all hover:shadow-xl sm:p-8 lg:rounded-[30px] lg:p-9">
          <p className="text-[15px] leading-relaxed text-black">
            Trusted network of{" "}
            <strong className="font-bold">100+ telco operators</strong>,{" "}
            <strong className="font-bold">100+ banks</strong>, and{" "}
            <strong className="font-bold">20+ e-wallets</strong> — powering
            payments for <strong className="font-bold">1000+ merchants</strong>{" "}
            worldwide.
          </p>

          <div
            key={activePage}
            className="mt-8 grid animate-fade-in grid-cols-2 gap-x-6 gap-y-8"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="flex h-12 items-center justify-center transition-transform hover:scale-110"
              >
                {currentLogos[i] && (
                  <Image
                    src={currentLogos[i]}
                    alt={`Partner ${i + 1}`}
                    width={100}
                    height={36}
                    className="h-9 w-auto object-contain"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 flex gap-2">
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
      <ScrollReveal delay={120} className="lg:col-span-2">
        <div
          ref={statsRef}
          className="rounded-[24px] bg-[#F2F2F2] p-6 transition-all hover:shadow-xl sm:p-8 lg:rounded-[30px] lg:p-10"
        >
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <h2 className="max-w-[540px] font-heading text-[22px] font-bold leading-[1.25] text-black sm:text-[26px] lg:text-[32px]">
              When it comes to payments, borders are never an obstacle!
            </h2>
            <button
              type="button"
              className="flex-shrink-0 rounded-full bg-[#8169FF] px-7 py-2.5 text-[13px] font-bold text-white transition-all hover:bg-[#6952e6] hover:scale-105 hover:shadow-[0_10px_24px_rgba(128,105,255,0.35)] sm:px-9 sm:py-3 sm:text-[14px]"
            >
              Learn More
            </button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-5 lg:mt-12 lg:gap-8">
            {stats.map((s) => (
              <StatCounter key={s.label} stat={s} active={statsVisible} />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
