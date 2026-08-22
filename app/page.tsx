import Nav from '../components/Nav'
import Hero from '../components/Hero'
import FeatureGrid from '../components/FeatureGrid'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <FeatureGrid />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
