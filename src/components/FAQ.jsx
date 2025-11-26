import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const faqs = [
    {
      q: "¿Huele a grasa?",
      a: "No, el proceso de purificación elimina por completo el olor fuerte.",
    },
    {
      q: "¿Sirve para piel sensible?",
      a: "Sí, es ideal para piel delicada, reactiva o con tendencia a irritarse.",
    },
    {
      q: "¿Cuánto dura?",
      a: "Entre 2 y 3 meses según el uso diario.",
    },
    {
      q: "¿Sirve para quemaduras o resequedad severa?",
      a: "Sí. El sebo purificado acelera la regeneración de la piel y reduce la inflamación.",
    },
    {
      q: "¿Es comedogénico? (¿tapa los poros?)",
      a: "No. Su estructura lipídica es compatible con la piel humana y ayuda a equilibrarla sin obstruir los poros.",
    },
    {
      q: "¿De qué está hecho exactamente?",
      a: "Solo de sebo de res 100% purificado mediante técnica ancestral. No contiene fragancias, alcoholes, aceites esenciales ni conservantes sintéticos.",
    },
    {
      q: "¿Se puede usar en bebés o niños?",
      a: "Sí, es completamente natural. Se recomienda usar una pequeña cantidad primero para verificar tolerancia individual.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-[#faf7f2] dark:bg-[#0d0d0d]">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-bold mb-12 text-center tracking-tight text-gray-900 dark:text-white">
          Preguntas Frecuentes
        </h2>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border-b border-gray-200 dark:border-neutral-700 pb-3 cursor-pointer"
              onClick={() => toggle(i)}
            >
              {/* Pregunta */}
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {item.q}
                </h3>

                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-xl text-gray-500 dark:text-gray-400"
                >
                  ▼
                </motion.span>
              </div>

              {/* Respuesta */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-700 dark:text-gray-300 text-base mt-2"
                  >
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
