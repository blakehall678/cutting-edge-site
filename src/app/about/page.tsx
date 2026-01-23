import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="bg-black text-white min-h-screen pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl font-semibold">About</h1>
          <p className="mt-5 text-white/70">
            The Cutting Edge is a premium razor-cleaning device designed to keep
            your razor cleaner during every shave using smart detection and
            targeted cleaning.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
