import { NextResponse } from 'next/server'
import stripe from '../../../lib/stripe'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const priceId = body?.priceId || 'price_demo'

    // For demo purposes we create a Checkout Session with simple line items.
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        { price_data: {
            currency: 'usd',
            product_data: { name: 'Pro — BNI Demo' },
            unit_amount: 4900,
          }, quantity: body?.quantity || 1 }
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/?success=1`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/?canceled=1`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error('Checkout error', err)
    return NextResponse.json({ error: err.message || 'unknown' }, { status: 500 })
  }
}
