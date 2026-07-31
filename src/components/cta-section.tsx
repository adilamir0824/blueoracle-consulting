import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function CtaLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function CTASection({
  title,
  description,
  primaryLabel = "Get in Touch",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-4xl rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-teal-900 to-teal-950 p-10 text-center md:p-16">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-teal-200">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CtaLink
            href={primaryHref}
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-teal-950 transition-colors hover:bg-cyan-400"
          >
            {primaryLabel}
            <ArrowRight className="h-4 w-4" />
          </CtaLink>
          {secondaryLabel && secondaryHref && (
            <CtaLink
              href={secondaryHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-400 hover:text-cyan-300"
            >
              {secondaryLabel}
            </CtaLink>
          )}
        </div>
      </div>
    </section>
  );
}
