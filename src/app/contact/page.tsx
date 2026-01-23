import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="bg-black text-white min-h-screen pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl font-semibold">Contact</h1>
          <p className="mt-4 text-white/70">
            Questions about fit, pre-orders, or partnerships? Reach out.
          </p>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-white/70 text-sm">
              Email:{" "}
              <a
                className="text-white underline underline-offset-4"
                href="mailto:hello@findthecuttingedge.com"
              >
                hello@findthecuttingedge.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
