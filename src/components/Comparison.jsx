import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Ingredientes",
    common: ["Mezclas sintéticas", "Fragancias y rellenos"],
    pure: ["Sebo de res purificado", "0% fragancias artificiales"],
  },
  {
    title: "Profundidad de hidratación",
    common: ["Hidratación solo superficial", "Sensación pegajosa"],
    pure: ["Hidratación profunda y duradera", "Textura nutritiva, no grasosa"],
  },
  {
    title: "Compatibilidad con la piel",
    common: ["Pueden irritar piel sensible", "Formulaciones genéricas"],
    pure: ["Bioidéntico a la barrera de la piel", "Ideal para piel seca y reactiva"],
  },
  {
    title: "Filosofía del producto",
    common: ["Enfoque cosmético convencional", "Marketing por encima de ingredientes"],
    pure: ["Rescate de recetas ancestrales", "Prioridad: piel sensible y reactiva"],
  },
];

function FlipCard({ item, index, autoPlayGlobal }) {
  const [flipped, setFlipped] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    setAutoPlay(autoPlayGlobal);
  }, [autoPlayGlobal]);

  useEffect(() => {
    if (!autoPlay) return;

    const baseInterval = 4000;
    const startDelay = 1500 * index;

    let intervalId;

    const startTimeout = setTimeout(() => {
      setFlipped((v) => !v);

      intervalId = setInterval(() => {
        setFlipped((v) => !v);
      }, baseInterval);
    }, startDelay);

    return () => {
      clearTimeout(startTimeout);
      if (intervalId) clearInterval(intervalId);
    };
  }, [autoPlay, index]);

  const handleClick = () => {
    setAutoPlay(false);
    setFlipped((v) => !v);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="h-64 w-full cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={handleClick}
    >
      <motion.div
        className="relative h-full w-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Frente: Cremas comunes */}
        <div
          className="absolute inset-0 rounded-2xl border border-red-100 dark:border-red-700 bg-white dark:bg-neutral-900/80 px-6 py-7 shadow-sm"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="block h-1 w-full rounded-full bg-gradient-to-r from-red-400 via-amber-400 to-red-500 mb-3" />
          <p className="text-xs md:text-[13px] font-semibold uppercase tracking-[0.18em] text-red-500 dark:text-red-300">
            Cremas comunes
          </p>
          <h3 className="mt-2 text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
            {item.title}
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm md:text-base text-gray-700 dark:text-gray-300">
            {item.common.map((text) => (
              <li key={text}>• {text}</li>
            ))}
          </ul>
          <p className="mt-4 text-[11px] md:text-xs text-gray-400 text-right">
            Toca o haz clic para ver Herencia Pura
          </p>
        </div>

        {/* Reverso: Herencia Pura */}
        <div
          className="absolute inset-0 rounded-2xl border border-emerald-200 dark:border-emerald-700 bg-[#f5faf6] dark:bg-emerald-900/40 px-6 py-7 shadow-md overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-primary to-emerald-400" />
          <p className="mt-3 text-xs md:text-[13px] font-semibold uppercase tracking-[0.18em] text-primary">
            Herencia Pura
          </p>
          <h3 className="mt-2 text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
            {item.title}
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm md:text-base text-gray-800 dark:text-gray-100">
            {item.pure.map((text) => (
              <li key={text}>• {text}</li>
            ))}
          </ul>
          <p className="mt-4 text-[11px] md:text-xs text-gray-300 text-right">
            Toca o haz clic para ver cremas comunes
          </p>

          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.25 }}
            className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-amber-300 blur-3xl"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Comparison() {
  const [autoPlayGlobal] = useState(true);

  return (
    <section id="comparacion" className="py-16 bg-[#faf7f2] dark:bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            ¿Qué hace diferente a Herencia Pura?
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-600 dark:text-gray-300">
            Da la vuelta a cada tarjeta y compara tu crema de siempre con una hidratación 100% natural.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, index) => (
            <FlipCard
              key={item.title}
              item={item}
              index={index}
              autoPlayGlobal={autoPlayGlobal}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
