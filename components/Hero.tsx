'use client'
import React from 'react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-white py-24">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl font-extrabold mb-4">Launch your AI product—faster.</h1>
        <p className="text-xl mb-8">A modern landing template with Stripe checkout prewired for demo/test mode.</p>
        <div>
          <a href="#pricing" className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold">Get started</a>
        </div>
      </div>
    </section>
  )
}
