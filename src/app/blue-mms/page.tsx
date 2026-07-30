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
} from "lucide-react";
import { CTASection } from "@/components/cta-section";

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
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact?interest=cmms"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-8 py-3.5 text-sm font-semibold text-teal-950 hover:bg-cyan-400"
              >
                Request a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact?interest=cmms-purchase"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-8 py-3.5 text-sm font-semibold text-slate-900 hover:border-cyan-400"
              >
                Inquire About Purchase
              </Link>
            </div>
          </div>
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
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold text-slate-900">
                Why teams choose Blue MMS
              </h2>
              <ul className="mt-8 space-y-4">
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
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-2xl">
              <div className="rounded-lg bg-white p-4">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
                  <div className="h-3 w-3 rounded-full bg-red-500/60" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                  <div className="h-3 w-3 rounded-full bg-green-500/60" />
                  <span className="ml-2 text-xs text-slate-500">Blue MMS Dashboard</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-slate-50 p-3">
                    <p className="text-xs text-slate-500">Assets</p>
                    <p className="text-xl font-bold text-slate-900">6</p>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-3">
                    <p className="text-xs text-slate-500">Open WOs</p>
                    <p className="text-xl font-bold text-blue-400">3</p>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-3">
                    <p className="text-xs text-slate-500">Uptime</p>
                    <p className="text-xl font-bold text-green-400">94%</p>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-3">
                    <p className="text-xs text-slate-500">Low Stock</p>
                    <p className="text-xl font-bold text-orange-400">2</p>
                  </div>
                </div>
                <div className="mt-3 rounded-lg border border-cyan-200 bg-cyan-50 p-3">
                  <p className="text-xs font-medium text-cyan-600">AI Assistant</p>
                  <p className="mt-1 text-xs text-slate-600">
                    &quot;Which parts are low on stock?&quot; → 2 items below reorder point...
                  </p>
                </div>
              </div>
            </div>
          </div>
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
        description="Request a personalized demo or inquire about purchasing Blue MMS for your organization."
        primaryLabel="Request a Demo"
        primaryHref="/contact?interest=cmms"
        secondaryLabel="General Inquiry"
        secondaryHref="/contact"
      />
    </>
  );
}
