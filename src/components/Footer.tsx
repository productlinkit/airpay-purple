import Image from "next/image";
import { cn } from "@/lib/utils";

const footerColumns: { title: string; links: string[] }[] = [
  {
    title: "Solutions",
    links: [
      "Digital Carrier Billing (DCB)",
      "Digital Payments (Pay-In & Pay-Out)",
      "Billing Infrastructure",
      "EDC Payment Solutions",
      "Payment Link",
    ],
  },
  {
    title: "Company",
    links: ["About Us", "Careers"],
  },
  {
    title: "Support",
    links: ["Help Center", "Documentation", "API Status"],
  },
  {
    title: "Resources",
    links: ["Case Studies", "Blog", "Insights"],
  },
  {
    title: "Contact",
    links: ["Sales", "Support"],
  },
];

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socialIcons = [
  { Icon: LinkedInIcon, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer
      className={cn(
        "mx-4 mt-4 rounded-t-[24px] bg-gradient-to-br from-[#8169FF] to-[#A486FF] px-6 pt-10 pb-6 text-white sm:mx-6 sm:rounded-t-[30px] sm:px-10 sm:pt-12 lg:mx-20 lg:mt-6 lg:px-14 lg:pt-14"
      )}
    >
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-[1.1fr_2fr_1fr_1fr_1fr_1fr] lg:gap-10">
        {/* Logo + socials column */}
        <div>
          <Image
            src="/images/airpay-logo.png"
            alt="Airpay logo"
            width={1000}
            height={284}
            className="h-auto w-[150px] brightness-0 invert"
          />
          <div className="mt-6 flex gap-3">
            {socialIcons.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-all hover:bg-white hover:text-[#8169FF] hover:scale-110"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h4 className="mb-5 font-heading text-[14px] font-bold uppercase tracking-wider text-white">
              {col.title}
            </h4>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[14px] text-white/80 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 border-t border-white/20 pt-5 text-[13px] text-white/70">
        Airpay © 2026. All rights reserved.
      </div>
    </footer>
  );
}
