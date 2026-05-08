"use client";

import { useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
  Radio,
  Wallet,
  Database,
  CreditCard,
  Globe,
  Code2,
  Braces,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface MegaItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

interface MegaConfig {
  columnTitle: string;
  items: MegaItem[];
  featured?: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
  };
}

const productsMega: MegaConfig = {
  columnTitle: "Products",
  featured: {
    eyebrow: "Featured",
    title: "Payment Aggregator",
    description: "One integration. Every payment method.",
    cta: "Schedule a demo",
  },
  items: [
    {
      icon: Radio,
      title: "Digital Carrier Billing (DCB)",
      description: "Let users pay via their phone bill",
      href: "/products/direct-carrier-billing",
    },
    {
      icon: Wallet,
      title: "Digital Payments (Pay-In & Pay-Out)",
      description: "Accept payments, send payouts globally",
      href: "/products/digital-payments",
    },
    {
      icon: Database,
      title: "AirPay Billing Infrastructure",
      description: "Subscriptions, invoicing, reconciliation",
      href: "/products/billing-infrastructure",
    },
    {
      icon: CreditCard,
      title: "EDC Payment Solutions",
      description: "In-store terminals and acquiring",
      href: "/products/edc-payment-solutions",
    },
    {
      icon: Globe,
      title: "Cross-Border Payments",
      description: "Local rails in dozens of markets",
      href: "/products/cross-border-payments",
    },
  ],
};

const developersMega: MegaConfig = {
  columnTitle: "Developers",
  featured: {
    eyebrow: "For Builders",
    title: "Build with Airpay APIs",
    description: "Ship payments in hours, not months.",
    cta: "Read the docs",
  },
  items: [
    {
      icon: Code2,
      title: "API for Digital Carrier Billing (DCB)",
      description: "Integrate telco billing in one call",
      href: "/products/direct-carrier-billing",
    },
    {
      icon: Braces,
      title: "API for Digital Payment",
      description: "Unified pay-in & pay-out endpoints",
      href: "/products/digital-payments",
    },
  ],
};

interface NavItemConfig {
  label: string;
  mega?: MegaConfig;
  href?: string;
}

const navItems: NavItemConfig[] = [
  { label: "Products", mega: productsMega },
  { label: "Developers", mega: developersMega },
  { label: "Company", href: "/about" },
  { label: "Contact", href: "/contact" },
];

interface NavProps {
  variant?: "hero" | "sticky";
}

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function Nav({ variant = "hero" }: NavProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <>
      <ul className="flex items-center gap-8">
        {navItems.map((item) => {
          const isOpen = openMenu === item.label;
          return (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.mega && setOpenMenu(item.label)}
              onMouseLeave={() => item.mega && setOpenMenu(null)}
            >
              {item.mega ? (
                <button
                  type="button"
                  className={cn(
                    "flex items-center gap-1 text-[15px] font-semibold transition-colors",
                    isOpen ? "text-[#8169FF]" : "text-black hover:text-[#8169FF]"
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
              ) : (
                <Link
                  href={item.href ?? "#"}
                  className="text-[15px] font-semibold text-black transition-colors hover:text-[#8169FF]"
                >
                  {item.label}
                </Link>
              )}

              {item.mega && (
                <MegaPanel
                  open={isOpen}
                  config={item.mega}
                  variant={variant}
                />
              )}
            </li>
          );
        })}
      </ul>

      <MegaBackdrop open={openMenu !== null} />
    </>
  );
}

function MegaBackdrop({ open }: { open: boolean }) {
  const isClient = useIsClient();
  if (!isClient) return null;
  return createPortal(
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-30 bg-black/30 backdrop-blur-md transition-opacity duration-300",
        open ? "opacity-100" : "opacity-0"
      )}
    />,
    document.body
  );
}

function MegaPanel({
  open,
  config,
  variant,
}: {
  open: boolean;
  config: MegaConfig;
  variant: "hero" | "sticky";
}) {
  const hasFeatured = !!config.featured;
  return (
    <div
      className={cn(
        "absolute left-1/2 top-full z-40 -translate-x-1/2 pt-5 transition-all duration-200",
        open
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      )}
    >
      <div
        className={cn(
          "rounded-[28px] bg-white p-5 shadow-[0_24px_70px_rgba(80,60,180,0.3)]",
          hasFeatured
            ? "grid w-[780px] grid-cols-[260px_1fr] gap-5"
            : "w-[460px]",
          variant === "hero" && "mt-1"
        )}
      >
        {config.featured && (
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#8169FF] to-[#A486FF] p-6 text-white">
            <span className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-white/15 blur-3xl" />
            <span className="pointer-events-none absolute -bottom-24 -left-12 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
            <div className="relative flex h-full flex-col">
              <div className="text-[11px] font-bold uppercase tracking-wider text-white/85">
                {config.featured.eyebrow}
              </div>
              <h3 className="mt-5 font-heading text-[22px] font-extrabold leading-[1.2]">
                {config.featured.title}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-white/90">
                {config.featured.description}
              </p>
              <button
                type="button"
                className="group mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-bold text-[#8169FF] transition-transform hover:scale-105"
              >
                {config.featured.cta}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        )}

        <div>
          <div className="mb-3 px-3 text-[11px] font-bold uppercase tracking-wider text-gray-500">
            {config.columnTitle}
          </div>
          <ul className="flex flex-col gap-1">
            {config.items.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href ?? "#"}
                  className="group flex items-start gap-3 rounded-2xl p-3 transition-all hover:bg-[#E4EEFA]"
                >
                  <span className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#A486FF]/15 text-[#8169FF] transition-transform group-hover:scale-110">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-heading text-[14px] font-bold text-black transition-colors group-hover:text-[#8169FF]">
                      {item.title}
                    </div>
                    <div className="mt-0.5 text-[12px] text-gray-500">
                      {item.description}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* Shared "Get Started" button for navbars */
export function GetStartedButton({ size = "md" }: { size?: "md" | "sm" }) {
  return (
    <Link
      href="/contact"
      className={cn(
        "group inline-flex items-center gap-3 rounded-full bg-[#8169FF] font-bold text-white transition-all hover:scale-105 hover:shadow-[0_10px_28px_rgba(128,105,255,0.4)]",
        size === "md" ? "py-1.5 pl-6 pr-1.5 text-[15px]" : "py-1 pl-5 pr-1 text-[14px]"
      )}
    >
      Get Started
      <span
        className={cn(
          "flex items-center justify-center rounded-full bg-white text-[#8169FF] transition-transform group-hover:translate-x-1",
          size === "md" ? "h-9 w-9" : "h-8 w-8"
        )}
      >
        <ArrowRight className={size === "md" ? "h-4 w-4" : "h-3.5 w-3.5"} />
      </span>
    </Link>
  );
}
