import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { products } from "@/lib/products";

export function ContactForm() {
  return (
    <section className="mt-4 px-3 sm:px-6 lg:mt-6 lg:px-20">
      <ScrollReveal>
        <div className="rounded-[20px] bg-[#F2F2F2] p-5 sm:rounded-[24px] sm:p-8 lg:rounded-[30px] lg:p-10 transition-all hover:shadow-xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#8169FF]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8169FF] sm:px-4 sm:py-1.5 sm:text-[12px]">
            Send us a message
          </div>
          <h2 className="mt-3 font-heading text-[22px] font-bold text-black sm:mt-4 sm:text-[32px]">
            Tell us about your business
          </h2>
          <p className="mt-2 text-[13px] text-[#2b2f38] sm:text-[15px]">
            Our team will get back to you within one business day.
          </p>

          <form className="mt-5 grid grid-cols-1 gap-4 sm:mt-7 sm:gap-5 sm:grid-cols-2">
            <Field label="Full name" placeholder="Jane Smith" />
            <Field label="Work email" placeholder="jane@company.com" type="email" />
            <Field label="Company" placeholder="Company name" />
            <Field label="Country" placeholder="Where are you based?" />
            <div className="sm:col-span-2">
              <label className="mb-2 block text-[13px] font-bold text-black">
                What kind of product?
              </label>
              <select
                defaultValue=""
                className="w-full cursor-pointer appearance-none rounded-2xl border-2 border-transparent bg-white bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22%238169FF%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22><polyline%20points=%226%209%2012%2015%2018%209%22/></svg>')] bg-[length:18px_18px] bg-[right_1rem_center] bg-no-repeat p-4 pr-12 text-[14px] text-black outline-none transition-all focus:border-[#8169FF] focus:shadow-[0_8px_24px_rgba(128,105,255,0.15)]"
              >
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
                className="w-full rounded-2xl border-2 border-transparent bg-white p-3.5 text-[13px] text-black outline-none transition-all placeholder:text-[#9ca3af] focus:border-[#8169FF] focus:shadow-[0_8px_24px_rgba(128,105,255,0.15)] sm:p-4 sm:text-[14px]"
              />
            </div>
            <div className="flex flex-col items-start justify-between gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:gap-4">
              <p className="text-[12px] text-[#515A5E]">
                By submitting, you agree to our Privacy Policy.
              </p>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#8169FF] px-7 py-2.5 text-[13px] font-bold text-white transition-all hover:scale-105 hover:bg-[#6952e6] hover:shadow-[0_10px_24px_rgba(128,105,255,0.35)] sm:w-auto sm:px-9 sm:py-3 sm:text-[14px]"
              >
                Send message
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>
      </ScrollReveal>
    </section>
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
      <span className="mb-2 block text-[13px] font-bold text-black">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border-2 border-transparent bg-white p-3.5 text-[13px] text-black outline-none transition-all placeholder:text-[#9ca3af] focus:border-[#8169FF] focus:shadow-[0_8px_24px_rgba(128,105,255,0.15)] sm:p-4 sm:text-[14px]"
      />
    </label>
  );
}
