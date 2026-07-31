import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CalendarClock,
  Cog,
  ExternalLink,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react";
import { ServiceCard } from "@/components/service-card";
import { CTASection } from "@/components/cta-section";
import { siteConfig } from "@/lib/utils";

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

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cyan-50 via-white to-white">
        <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl section-padding">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="order-2 max-w-xl lg:order-1">
              <h1 className="font-display text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
                Plan smarter.{" "}
                <span className="text-gradient">Maintain better.</span>{" "}
                Operate with confidence.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
                Blue Oracle Consulting helps organizations optimize operations,
                master planning and scheduling, and implement Blue MMS — so your
                teams prevent downtime before it happens and keep critical assets
                running reliably.
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
                  href="/blue-mms"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-8 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:border-cyan-500 hover:text-cyan-600"
                >
                  Explore Blue MMS
                </Link>
              </div>
            </div>

            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
              <Image
                src="/logo.png"
                alt="Blue Oracle Consulting"
                width={1680}
                height={552}
                className="h-60 w-auto max-w-full object-contain opacity-90 mix-blend-multiply sm:h-72 md:h-[21rem]"
                priority
              />
            </div>
          </div>
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

      {/* Blue MMS Highlight */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-semibold text-cyan-700">
                <Sparkles className="h-3.5 w-3.5" />
                Our Product
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 md:text-4xl">
                Blue MMS
              </h2>
              <p className="mt-2 text-xl text-cyan-600">
                AI-powered maintenance management
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Blue MMS helps you track assets, manage work orders, schedule
                preventive maintenance, and get predictive insights — all through a
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
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={siteConfig.cmmsDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-teal-950 hover:bg-cyan-400"
                >
                  Try live demo
                  <ExternalLink className="h-4 w-4" />
                </a>
                <Link
                  href="/blue-mms"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 hover:border-cyan-500"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
              <p className="text-sm font-semibold tracking-wide text-teal-600 uppercase">
                Built for the plant floor
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">
                One place for assets, work orders, inventory, and training — with an
                AI assistant when your team needs a quick answer.
              </p>
              <Link
                href="/blue-mms"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-500"
              >
                Watch the walkthrough
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to optimize your operations?"
        description="Whether you need consulting on planning and scheduling or want to see Blue MMS in action, we'd love to hear from you."
        primaryLabel="Schedule a Consultation"
        primaryHref="/contact"
        secondaryLabel="Explore Blue MMS"
        secondaryHref="/blue-mms"
      />
    </>
  );
}
