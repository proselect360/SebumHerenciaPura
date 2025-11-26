import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[80vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Capa oscura suave para que el texto resalte */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenido */}
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
        >
          Cuidado Natural, Ancestral y Real.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg md:text-2xl text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
        >
          Hidratación profunda con sebo purificado 100% natural.
        </motion.p>
      </div>
    </section>
  );
}

