import React from 'react'

export default function About() {
  return (
    <section id="nosotros" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h3 className="text-4xl font-bold mb-6 tracking-tight">
          Nuestra Historia
        </h3>

        <p className="text-gray-700 leading-relaxed text-lg">
          Herencia Pura nace del legado familiar y del deseo de volver a lo esencial:
          ingredientes reales, procesos honestos y resultados que se sienten en la piel.
          Nuestro sebo de res es purificado con técnicas tradicionales que se han transmitido
          por generaciones, logrando una textura suave, limpia y sin olores fuertes—solo un aroma
          natural muy sutil propio del proceso artesanal.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg mt-4">
          Cada lote se elabora cuidadosamente en pequeños procesos, garantizando
          pureza, seguridad y calidad. Creemos en el poder de lo ancestral combinado
          con estándares modernos para ofrecer un producto noble, efectivo y auténtico.
        </p>

        <ul className="mt-6 space-y-3 text-lg text-gray-700">
          <li>🌿 Ingredientes 100% naturales y trazables.</li>
          <li>🧪 Procesos purificados y controlados artesanalmente.</li>
          <li>♻️ Empaque responsable y apto para reciclaje.</li>
        </ul>

      </div>
    </section>
  )
}
