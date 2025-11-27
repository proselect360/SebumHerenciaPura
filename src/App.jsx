import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Products from './components/Products'
import Guarantee from './components/Guarantee'
import HowToUse from './components/HowToUse'
import Ingredients from './components/Ingredients'
import Comparison from './components/Comparison'
import CallToAction from './components/CallToAction'
import QualityBadges from './components/QualityBadges'
import ShippingAndPayment from './components/ShippingAndPayment'
import About from './components/About'
import { FAQ } from './components/FAQ'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}
    >
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Products />
        <HowToUse />
        <Ingredients />
        <QualityBadges />
        <Comparison />
        <ShippingAndPayment />
        <CallToAction />
        <Guarantee />
        <About />
        <FAQ />
        <FloatingWhatsApp />
      </main>
      <Footer />
    </div>
  )
}
