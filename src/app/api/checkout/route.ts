import Stripe from "stripe";

export const runtime = "nodejs";

const secretKey = process.env.STRIPE_SECRET_KEY;
const priceId = process.env.STRIPE_PRICE_ID;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

if (!secretKey) throw new Error("Missing STRIPE_SECRET_KEY in .env.local");
if (!priceId) throw new Error("Missing STRIPE_PRICE_ID in .env.local");
if (!siteUrl) throw new Error("Missing NEXT_PUBLIC_SITE_URL in .env.local");

const stripe = new Stripe(secretKey);


export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const quantity = Math.max(1, Math.min(5, Number(body?.quantity ?? 1)));

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: priceId, quantity }],
    success_url: `${siteUrl}/?success=1`,
    cancel_url: `${siteUrl}/?canceled=1`,
  });

  return Response.json({ url: session.url });
}
