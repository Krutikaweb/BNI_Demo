export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="max-w-6xl mx-auto p-6 text-sm text-slate-600">
        © {new Date().getFullYear()} BNI Demo — Built with Next.js + Tailwind
      </div>
    </footer>
  )
}
