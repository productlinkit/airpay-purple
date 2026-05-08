"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface Product {
  name: string;
  description: string;
  illustration: string;
  bullets: string[];
  href: string;
  accent: "purple" | "pink";
}

const products: Product[] = [
  {
    name: "Digital Carrier Billing (DCB)",
    description:
      "Enable users to pay using their mobile balance. No card, no bank account needed.",
    illustration: "/images/photos/image_card_dcb.webp",
    bullets: [
      "Higher conversion",
      "Reach unbanked users",
      "Works across telco operators",
    ],
    href: "/products/direct-carrier-billing",
    accent: "purple",
  },
  {
    name: "Digital Payments",
    description:
      "Accept payments through multiple methods and local rails with a single integration.",
    illustration: "/images/photos/image_card_payment.webp",
    bullets: [
      "100+ payment channels",
      "Global & local coverage",
      "Smart routing & higher success rate",
    ],
    href: "/products/digital-payment",
    accent: "purple",
  },
];

export function ProductsCarousel() {
  return (
    <section className="mt-4 px-3 sm:px-6 lg:mt-6 lg:px-20">
      <ScrollReveal>
        <div className="rounded-[20px] bg-[#F5F5F7] p-5 sm:rounded-[24px] sm:p-8 lg:rounded-[30px] lg:p-12">
          {/* Header */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#8169FF]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8169FF] sm:px-4 sm:py-1.5 sm:text-[12px]">
            Our Products
          </div>
          <h2 className="mt-3 font-heading text-[24px] font-extrabold leading-[1.15] text-black sm:mt-4 sm:text-[36px] lg:text-[44px]">
            Get to know our products
          </h2>

          {/* Two product cards */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:gap-5 lg:mt-10 lg:grid-cols-2 lg:gap-6">
            {products.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 120}>
                <ProductCard product={p} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const isPurple = product.accent === "purple";
  const cardBg = isPurple ? "bg-[#EFE8FE]" : "bg-[#FCE7EE]";
  const accentText = isPurple ? "text-[#8169FF]" : "text-[#E64681]";
  const accentBg = isPurple ? "bg-[#8169FF]" : "bg-[#E64681]";
  const accentBgHover = isPurple ? "hover:bg-[#6952e6]" : "hover:bg-[#cc3a72]";
  const checkBg = isPurple ? "bg-[#8169FF]" : "bg-[#E64681]";

  return (
    <div
      className={`relative h-full overflow-hidden rounded-[20px] ${cardBg} p-5 transition-all hover:shadow-xl sm:rounded-[24px] sm:p-8 lg:rounded-[28px] lg:p-10`}>
      <div className="grid h-full grid-cols-1 items-center gap-3 lg:grid-cols-[1fr_1.05fr] lg:gap-0">
        {/* Left: text */}
        <div className="flex flex-col">
          <h3
            className={`font-heading text-[20px] font-extrabold leading-[1.2] ${accentText} sm:text-[26px] lg:text-[30px]`}>
            {product.name}
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed text-[#2b2f38] sm:mt-3 sm:text-[15px] lg:mt-4 lg:text-[16px]">
            {product.description}
          </p>

          <ul className="mt-5 space-y-3 lg:mt-6">
            {product.bullets.map((b) => (
              <li key={b} className="flex items-center gap-3">
                <span
                  className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${checkBg} text-white`}>
                  <Check className="h-3 w-3" strokeWidth={3.5} />
                </span>
                <span className="text-[14px] font-medium text-[#1f2230] sm:text-[15px]">
                  {b}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 lg:mt-8">
            <Link
              href={product.href}
              className={`group inline-flex items-center gap-3 rounded-full ${accentBg} ${accentBgHover} py-2 pl-6 pr-2 text-[13px] font-bold text-white transition-all hover:scale-105 sm:text-[14px]`}>
              Learn More
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full bg-white ${accentText} transition-transform group-hover:translate-x-1`}>
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>

        {/* Right: illustration */}
        <div className="relative flex h-full min-h-[220px] items-center justify-center sm:min-h-[280px] lg:min-h-[360px]">
          <Image
            src={product.illustration}
            alt={product.name}
            width={520}
            height={520}
            className="h-auto max-h-[280px] w-auto max-w-full object-contain drop-shadow-[0_12px_30px_rgba(80,60,180,0.18)] sm:max-h-[340px] lg:max-h-[380px]"
          />
        </div>
      </div>
    </div>
  );
}
