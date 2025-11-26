import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Products from './components/Products'
import Guarantee from './components/Guarantee'
import HowToUse from './components/HowToUse'
import Ingredients from './components/Ingredients'
import Comparison from './components/Comparison'
import CallToAction from './components/CallToAction'   // correcto
import QualityBadges from './components/QualityBadges'
import ShippingAndPayment from './components/ShippingAndPayment'
import About from './components/About'
import { FAQ } from './components/FAQ'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'


export default function App(){
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>

        {/* 1. Hero */}
        <Hero />

        {/* 2. Beneficios */}
        <Benefits />

        {/* 3. Productos */}
        <Products />

        {/* 4. Cómo usar */}
        <HowToUse />

        {/* 5. Ingredientes */}
        <Ingredients />

        {/* 6. Comparación */}
        <Comparison />

        {/* 7. Garantía */}
        <Guarantee />

        {/* 8. CTA fuerte */}
        <CallToAction />

        {/* 9. Certificaciones */}
        <QualityBadges />

        {/* 10. Envíos y pagos */}
        <ShippingAndPayment />

        {/* 11. Sobre nosotros */}
        <About />

        {/* 12. Preguntas frecuentes */}
        <FAQ />

        {/* 13. WhatsApp flotante */}
        <FloatingWhatsApp />

      </main>
      <Footer />
    </div>
  )
}
