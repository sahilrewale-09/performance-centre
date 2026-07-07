import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Gallery from '@/components/Gallery'
import Equipment from '@/components/Equipment'
import Reviews from '@/components/Reviews'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Page() {
  return (
    <main className="bg-[#080808] text-white">
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Equipment />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
