"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  User as UserIcon,
  RadioTower,
  Smartphone,
  CreditCard as CardIcon,
  Users,
  BarChart3,
  Wallet,
  QrCode,
  CalendarClock,
  Store,
  Landmark,
  TrendingUp,
  Globe,
  ShieldCheck,
  Zap,
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
  { kind: "dcb" },
  { kind: "aggregator" },
  {
    kind: "legacy",
    title: "Powering Global Digital Payments with One Integration",
    body: "Airpay is a global digital payments platform that enables merchants to accept payments through Direct Carrier Billing and multiple payment methods worldwide with a single integration.",
    image: "/images/illustration/illustration01.webp",
    buttonText: "Get Started",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNext = useCallback(
    () => setCurrentSlide((p) => (p + 1) % slides.length),
    []
  );
  const goToPrev = useCallback(
    () => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length),
    []
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
        }}
      >

        {/* Logo pill tab — top-left */}
        <div
          className="absolute top-0 left-0 z-50 flex h-[64px] items-center bg-white pl-4 pr-8 sm:h-[100px] sm:pl-8 sm:pr-14 lg:h-[110px] lg:pl-12 lg:pr-16"
          style={{
            borderTopLeftRadius: 24,
            borderBottomRightRadius: 40,
          }}
        >
          <Link href="/" className="transition-transform hover:scale-105">
            <Image
              src="/images/airpay-logo.svg"
              alt="Airpay"
              width={394}
              height={116}
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
          }}
        >
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
          }}
        >
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
                  : "opacity-0 translate-x-6 pointer-events-none"
              )}
            >
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
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/60 text-[#8169FF] backdrop-blur-sm transition-all hover:bg-white hover:scale-110 sm:h-[48px] sm:w-[48px] lg:h-[56px] lg:w-[56px]"
            >
              <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next slide"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/60 text-[#8169FF] backdrop-blur-sm transition-all hover:bg-white hover:scale-110 sm:h-[48px] sm:w-[48px] lg:h-[56px] lg:w-[56px]"
            >
              <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" />
            </button>
          </div>

          {/* Info tab — bottom-left (legacy slide only) */}
          {slides[currentSlide].kind === "legacy" && (
            <div
              className="absolute bottom-0 left-0 z-20 hidden max-w-[460px] bg-[#E4EEFA]/95 p-6 backdrop-blur-sm sm:block sm:p-8"
              style={{
                borderTopRightRadius: 60,
                borderBottomLeftRadius: 40,
              }}
            >
              <p className="text-[15px] leading-relaxed text-black sm:text-[16px]">
                Connected to{" "}
                <strong className="font-bold">1000 merchants</strong> across
                different verticals, through{" "}
                <strong className="font-bold">100 payment channels</strong>
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
          "absolute inset-y-0 right-0 z-10 hidden w-[55%] sm:block sm:opacity-100",
          active && "animate-hero-image"
        )}
      >
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
          active && "animate-hero-text"
        )}
      >
        <div className="max-w-[560px]">
          <h2 className="text-[24px] font-extrabold leading-[1.15] text-black sm:text-[40px] lg:text-[52px] lg:leading-[1.08]">
            {slide.title}
          </h2>
          <p className="mt-3 text-[13px] leading-[1.6] text-[#2b2f38] sm:mt-6 sm:text-[16px] lg:text-[17px] lg:leading-[1.75]">
            {slide.body}
          </p>
          <Link
            href="/contact"
            className="group mt-5 inline-flex items-center gap-2 rounded-full border-2 border-[#8169FF] bg-white py-1.5 pl-5 pr-1.5 text-[13px] font-semibold text-[#8169FF] transition-all hover:bg-[#8169FF] hover:text-white hover:scale-105 hover:shadow-[0_10px_28px_rgba(128,105,255,0.35)] sm:mt-8 sm:py-2 sm:pl-7 sm:pr-2 sm:text-[15px] lg:mt-10 lg:pl-8 lg:text-[16px]"
          >
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

const DCB_TRUST_LOGOS = [
  "/images/telco/telkomsel.png",
  "/images/telco/stc.png",
  "/images/telco/true.png",
  "/images/telco/etisalat.png",
];

