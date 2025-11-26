import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export function BenefitsCarousel() {
  const scrollRef = useRef(null);

  const beneficios = [
    { icono: "💧", texto: "Hidratación profunda y de larga duración" },
    { icono: "🔥", texto: "Alivia irritaciones y piel reactiva" },
    { icono: "🛡️", texto: "Fortalece la barrera cutánea naturalmente" },
    { icono: "🥇", texto: "Rico en vitaminas A, D, E y K" },
    { icono: "🌿", texto: "100% natural, sin químicos agresivos" },
    { icono: "🧬", texto: "Compatible con la piel humana" },
    { icono: "✨", texto: "Textura suave sin sensación grasa" },
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 bg-[#FAF7F2]" id="beneficios">
      <div className="container mx-auto px-6 relative">

        {/* Título */}
        <h2 className="text-5xl font-bold text-center mb-12 tracking-tight">
          Beneficios
        </h2>

        {/* Flecha izquierda */}
        <button
          onClick={() => scroll("left")}
          className="
            hidden md:flex absolute left-0 top-1/2 -translate-y-1/2
            bg-white shadow-lg rounded-full p-3 text-gray-700 text-xl
            hover:bg-gray-100 transition z-20
          "
        >
          <FaChevronLeft />
        </button>

        {/* Carrusel */}
        <div
          ref={scrollRef}
          className="
            flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory
            scroll-smooth no-scrollbar
          "
        >
          {beneficios.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="
                min-w-[260px] bg-white p-7 rounded-2xl shadow-md
                text-center text-lg snap-center border border-gray-100
                hover:shadow-xl hover:-translate-y-1 transition
              "
            >
              <div className="text-4xl mb-3">{b.icono}</div>
              <p className="font-medium">{b.texto}</p>
            </motion.div>
          ))}
        </div>

        {/* Flecha derecha */}
        <button
          onClick={() => scroll("right")}
          className="
            hidden md:flex absolute right-0 top-1/2 -translate-y-1/2
            bg-white shadow-lg rounded-full p-3 text-gray-700 text-xl
            hover:bg-gray-100 transition z-20
          "
        >
          <FaChevronRight />
        </button>

      </div>
    </section>
  );
}

export default BenefitsCarousel;
