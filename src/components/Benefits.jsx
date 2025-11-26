import React, { useRef, useEffect } from "react";
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

  // Duplicar beneficios para infinito
  const items = [...beneficios, ...beneficios, ...beneficios];

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  // Detectar scroll infinito
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const isAtStart = scrollLeft === 0;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth;

      if (isAtStart) {
        container.scrollLeft = scrollWidth / 3; // Salta al segundo bloque
      } else if (isAtEnd) {
        container.scrollLeft = scrollWidth / 3 * 2; // Salta al tercer bloque
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="beneficios" className="py-20 bg-[#FAF7F2] dark:bg-[#0d0d0d]">
      <div className="container mx-auto px-6 relative">
        <h2 className="text-5xl font-bold text-center mb-12 tracking-tight dark:text-white">
          Beneficios
        </h2>

        <button
          onClick={() => scroll("left")}
          className="
            hidden md:flex absolute left-0 top-1/2 -translate-y-1/2
            bg-white dark:bg-neutral-800
            shadow-lg rounded-full p-3
            text-gray-700 dark:text-gray-300
            text-xl hover:bg-gray-100 dark:hover:bg-neutral-700
            transition z-20
          "
        >
          <FaChevronLeft />
        </button>

        <div
          ref={scrollRef}
          className="
            flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory
            scroll-smooth no-scrollbar
          "
        >
          {items.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="
                min-w-[260px]
                bg-white dark:bg-neutral-900
                text-gray-800 dark:text-gray-200
                p-7 rounded-2xl shadow-md
                snap-center border border-gray-200 dark:border-neutral-700
                hover:shadow-xl hover:-translate-y-1 transition
                text-center text-lg
              "
            >
              <div className="text-4xl mb-3">{b.icono}</div>
              <p className="font-medium">{b.texto}</p>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="
            hidden md:flex absolute right-0 top-1/2 -translate-y-1/2
            bg-white dark:bg-neutral-800
            shadow-lg rounded-full p-3
            text-gray-700 dark:text-gray-300
            text-xl hover:bg-gray-100 dark:hover:bg-neutral-700
            transition z-20
          "
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default BenefitsCarousel;
