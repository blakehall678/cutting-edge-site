import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function FAQPage() {
  return (
    <>
      <Nav />
      <main className="bg-black text-white min-h-screen pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl font-semibold">FAQ</h1>
          <p className="mt-4 text-white/70">
            Quick answers about The Cutting Edge and pre-orders.
          </p>

          <div className="mt-12 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="font-medium">What does it do?</h2>
              <p className="mt-2 text-white/70 text-sm">
                The Cutting Edge is a device that cleans your razor as you shave using sensor activation and
                concentrated water jets.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="font-medium">What razors does it work with?</h2>
              <p className="mt-2 text-white/70 text-sm">
                It’s designed to clean most common razors.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="font-medium">How much is it?</h2>
              <p className="mt-2 text-white/70 text-sm">
                $100 for the pre-order launch price.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="font-medium">Where do you ship?</h2>
              <p className="mt-2 text-white/70 text-sm">
                We currently ship within the United States.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
