import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CalendarClock,
  Cog,
  Sparkles,
  Target,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { ServiceCard } from "@/components/service-card";
import { CTASection } from "@/components/cta-section";

const services = [
  {
    icon: Cog,
    title: "Operations Management",
    description:
      "Streamline workflows, reduce waste, and build operational excellence across your organization with proven frameworks tailored to your industry.",
  },
  {
    icon: CalendarClock,
    title: "Planning & Scheduling",
    description:
      "Design production schedules, resource plans, and capacity models that keep your teams aligned and your operations running on time.",
  },
  {
    icon: Target,
    title: "Process Optimization",
    description:
      "Identify bottlenecks, eliminate inefficiencies, and implement continuous improvement programs that deliver measurable ROI.",
  },
];

const stats = [
  { value: "15+", label: "Years of experience" },
  { value: "50+", label: "Projects delivered" },
  { value: "30%", label: "Avg. efficiency gain" },
  { value: "24/7", label: "Maintenance visibility" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cyan-50 via-white to-white">
        <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl section-padding">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest text-teal-500 uppercase">
              Operations Management Consulting
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
              Plan smarter.{" "}
              <span className="text-gradient">Schedule better.</span>{" "}
              Operate with confidence.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
              Blue Oracle Consulting helps organizations optimize operations,
              master planning and scheduling, and deploy AI-powered maintenance
              systems that prevent downtime before it happens.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-8 py-3.5 text-sm font-semibold text-teal-950 transition-colors hover:bg-cyan-400"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/ai-cmms"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-8 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:border-cyan-500 hover:text-cyan-600"
              >
                Explore AI CMMS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-200 bg-cyan-50/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 section-padding md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-cyan-600 md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-teal-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest text-teal-500 uppercase">
              What We Do
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 md:text-4xl">
              Consulting that moves the needle
            </h2>
            <p className="mt-4 text-slate-600">
              From shop floor to executive suite, we partner with you to build
              operations that are predictable, efficient, and ready to scale.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-500"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* AI CMMS Highlight */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-semibold text-cyan-700">
                <Sparkles className="h-3.5 w-3.5" />
                Our Product
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 md:text-4xl">
                AI CMMS — Maintenance management, reimagined
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Our AI-powered Computerized Maintenance Management System helps
                you track assets, manage work orders, schedule preventive
                maintenance, and get predictive insights — all through a
                natural language assistant.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Asset tracking with criticality scoring",
                  "Work order management & PM scheduling",
                  "Inventory with low-stock alerts",
                  "AI assistant for instant maintenance answers",
                  "Predictive failure insights",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-700">
                    <Wrench className="h-4 w-4 shrink-0 text-cyan-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact?interest=cmms"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-teal-950 hover:bg-cyan-400"
                >
                  Request a Demo
                </Link>
                <Link
                  href="/ai-cmms"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 hover:border-cyan-500"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-cyan-50 p-4">
                  <div>
                    <p className="text-xs text-teal-600">Open Work Orders</p>
                    <p className="text-2xl font-bold text-slate-900">12</p>
                  </div>
                  <BarChart3 className="h-8 w-8 text-cyan-500/60" />
                </div>
                <div className="flex items-center justify-between rounded-lg bg-slate-50 p-4">
                  <div>
                    <p className="text-xs text-teal-600">Asset Uptime</p>
                    <p className="text-2xl font-bold text-emerald-600">94.2%</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-emerald-500/50" />
                </div>
                <div className="rounded-lg border border-cyan-200 bg-cyan-50/80 p-4">
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-0.5 h-4 w-4 text-cyan-600" />
                    <div>
                      <p className="text-sm font-medium text-cyan-700">AI Insight</p>
                      <p className="mt-1 text-xs text-slate-600">
                        Conveyor Belt A shows failure risk — recommend immediate
                        belt replacement based on maintenance history.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to optimize your operations?"
        description="Whether you need consulting on planning and scheduling or want to see AI CMMS in action, we'd love to hear from you."
        primaryLabel="Schedule a Consultation"
        primaryHref="/contact"
        secondaryLabel="Explore AI CMMS"
        secondaryHref="/ai-cmms"
      />
    </>
  );
}
