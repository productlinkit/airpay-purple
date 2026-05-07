import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Contact Sales — Let's build your payment growth",
  description:
    "Get in touch with the Airpay team. Schedule a call, message us on WhatsApp, or email business@airpay.mobi.",
};

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "business@airpay.mobi",
    href: "mailto:business@airpay.mobi",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+XX XXX XXXX",
    href: "https://wa.me/0000000000",
  },
  {
    icon: Phone,
    label: "Sales",
    value: "+XX XXX XXXX",
    href: "tel:+0000000000",
  },
];

const offices = [
  { city: "Jakarta", country: "Indonesia" },
  { city: "Mumbai", country: "India" },
  { city: "Vientiane", country: "Laos" },
  { city: "Hanoi", country: "Vietnam" },
];

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const socials = [
  { Icon: LinkedInIcon, label: "LinkedIn" },
  { Icon: XIcon, label: "X" },
  { Icon: InstagramIcon, label: "Instagram" },
  { Icon: FacebookIcon, label: "Facebook" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Simplifying Payments for Digital Businesses."
          description="Connect, collect, and scale through Airpay’s integrated DCB and digital payment network."
        />

        {/* Channels bento */}
        <section className="mt-4 grid grid-cols-1 gap-4 px-4 sm:gap-6 sm:px-6 lg:mt-6 lg:grid-cols-3 lg:px-20">
          {channels.map((c, i) => (
            <ScrollReveal key={c.label} delay={i * 100}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  c.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="group flex h-full items-center gap-5 rounded-[24px] bg-[#E4EEFA] p-6 sm:p-8 lg:rounded-[30px] transition-all hover:bg-[#8169FF] hover:shadow-xl">
                <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-[#8169FF] transition-transform group-hover:scale-110">
                  <c.icon className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <div className="text-[12px] font-bold uppercase tracking-wider text-[#8169FF] transition-colors group-hover:text-white/80">
                    {c.label}
                  </div>
                  <div className="mt-1 font-heading text-[18px] font-bold text-black transition-colors group-hover:text-white">
                    {c.value}
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-[#8169FF] transition-all group-hover:translate-x-1 group-hover:text-white" />
              </a>
            </ScrollReveal>
          ))}
        </section>

        {/* Form + offices */}
        <section className="mt-4 grid grid-cols-1 gap-4 px-4 sm:gap-6 sm:px-6 lg:mt-6 lg:grid-cols-3 lg:px-20">
          {/* Contact form (2fr) */}
          <ScrollReveal className="lg:col-span-2">
            <div className="rounded-[24px] bg-[#F2F2F2] p-6 sm:p-8 lg:rounded-[30px] lg:p-10 transition-all hover:shadow-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#8169FF]/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider text-[#8169FF]">
                Send us a message
              </div>
              <h2 className="mt-4 font-heading text-[28px] font-bold text-black">
                Let’s Grow Your Payment Business Together
              </h2>
              <p className="mt-2 text-[15px] text-[#2b2f38]">
                Tell us about your business needs, target markets, and payment
                requirements.
              </p>

              <form className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Full name" placeholder="Jane Smith" />
                <Field
                  label="Business email"
                  placeholder="jane@company.com"
                  type="email"
                />
                <Field label="Company" placeholder="Company name" />
                <Field label="Country" placeholder="Where are you based?" />
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-[13px] font-bold text-black">
                    What kind of product?
                  </label>
                  <select
                    defaultValue=""
                    className="w-full cursor-pointer appearance-none rounded-2xl border-2 border-transparent bg-white bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22%238169FF%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22><polyline%20points=%226%209%2012%2015%2018%209%22/></svg>')] bg-[length:18px_18px] bg-[right_1rem_center] bg-no-repeat p-4 pr-12 text-[14px] text-black outline-none transition-all focus:border-[#8169FF] focus:shadow-[0_8px_24px_rgba(128,105,255,0.15)]">
                    <option value="" disabled>
                      Select a product
                    </option>
                    {products.map((p) => (
                      <option key={p.slug} value={p.slug}>
                        {p.name}
                      </option>
                    ))}
                    <option value="other">Other / Not sure yet</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-[13px] font-bold text-black">
                    What can we help with?
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project — markets, payment methods, expected volumes…"
                    className="w-full rounded-2xl border-2 border-transparent bg-white p-4 text-[14px] text-black outline-none transition-all placeholder:text-[#9ca3af] focus:border-[#8169FF] focus:shadow-[0_8px_24px_rgba(128,105,255,0.15)]"
                  />
                </div>
                <div className="flex flex-col items-start justify-between gap-4 sm:col-span-2 sm:flex-row sm:items-center">
                  <p className="text-[12px] text-[#515A5E]">
                    By submitting, you agree to our Privacy Policy.
                  </p>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-full bg-[#8169FF] px-9 py-3 text-[14px] font-bold text-white transition-all hover:scale-105 hover:bg-[#6952e6] hover:shadow-[0_10px_24px_rgba(128,105,255,0.35)]">
                    Send message
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </div>
          </ScrollReveal>

          {/* Offices + socials column (1fr) */}
          <ScrollReveal delay={120} className="lg:col-span-1">
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-[24px] bg-[#E4EEFA] p-6 sm:p-8 lg:rounded-[30px] transition-all hover:shadow-xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#8169FF]/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider text-[#8169FF]">
                  Offices
                </div>
                <h3 className="mt-4 font-heading text-[20px] font-bold text-black">
                  Where to find us
                </h3>
                <ul className="mt-5 space-y-3">
                  {offices.map((o) => (
                    <li
                      key={o.city}
                      className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#A486FF]/15 text-[#8169FF]">
                        <MapPin className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="text-[14px] font-bold text-black">
                          {o.city}
                        </div>
                        <div className="text-[12px] text-[#515A5E]">
                          {o.country}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-[30px] p-8 text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #8169FF 0%, #A486FF 100%)",
                }}>
                <span className="pointer-events-none absolute -top-20 -right-16 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
                <div className="relative">
                  <div className="text-[12px] font-bold uppercase tracking-wider text-white/85">
                    Follow us
                  </div>
                  <h3 className="mt-3 font-heading text-[20px] font-bold">
                    Stay in the loop
                  </h3>
                  <p className="mt-2 text-[13px] text-white/85">
                    Product updates, partnerships, and news from the Airpay
                    team.
                  </p>
                </div>
                <div className="relative mt-6 flex gap-3">
                  {socials.map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 transition-all hover:bg-white hover:text-[#8169FF] hover:scale-110">
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Decorative illustration band */}
        <section className="mt-4 px-4 sm:px-6 lg:mt-6 lg:px-20">
          <ScrollReveal>
            <div
              className="relative grid grid-cols-1 items-stretch gap-0 overflow-hidden rounded-[24px] lg:grid-cols-[1.2fr_1fr] lg:rounded-[30px]"
              style={{
                background: "linear-gradient(135deg, #9EC6FE 0%, #A486FF 100%)",
              }}>
              <span className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
              <div className="relative flex flex-col items-start justify-center p-7 text-black sm:p-10 lg:py-12 lg:pl-12 lg:pr-8">
                <h2 className="font-heading text-[36px] font-extrabold leading-[1.1]">
                  Schedule a Consultation
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-[#1f2230]">
                  Book a session with our payment specialists to discuss your
                  business needs, integration flow, and market expansion
                  opportunities.
                </p>
                <a
                  href="https://wa.me/0000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-7 inline-flex items-center gap-3 rounded-full bg-white py-2 pl-7 pr-2 text-[15px] font-bold text-[#8169FF] transition-all hover:scale-105">
                  Schedule a call
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8169FF] text-white transition-transform group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              </div>
              <div className="relative h-[280px] w-full sm:h-[360px] lg:h-[420px]">
                <Image
                  src="/images/photos/image_calendar.webp"
                  alt="Schedule a consultation"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[13px] font-bold text-black">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border-2 border-transparent bg-white p-4 text-[14px] text-black outline-none transition-all placeholder:text-[#9ca3af] focus:border-[#8169FF] focus:shadow-[0_8px_24px_rgba(128,105,255,0.15)]"
      />
    </label>
  );
}
