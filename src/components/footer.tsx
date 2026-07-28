import Link from "next/link";
import { siteConfig } from "@/lib/utils";

const footerLinks = {
  Services: [
    { name: "Operations Management", href: "/services#operations" },
    { name: "Planning & Scheduling", href: "/services#planning" },
    { name: "Process Optimization", href: "/services#optimization" },
  ],
  Products: [
    { name: "AI CMMS", href: "/ai-cmms" },
    { name: "Request a Demo", href: "/contact?interest=cmms" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-900">
      <div className="mx-auto max-w-7xl section-padding pb-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/30 bg-navy-800">
                <span className="font-display text-lg font-bold text-gold-500">B</span>
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-white">Blue Oracle</p>
                <p className="text-xs tracking-widest text-slate-400 uppercase">Consulting</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {siteConfig.tagline}
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold tracking-wider text-gold-500 uppercase">
                {title}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Blue Oracle Consulting. All rights reserved.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm text-slate-400 hover:text-gold-400"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
