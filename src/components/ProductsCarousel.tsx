"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";

interface Product {
  name: string;
  description: string;
  illustration: string;
}

const products: Product[] = [
  {
    name: "Direct Carrier Billing (DCB)",
    description:
      "Let users pay directly through their mobile phone bills. One integration unlocks dozens of telecom operators worldwide and a frictionless checkout for every customer — no card required.",
    illustration: "/images/illustration/illustration04.webp",
  },
  {
    name: "Digital Payment — Pay-In & Pay-Out",
    description:
      "Accept payments and send payouts globally with a single API. Airpay supports multiple payment methods and local rails so businesses can scale faster and expand into new markets seamlessly.",
    illustration: "/images/illustration/illustration05.webp",
  },
  {
    name: "Finance Dashboard & API Integration",
    description:
      "A unified dashboard with real-time analytics, reconciliation tools, and developer-friendly APIs — giving finance and engineering teams everything they need to run payments at scale.",
    illustration: "/images/illustration/illustration06.webp",
  },
];

export function ProductsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((p) => (p + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-4 grid grid-cols-1 items-stretch gap-4 px-4 sm:gap-6 sm:px-6 lg:mt-6 lg:grid-cols-3 lg:px-20">
      {/* Photo / illustration card */}
      <ScrollReveal className="h-full lg:col-span-1">
        <div
          className="relative flex h-full min-h-[320px] items-center justify-center overflow-hidden rounded-[24px] p-4 transition-all hover:shadow-xl sm:min-h-[440px] lg:min-h-[560px] lg:rounded-[30px]"
          style={{
            background: "linear-gradient(135deg, #8169FF 0%, #A486FF 100%)",
          }}>
          <span className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
          <span className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <Image
            src="/images/illustration/illustration08.webp"
            alt="Airpay customer"
            width={520}
            height={520}
            className="relative h-auto max-h-[95%] w-auto max-w-[95%] object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.25)]"
          />
        </div>
      </ScrollReveal>

      {/* Products card */}
      <ScrollReveal delay={120} className="h-full lg:col-span-2">
        <div className="relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-[24px] bg-[#E4EEFA] p-6 transition-all hover:shadow-xl sm:p-8 lg:min-h-[560px] lg:rounded-[30px] lg:p-10">
          <div className="grid flex-1 grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-8">
            <div key={activeIndex} className="animate-fade-in">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#8169FF]/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#8169FF] sm:px-4 sm:text-[12px]">
                Our Products
              </div>
              <h2 className="mt-3 font-heading text-[22px] font-bold leading-[1.2] text-black sm:text-[26px] lg:mt-4 lg:text-[30px]">
                Get to know our products
              </h2>
              <p className="mt-3 font-heading text-[18px] font-bold text-[#8169FF] sm:text-[20px] lg:mt-4 lg:text-[24px]">
                {products[activeIndex].name}
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-[#2b2f38] sm:text-[15px] lg:mt-4">
                {products[activeIndex].description}
              </p>
              <button
                type="button"
                className="group mt-5 inline-flex items-center gap-2 rounded-full bg-[#8169FF] px-7 py-2.5 text-[13px] font-bold text-white transition-all hover:bg-[#6952e6] hover:scale-105 hover:shadow-[0_10px_24px_rgba(128,105,255,0.35)] sm:px-9 sm:py-3 sm:text-[14px] lg:mt-7">
                Learn More
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

            <div
              key={`ill-${activeIndex}`}
              className="animate-fade-in flex h-full items-center justify-center">
              <div className="relative h-[260px] w-full sm:h-[320px] lg:h-[440px]">
                <Image
                  src={products[activeIndex].illustration}
                  alt={products[activeIndex].name}
                  fill
                  className="object-contain drop-shadow-[0_12px_30px_rgba(80,60,180,0.18)]"
                />
              </div>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="mt-6 flex gap-2">
            {products.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  "rounded-full transition-all",
                  i === activeIndex
                    ? "h-2 w-7 bg-[#8169FF]"
                    : "h-2 w-2 bg-[#A486FF]/50 hover:bg-[#A486FF]",
                )}
              />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
