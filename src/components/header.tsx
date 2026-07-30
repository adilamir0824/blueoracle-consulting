"use client";

import Image from "next/image";
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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="Blue Oracle Consulting home">
          <Image
            src="/logo.png"
            alt="Blue Oracle Consulting"
            width={368}
            height={120}
            className="h-16 w-auto object-contain sm:h-[4.6rem] md:h-[5.2rem]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-teal-700 transition-colors hover:text-cyan-600"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-teal-950 transition-colors hover:bg-cyan-400"
          >
            Get in Touch
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden text-teal-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-teal-700"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={cn(
                "rounded-full bg-cyan-500 px-5 py-2 text-center text-sm font-semibold text-teal-950"
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
