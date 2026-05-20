"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Nav, GetStartedButton } from "./Nav";
import { MobileMenu } from "./MobileMenu";

type Slide =
  | {
      kind: "legacy";
      title: string;
      body: string;
      image: string;
      buttonText: string;
    }
  | { kind: "dcb" }
  | { kind: "aggregator" };

const slides: Slide[] = [
  {
    kind: "legacy",
    title: "Expand Globally Through Localized Payments",
    body: "Redefine global payment experiences through Airpay’s unified Digital Carrier Billing and digital payment ecosystem. Empower your business to reach millions of users, unlock localized payment connectivity across high-growth markets, and accelerate borderless expansion through scalable enterprise infrastructure.",
    image: "/images/new/hero-slide1.webp",
    buttonText: "Get Started",
  },
  { kind: "dcb" },
  { kind: "aggregator" },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNext = useCallback(
    () => setCurrentSlide((p) => (p + 1) % slides.length),
    [],
  );
  const goToPrev = useCallback(
    () => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length),
    [],
  );

  useEffect(() => {
    const interval = setInterval(goToNext, 6000);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <div className="px-3 pt-3 sm:px-6 sm:pt-6 lg:px-20 lg:pt-10">
      <div
        className="relative h-[560px] overflow-hidden rounded-[24px] sm:h-[720px] sm:rounded-[36px] lg:h-[820px] lg:rounded-[40px]"
        style={{
          background: "linear-gradient(135deg, #E2DBFB 0%, #B0A0EE 100%)",
        }}>
        {/* Logo pill tab — top-left */}
        <div
          className="absolute top-0 left-0 z-50 flex h-[64px] items-center bg-white pl-4 pr-8 sm:h-[100px] sm:pl-8 sm:pr-14 lg:h-[110px] lg:pl-12 lg:pr-16"
          style={{
            borderTopLeftRadius: 24,
            borderBottomRightRadius: 40,
          }}>
          <Link href="/" className="transition-transform hover:scale-105">
            <Image
              src="/images/airpay-logo.png"
              alt="Airpay"
              width={1000}
              height={284}
              className="h-auto w-[110px] sm:w-[140px] lg:w-[160px]"
              priority
            />
          </Link>
        </div>

        {/* Nav pill tab — top-right (desktop) */}
        <div
          className="absolute top-0 right-0 z-50 hidden h-[110px] items-center gap-8 bg-white pl-16 pr-8 lg:flex"
          style={{
            borderTopRightRadius: 40,
            borderBottomLeftRadius: 60,
          }}>
          <nav>
            <Nav variant="hero" />
          </nav>
          <GetStartedButton />
        </div>

        {/* Compact menu pill — top-right (mobile/tablet) */}
        <div
          className="absolute top-0 right-0 z-50 flex h-[64px] items-center bg-white pl-8 pr-4 sm:h-[100px] sm:pl-14 sm:pr-6 lg:hidden"
          style={{
            borderTopRightRadius: 24,
            borderBottomLeftRadius: 40,
          }}>
          <MobileMenu />
        </div>

        <div className="animate-hero-rise absolute inset-0">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={cn(
                "absolute inset-0 transition-all duration-1000",
                i === currentSlide
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-6 pointer-events-none",
              )}>
              {slide.kind === "legacy" && (
                <LegacySlide slide={slide} active={i === currentSlide} />
              )}
              {slide.kind === "dcb" && <DCBSlide />}
              {slide.kind === "aggregator" && <AggregatorSlide />}
            </div>
          ))}

          {/* Prev / Next Arrows */}
          <div className="absolute bottom-6 right-6 z-30 flex gap-2 sm:bottom-8 sm:right-8 sm:gap-3 lg:bottom-12 lg:right-12">
            <button
              type="button"
              onClick={goToPrev}
              aria-label="Previous slide"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/60 text-[#8169FF] backdrop-blur-sm transition-all hover:bg-white hover:scale-110 sm:h-[48px] sm:w-[48px] lg:h-[56px] lg:w-[56px]">
              <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next slide"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/60 text-[#8169FF] backdrop-blur-sm transition-all hover:bg-white hover:scale-110 sm:h-[48px] sm:w-[48px] lg:h-[56px] lg:w-[56px]">
              <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" />
            </button>
          </div>

          {/* Info tab — bottom-left (legacy slide only) */}
          {slides[currentSlide].kind === "legacy" && (
            <div
              className="absolute bottom-0 left-0 z-20 hidden max-w-[760px] bg-[#E4EEFA]/95 px-6 py-4 backdrop-blur-sm sm:block sm:px-8 sm:py-5 lg:px-10 lg:py-6"
              style={{
                borderTopRightRadius: 60,
                borderBottomLeftRadius: 40,
              }}>
              <p className="text-[12px] leading-[1.5] text-black sm:text-[12px] lg:text-[13px]">
                <strong className="font-bold">
                  Powering Millions Through One Unified Payment Ecosystem.
                </strong>{" "}
                Seamlessly connect to localized payment methods, Digital Carrier
                Billing, and{" "}
                <strong className="font-bold">85+ digital payment channels</strong>{" "}
                designed to accelerate growth across high-growth global markets.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── Slide 1 — legacy text/image ─────────────────────── */

function LegacySlide({
  slide,
  active,
}: {
  slide: Extract<Slide, { kind: "legacy" }>;
  active: boolean;
}) {
  return (
    <>
      <div
        className={cn(
          "absolute inset-y-0 right-0 z-10 hidden w-[55%] pt-[100px] sm:block sm:opacity-100 sm:pt-[110px] lg:pt-[120px]",
          active && "animate-hero-image",
        )}>
        <div className="relative h-full w-full">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-contain object-right-bottom drop-shadow-[0_12px_30px_rgba(80,60,180,0.25)]"
          />
        </div>
      </div>

      <div
        className={cn(
          "relative z-20 flex h-full w-full flex-col justify-center px-5 pt-[80px] sm:w-3/4 sm:px-10 sm:pt-[110px] lg:w-1/2 lg:pl-24 lg:pr-8",
          active && "animate-hero-text",
        )}>
        <div className="max-w-[560px]">
          <h2 className="text-[24px] font-extrabold leading-[1.15] text-black sm:text-[40px] lg:text-[52px] lg:leading-[1.08]">
            {slide.title}
          </h2>
          <p className="mt-3 text-[13px] leading-[1.6] text-[#2b2f38] sm:mt-6 sm:text-[16px] lg:text-[17px] lg:leading-[1.75]">
            {slide.body}
          </p>
          <Link
            href="/contact"
            className="group mt-5 inline-flex items-center gap-2 rounded-full border-2 border-[#8169FF] bg-white py-1.5 pl-5 pr-1.5 text-[13px] font-semibold text-[#8169FF] transition-all hover:bg-[#8169FF] hover:text-white hover:scale-105 hover:shadow-[0_10px_28px_rgba(128,105,255,0.35)] sm:mt-8 sm:py-2 sm:pl-7 sm:pr-2 sm:text-[15px] lg:mt-10 lg:pl-8 lg:text-[16px]">
            {slide.buttonText}
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8169FF] text-white transition-all group-hover:bg-white group-hover:text-[#8169FF] group-hover:translate-x-1 sm:h-9 sm:w-9 lg:h-10 lg:w-10">
              <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────── Slide 2 — DCB flow ─────────────────────────── */

function DCBSlide() {
  return (
    <div className="absolute inset-0">
      {/* ── Background photo — full right side, behind cards ── */}
      <div className="absolute inset-y-0 right-0 z-0 hidden w-[55%] sm:block">
        <Image
          src="/images/new/hero-slide2.webp"
          alt="Digital Carrier Billing"
          fill
          priority
          className="object-cover object-right drop-shadow-[0_18px_40px_rgba(80,60,180,0.25)]"
        />
      </div>

      {/* ── Left column text content ── */}
      <div className="relative z-20 flex h-full w-full flex-col justify-center px-5 pb-[80px] pt-[80px] sm:w-3/4 sm:px-10 sm:pb-[110px] sm:pt-[110px] lg:w-1/2 lg:pb-[110px] lg:pl-20 lg:pr-8 lg:pt-[110px]">
        <span className="inline-flex w-fit items-center rounded-full bg-[#8169FF]/25 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#5a3fdb] backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-[11px]">
          DCB &amp; Merchant Aggregator Platform
        </span>

        <h2 className="mt-4 font-heading text-[26px] font-extrabold leading-[1.05] tracking-tight text-black sm:mt-5 sm:text-[44px] lg:text-[56px]">
          Unlock Mobile-First Payments
          <br />
          at <span className="">Global Scale</span>
        </h2>

        <p className="mt-3 max-w-[480px] text-[13px] leading-relaxed text-[#2b2f38] sm:mt-5 sm:text-[15px] lg:text-[16px]">
          Enable seamless Digital Carrier Billing experiences through Airpay’s
          enterprise-grade payment infrastructure. Reach millions of mobile
          users, improve transaction success rates, and accelerate growth across
          high-potential emerging markets through frictionless carrier-connected
          payments.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2 sm:mt-7">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#8169FF] py-1.5 pl-5 pr-1.5 text-[13px] font-bold text-white transition-all hover:scale-105 hover:shadow-[0_10px_28px_rgba(128,105,255,0.4)] sm:py-2 sm:pl-6 sm:pr-2 sm:text-[14px]">
            Start Integration
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#8169FF] transition-transform group-hover:translate-x-1 sm:h-8 sm:w-8">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-2 py-2 text-[13px] font-bold text-[#2b2f38] transition-colors hover:text-[#8169FF] sm:px-3 sm:text-[14px]">
            Talk to Sales
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────── Slide 3 — Aggregator hub ──────────────────────── */

const AGG_TRUST_LOGOS_ROW_1 = [
  "/images/channels/Indonesia/OVO.png",
  "/images/channels/Indonesia/DANA.png",
  "/images/channels/Indonesia/GOPAY.png",
];

const AGG_TRUST_LOGOS_ROW_2 = [
  "/images/channels/Indonesia/LinkAja.png",
  "/images/channels/Indonesia/QRIS.png",
  "/images/channels/Mexico/VISA.png",
  "/images/channels/Mexico/Mastercard.png",
];

type AggStat = {
  value: string;
  label: string;
  description: string;
};

const AGG_STATS: AggStat[] = [
  {
    value: "Millions",
    label: "Reachable Users",
    description:
      "Access millions of mobile users across diverse digital ecosystems.",
  },
  {
    value: "85+",
    label: "Localized Payment Methods",
    description:
      "Connect to 85+ local payment methods and deliver seamless checkout experiences.",
  },
  {
    value: "15+",
    label: "Emerging Market Coverage",
    description:
      "Expand your business across 15+ high-growth markets with one integration.",
  },
];

function AggregatorSlide() {
  return (
    <div className="absolute inset-0">
      {/* ── Background photo — full right side, behind cards ── */}
      <div className="absolute inset-y-0 right-0 z-0 hidden w-[60%] sm:block">
        <Image
          src="/images/new/hero-slide3.webp"
          alt="Digital Payments"
          fill
          priority
          className="object-contain object-right drop-shadow-[0_18px_40px_rgba(80,60,180,0.25)]"
        />
      </div>

      {/* ── Left column text content ── */}
      <div className="relative z-20 flex h-full w-full flex-col justify-center px-5 pb-[80px] pt-[80px] sm:w-3/4 sm:px-10 sm:pb-[210px] sm:pt-[120px] lg:w-1/2 lg:pb-[210px] lg:pl-20 lg:pr-8 lg:pt-[130px]">
        <span className="inline-flex w-fit items-center rounded-full bg-[#8169FF]/25 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#5a3fdb] backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-[11px]">
          Merchant Aggregator Platform
        </span>

        <h2 className="mt-4 font-heading text-[24px] font-extrabold leading-[1.08] tracking-tight text-black sm:mt-5 sm:text-[42px] lg:text-[52px]">
          Scale Globally Through
          <br />
          Localized
          <br />
          <span className="">Payment Experiences</span>
        </h2>

        <p className="mt-3 max-w-[480px] text-[13px] leading-relaxed text-[#2b2f38] sm:mt-5 sm:text-[15px] lg:text-[16px]">
          Unlock seamless access to diverse payment ecosystems across global
          markets through Airpay’s enterprise digital payment infrastructure,
          designed to maximize payment reach, transaction performance, and
          scalable business growth.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2 sm:mt-7">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#8169FF] py-1.5 pl-5 pr-1.5 text-[13px] font-bold text-white transition-all hover:scale-105 hover:shadow-[0_10px_28px_rgba(128,105,255,0.4)] sm:py-2 sm:pl-6 sm:pr-2 sm:text-[14px]">
            Get Started
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#8169FF] transition-transform group-hover:translate-x-1 sm:h-8 sm:w-8">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-2 py-2 text-[13px] font-bold text-[#2b2f38] transition-colors hover:text-[#8169FF] sm:px-3 sm:text-[14px]">
            Talk to Sales
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* ── Bottom trust card (aggregator variant) ── */}
      <div className="absolute bottom-4 left-4 right-4 z-20 hidden rounded-[20px] bg-white/55 px-4 py-3 shadow-[0_10px_30px_rgba(80,60,180,0.16)] backdrop-blur-xl sm:block sm:bottom-6 sm:left-6 sm:right-6 sm:rounded-[24px] sm:px-6 sm:py-4 lg:bottom-6 lg:left-12 lg:right-12 lg:rounded-[26px] lg:px-7 lg:py-5">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.5fr_1fr] lg:gap-7">
          {/* LEFT — 3 stat blocks */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {AGG_STATS.map((s) => (
              <div key={s.label} className="flex flex-col">
                <div className="font-heading text-[20px] font-extrabold leading-none text-[#5a3fdb] sm:text-[26px] lg:text-[30px]">
                  {s.value}
                </div>
                <div className="mt-1 font-heading text-[10px] font-extrabold leading-tight text-black sm:text-[11px] lg:text-[12px]">
                  {s.label}
                </div>
                <p className="mt-1 hidden text-[9px] leading-snug text-[#2b2f38] sm:block sm:text-[10px] lg:text-[11px]">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT — pill + title + logos + footer */}
          <div className="flex flex-col">
            <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/70 px-2.5 py-0.5 text-[8px] font-bold text-[#5a3fdb] backdrop-blur-sm sm:text-[9px] lg:text-[10px]">
              <ShieldCheck className="h-2.5 w-2.5" />
              Trusted by forward-thinking businesses
            </div>

            <h3 className="mt-1.5 font-heading text-[11px] font-extrabold leading-tight text-black sm:text-[13px] lg:text-[14px]">
              Accelerating global expansion through{" "}
              <span className="bg-gradient-to-r from-[#7E5BFF] to-[#B47BFF] bg-clip-text text-transparent">
                one unified payment ecosystem
              </span>
              .
            </h3>

            <div className="mt-2 grid grid-cols-4 gap-1 sm:grid-cols-7 sm:gap-1.5">
              {AGG_TRUST_LOGOS_ROW_1.concat(AGG_TRUST_LOGOS_ROW_2).map((src, i) => (
                <div
                  key={i}
                  className="flex h-6 items-center justify-center rounded bg-white/80 px-1.5 backdrop-blur-sm sm:h-7">
                  <Image
                    src={src}
                    alt="Payment partner"
                    width={70}
                    height={26}
                    className="h-3.5 w-auto object-contain sm:h-4"
                  />
                </div>
              ))}
            </div>

            <div className="mt-2 flex items-center gap-1.5 text-[8px] text-[#515A5E] sm:text-[9px]">
              <ShieldCheck className="h-2.5 w-2.5 flex-shrink-0 text-[#8169FF]" />
              <span className="font-semibold text-[#1f2230]">
                Secure. Reliable. Compliant.
              </span>
              <span className="text-[#8169FF]">|</span>
              <span>Enterprise-Grade Infrastructure</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

