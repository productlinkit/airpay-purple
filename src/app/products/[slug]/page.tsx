import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/Footer";
import { ContactCTA } from "@/components/ContactCTA";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WhyChooseCard } from "@/components/WhyChooseCard";
import { AirpayForBusiness } from "@/components/AirpayForBusiness";
import { DigitalPaymentsFlow } from "@/components/DigitalPaymentsFlow";
import { BillingHero } from "@/components/BillingHero";
import { BillingFlow } from "@/components/BillingFlow";
import { PaymentLinkFlow } from "@/components/PaymentLinkFlow";
import { EDCHero } from "@/components/EDCHero";
import { EDCFeatures } from "@/components/EDCFeatures";
import { EDCFlow } from "@/components/EDCFlow";
import { products, getProductBySlug } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: `${product.name} — ${product.tagline}`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const others = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <PageHeader />
      <main>
        {/* Hero */}
        {product.slug === "billing-infrastructure" ? (
          <BillingHero />
        ) : product.slug === "edc-payment-solutions" ? (
          <EDCHero />
        ) : (
        <section className="px-4 pt-28 sm:px-6 sm:pt-32 lg:px-20">
          <ScrollReveal>
            <div
              className="relative overflow-hidden rounded-[24px] lg:rounded-[40px]"
              style={{
                background:
                  "linear-gradient(135deg, #9EC6FE 0%, #A486FF 100%)",
              }}
            >
              <span className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
              <span className="pointer-events-none absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

              <div className="relative grid grid-cols-1 items-stretch gap-0 lg:grid-cols-[1.2fr_1fr]">
                <div className="p-6 sm:p-10 lg:py-14 lg:pl-14 lg:pr-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/25 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-black backdrop-blur-sm sm:px-4 sm:text-[12px]">
                    <product.icon className="h-3.5 w-3.5" />
                    {product.eyebrow}
                  </div>
                  <h1 className="mt-4 font-heading text-[30px] font-extrabold leading-[1.1] text-black sm:mt-6 sm:text-[40px] lg:text-[52px] lg:leading-[1.05]">
                    {product.name}
                  </h1>
                  <p className="mt-3 text-[16px] font-semibold text-black sm:text-[18px] lg:mt-4 lg:text-[20px]">
                    {product.tagline}
                  </p>
                  <p className="mt-4 max-w-[560px] text-[14px] leading-relaxed text-[#1f2230] sm:text-[16px] lg:mt-5">
                    {product.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2 sm:gap-3 lg:mt-7">
                    {product.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-2 rounded-full bg-white/30 px-3 py-1.5 text-[12px] font-semibold text-black backdrop-blur-sm sm:px-4 sm:text-[13px]"
                      >
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3 lg:mt-8">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-3 rounded-full bg-[#8169FF] py-2 pl-6 pr-2 text-[14px] font-bold text-white transition-all hover:scale-105 hover:shadow-[0_10px_28px_rgba(128,105,255,0.4)] sm:pl-7 sm:text-[15px]"
                    >
                      Talk to Sales
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#8169FF] transition-transform group-hover:translate-x-1">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                    <Link
                      href="#features"
                      className="inline-flex items-center rounded-full border-2 border-[#8169FF] bg-white px-6 py-2.5 text-[14px] font-bold text-[#8169FF] transition-all hover:scale-105 sm:px-7 sm:text-[15px]"
                    >
                      Explore features
                    </Link>
                  </div>
                </div>

                <div className="relative h-[280px] w-full self-stretch sm:h-[360px] lg:h-auto lg:min-h-[520px]">
                  <Image
                    src={product.illustration}
                    alt={product.name}
                    fill
                    priority
                    className={
                      product.slug === "digital-payments"
                        ? "object-cover object-bottom"
                        : "object-cover"
                    }
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
        )}

        {/* Features bento */}
        {product.slug === "edc-payment-solutions" ? (
          <EDCFeatures />
        ) : product.features.length > 0 ? (
          <section id="features" className="mt-4 grid grid-cols-1 gap-4 px-4 sm:gap-6 sm:px-6 lg:mt-6 lg:grid-cols-2 lg:px-20">
            {product.features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 100}>
                <div className="group h-full rounded-[24px] bg-[#E4EEFA] p-6 sm:p-8 lg:rounded-[30px] transition-all hover:bg-[#8169FF] hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#8169FF] transition-colors group-hover:bg-white/25 group-hover:text-white">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-heading text-[22px] font-bold text-black transition-colors group-hover:text-white">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#2b2f38] transition-colors group-hover:text-white/90">
                    {f.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </section>
        ) : null}

        {/* How it works (full width) */}
        {product.slug === "digital-payments" ? (
          <DigitalPaymentsFlow />
        ) : product.slug === "billing-infrastructure" ? (
          <BillingFlow />
        ) : product.slug === "payment-link" ? (
          <PaymentLinkFlow />
        ) : product.slug === "edc-payment-solutions" ? (
          <EDCFlow />
        ) : product.steps.length === 0 ? null : (
          <section className="mt-4 px-4 sm:px-6 lg:mt-6 lg:px-20">
            <ScrollReveal>
              <div className="rounded-[24px] bg-[#F2F2F2] p-6 sm:p-8 lg:rounded-[30px] lg:p-10 transition-all hover:shadow-xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#8169FF]/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider text-[#8169FF]">
                  How it works
                </div>
                <h2 className="mt-4 font-heading text-[28px] font-bold text-black sm:text-[32px]">
                  A simple flow, end-to-end.
                </h2>

                <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                  {product.steps.map((s, i) => (
                    <li
                      key={s.title}
                      className="group relative flex flex-col rounded-2xl bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8169FF] to-[#A486FF] font-heading text-[18px] font-bold text-white">
                        {i + 1}
                      </div>
                      <h3 className="mt-5 font-heading text-[16px] font-bold text-black transition-colors group-hover:text-[#8169FF]">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-[#515A5E]">
                        {s.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </ScrollReveal>
          </section>
        )}

        {/* Built for these teams + Why Choose */}
        {product.useCaseCards ? (
          <>
            <section className="mt-4 px-4 sm:px-6 lg:mt-6 lg:px-20">
              <ScrollReveal>
                <div className="rounded-[24px] bg-[#E4EEFA] p-6 sm:p-8 lg:rounded-[30px] lg:p-10">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#8169FF]/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider text-[#8169FF]">
                    {product.useCasesEyebrow ?? "Use Cases"}
                  </div>
                  <h2 className="mt-4 max-w-[860px] font-heading text-[24px] font-extrabold leading-[1.2] text-black sm:text-[30px] lg:text-[34px]">
                    {product.useCasesTitle}
                  </h2>
                  {product.useCasesSubtitle && (
                    <p className="mt-3 max-w-[820px] text-[14px] leading-relaxed text-[#2b2f38] sm:text-[15px] lg:text-[16px]">
                      {product.useCasesSubtitle}
                    </p>
                  )}

                  <div className="mt-7 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:gap-5">
                    {product.useCaseCards.map((c, i) => (
                      <ScrollReveal key={c.title} delay={i * 80}>
                        <article className="group h-full rounded-2xl bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-lg sm:p-6">
                          <div className="flex items-start gap-3">
                            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#A486FF]/15 text-[#8169FF] transition-colors group-hover:bg-[#8169FF] group-hover:text-white">
                              <Check className="h-4 w-4" strokeWidth={3} />
                            </span>
                            <h3 className="font-heading text-[15px] font-extrabold leading-snug text-black sm:text-[16px]">
                              {c.title}
                            </h3>
                          </div>
                          <p className="mt-3 pl-[48px] text-[13px] leading-relaxed text-[#515A5E] sm:text-[14px]">
                            {c.description}
                          </p>
                        </article>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </section>

            <section className="mt-4 px-4 sm:px-6 lg:mt-6 lg:px-20">
              <ScrollReveal>
                <WhyChooseCard cols={4} />
              </ScrollReveal>
            </section>
          </>
        ) : (
          <section className="mt-4 grid grid-cols-1 items-stretch gap-4 px-4 sm:gap-6 sm:px-6 lg:mt-6 lg:grid-cols-2 lg:px-20">
            <ScrollReveal className="h-full">
              <div className="flex h-full flex-col rounded-[24px] bg-[#E4EEFA] p-6 sm:p-8 lg:rounded-[30px] lg:p-10 transition-all hover:shadow-xl">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#8169FF]/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider text-[#8169FF]">
                  Use Cases
                </div>
                <h2 className="mt-4 font-heading text-[24px] font-bold text-black sm:text-[28px]">
                  Built for these teams
                </h2>

                <ul className="mt-7 grid flex-1 content-start gap-3 sm:grid-cols-2">
                  {product.useCases.map((u) => (
                    <li
                      key={u}
                      className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 transition-all hover:bg-[#8169FF] hover:text-white"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#A486FF]/15 text-[#8169FF]">
                        <Check className="h-4 w-4" strokeWidth={3} />
                      </span>
                      <span className="text-[14px] font-semibold">{u}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120} className="h-full">
              <WhyChooseCard cols={2} />
            </ScrollReveal>
          </section>
        )}

        {/* Airpay for Business — Digital Payments only */}
        {product.slug === "digital-payments" && <AirpayForBusiness />}

        {/* Other products */}
        <section className="mt-4 px-4 sm:px-6 lg:mt-6 lg:px-20">
          <ScrollReveal>
            <div className="rounded-[24px] bg-[#F2F2F2] p-6 sm:p-8 lg:rounded-[30px] lg:p-10">
              <h2 className="font-heading text-[26px] font-bold text-black">
                Explore other products
              </h2>
              <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {others.map((o) => (
                  <Link
                    key={o.slug}
                    href={`/products/${o.slug}`}
                    className="group rounded-[24px] bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A486FF]/15 text-[#8169FF] transition-colors group-hover:bg-[#8169FF] group-hover:text-white">
                      <o.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-heading text-[18px] font-bold text-black group-hover:text-[#8169FF]">
                      {o.shortName}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-[#515A5E]">
                      {o.tagline}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-bold text-[#8169FF]">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
