import { ScrollReveal } from "./ScrollReveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="px-4 pt-28 sm:px-6 sm:pt-32 lg:px-20">
      <ScrollReveal>
        <div
          className="relative overflow-hidden rounded-[24px] px-6 py-12 text-white sm:rounded-[32px] sm:px-10 sm:py-16 lg:rounded-[40px] lg:px-14 lg:py-20"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(158,198,254,0.55) 0%, rgba(164,134,255,0.65) 100%), url('/images/photos/bg_custom.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <span className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
          <span className="pointer-events-none absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="relative mx-auto max-w-[820px] text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/25 px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              {eyebrow}
            </div>
            <h1 className="mt-5 font-heading text-[32px] font-extrabold leading-[1.1] text-black sm:mt-6 sm:text-[44px] lg:text-[58px] lg:leading-[1.05]">
              {title}
            </h1>
            <p className="mx-auto mt-4 max-w-[680px] text-[14px] leading-[1.7] text-[#1f2230] sm:mt-6 sm:text-[16px] lg:text-[17px]">
              {description}
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
