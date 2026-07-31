import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CalendarClock,
  ClipboardList,
  Factory,
  Package,
  Sparkles,
  BarChart3,
  Shield,
  Zap,
  ExternalLink,
} from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blue MMS",
  description:
    "Blue MMS — AI-powered maintenance management by Blue Oracle Consulting. Track assets, manage work orders, and get predictive maintenance insights.",
};

const features = [
  {
    icon: Factory,
    title: "Asset Management",
    description:
      "Track every piece of equipment with status, criticality scoring, warranty dates, and full maintenance history.",
  },
  {
    icon: ClipboardList,
    title: "Work Orders",
    description:
      "Create, assign, and track corrective, preventive, inspection, and emergency work orders with priority management.",
  },
  {
    icon: CalendarClock,
    title: "Preventive Maintenance",
    description:
      "Schedule recurring PM tasks with automatic work order generation and overdue alerts.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description:
      "Track parts and supplies with reorder points, usage history, and low-stock alerts.",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description:
      "Ask questions in plain English — get instant answers about assets, work orders, inventory, and maintenance schedules.",
  },
  {
    icon: Sparkles,
    title: "Predictive Insights",
    description:
      "AI-generated failure predictions, anomaly detection, and maintenance recommendations based on your data.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description:
      "Dashboards for MTTR, completion rates, work order trends, asset uptime, and operational KPIs.",
  },
  {
    icon: Shield,
    title: "Multi-Tenant & Secure",
    description:
      "Built on Supabase with row-level security, role-based access, and organization-level data isolation.",
  },
];

const benefits = [
  "Reduce unplanned downtime with predictive maintenance",
  "Cut mean time to repair with organized work order workflows",
  "Never miss a PM schedule with automated reminders",
  "Lower parts costs with inventory optimization",
  "Empower technicians with AI-powered instant answers",
  "Get executive visibility with real-time dashboards",
];

export default function BlueMMSPage() {
  return (
    <>
      <section className="relative overflow-hidden section-padding">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-100 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-semibold text-cyan-600">
              <Zap className="h-3.5 w-3.5" />
              Available for Purchase
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold text-slate-900 md:text-5xl">
              Blue MMS
            </h1>
            <p className="mt-2 text-xl text-cyan-600">
              AI-powered maintenance management
            </p>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Stop reacting to breakdowns. Blue MMS gives your maintenance team
              a modern platform to track assets, manage work orders, schedule
              preventive maintenance, and get AI-powered predictions — all in
              one place.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={siteConfig.cmmsDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-8 py-3.5 text-sm font-semibold text-teal-950 hover:bg-cyan-400"
              >
                Try live demo
                <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                href="/contact?interest=cmms"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-8 py-3.5 text-sm font-semibold text-slate-900 hover:border-cyan-400"
              >
                Request a walkthrough
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Live demo opens Blue MMS in a new tab — no login required for the interactive demo.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-950">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
              Product walkthrough
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
              See Blue MMS in action
            </h2>
            <p className="mt-4 text-slate-300">
              A one-minute tour of assets, work orders, inventory, locations, and AI —
              no narration, just the product.
            </p>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-cyan-950/40">
            <video
              className="aspect-video w-full bg-black"
              controls
              playsInline
              preload="metadata"
              controlsList="nodownload"
              aria-label="Blue MMS product walkthrough video"
            >
              <source src="/demo/blue-mms-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Prefer hands-on?{" "}
            <a
              href={siteConfig.cmmsDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-cyan-400 hover:text-cyan-300"
            >
              Open the live demo
            </a>
            .
          </p>
        </div>
      </section>

      <section className="section-padding bg-cyan-50/40">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-3xl font-bold text-slate-900">
            Everything your maintenance team needs
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600">
            Built by operations consultants who understand what maintenance
            teams actually need — not bloated enterprise software.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6"
              >
                <feature.icon className="h-8 w-8 text-cyan-600" />
                <h3 className="mt-4 font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-3xl font-bold text-slate-900">
            Why teams choose Blue MMS
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-slate-600">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-xs text-teal-500">
                  ✓
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-cyan-50/40">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900">
            How to get Blue MMS
          </h2>
          <p className="mt-4 text-slate-600">
            Blue MMS is available for purchase and deployment for your organization.
            We handle setup, configuration, and training so your team is productive from day one.
          </p>
          <div className="mt-10 grid gap-6 text-left md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Request a demo",
                desc: "See the platform in action with your use cases.",
              },
              {
                step: "2",
                title: "Custom proposal",
                desc: "We scope deployment, users, and integration needs.",
              },
              {
                step: "3",
                title: "Deploy & train",
                desc: "We set up your instance and train your team.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6"
              >
                <span className="font-display text-3xl font-bold text-teal-500/30">
                  {item.step}
                </span>
                <h3 className="mt-2 font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to see Blue MMS in action?"
        description="Try the live interactive demo, or request a personalized walkthrough for your plant."
        primaryLabel="Try live demo"
        primaryHref={siteConfig.cmmsDemoUrl}
        secondaryLabel="Contact us"
        secondaryHref="/contact?interest=cmms"
      />
    </>
  );
}
