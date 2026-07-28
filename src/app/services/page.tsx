import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CalendarClock,
  Cog,
  Factory,
  Layers,
  LineChart,
  Users,
} from "lucide-react";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Operations management consulting, planning & scheduling, and process optimization services from Blue Oracle Consulting.",
};

const services = [
  {
    id: "operations",
    icon: Cog,
    title: "Operations Management",
    description:
      "We help organizations design and run operations that are efficient, scalable, and resilient.",
    offerings: [
      "Operational assessment and gap analysis",
      "Workflow design and standardization",
      "KPI framework development",
      "Cross-functional team alignment",
      "Change management support",
    ],
  },
  {
    id: "planning",
    icon: CalendarClock,
    title: "Planning & Scheduling",
    description:
      "Master production planning, resource scheduling, and capacity management with frameworks built for your reality.",
    offerings: [
      "Master production scheduling (MPS)",
      "Capacity planning and load leveling",
      "Resource allocation optimization",
      "Shift and crew scheduling",
      "Demand forecasting integration",
    ],
  },
  {
    id: "optimization",
    icon: LineChart,
    title: "Process Optimization",
    description:
      "Find and fix the bottlenecks holding your operation back — with data-driven recommendations and hands-on implementation.",
    offerings: [
      "Value stream mapping",
      "Lean and Six Sigma initiatives",
      "Bottleneck identification and resolution",
      "Cycle time reduction",
      "Continuous improvement programs",
    ],
  },
];

const industries = [
  { icon: Factory, name: "Manufacturing" },
  { icon: Layers, name: "Distribution & Logistics" },
  { icon: BarChart3, name: "Energy & Utilities" },
  { icon: Users, name: "Facilities Management" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest text-gold-500 uppercase">
              Our Services
            </p>
            <h1 className="mt-2 font-display text-4xl font-bold text-white md:text-5xl">
              Consulting built for operators
            </h1>
            <p className="mt-6 text-lg text-slate-400">
              We don&apos;t deliver slide decks — we deliver results. Our
              consulting engagements are hands-on, practical, and designed to
              leave your team with systems that outlast our engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl space-y-20 px-6 md:px-8 lg:px-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid items-start gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500">
                  <service.icon className="h-7 w-7" />
                </div>
                <h2 className="mt-6 font-display text-3xl font-bold text-white">
                  {service.title}
                </h2>
                <p className="mt-4 text-slate-400 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-500 hover:text-gold-400"
                >
                  Discuss this service
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div
                className={`rounded-xl border border-white/5 bg-navy-900/50 p-8 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <h3 className="text-sm font-semibold tracking-wider text-gold-500 uppercase">
                  What&apos;s included
                </h3>
                <ul className="mt-4 space-y-3">
                  {service.offerings.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-navy-900/30">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
            Industries we serve
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex flex-col items-center rounded-xl border border-white/5 bg-navy-900/50 p-6 text-center"
              >
                <industry.icon className="h-8 w-8 text-gold-500" />
                <p className="mt-3 text-sm font-medium text-slate-300">
                  {industry.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's talk about your operation"
        description="Every engagement starts with understanding your challenges. Tell us what you're working on and we'll show you how we can help."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
