import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/utils";

interface AboutAdilProps {
  /** Soft background tint for alternate section placement */
  muted?: boolean;
  /** Use h1 + priority image when this section leads the About page */
  asPageTitle?: boolean;
}

export function AboutAdil({ muted = false, asPageTitle = false }: AboutAdilProps) {
  const HeadingTag = asPageTitle ? "h1" : "h2";

  return (
    <section
      className={
        muted
          ? "section-padding bg-cyan-50/40"
          : "section-padding"
      }
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-16">
          <figure className="mx-auto w-full max-w-[280px] text-center lg:mx-0">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Image
                src="/adil-amir.jpg"
                alt="Adil Amir, Founder of Blue Oracle Consulting"
                width={800}
                height={1000}
                className="aspect-[4/5] h-auto w-full object-cover object-top"
                sizes="(max-width: 1024px) 280px, 280px"
                priority={asPageTitle}
              />
            </div>
            <figcaption className="mt-4 text-sm font-medium text-slate-600">
              Adil Amir, Founder
            </figcaption>
          </figure>

          <div>
            <p className="text-sm font-semibold tracking-widest text-teal-500 uppercase">
              Founder
            </p>
            <HeadingTag className="mt-2 font-display text-3xl font-bold text-slate-900 md:text-4xl">
              About Adil Amir
            </HeadingTag>

            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              <p>
                I&apos;m Adil Amir, founder of Blue Oracle Consulting. I help
                small manufacturers and property teams stop running maintenance
                out of spreadsheets, texts, and memory.
              </p>
              <p>
                I&apos;ve set up maintenance systems on the plant floor myself,
                including IBM Maximo and Fiix. That background is why I built
                Blue MMS: a practical CMMS for assets, work orders, preventive
                maintenance, and parts, with an AI assistant your team can
                actually use without a six-month rollout.
              </p>
              <p>
                Blue Oracle isn&apos;t a slide-deck consultancy. I work with shops
                that need fewer breakdowns, clearer work orders, and a system
                that sticks. If that sounds like you, try the live demo or book
                20 minutes with me.
              </p>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Adil Amir</p>
              <p className="mt-1 text-slate-600">Blue Oracle Consulting</p>
              <ul className="mt-3 space-y-1.5">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-cyan-600 hover:text-cyan-500"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+13105316059"
                    className="text-cyan-600 hover:text-cyan-500"
                  >
                    310-531-6059
                  </a>
                </li>
                <li>
                  <Link
                    href="/blue-mms"
                    className="text-cyan-600 hover:text-cyan-500"
                  >
                    {siteConfig.url}/blue-mms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
