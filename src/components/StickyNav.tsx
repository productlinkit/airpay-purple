"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Nav, GetStartedButton } from "./Nav";
import { MobileMenu } from "./MobileMenu";

interface StickyNavProps {
  /** When true, the nav is always visible (no scroll trigger). */
  alwaysVisible?: boolean;
}

export function StickyNav({ alwaysVisible = false }: StickyNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (alwaysVisible) return;
    const onScroll = () => setScrolled(window.scrollY > 110);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysVisible]);

  const visible = alwaysVisible || scrolled;

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-center px-4 transition-all duration-500 ease-out sm:top-4 sm:px-6",
        visible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
      )}
    >
      {/* Mobile / tablet — rounded pill, full available width */}
      <div className="pointer-events-auto flex w-full items-center justify-between rounded-full bg-white py-2.5 pl-5 pr-2.5 shadow-[0_18px_50px_rgba(80,60,180,0.22)] sm:py-3 sm:pl-6 sm:pr-3 lg:hidden">
        <Link href="/" className="transition-transform hover:scale-105">
          <Image
            src="/images/logo_airpay.webp"
            alt="Airpay"
            width={140}
            height={40}
            className="h-auto w-[110px] sm:w-[120px]"
          />
        </Link>
        <MobileMenu size="sm" />
      </div>

      {/* Desktop — floating pill */}
      <div className="pointer-events-auto hidden items-center gap-8 rounded-full bg-white py-3 pl-6 pr-3 shadow-[0_18px_50px_rgba(80,60,180,0.22)] lg:flex">
        <Link href="/" className="mr-3 transition-transform hover:scale-105">
          <Image
            src="/images/logo_airpay.webp"
            alt="Airpay"
            width={140}
            height={40}
            className="h-auto w-[120px]"
          />
        </Link>

        <nav>
          <Nav variant="sticky" />
        </nav>

        <GetStartedButton size="sm" />
      </div>
    </div>
  );
}
