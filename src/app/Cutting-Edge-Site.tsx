import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Features } from "@/components/features";
import { Showcase } from "@/components/showcase";
import { Comparison } from "@/components/comparison";
import { Technical } from "@/components/technical";
import { HowItWorks } from "@/components/how-it-works";
import { Shipping } from "@/components/shipping";
import { Preorder } from "@/components/preorder";
import { CheckoutStatus } from "@/components/checkout-status";
import { Footer } from "@/components/footer";




export default function HomePage() {
  return (
    <>
    
    <CheckoutStatus />
      <Nav />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Comparison />
        <Technical />
        <HowItWorks />
        <Shipping />
        <Preorder />
        <Footer />
      </main>
    </>
  );
}
