"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/how-we-help", label: "How we help" },
  { href: "/tools", label: "Tools" },
  { href: "/prompts", label: "Prompts" },
  { href: "/videos", label: "Videos" },
  { href: "/glossary", label: "Glossary" },
  { href: "/use-cases", label: "Use cases" },
  { href: "/challenges", label: "Challenges" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-rule">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4">
        <Link href="/" className="text-[17px] font-bold tracking-tightest">
          The AI Assistant
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[14px] text-muted hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.meetup.com"
            className="text-[14px] font-medium text-pine hover:underline"
          >
            UK AI Meetup
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
          aria-expanded={open}
          aria-label="Menu"
        >
          <span className="text-[14px] font-medium">{open ? "Close" : "Menu"}</span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-rule bg-panel lg:hidden">
          <div className="mx-auto max-w-content px-5 py-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-rule py-3 text-[15px] last:border-0"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
