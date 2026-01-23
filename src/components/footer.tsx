export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between text-sm text-white/60">
        <div>© {new Date().getFullYear()} The Cutting Edge</div>

        <div className="flex gap-6">
          <a className="hover:text-white/80 transition" href="/about">About</a>
          <a className="hover:text-white/80 transition" href="/faq">FAQ</a>
          <a className="hover:text-white/80 transition" href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
