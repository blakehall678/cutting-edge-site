"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <Image
            src="/images/logo.png"
            alt="The Cutting Edge"
            width={28}
            height={28}
            className="invert"
          />
          <span className="text-white font-medium tracking-wide">
            The Cutting Edge
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <Link href="/#features" className="hover:text-white transition">
            Features
          </Link>
          <Link href="/#how" className="hover:text-white transition">
            How it Works
          </Link>
          <Link href="/our-story" className="hover:text-white transition">
            Our Story
          </Link>
          <Link href="/#preorder" className="hover:text-white transition">
            Pre-Order
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col justify-center gap-1.5"
        >
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95">
          <nav className="px-6 py-4 flex flex-col gap-4 text-white">
            <Link
              href="/#features"
              onClick={closeMenu}
              className="py-2 border-b border-white/10"
            >
              Features
            </Link>
            <Link
              href="/#how"
              onClick={closeMenu}
              className="py-2 border-b border-white/10"
            >
              How it Works
            </Link>
            <Link
              href="/our-story"
              onClick={closeMenu}
              className="py-2 border-b border-white/10"
            >
              Our Story
            </Link>
            <Link
              href="/#preorder"
              onClick={closeMenu}
              className="py-2"
            >
              Pre-Order
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}