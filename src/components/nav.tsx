import Image from "next/image";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
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
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#features" className="hover:text-white transition">
            Features
          </a>
          <a href="#how" className="hover:text-white transition">
            How it Works
          </a>
          <a href="#preorder" className="hover:text-white transition">
            Pre-Order
          </a>
        </nav>
      </div>
    </header>
  );
}
