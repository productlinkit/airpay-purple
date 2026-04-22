import type { Metadata } from "next";
import { M_PLUS_Rounded_1c, Nunito } from "next/font/google";
import "./globals.css";

const mplusRounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-mplus-rounded",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://airpay.mobi"),
  title: {
    default: "Airpay — Powering Global Digital Payments with One Integration",
    template: "%s · Airpay",
  },
  description:
    "Airpay is a payment technology platform that enables businesses to accept and manage payments through a unified integration — DCB, Digital Payments, and global rails in one API.",
  icons: {
    icon: [
      { url: "/seo/favicon-airpay.png", sizes: "any" },
      { url: "/seo/favicon-airpay.png", type: "image/png" },
    ],
    apple: "/seo/favicon-airpay.png",
    shortcut: "/seo/favicon-airpay.png",
  },
  openGraph: {
    title: "Airpay — Powering Global Digital Payments",
    description:
      "Accept payments and send payouts through a unified platform — DCB, Digital Payments, and global rails in one integration.",
    type: "website",
    siteName: "Airpay",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${mplusRounded.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden flex flex-col">
        {children}
      </body>
    </html>
  );
}
