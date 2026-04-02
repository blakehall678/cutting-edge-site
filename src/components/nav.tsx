import Image from "next/image";
import Link from "next/link";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
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
          <Link href="/#preorder" className="hover:text-white transition">
            Pre-Order
          </Link>
          <Link href="/our-story" className="hover:text-white transition">
            Our Story
          </Link>
        </nav>
      </div>
    </header>
  );
}