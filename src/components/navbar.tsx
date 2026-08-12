"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, HeartHandshake, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-4">
      <div
        className={cn(
          "flex w-full max-w-5xl items-center justify-between gap-3 rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5",
          scrolled ? "glass-strong" : "glass",
          scrolled && "shadow-lg shadow-[rgba(59,74,90,0.12)]"
        )}
      >
        <Link
          href="/"
          className="flex min-h-11 items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          aria-label={`${siteConfig.name} — home`}
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#5a6f85] text-white shadow-md shadow-[rgba(59,74,90,0.35)]">
            <HeartHandshake className="size-5" aria-hidden />
          </span>
          <span className="leading-tight">
            <span className="block font-heading text-base font-semibold tracking-tight text-primary">
              GracePoint
            </span>
            <span className="block text-[10px] font-medium tracking-[0.14em] text-muted-foreground uppercase">
              Planning Services
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {siteConfig.nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                  active
                    ? "bg-white/70 text-primary shadow-sm"
                    : "text-foreground/75 hover:bg-white/60 hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
            className={buttonVariants({ variant: "ghost", size: "default" })}
          >
            <Phone className="size-4" aria-hidden />
            <span className="hidden lg:inline">{siteConfig.phone}</span>
          </a>
          <Link href="/contact" className={buttonVariants({ variant: "default", size: "default" })}>
            Start Planning
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="flex min-h-11 min-w-11 items-center justify-center rounded-xl text-primary transition-colors hover:bg-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-5" aria-hidden />
          </SheetTrigger>
          <SheetContent side="right" className="glass-strong w-[82%] max-w-sm">
            <SheetHeader className="border-b border-border/60">
              <SheetTitle className="flex items-center gap-2 text-primary">
                <HeartHandshake className="size-5" aria-hidden />
                {siteConfig.name}
              </SheetTitle>
              <SheetDescription>Compassionate funeral pre-planning.</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-1.5 p-4" aria-label="Mobile navigation">
              {siteConfig.nav.map((item) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex min-h-11 items-center rounded-xl px-4 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/80 hover:bg-white/60 hover:text-primary"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-auto flex flex-col gap-3 p-4 pt-2">
              <Link href="/contact" className={buttonVariants({ variant: "default", size: "default" })}>
                Start Free Planning
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                className={buttonVariants({ variant: "outline", size: "default" })}
              >
                <Phone className="size-4" aria-hidden />
                {siteConfig.phone}
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