const DCB_BENEFITS: { icon: typeof UserIcon; title: string; subtitle: string }[] =
  [
    {
      icon: TrendingUp,
      title: "Higher Conversion",
      subtitle: "Increase conversion\nup to 30%",
    },
    {
      icon: Globe,
      title: "Wider Reach",
      subtitle: "Access billions of\nmobile users",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Reliable",
      subtitle: "Enterprise-grade security\nand 99.9% uptime",
    },
    {
      icon: Zap,
      title: "Instant Settlement",
      subtitle: "Fast and reliable\npayouts",
    },
  ];

function DCBSlide() {
  return (
    <div className="absolute inset-0 px-5 pb-[80px] pt-[80px] sm:px-10 sm:pb-[210px] sm:pt-[120px] lg:pb-[210px] lg:pl-20 lg:pr-12 lg:pt-[130px]">
      <div className="grid h-full grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] lg:gap-8">
        {/* ── Left column ── */}
        <div className="relative z-20 flex flex-col">
          <span className="inline-flex w-fit items-center rounded-full bg-[#8169FF]/25 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#5a3fdb] backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-[11px]">
            DCB &amp; Merchant Aggregator Platform
          </span>

          <h2 className="mt-4 font-heading text-[26px] font-extrabold leading-[1.05] tracking-tight text-black sm:mt-5 sm:text-[44px] lg:text-[56px]">
            Direct Carrier Billing
            <br />
            made{" "}
            <span className="bg-gradient-to-r from-[#FF6FB5] to-[#FF8AA9] bg-clip-text text-transparent">
              simple
            </span>
          </h2>

          <p className="mt-3 max-w-[480px] text-[13px] leading-relaxed text-[#2b2f38] sm:mt-5 sm:text-[15px] lg:text-[16px]">
            Enable mobile payments through Direct Carrier Billing. Reach more
            users, increase conversions, and grow your revenue across emerging
            markets.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2 sm:mt-7">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#8169FF] py-1.5 pl-5 pr-1.5 text-[13px] font-bold text-white transition-all hover:scale-105 hover:shadow-[0_10px_28px_rgba(128,105,255,0.4)] sm:py-2 sm:pl-6 sm:pr-2 sm:text-[14px]"
            >
              Start Integration
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#8169FF] transition-transform group-hover:translate-x-1 sm:h-8 sm:w-8">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-2 py-2 text-[13px] font-bold text-[#2b2f38] transition-colors hover:text-[#8169FF] sm:px-3 sm:text-[14px]"
            >
              Talk to Sales
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-auto grid max-w-[520px] grid-cols-3 gap-2 pt-5 sm:gap-4 sm:pt-6">
            <DCBLeftFeature icon={CardIcon} title="No card" subtitle="required" />
            <DCBLeftFeature icon={Users} title="Reach" subtitle="unbanked users" />
            <DCBLeftFeature
              icon={BarChart3}
              title="Works across"
              subtitle="telco operators"
            />
          </div>
        </div>

        {/* ── Right column ── */}
        <div className="relative z-10 hidden flex-col gap-5 lg:flex">
          <DCBFlow />

          {/* Benefits pill row */}
          <div className="rounded-[24px] bg-white/55 px-5 py-4 backdrop-blur-md ring-1 ring-white/40">
            <div className="grid grid-cols-4 gap-1">
              {DCB_BENEFITS.map((b, i) => (
                <div
                  key={b.title}
                  className={cn(
                    "flex items-start gap-2.5 px-2",
                    i < DCB_BENEFITS.length - 1 &&
                      "border-r border-[#8169FF]/15"
                  )}
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-[#8169FF]/15 text-[#5a3fdb]">
                    <b.icon className="h-4 w-4" />
                  </span>
                  <div className="leading-tight">
                    <div className="text-[12px] font-bold text-black">
                      {b.title}
                    </div>
                    <div className="mt-0.5 whitespace-pre-line text-[10px] text-[#2b2f38]/80">
                      {b.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom trust strip ── */}
      <div className="absolute bottom-[100px] left-4 right-4 z-20 hidden rounded-[24px] bg-white/85 px-6 py-4 shadow-[0_10px_40px_rgba(80,60,180,0.18)] backdrop-blur-md sm:block sm:bottom-[110px] sm:left-6 sm:right-6 lg:bottom-[110px] lg:left-20 lg:right-12 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 lg:flex-nowrap lg:gap-x-7">
          <p className="max-w-[210px] flex-shrink-0 text-[12px] leading-tight text-[#2b2f38] lg:text-[13px]">
            Trusted by leading digital businesses and powered by global telco
            partners
          </p>
          <TrustStat value="1000+" label="Merchants" />
          <TrustStat value="100+" label="Payment Channels" />
          <TrustStat value="20+" label="Countries" />
          <TrustStat value="99.5%" label="Success Rate" />
          <TrustStat value="10M+" label="Transactions Processed" />
          <div className="ml-auto hidden items-center gap-5 lg:flex">
            {DCB_TRUST_LOGOS.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="Telco partner"
                width={70}
                height={26}
                className="h-6 w-auto object-contain opacity-90"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DCBLeftFeature({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: typeof UserIcon;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-white/70 text-[#5a3fdb] shadow-[0_4px_14px_rgba(80,60,180,0.15)] backdrop-blur-sm sm:h-11 sm:w-11 sm:rounded-2xl">
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
      </span>
      <div className="leading-tight">
        <div className="text-[11px] font-bold text-black sm:text-[13px]">
          {title}
        </div>
        <div className="text-[10px] text-[#2b2f38]/80 sm:text-[12px]">
          {subtitle}
        </div>
      </div>
    </div>
  );
}

function TrustStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col leading-tight">
      <span className="font-heading text-[18px] font-extrabold text-[#5a3fdb] lg:text-[20px]">
        {value}
      </span>
      <span className="text-[10px] text-[#2b2f38]/80 lg:text-[11px]">
        {label}
      </span>
    </div>
  );
}

function DCBFlow() {
  return (
    <div className="relative flex flex-1 items-center justify-center">
      <div className="flex w-full items-center justify-center">
        <DCBStep
          icon={UserIcon}
          title="User"
          subtitle="Chooses to pay&#10;via mobile billing"
        />
        <DCBArrow />
        {/* Center AirPay card */}
        <div className="relative z-10 mx-1 flex h-[280px] w-[160px] flex-col items-center justify-center rounded-[28px] bg-gradient-to-b from-[#8169FF] to-[#9F84FF] p-5 text-white shadow-[0_24px_60px_rgba(80,60,180,0.5)] ring-[3px] ring-white/50">
          <span className="pointer-events-none absolute inset-2 rounded-[24px] ring-1 ring-white/30" />
          <div className="relative flex h-14 w-14 items-center justify-center">
            <span className="font-heading text-[44px] font-extrabold leading-none">
              A
            </span>
            <span className="absolute bottom-[8px] left-1/2 h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-[#FF6FB5]" />
          </div>
          <div className="mt-2 font-heading text-[20px] font-extrabold">
            AirPay
          </div>
          <div className="mt-5 text-center text-[12px] font-bold leading-tight">
            AirPay API
          </div>
          <div className="mt-2 text-center text-[10px] leading-snug opacity-95">
            Single integration
            <br />
            for all operators
          </div>
        </div>
        <DCBArrow />
        <DCBStep
          icon={RadioTower}
          title="Telco Operators"
          subtitle="Connects to multiple&#10;mobile operators"
        />
        <DCBArrow />
        <DCBStep
          icon={Smartphone}
          title={"Charged to\nMobile Balance"}
          subtitle="Payment successful"
          badge
        />
      </div>
    </div>
  );
}

function DCBStep({
  icon: Icon,
  title,
  subtitle,
  badge = false,
}: {
  icon: typeof UserIcon;
  title: string;
  subtitle: string;
  badge?: boolean;
}) {
  return (
    <div className="flex h-[210px] w-[125px] flex-col items-center justify-start rounded-2xl bg-white/90 p-3 shadow-[0_10px_30px_rgba(80,60,180,0.2)] backdrop-blur-sm">
      <span className="relative mt-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#A486FF]/20 text-[#5a3fdb]">
        <Icon className="h-7 w-7" />
        {badge && (
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#5a3fdb] text-[9px] font-bold text-white">
            ✓
          </span>
        )}
      </span>
      <div className="mt-4 whitespace-pre-line text-center font-heading text-[13px] font-bold leading-tight text-black">
        {title}
      </div>
      <div className="mt-2 whitespace-pre-line text-center text-[10px] leading-snug text-[#2b2f38]/80">
        {subtitle}
      </div>
    </div>
  );
}

function DCBArrow() {
  return (
    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#5a3fdb] shadow-md">
      <ArrowRight className="h-4 w-4" />
    </span>
  );
}

/* ──────────────────────── Slide 3 — Aggregator hub ──────────────────────── */

const AGG_TRUST_LOGOS = [
  "/images/channels/Indonesia/OVO.png",
  "/images/channels/Indonesia/DANA.png",
  "/images/channels/Indonesia/GOPAY.png",
  "/images/channels/Indonesia/LinkAja.png",
];

function AggregatorSlide() {
  return (
    <div className="absolute inset-0 px-5 pb-[80px] pt-[80px] sm:px-10 sm:pb-[210px] sm:pt-[120px] lg:pb-[210px] lg:pl-20 lg:pr-12 lg:pt-[130px]">
      <div className="grid h-full grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] lg:gap-8">
        {/* ── Left column ── */}
        <div className="relative z-20 flex flex-col justify-center">
          <span className="inline-flex w-fit items-center rounded-full bg-[#8169FF]/25 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#5a3fdb] backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-[11px]">
            Merchant Aggregator Platform
          </span>

          <h2 className="mt-4 font-heading text-[24px] font-extrabold leading-[1.08] tracking-tight text-black sm:mt-5 sm:text-[42px] lg:text-[52px]">
            One Integration,
            <br />
            All Payment Methods
            <br />
            <span className="bg-gradient-to-r from-[#7E5BFF] via-[#B47BFF] to-[#FF7DB6] bg-clip-text text-transparent">
              More Growth
            </span>
          </h2>

          <p className="mt-3 max-w-[480px] text-[13px] leading-relaxed text-[#2b2f38] sm:mt-5 sm:text-[15px] lg:text-[16px]">
            Airpay connects you to 100+ payment channels including e-wallets,
            bank transfers, QR payments, cards, and more. Accept payments easily
            and scale your business globally.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2 sm:mt-7">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#8169FF] py-1.5 pl-5 pr-1.5 text-[13px] font-bold text-white transition-all hover:scale-105 hover:shadow-[0_10px_28px_rgba(128,105,255,0.4)] sm:py-2 sm:pl-6 sm:pr-2 sm:text-[14px]"
            >
              Get Started
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#8169FF] transition-transform group-hover:translate-x-1 sm:h-8 sm:w-8">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-2 py-2 text-[13px] font-bold text-[#2b2f38] transition-colors hover:text-[#8169FF] sm:px-3 sm:text-[14px]"
            >
              Talk to Sales
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ── Right hub-and-spoke ── */}
        <div className="relative z-10 hidden items-center justify-center lg:flex">
          <AggregatorHub />
        </div>
      </div>

      {/* ── Bottom trust strip (aggregator variant) ── */}
      <div className="absolute bottom-[100px] left-4 right-4 z-20 hidden rounded-[24px] bg-white/85 px-6 py-4 shadow-[0_10px_40px_rgba(80,60,180,0.18)] backdrop-blur-md sm:block sm:bottom-[110px] sm:left-6 sm:right-6 lg:bottom-[110px] lg:left-20 lg:right-12 lg:px-7">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 lg:flex-nowrap lg:gap-x-9">
          <AggIconStat icon={UserIcon} value="1000+" label="Merchants" />
          <AggIconStat
            icon={LayoutGridIcon}
            value="100+"
            label="Payment Channels"
          />
          <AggIconStat icon={Globe} value="20+" label="Countries" />
          <AggIconStat
            icon={ShieldCheck}
            value="99.5%"
            label="Success Rate"
          />
          <p className="hidden max-w-[210px] flex-shrink-0 text-[11px] leading-tight text-[#2b2f38] lg:block lg:text-[12px]">
            Trusted by leading businesses and powered by global partners
          </p>
          <div className="ml-auto hidden items-center gap-5 lg:flex">
            {AGG_TRUST_LOGOS.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="Payment partner"
                width={70}
                height={26}
                className="h-6 w-auto object-contain opacity-95"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LayoutGridIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

function AggIconStat({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#8169FF]/15 text-[#5a3fdb]">
        <Icon className="h-5 w-5" />
      </span>
      <div className="leading-tight">
        <div className="font-heading text-[18px] font-extrabold text-[#5a3fdb] lg:text-[20px]">
          {value}
        </div>
        <div className="text-[10px] text-[#2b2f38]/85 lg:text-[11px]">
          {label}
        </div>
      </div>
    </div>
  );
}

function AggregatorHub() {
  // Hub canvas: 540 x 500, center (270, 250).
  // 8 tiles evenly spaced at 45° around an ellipse (rx=210, ry=200).
  // Tile size 120x100 — top-left position = tile-center - (60, 50).
  type Tile = {
    label: string;
    icon?: typeof UserIcon;
    custom?: "VA";
    /** tile-center coords on the 540x500 canvas */
    cx: number;
    cy: number;
  };

  const tiles: Tile[] = [
    { label: "E-Wallets",          icon: Wallet,        cx: 270, cy: 50  }, // top
    { label: "QR Payments",        icon: QrCode,        cx: 419, cy: 109 }, // top-right
    { label: "Cards",              icon: CardIcon,      cx: 480, cy: 250 }, // right
    { label: "PayLater",           icon: CalendarClock, cx: 419, cy: 391 }, // bottom-right
    { label: "Retail Outlets",     icon: Store,         cx: 270, cy: 450 }, // bottom
    { label: "Virtual Accounts",   custom: "VA",        cx: 122, cy: 391 }, // bottom-left
    { label: "Direct Carrier\nBilling", icon: Smartphone, cx: 60, cy: 250 }, // left
    { label: "Bank Transfer",      icon: Landmark,      cx: 122, cy: 109 }, // top-left
  ];

  return (
    <div className="relative h-[500px] w-[540px]">
      {/* Dashed connector lines from center to each tile */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 540 500"
        fill="none"
      >
        {tiles.map((t) => (
          <line
            key={t.label}
            x1="270"
            y1="250"
            x2={t.cx}
            y2={t.cy}
            stroke="#8169FF"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            opacity="0.55"
          />
        ))}
      </svg>

      {/* Decorative dots */}
      <span className="absolute left-[40%] top-[8%] h-2 w-2 rounded-full bg-[#FF7DB6]/70" />
      <span className="absolute right-[6%] top-[40%] h-2 w-2 rounded-full bg-[#FFFFFF]/70" />
      <span className="absolute left-[6%] top-[58%] h-2.5 w-2.5 rounded-full bg-[#FF7DB6]/60" />
      <span className="absolute right-[12%] bottom-[12%] h-2 w-2 rounded-full bg-[#FF7DB6]/70" />

      {/* Center AirPay disc */}
      <div className="absolute left-1/2 top-1/2 z-10 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-full w-full rounded-full bg-gradient-to-br from-[#7E5BFF] to-[#B89BFF] p-[6px] shadow-[0_24px_60px_rgba(80,60,180,0.45)] ring-[3px] ring-white/60">
          <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#7E5BFF] via-[#9F7CFF] to-[#B89BFF] text-white">
            <div className="relative flex h-12 w-12 items-center justify-center">
              <span className="font-heading text-[36px] font-extrabold leading-none">
                A
              </span>
              <span className="absolute bottom-[6px] left-1/2 h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-[#FF6FB5]" />
            </div>
            <div className="mt-1 font-heading text-[18px] font-extrabold">
              AirPay
            </div>
            <div className="mt-1 text-[10px] font-semibold opacity-95">
              Your Business
            </div>
          </div>
        </div>
      </div>

      {/* Spoke tiles */}
      {tiles.map((t) => (
        <div
          key={t.label}
          style={{ top: t.cy - 50, left: t.cx - 60 }}
          className="absolute z-20 flex h-[100px] w-[120px] flex-col items-center justify-center rounded-2xl bg-white/95 p-2 text-center shadow-[0_10px_30px_rgba(80,60,180,0.2)] backdrop-blur-sm transition-transform hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(80,60,180,0.3)]"
        >
          {t.custom === "VA" ? (
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#8169FF] to-[#A486FF] font-heading text-[13px] font-extrabold text-white shadow-[0_4px_12px_rgba(80,60,180,0.3)]">
              VA
            </span>
          ) : (
            t.icon && (
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A486FF]/20 text-[#5a3fdb]">
                <t.icon className="h-5 w-5" />
              </span>
            )
          )}
          <span className="mt-2 whitespace-pre-line text-[11px] font-semibold leading-tight text-black">
            {t.label}
          </span>
        </div>
      ))}
    </div>
  );
}
