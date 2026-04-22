"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { HeroParticles } from "./HeroParticles";
import { Nav, GetStartedButton } from "./Nav";
import { MobileMenu } from "./MobileMenu";

interface Slide {
  title: string;
  body: string;
  image: string;
  buttonText: string;
}

const slides: Slide[] = [
  {
    title: "Powering Global Digital Payments with One Integration",
    body: "Airpay is a global digital payments platform that enables merchants to accept payments through Direct Carrier Billing and multiple payment methods worldwide with a single integration.",
    image: "/images/illustration/illustration01.webp",
    buttonText: "Get Started",
  },
  {
    title: "Airpay Apply for DCB",
    body: "Enable mobile carrier billing and let users pay directly through their mobile phone bills. With one integration, access multiple telecom operators and unlock new revenue opportunities across global markets.",
    image: "/images/illustration/illustration02.webp",
    buttonText: "Get Started",
  },
  {
    title: "Airpay Apply for Digital Payment",
    body: "Accept payments and send payouts globally with a single API. Airpay supports multiple payment methods and local rails, helping businesses scale faster and expand into new markets seamlessly.",
    image: "/images/illustration/illustration03.webp",
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
    <div className="px-4 pt-4 sm:px-6 sm:pt-6 lg:px-20 lg:pt-10">
      <div
        className="relative h-[640px] overflow-hidden rounded-[28px] sm:h-[720px] sm:rounded-[36px] lg:h-[820px] lg:rounded-[40px]"
        style={{
          background: "linear-gradient(135deg, #9EC6FE 0%, #A486FF 100%)",
        }}
      >
        {/* Animated background particles */}
        <HeroParticles />

        {/* Logo pill tab — top-left */}
        <div
          className="absolute top-0 left-0 z-50 flex h-[80px] items-center bg-white pl-5 pr-10 sm:h-[100px] sm:pl-8 sm:pr-14 lg:h-[110px] lg:pl-12 lg:pr-16"
          style={{
            borderTopLeftRadius: 28,
            borderBottomRightRadius: 50,
          }}
        >
          <Link href="/" className="transition-transform hover:scale-105">
            <Image
              src="/images/logo_airpay.webp"
              alt="Airpay"
              width={170}
              height={50}
              className="h-auto w-[120px] sm:w-[140px] lg:w-[160px]"
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
          className="absolute top-0 right-0 z-50 flex h-[80px] items-center bg-white pl-10 pr-5 sm:h-[100px] sm:pl-14 sm:pr-6 lg:hidden"
          style={{
            borderTopRightRadius: 28,
            borderBottomLeftRadius: 50,
          }}
        >
          <MobileMenu />
        </div>

        {/* Artwork layer (rises on mount). Kept separate from the nav/logo
            pills so the animation's transform doesn't create a stacking
            context that traps the nav below the mega-menu backdrop. */}
        <div className="animate-hero-rise absolute inset-0">
        {/* Slides */}
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
            {/* Right illustration */}
            <div
              className={cn(
                "absolute inset-y-0 right-0 z-10 w-[60%] opacity-30 sm:w-[55%] sm:opacity-100",
                i === currentSlide && "animate-hero-image"
              )}
            >
              <div className="relative h-full w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={i === 0}
                  className="object-contain object-right-bottom drop-shadow-[0_12px_30px_rgba(80,60,180,0.25)]"
                />
              </div>
            </div>

            {/* Left text */}
            <div
              className={cn(
                "relative z-20 flex h-full w-full flex-col justify-center px-6 pt-[100px] sm:w-3/4 sm:px-10 sm:pt-[110px] lg:w-1/2 lg:pl-24 lg:pr-8",
                i === currentSlide && "animate-hero-text"
              )}
            >
              <div className="max-w-[560px]">
                <h2 className="text-[28px] font-extrabold leading-[1.1] text-black sm:text-[40px] lg:text-[52px] lg:leading-[1.08]">
                  {slide.title}
                </h2>
                <p className="mt-4 text-[14px] leading-[1.7] text-[#2b2f38] sm:mt-6 sm:text-[16px] lg:text-[17px] lg:leading-[1.75]">
                  {slide.body}
                </p>
                <button
                  type="button"
                  className="group mt-6 inline-flex items-center gap-2 rounded-full border-2 border-[#8169FF] bg-white py-1.5 pl-6 pr-1.5 text-[14px] font-semibold text-[#8169FF] transition-all hover:bg-[#8169FF] hover:text-white hover:scale-105 hover:shadow-[0_10px_28px_rgba(128,105,255,0.35)] sm:mt-8 sm:py-2 sm:pl-7 sm:pr-2 sm:text-[15px] lg:mt-10 lg:pl-8 lg:text-[16px]"
                >
                  {slide.buttonText}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8169FF] text-white transition-all group-hover:bg-white group-hover:text-[#8169FF] group-hover:translate-x-1 sm:h-9 sm:w-9 lg:h-10 lg:w-10">
                    <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Prev / Next Arrows */}
        <div className="absolute bottom-6 right-6 z-20 flex gap-2 sm:bottom-8 sm:right-8 sm:gap-3 lg:bottom-12 lg:right-12">
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

        {/* Info tab — bottom-left (hidden on mobile) */}
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
        </div>
      </div>
    </div>
  );
}
