"use client";

import Link from "next/link";
import { HeartHandshake, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { services } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 px-4 pb-6 pt-16">
      <div className="glass-strong mx-auto max-w-6xl rounded-3xl px-6 py-10 sm:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              aria-label={`${siteConfig.name} — home`}
            >
              <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#5a6f85] text-white shadow-md shadow-[rgba(59,74,90,0.3)]">
                <HeartHandshake className="size-5" aria-hidden />
              </span>
              <span className="font-heading text-lg font-semibold text-primary">GracePoint</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Compassionate funeral pre-planning for families. We help you plan, fund and
              protect every arrangement — so your loved ones are never left guessing.
            </p>
            <div className="mt-5 flex gap-2.5">
              {siteConfig.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-11 items-center justify-center rounded-xl bg-white/60 text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:bg-white hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <i className={s.icon} aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer — company">
            <h3 className="text-sm font-semibold tracking-wide text-primary uppercase">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Pricing", href: "/pricing" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex min-h-8 items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                    <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer — services">
            <h3 className="text-sm font-semibold tracking-wide text-primary uppercase">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-flex min-h-8 items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-primary uppercase">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.region}{" "}
                  {siteConfig.address.postalCode}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                  className="flex min-h-8 items-center gap-2.5 transition-colors hover:text-primary"
                >
                  <Phone className="size-4 shrink-0 text-accent" aria-hidden />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex min-h-8 items-center gap-2.5 transition-colors hover:text-primary"
                >
                  <Mail className="size-4 shrink-0 text-accent" aria-hidden />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-[#5a6f85] px-5 text-sm font-medium text-white shadow-lg shadow-[rgba(59,74,90,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Start Free Planning
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Licensed counselors · Trust-protected funds · Grief support always included
          </p>
        </div>
      </div>
    </footer>
  );
}
