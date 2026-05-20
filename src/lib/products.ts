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
  Link2,
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

export interface ProductUseCaseCard {
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
  useCasesEyebrow?: string;
  useCasesTitle?: string;
  useCasesSubtitle?: string;
  useCaseCards?: ProductUseCaseCard[];
}

export const products: ProductDetail[] = [
  {
    slug: "direct-carrier-billing",
    name: "Digital Carrier Billing",
    shortName: "DCB",
    eyebrow: "Carrier Billing",
    tagline: "Seamless Mobile Payments Through Global Carrier Connectivity",
    description:
      "Enable frictionless mobile payment experiences through Airpay’s enterprise-grade Digital Carrier Billing infrastructure. Connect to global telecom operators, expand across high-growth markets, and empower users to pay seamlessly through their mobile carriers with one unified integration.",
    illustration: "/images/new/dcb-hero.webp",
    icon: Radio,
    highlights: ["50+ telco operators", "15+ countries"],
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
    name: "Digital Payment Solutions",
    shortName: "Digital Payments",
    eyebrow: "Payments & Disbursements",
    tagline: "Powering Seamless Global Commerce Through Localized Payments",
    description:
      "Enable frictionless pay-in and payout experiences through Airpay’s enterprise-grade digital payment infrastructure. Connect to localized payment ecosystems including QR, virtual accounts, e-wallets, bank transfers, cards, and alternative payment methods through one unified integration designed for scalable global growth.",
    illustration: "/images/photos/image_payment.webp",
    icon: Wallet,
    highlights: [
      "Localized Payment Connectivity",
      "Unified Pay-In & Disbursement Infrastructure",
      "Scalable & Reliable Transaction Processing",
    ],
    features: [
      {
        icon: Wallet,
        title: "Connected Payment Infrastructure",
        description:
          "Power localized payment experiences through one unified ecosystem built for scalable global commerce.",
      },
      {
        icon: Repeat,
        title: "Scalable Global Disbursements",
        description:
          "Enable seamless payouts and fund distribution across banking networks and digital payment ecosystems worldwide.",
      },
      {
        icon: Zap,
        title: "Intelligent Transaction Operations",
        description:
          "Optimize payment visibility, transaction monitoring, and settlement performance through real-time infrastructure.",
      },
      {
        icon: ShieldCheck,
        title: "Secure Infrastructure for Digital Commerce",
        description:
          "Enterprise-grade protection and compliance designed to support secure, scalable, and reliable payment operations.",
      },
    ],
    steps: [
      {
        title: "Customer chooses payment method",
        description:
          "Cards, wallets, virtual accounts, or QR — local options first.",
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
        description:
          "Send payouts to recipients via local bank or wallet rails.",
      },
    ],
    useCases: [
      "Marketplaces & creator payouts",
      "Cross-border e-commerce",
      "SaaS subscriptions",
      "On-demand & gig platforms",
    ],
    useCasesEyebrow: "Global Digital Use Cases",
    useCasesTitle:
      "Enterprise Payment Infrastructure Powering Global Digital Business Models",
    useCasesSubtitle:
      "Airpay enables scalable payments, disbursements, and Digital Carrier Billing experiences for high-growth digital platforms operating across emerging and global markets.",
    useCaseCards: [
      {
        title: "Marketplace & Creator Economy Platforms",
        description:
          "Seamlessly manage collections, seller settlements, and creator payouts through scalable payment infrastructure.",
      },
      {
        title: "Cross-Border Commerce & Global Expansion",
        description:
          "Enable localized payment experiences and frictionless transactions across high-growth international markets.",
      },
      {
        title: "SaaS, Subscription & Digital Service Platforms",
        description:
          "Optimize recurring billing, payment accessibility, and scalable subscription operations for global digital users.",
      },
      {
        title: "On-Demand, Gig Economy & Platform Businesses",
        description:
          "Power real-time collections and automated disbursement experiences designed for scalable digital workforce ecosystems.",
      },
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
    illustration: "/images/photos/image_billing.webp",
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
      {
        title: "Define plans & prices",
        description: "Flexible pricing models with usage tiers.",
      },
      {
        title: "Subscribe customers via API",
        description: "One call to create, upgrade, or cancel.",
      },
      {
        title: "Auto-charge & retry",
        description: "Smart retry handles soft declines automatically.",
      },
      {
        title: "Settle & reconcile",
        description: "Reconciled data feeds straight into your finance stack.",
      },
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
    eyebrow: "In-Store Payments",
    tagline: "Modern In-Store Payments Built for Connected Commerce",
    description:
      "Enable seamless in-store payment experiences through Airpay’s enterprise-grade acquiring infrastructure. Accept card, QR, and contactless transactions while managing settlements and reporting through one unified payment ecosystem.",
    illustration: "/images/photos/image_edc.webp",
    icon: CreditCard,
    highlights: [
      "Card & Contactless Payments",
      "QR & Digital Wallet Acceptance",
      "Unified Settlement & Reporting",
    ],
    features: [
      {
        icon: ScanLine,
        title: "All-in-One Payments (QR + Tap-to-Pay)",
        description:
          "Accept QRIS, NFC/contactless, chip cards, and magnetic stripe — every payment method on one smart EDC device.",
      },
      {
        icon: Banknote,
        title: "Acquiring & Settlement",
        description:
          "Direct acquiring with trusted bank partners and flexible settlement options.",
      },
      {
        icon: Database,
        title: "Unified Back Office",
        description:
          "Monitor in-store and online transactions in one dashboard. Real-time reporting, reconciliation, and performance insights for better decision-making.",
      },
      {
        icon: ShieldCheck,
        title: "EMV & PCI Compliant",
        description:
          "Certified EDC terminals with EMV chip technology and PCI PTS security standards to keep every transaction safe.",
      },
    ],
    steps: [
      {
        title: "Provision terminals",
        description: "Pre-configured devices shipped to your stores.",
      },
      {
        title: "Customer taps or scans",
        description: "Cards, e-wallets, or QR — accepted instantly.",
      },
      {
        title: "Real-time authorization",
        description: "Approval in seconds via Airpay acquirer.",
      },
      {
        title: "Settle & report",
        description: "Funds settle and flow into your unified dashboard.",
      },
    ],
    useCases: [
      "Retail & F&B chains",
      "Supermarkets & grocery",
      "Fuel & convenience",
      "Hospitality & travel",
    ],
  },
  {
    slug: "payment-link",
    name: "Payment Link",
    shortName: "Payment Link",
    eyebrow: "Payment Link Flow",
    tagline: "Create. Share. Get Paid.",
    description:
      "Create a payment link in seconds and get paid anytime, anywhere. Simple for you, seamless for your customers.",
    illustration: "/images/photos/image_hero.webp",
    icon: Link2,
    highlights: [
      "Instant Payment Link",
      "Share Anywhere",
      "Secure & Trusted",
    ],
    features: [],
    steps: [],
    useCases: [
      "Freelancers & consultants",
      "Online sellers & social commerce",
      "Service-based businesses",
      "Events, tickets & donations",
    ],
  },
];

export function getProductBySlug(slug: string): ProductDetail | undefined {
  return products.find((p) => p.slug === slug);
}
