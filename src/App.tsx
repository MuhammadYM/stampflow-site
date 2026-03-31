import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonial from './components/Testimonial'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <div style={{
        opacity: loading ? 0 : 1,
        transition: 'opacity 0.5s ease-out',
      }}>
        <Navbar />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <Testimonial />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  )
}
