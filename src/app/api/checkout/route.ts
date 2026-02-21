import Stripe from "stripe";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const priceId = process.env.STRIPE_PRICE_ID;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!secretKey || !priceId || !siteUrl) {
    return new Response(JSON.stringify({ error: 'Stripe is not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const stripe = new Stripe(secretKey);

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
