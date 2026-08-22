export default function FeatureGrid() {
  const features = [
    { title: 'Fast deploy', desc: 'Deploy on Vercel or Netlify in minutes.' },
    { title: 'Stripe ready', desc: 'Demo Stripe Checkout integration included.' },
    { title: 'Responsive', desc: 'Mobile-first components and accessibility basics.' },
  ]

  return (
    <section id="features" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
