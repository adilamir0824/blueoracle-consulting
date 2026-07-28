"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { siteConfig } from "@/lib/utils";
import { Send, CheckCircle, Loader2 } from "lucide-react";

function ContactForm() {
  const searchParams = useSearchParams();
  const defaultInterest = searchParams.get("interest") ?? "general";

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    interest: defaultInterest,
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", interest: "general", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-10 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-green-400" />
        <h3 className="mt-4 text-xl font-semibold text-white">Message sent!</h3>
        <p className="mt-2 text-slate-400">
          Thank you for reaching out. We&apos;ll get back to you within 1 business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-gold-500 hover:text-gold-400"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300">
            Name *
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-2 w-full rounded-lg border border-white/10 bg-navy-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/50"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300">
            Email *
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-2 w-full rounded-lg border border-white/10 bg-navy-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/50"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-slate-300">
          Company
        </label>
        <input
          id="company"
          type="text"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className="mt-2 w-full rounded-lg border border-white/10 bg-navy-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/50"
          placeholder="Your company"
        />
      </div>

      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-slate-300">
          I&apos;m interested in
        </label>
        <select
          id="interest"
          value={form.interest}
          onChange={(e) => setForm({ ...form, interest: e.target.value })}
          className="mt-2 w-full rounded-lg border border-white/10 bg-navy-900 px-4 py-3 text-sm text-white focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/50"
        >
          <option value="general">General inquiry</option>
          <option value="consulting">Consulting services</option>
          <option value="planning">Planning & scheduling</option>
          <option value="cmms">AI CMMS demo</option>
          <option value="cmms-purchase">AI CMMS purchase</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="mt-2 w-full rounded-lg border border-white/10 bg-navy-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/50"
          placeholder="Tell us about your operation and how we can help..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400 disabled:opacity-50 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-semibold tracking-widest text-gold-500 uppercase">
              Contact
            </p>
            <h1 className="mt-2 font-display text-4xl font-bold text-white md:text-5xl">
              Let&apos;s start a conversation
            </h1>
            <p className="mt-6 text-slate-400 leading-relaxed">
              Whether you need help with operations planning, want to schedule a
              consultation, or are interested in purchasing AI CMMS — we&apos;re here
              to help.
            </p>
            <div className="mt-8 space-y-4">
              <div>
                <p className="text-sm font-medium text-slate-300">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-gold-500 hover:text-gold-400"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-300">Response time</p>
                <p className="text-slate-400">Within 1 business day</p>
              </div>
            </div>
          </div>

          <Suspense fallback={<div className="text-slate-400">Loading form...</div>}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
