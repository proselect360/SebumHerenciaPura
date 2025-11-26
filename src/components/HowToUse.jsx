import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Hand, Sparkles, Sun, Moon } from "lucide-react";

export default function HowToUse() {
  const steps = [
    {
      icon: <Droplets className="w-12 h-12" />,
      title: "1. Calienta una pequeña cantidad",
      text: "Toma una pequeña cantidad y caliéntala entre tus dedos.",
    },
    {
      icon: <Hand className="w-12 h-12" />,
      title: "2. Aplícalo en la piel limpia",
      text: "Aplícalo suavemente sobre la piel limpia para lograr mejor absorción.",
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "3. Masajea",
      text: "Masajea con movimientos suaves hasta que el producto se absorba.",
    },
    {
      icon: <Sun className="w-12 h-12" />,
      title: "4. Úsalo en todo el cuerpo",
      text: "Rostro, manos, labios, codos, talones y zonas resecas.",
    },
    {
      icon: <Moon className="w-12 h-12" />,
      title: "5. Repite 1–2 veces al día",
      text: "Para mejores resultados, úsalo diariamente en mañana y noche.",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 bg-[#faf7f2]">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
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
                ${activeStep === i ? "bg-primary text-white shadow-xl scale-110" : "bg-white text-primary shadow-md hover:scale-105"}
              `}
            >
              {React.cloneElement(step.icon, {
                className: "w-10 h-10",
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
              className="bg-white p-10 rounded-3xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-3 text-primary">
                {steps[activeStep].title}
              </h3>

              <p className="text-gray-700 text-lg">
                {steps[activeStep].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
