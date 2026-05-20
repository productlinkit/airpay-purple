"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubItem {
  label: string;
  href: string;
}

interface MobileNavItem {
  label: string;
  href?: string;
  items?: SubItem[];
}

const items: MobileNavItem[] = [
  {
    label: "Products",
    items: [
      {
        label: "Digital Carrier Billing (DCB)",
        href: "/products/direct-carrier-billing",
      },
      {
        label: "Payments & Disbursements",
        href: "/products/digital-payments",
      },
      {
        label: "AirPay Billing Infrastructure",
        href: "/products/billing-infrastructure",
      },
      {
        label: "EDC Payment Solutions",
        href: "/products/edc-payment-solutions",
      },
      {
        label: "Payment Link",
        href: "/products/payment-link",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "API for Digital Carrier Billing (DCB)",
        href: "https://doc.airpay.mobi/dcb-intro",
      },
      { label: "API for Digital Payment", href: "/products/digital-payments" },
    ],
  },
  { label: "Company", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

interface MobileMenuProps {
  size?: "md" | "sm";
}

export function MobileMenu({ size = "md" }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const isClient = useIsClient();

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setExpanded(null);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className={cn(
          "flex items-center justify-center rounded-full bg-[#8169FF] text-white shadow-[0_8px_24px_rgba(128,105,255,0.4)] transition-transform hover:scale-105",
          size === "md" ? "h-12 w-12" : "h-11 w-11",
        )}>
        <Menu className={size === "md" ? "h-5 w-5" : "h-[18px] w-[18px]"} />
      </button>

      {isClient &&
        createPortal(
          <div
            className={cn(
              "fixed inset-0 z-[100] transition-opacity duration-300",
              open ? "opacity-100" : "pointer-events-none opacity-0",
            )}>
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/45 backdrop-blur-md"
              onClick={close}
            />

            {/* Drawer */}
            <div
              className={cn(
                "absolute right-3 top-3 bottom-3 left-3 flex max-w-[400px] flex-col overflow-y-auto rounded-[28px] bg-white p-6 shadow-2xl transition-transform duration-300 ease-out",
                open ? "translate-x-0" : "translate-x-[110%]",
              )}>
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  onClick={close}
                  className="transition-transform hover:scale-105">
                  <Image
                    src="/images/airpay-logo.png"
                    alt="Airpay"
                    width={1000}
                    height={284}
                    className="h-auto w-[110px]"
                  />
                </Link>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F2F2] text-black transition-colors hover:bg-[#E4EEFA] hover:text-[#8169FF]">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <ul className="mt-8 space-y-1">
                {items.map((item) => {
                  const isExpanded = expanded === item.label;
                  return (
                    <li key={item.label}>
                      {item.items ? (
                        <>
                          <button
                            type="button"
                            onClick={() =>
                              setExpanded(isExpanded ? null : item.label)
                            }
                            className={cn(
                              "flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left text-[16px] font-bold transition-colors",
                              isExpanded
                                ? "bg-[#E4EEFA] text-[#8169FF]"
                                : "text-black hover:bg-[#F2F2F2]",
                            )}>
                            {item.label}
                            <ChevronDown
                              className={cn(
                                "h-5 w-5 transition-transform",
                                isExpanded && "rotate-180",
                              )}
                            />
                          </button>
                          <div
                            className={cn(
                              "grid overflow-hidden transition-[grid-template-rows] duration-300",
                              isExpanded
                                ? "grid-rows-[1fr]"
                                : "grid-rows-[0fr]",
                            )}>
                            <ul className="min-h-0 space-y-1 pl-4 pt-1">
                              {item.items.map((sub) => {
                                const isExternal = sub.href.startsWith("http");
                                return (
                                  <li key={sub.label}>
                                    <Link
                                      href={sub.href}
                                      onClick={close}
                                      target={isExternal ? "_blank" : undefined}
                                      rel={
                                        isExternal
                                          ? "noopener noreferrer"
                                          : undefined
                                      }
                                      className="block rounded-xl border-l-2 border-[#A486FF]/30 px-4 py-2.5 text-[14px] font-semibold text-[#2b2f38] transition-colors hover:border-[#8169FF] hover:bg-[#E4EEFA] hover:text-[#8169FF]">
                                      {sub.label}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </>
                      ) : (
                        <Link
                          href={item.href ?? "#"}
                          onClick={close}
                          className="block rounded-2xl px-4 py-4 text-[16px] font-bold text-black transition-colors hover:bg-[#F2F2F2] hover:text-[#8169FF]">
                          {item.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>

              <Link
                href="/contact"
                onClick={close}
                className="group mt-auto inline-flex items-center justify-between rounded-full bg-[#8169FF] py-3 pl-6 pr-3 text-[15px] font-bold text-white shadow-[0_10px_24px_rgba(128,105,255,0.35)] transition-all hover:scale-[1.02]">
                Get Started
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#8169FF] transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
