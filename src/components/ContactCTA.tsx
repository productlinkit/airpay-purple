import { ArrowRight, Mail, Phone } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function ContactCTA() {
  return (
    <section className="mt-4 px-4 sm:px-6 lg:mt-6 lg:px-20">
      <ScrollReveal>
        <div
          className="relative overflow-hidden rounded-[24px] p-7 text-white sm:p-10 lg:rounded-[30px] lg:p-14"
          style={{
            background:
              "linear-gradient(135deg, #8169FF 0%, #A486FF 100%)",
          }}
        >
          {/* Decorative blobs */}
          <span className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <span className="pointer-events-none absolute -bottom-24 left-12 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid grid-cols-1 items-end gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
            <div>
              <h2 className="font-heading text-[28px] font-extrabold leading-[1.15] text-white sm:text-[36px] lg:text-[44px] lg:leading-[1.1]">
                Let&apos;s build your payment growth together
              </h2>
              <p className="mt-4 text-[16px] font-semibold text-white/90 sm:text-[18px] lg:mt-5">
                Payments made simple. Growth made possible.
              </p>
              <p className="mt-3 max-w-[640px] text-[14px] leading-relaxed text-white/85 sm:text-[16px]">
                Airpay enables businesses to accept payments and send payouts
                through a unified platform.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/6287781584555"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 rounded-2xl bg-white/15 p-5 backdrop-blur-md transition-all hover:bg-white hover:text-[#8169FF] hover:scale-[1.02]"
              >
                <span className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/25 text-white transition-colors group-hover:bg-[#8169FF]/15 group-hover:text-[#8169FF]">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[12px] font-bold uppercase tracking-wider opacity-80">
                      Contact Sales
                    </span>
                    <span className="text-[15px] font-semibold">
                      WhatsApp · +XX XXX XXXX
                    </span>
                  </span>
                </span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="mailto:business@airpay.mobi"
                className="group flex items-center justify-between gap-6 rounded-2xl bg-white/15 p-5 backdrop-blur-md transition-all hover:bg-white hover:text-[#8169FF] hover:scale-[1.02]"
              >
                <span className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/25 text-white transition-colors group-hover:bg-[#8169FF]/15 group-hover:text-[#8169FF]">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[12px] font-bold uppercase tracking-wider opacity-80">
                      Email
                    </span>
                    <span className="text-[15px] font-semibold">
                      business@airpay.mobi
                    </span>
                  </span>
                </span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
