import React from 'react';
import { motion } from "framer-motion";

export default function About() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="nosotros" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 tracking-tight"
        >
          Nuestra Historia
        </motion.h3>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-700 leading-relaxed text-lg"
        >
          Herencia Pura nace del legado familiar y del deseo de volver a lo esencial:
          ingredientes reales, procesos honestos y resultados que se sienten en la piel.
          Nuestro sebo de res es purificado con técnicas tradicionales que se han transmitido
          por generaciones, logrando una textura suave, limpia y sin olores fuertes—solo un aroma
          natural muy sutil propio del proceso artesanal.
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-700 leading-relaxed text-lg mt-4"
        >
          Cada lote se elabora cuidadosamente en pequeños procesos, garantizando
          pureza, seguridad y calidad. Creemos en el poder de lo ancestral combinado
          con estándares modernos para ofrecer un producto noble, efectivo y auténtico.
        </motion.p>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 space-y-3 text-lg text-gray-700"
        >
          <li>🌿 Ingredientes 100% naturales y trazables.</li>
          <li>🧪 Procesos purificados y controlados artesanalmente.</li>
          <li>♻️ Empaque responsable y apto para reciclaje.</li>
        </motion.ul>
      </div>
    </section>
  );
}
