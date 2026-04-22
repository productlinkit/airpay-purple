import {
  Radio,
  Wallet,
  Database,
  CreditCard,
  Globe,
  Smartphone,
  ShieldCheck,
  Zap,
  TrendingUp,
  Repeat,
  RefreshCw,
  Layers,
  Banknote,
  ScanLine,
  type LucideIcon,
} from "lucide-react";

export interface ProductFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProductStep {
  title: string;
  description: string;
}

export interface ProductDetail {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  tagline: string;
  description: string;
  illustration: string;
  icon: LucideIcon;
  highlights: string[];
  features: ProductFeature[];
  steps: ProductStep[];
  useCases: string[];
}

export const products: ProductDetail[] = [
  {
    slug: "direct-carrier-billing",
    name: "Direct Carrier Billing",
    shortName: "DCB",
    eyebrow: "Carrier Billing",
    tagline: "Let users pay through their phone bill.",
    description:
      "Enable mobile carrier billing and let users pay directly through their mobile phone bills. With one integration, access multiple telecom operators and unlock new revenue opportunities across global markets.",
    illustration: "/images/illustration/illustration02.webp",
    icon: Radio,
    highlights: ["100+ telco operators", "20+ countries", "No card required"],
    features: [
      {
        icon: Smartphone,
        title: "One-tap mobile checkout",
        description:
          "Users authenticate via SMS or operator session — no card, no signup.",
      },
      {
        icon: Globe,
        title: "Global telco coverage",
        description:
          "A single API connects you to dozens of operators across META, APAC, and beyond.",
      },
      {
        icon: ShieldCheck,
        title: "Fraud protection built-in",
        description:
          "Operator-grade fraud rules and chargeback protection out of the box.",
      },
      {
        icon: TrendingUp,
        title: "Higher conversion",
        description:
          "Reach unbanked and underbanked users with the lowest-friction payment method available.",
      },
    ],
    steps: [
      {
        title: "Customer selects DCB at checkout",
        description: "Pick from supported operators in their region.",
      },
      {
        title: "Authentication via OTP",
        description:
          "Customer confirms with a one-time code sent to their phone.",
      },
      {
        title: "Charge applied to phone bill",
        description: "Amount is billed by the operator on their next invoice.",
      },
      {
        title: "Real-time settlement to merchant",
        description: "Funds settle to your Airpay account on agreed cycle.",
      },
    ],
    useCases: [
      "Streaming & VOD",
      "Gaming & in-app purchases",
      "Digital subscriptions",
      "Charity & donations",
    ],
  },
  {
    slug: "digital-payments",
    name: "Digital Payments — Pay-In & Pay-Out",
    shortName: "Digital Payments",
    eyebrow: "Pay-In & Pay-Out",
    tagline: "Accept payments and send payouts globally.",
    description:
      "Accept payments and send payouts globally with a single API. Airpay supports multiple payment methods and local rails, helping businesses scale faster and expand into new markets seamlessly.",
    illustration: "/images/illustration/illustration05.webp",
    icon: Wallet,
    highlights: ["Multiple payment methods", "Pay-in & Pay-out", "Local rails"],
    features: [
      {
        icon: Wallet,
        title: "Wallets, cards, bank transfer",
        description:
          "Aggregate every popular method per market through a single integration.",
      },
      {
        icon: Repeat,
        title: "Pay-out at scale",
        description:
          "Send payouts to bank accounts and wallets with automatic reconciliation.",
      },
      {
        icon: Zap,
        title: "Real-time settlement",
        description:
          "Faster cash flow with near-instant settlement on supported rails.",
      },
      {
        icon: ShieldCheck,
        title: "PCI-DSS & 3DS",
        description:
          "Bank-grade compliance, tokenization, and fraud screening included.",
      },
    ],
    steps: [
      {
        title: "Customer chooses payment method",
        description: "Cards, wallets, virtual accounts, or QR — local options first.",
      },
      {
        title: "Authentication & authorization",
        description: "3DS, OTP, or wallet auth as required by the rail.",
      },
      {
        title: "Settlement",
        description: "Airpay reconciles and settles funds to your account.",
      },
      {
        title: "Pay-out execution",
        description: "Send payouts to recipients via local bank or wallet rails.",
      },
    ],
    useCases: [
      "Marketplaces & creator payouts",
      "Cross-border e-commerce",
      "SaaS subscriptions",
      "On-demand & gig platforms",
    ],
  },
  {
    slug: "billing-infrastructure",
    name: "AirPay Billing Infrastructure",
    shortName: "Billing",
    eyebrow: "Subscriptions & Invoicing",
    tagline: "Recurring billing without the headache.",
    description:
      "A complete billing infrastructure for subscriptions, invoicing, and reconciliation — built to handle complex pricing models, dunning, and tax across markets.",
    illustration: "/images/illustration/illustration06.webp",
    icon: Database,
    highlights: ["Subscriptions", "Smart dunning", "Multi-currency"],
    features: [
      {
        icon: RefreshCw,
        title: "Recurring billing engine",
        description:
          "Plans, trials, proration, and metered usage out of the box.",
      },
      {
        icon: TrendingUp,
        title: "Smart dunning",
        description:
          "Automatic retry logic recovers up to 30% of failed payments.",
      },
      {
        icon: Layers,
        title: "Multi-currency & tax",
        description:
          "Localized pricing, regional tax rules, and FX handled for you.",
      },
      {
        icon: Database,
        title: "Reconciliation API",
        description:
          "Full audit trail for finance teams — exports, reports, webhooks.",
      },
    ],
    steps: [
      { title: "Define plans & prices", description: "Flexible pricing models with usage tiers." },
      { title: "Subscribe customers via API", description: "One call to create, upgrade, or cancel." },
      { title: "Auto-charge & retry", description: "Smart retry handles soft declines automatically." },
      { title: "Settle & reconcile", description: "Reconciled data feeds straight into your finance stack." },
    ],
    useCases: [
      "SaaS & software subscriptions",
      "Telco add-on services",
      "Streaming & content bundles",
      "Membership platforms",
    ],
  },
  {
    slug: "edc-payment-solutions",
    name: "EDC Payment Solutions",
    shortName: "EDC",
    eyebrow: "In-Store",
    tagline: "Payments at the counter, online-grade reporting.",
    description:
      "Modern EDC terminals and acquiring infrastructure for in-store payments — connected to the same dashboard and reporting your online channels use.",
    illustration: "/images/illustration/illustration12.webp",
    icon: CreditCard,
    highlights: ["Acquiring", "QR & contactless", "Unified reporting"],
    features: [
      {
        icon: ScanLine,
        title: "QR + tap-to-pay",
        description:
          "Accept QRIS, NFC, contactless, and chip — every method on one device.",
      },
      {
        icon: Banknote,
        title: "Acquiring & settlement",
        description:
          "Direct acquiring with bank partners and same-day settlement options.",
      },
      {
        icon: Database,
        title: "Unified back office",
        description:
          "In-store and online transactions in one dashboard for finance and ops.",
      },
      {
        icon: ShieldCheck,
        title: "EMV & PCI compliant",
        description:
          "Certified terminals with end-to-end encryption.",
      },
    ],
    steps: [
      { title: "Provision terminals", description: "Pre-configured devices shipped to your stores." },
      { title: "Customer taps or scans", description: "Cards, e-wallets, or QR — accepted instantly." },
      { title: "Real-time authorization", description: "Approval in seconds via Airpay acquirer." },
      { title: "Settle & report", description: "Funds settle and flow into your unified dashboard." },
    ],
    useCases: [
      "Retail & F&B chains",
      "Supermarkets & grocery",
      "Fuel & convenience",
      "Hospitality & travel",
    ],
  },
  {
    slug: "cross-border-payments",
    name: "Cross-Border Payments",
    shortName: "Cross-Border",
    eyebrow: "Global Rails",
    tagline: "Move money across borders, on local rails.",
    description:
      "Send and receive payments across borders using local payment rails — better FX, lower fees, faster settlement than traditional correspondent banking.",
    illustration: "/images/illustration/illustration09.webp",
    icon: Globe,
    highlights: ["50+ corridors", "Local rails", "Better FX"],
    features: [
      {
        icon: Globe,
        title: "Local rail coverage",
        description:
          "Payments delivered via local schemes for speed and lower cost.",
      },
      {
        icon: TrendingUp,
        title: "Transparent FX",
        description:
          "Mid-market rates with a small, predictable margin — no hidden spread.",
      },
      {
        icon: Zap,
        title: "Faster settlement",
        description:
          "Most corridors settle in minutes, not days.",
      },
      {
        icon: ShieldCheck,
        title: "Compliance & sanctions",
        description:
          "Built-in KYB, KYC, and sanctions screening for every corridor.",
      },
    ],
    steps: [
      { title: "Initiate transfer via API", description: "Origin, destination, currency, beneficiary." },
      { title: "FX conversion", description: "Live mid-market rate locked at quote time." },
      { title: "Local rail delivery", description: "Routed via the best local scheme available." },
      { title: "Confirmation & receipt", description: "Real-time status with audit trail." },
    ],
    useCases: [
      "Marketplace seller payouts",
      "Cross-border B2B invoicing",
      "Payroll for global teams",
      "Remittance partners",
    ],
  },
];

export function getProductBySlug(slug: string): ProductDetail | undefined {
  return products.find((p) => p.slug === slug);
}
