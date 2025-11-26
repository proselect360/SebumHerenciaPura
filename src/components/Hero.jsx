import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Capa oscura para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contenido animado */}
      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-black/50 rounded-xl p-6 inline-block"
        >
          <h1 className="text-4xl md:text-7xl font-extrabold text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            Cuidado Natural, Ancestral y Real.
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            Hidratación profunda con sebo purificado 100% natural.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-10"
        >
          <a
            href="#productos"
            className="inline-block bg-primary text-white text-xl font-bold px-8 py-4 rounded-full shadow-lg hover:bg-primary-dark transition-transform hover:scale-105"
          >
            Comprar Ahora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
