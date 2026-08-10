"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "Blue MMS", href: "/blue-mms" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function LogoOnDark({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 920 280"
      role="img"
      aria-label="Blue Oracle Consulting"
      className={className}
    >
      <g fill="#4DD6E7">
        <rect x="48" y="52" width="168" height="36" rx="18" />
        <rect x="72" y="96" width="144" height="36" rx="18" />
        <rect x="96" y="140" width="120" height="36" rx="18" />
        <rect x="120" y="184" width="96" height="36" rx="18" />
      </g>
      <g
        fill="#F8FAFC"
        fontFamily="Arial Black, Helvetica Neue, Arial, sans-serif"
        fontWeight={900}
        fontSize={78}
      >
        <text x="248" y="118">
          BLUE
        </text>
        <text x="248" y="198">
          ORACLE
        </text>
      </g>
      <text
        x="250"
        y="238"
        fill="#4DD6E7"
        fontFamily="Helvetica Neue, Arial, sans-serif"
        fontWeight={500}
        fontSize={28}
      >
        <tspan>C</tspan>
        <tspan dx="19">O</tspan>
        <tspan dx="19">N</tspan>
        <tspan dx="19">S</tspan>
        <tspan dx="19">U</tspan>
        <tspan dx="19">L</tspan>
        <tspan dx="19">T</tspan>
        <tspan dx="19">I</tspan>
        <tspan dx="19">N</tspan>
        <tspan dx="19">G</tspan>
      </text>
    </svg>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-teal-800/80 bg-teal-950/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="Blue Oracle Consulting home">
          <LogoOnDark className="h-16 w-auto sm:h-[4.6rem] md:h-[5.2rem]" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-teal-100 transition-colors hover:text-cyan-400"
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
          className="md:hidden text-teal-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-teal-800 bg-teal-950 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-teal-100"
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
