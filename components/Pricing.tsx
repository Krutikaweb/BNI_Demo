'use client'
import { useState } from 'react'

export default function Pricing() {
  const [loading, setLoading] = useState(false)

  async function handleCheckout() {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: 'price_demo', quantity: 1 })
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert('Checkout failed')
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
      alert('Error creating checkout session')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="pricing" className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Pricing</h2>
        <div className="inline-block p-8 bg-white rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-2">Pro</h3>
          <p className="text-slate-600 mb-4">$49 / month</p>
          <button onClick={handleCheckout} className="bg-indigo-600 text-white px-6 py-2 rounded-md" disabled={loading}>
            {loading ? 'Loading…' : 'Start free trial'}
          </button>
        </div>
      </div>
    </section>
  )
}
