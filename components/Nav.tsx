import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="max-w-6xl mx-auto p-6 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold">BNI</Link>
      <div className="space-x-4">
        <a href="#features" className="text-slate-600 hover:text-slate-900">Features</a>
        <a href="#pricing" className="text-slate-600 hover:text-slate-900">Pricing</a>
        <a href="#contact" className="text-slate-600 hover:text-slate-900">Contact</a>
      </div>
    </nav>
  )
}
