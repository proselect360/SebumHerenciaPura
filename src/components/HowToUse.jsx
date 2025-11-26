import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Hand, Sparkles, Sun, Moon } from "lucide-react";

export default function HowToUse() {
  const steps = [
    {
      icon: <Droplets className="w-12 h-12" />,
      title: "1. Calienta una pequeña cantidad",
      text: "Toma una pequeña cantidad de producto y caliéntala entre tus manos para facilitar su aplicación.",
    },
    {
      icon: <Hand className="w-12 h-12" />,
      title: "2. Aplícalo en la piel limpia",
      text: "Aplica el producto sobre la piel limpia y seca para una mejor absorción y resultados visibles.",
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "3. Masajea",
      text: "Masajea suavemente con movimientos circulares hasta que el producto se absorba por completo.",
    },
    {
      icon: <Sun className="w-12 h-12" />,
      title: "4. Úsalo en todo el cuerpo",
      text: "Aplícalo en rostro, manos, labios, codos, talones y cualquier zona que necesite hidratación.",
    },
    {
      icon: <Moon className="w-12 h-12" />,
      title: "5. Repite 1–2 veces al día",
      text: "Para obtener mejores resultados, úsalo diariamente, preferiblemente en la mañana y en la noche.",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 bg-[#faf7f2] dark:bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Cómo Usarlo
        </h2>

        {/* ICONOS INTERACTIVOS */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`
                p-4 rounded-2xl transition-all duration-300
                ${
                  activeStep === i
                    ? "bg-primary text-white shadow-xl scale-110"
                    : "bg-white dark:bg-neutral-800 text-primary dark:text-primary shadow-md hover:scale-105"
                }
              `}
            >
              {React.cloneElement(step.icon, {
                className: "w-10 h-10 text-black dark:text-white",
              })}
            </button>
          ))}
        </div>

        {/* CONTENIDO DINÁMICO */}
        <div className="max-w-2xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="bg-white dark:bg-neutral-900 p-10 rounded-3xl shadow-lg dark:shadow-neutral-800"
            >
              <h3 className="text-2xl font-semibold mb-3 text-primary">
                {steps[activeStep].title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                {steps[activeStep].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
