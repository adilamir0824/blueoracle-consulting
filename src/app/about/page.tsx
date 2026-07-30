import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { Eye, Handshake, Lightbulb, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Blue Oracle Consulting — operations management experts helping organizations plan, schedule, and maintain smarter.",
};

const values = [
  {
    icon: Eye,
    title: "Clarity over complexity",
    description:
      "We cut through noise to give you actionable insights. No jargon, no bloated deliverables — just clear direction.",
  },
  {
    icon: Handshake,
    title: "Partnership, not dependency",
    description:
      "Our goal is to build your team's capability, not create a long-term consulting crutch. We teach as we implement.",
  },
  {
    icon: Lightbulb,
    title: "Practical innovation",
    description:
      "We embrace technology like AI when it solves real problems — not because it's trendy. Our AI CMMS is proof of that philosophy.",
  },
  {
    icon: Shield,
    title: "Results you can measure",
    description:
      "Every engagement is tied to metrics that matter: uptime, throughput, cycle time, and cost per unit.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-sm font-semibold tracking-widest text-teal-500 uppercase">
                About Us
              </p>
              <h1 className="mt-2 font-display text-4xl font-bold text-slate-900 md:text-5xl">
                The oracle sees what others miss
              </h1>
            </div>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Blue Oracle Consulting was founded on a simple belief: most
                operational problems aren&apos;t caused by bad people — they&apos;re
                caused by bad systems. Planning that doesn&apos;t account for
                reality. Schedules that ignore constraints. Maintenance that
                reacts instead of predicts.
              </p>
              <p>
                We help organizations fix those systems. Our consultants bring
                deep experience in operations management, production planning,
                and maintenance strategy across manufacturing, logistics,
                utilities, and facilities.
              </p>
              <p>
                When we saw how much downtime and waste came from poor
                maintenance management, we built AI CMMS — our own
                AI-powered maintenance platform — to give teams the tools
                they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cyan-50/40">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-3xl font-bold text-slate-900">
            How we work
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Discover", desc: "We learn your operation, constraints, and goals through on-site assessment and stakeholder interviews." },
              { step: "02", title: "Diagnose", desc: "Data analysis and process mapping reveal root causes — not just symptoms." },
              { step: "03", title: "Design", desc: "We co-create solutions with your team, ensuring buy-in and practical feasibility." },
              { step: "04", title: "Deliver", desc: "Hands-on implementation, training, and measurement to ensure lasting impact." },
            ].map((phase) => (
              <div key={phase.step} className="relative">
                <span className="font-display text-5xl font-bold text-teal-500/20">
                  {phase.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{phase.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-3xl font-bold text-slate-900">Our values</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-8"
              >
                <value.icon className="h-8 w-8 text-teal-500" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to work with us?"
        description="Whether you need consulting expertise or want to explore our AI CMMS platform, we're here to help."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </>
  );
}
