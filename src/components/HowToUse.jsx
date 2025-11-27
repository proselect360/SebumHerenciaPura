import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Hand, Sparkles, Sun, Repeat } from "lucide-react";

export default function HowToUse() {
  const steps = [
    {
      icon: Droplets,
      title: "1. Calienta una pequeña cantidad",
      text: "Toma una pequeña cantidad de producto y caliéntala entre tus manos para facilitar su aplicación.",
    },
    {
      icon: Hand,
      title: "2. Aplícalo en la piel limpia",
      text: "Aplica el producto sobre la piel limpia y seca para una mejor absorción y resultados visibles.",
    },
    {
      icon: Sparkles,
      title: "3. Masajea",
      text: "Masajea suavemente con movimientos circulares hasta que el producto se absorba por completo.",
    },
    {
      icon: Sun,
      title: "4. Úsalo en todo el cuerpo",
      text: "Aplícalo en rostro, manos, labios, codos, talones y cualquier zona que necesite hidratación.",
    },
    {
      icon: Repeat,
      title: "5. Repite 1–2 veces al día",
      text: "Para mejores resultados, úsalo diariamente en la mañana y en la noche.",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="como-usarlo"
      className="py-20 bg-[#faf7f2] dark:bg-[#0d0d0d]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Cómo Usarlo
        </h2>

        {/* ICONOS INTERACTIVOS */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`p-4 rounded-2xl transition-all duration-300
                  ${
                    activeStep === i
                      ? "bg-primary text-white shadow-xl scale-110"
                      : "bg-white dark:bg-neutral-800 text-primary dark:text-primary shadow-md hover:scale-105"
                  }
                `}
              >
                <Icon className="w-10 h-10 text-black dark:text-white" />
              </button>
            );
          })}
        </div>

        {/* CONTENIDO DINÁMICO CON GIRO */}
        <div className="max-w-2xl mx-auto text-center">
          <div
            className="relative"
            style={{ perspective: "1000px" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 90 }}
                transition={{ duration: 0.45 }}
                style={{ transformStyle: "preserve-3d" }}
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
      </div>
    </section>
  );
}
