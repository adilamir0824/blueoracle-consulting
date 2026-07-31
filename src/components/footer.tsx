import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/utils";

const footerLinks = {
  Services: [
    { name: "Operations Management", href: "/services#operations" },
    { name: "Planning & Scheduling", href: "/services#planning" },
    { name: "Process Optimization", href: "/services#optimization" },
  ],
  Products: [
    { name: "Blue MMS", href: "/blue-mms" },
    { name: "Try live demo", href: siteConfig.cmmsDemoUrl },
    { name: "Request a walkthrough", href: "/contact?interest=cmms" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-teal-800 bg-teal-950">
      <div className="mx-auto max-w-7xl section-padding pb-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Blue Oracle Consulting home">
              <Image
                src="/logo.png"
                alt="Blue Oracle Consulting"
                width={322}
                height={106}
                className="h-[4.6rem] w-auto rounded-sm bg-white object-contain sm:h-[5.2rem]"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-teal-300">
              {siteConfig.tagline}
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold tracking-wider text-cyan-400 uppercase">
                {title}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => {
                  const external =
                    link.href.startsWith("http://") || link.href.startsWith("https://");
                  return (
                    <li key={link.name}>
                      {external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-teal-300 transition-colors hover:text-white"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-teal-300 transition-colors hover:text-white"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-teal-800 pt-8 sm:flex-row">
          <p className="text-sm text-teal-400">
            © {new Date().getFullYear()} Blue Oracle Consulting. All rights reserved.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm text-teal-300 hover:text-cyan-400"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
