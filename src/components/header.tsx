"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "AI CMMS", href: "/ai-cmms" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-navy-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/30 bg-navy-800">
            <span className="font-display text-lg font-bold text-gold-500">B</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-lg font-semibold leading-tight text-white">
              Blue Oracle
            </p>
            <p className="text-xs tracking-widest text-slate-400 uppercase">
              Consulting
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-gold-400"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-gold-500 px-5 py-2 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400"
          >
            Get in Touch
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden text-slate-300"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/5 bg-navy-900 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-300"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={cn(
                "rounded-full bg-gold-500 px-5 py-2 text-center text-sm font-semibold text-navy-950"
              )}
              onClick={() => setMobileOpen(false)}
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
