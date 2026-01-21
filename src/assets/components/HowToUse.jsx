import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Hand, Sparkles, Sun, Repeat, ChevronRight } from "lucide-react";

const steps = [
  {
    icon: Droplets,
    title: "Caliéntalo",
    subtitle: "Paso 01",
    text: "Toma una pequeña cantidad y caliéntala entre tus palmas. El sebo se funde con el calor corporal, activando sus ácidos grasos.",
  },
  {
    icon: Hand,
    title: "Piel Limpia",
    subtitle: "Paso 02",
    text: "Aplícalo sobre la piel limpia y preferiblemente algo húmeda para sellar la hidratación profunda en los poros.",
  },
  {
    icon: Sparkles,
    title: "Masaje Circular",
    subtitle: "Paso 03",
    text: "Realiza masajes suaves hacia arriba. Esto estimula la circulación y permite que la barrera bioidéntica se fusione con tu dermis.",
  },
  {
    icon: Sun,
    title: "Uso Integral",
    subtitle: "Paso 04",
    text: "Es seguro para rostro, labios, codos y zonas con dermatitis. Un solo bálsamo para todas tus necesidades.",
  },
  {
    icon: Repeat,
    title: "Consistencia",
    subtitle: "Paso 05",
    text: "Úsalo mañana y noche. La regeneración celular real ocurre con el uso constante de ingredientes vivos.",
  },
];

export default function HowToUse() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="como-usarlo" className="py-24 bg-white dark:bg-[#050505] relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-emerald-600 font-bold tracking-[0.3em] text-[10px] uppercase"
          >
            Guía de Aplicación
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-black text-stone-900 dark:text-white tracking-tighter mt-2">
            El Ritual de <span className="italic font-serif font-light text-emerald-600">Sanación</span>.
          </h2>
        </div>

        {/* SELECTOR DE PASOS (Timeline Style) */}
        <div className="relative mb-16">
          {/* Línea de progreso de fondo */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-stone-200 dark:bg-white/10 -translate-y-1/2 hidden md:block" />
          
          <div className="flex justify-between items-center relative z-10 gap-4 flex-wrap md:flex-nowrap">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = activeStep === i;
              
              return (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className="group relative flex flex-col items-center"
                >
                  <motion.div
                    animate={{ 
                      scale: isActive ? 1.2 : 1,
                      backgroundColor: isActive ? "#059669" : "transparent" 
                    }}
                    className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center transition-all duration-500 
                      ${isActive ? "border-emerald-600 shadow-[0_0_25px_rgba(16,185,129,0.4)]" : "border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900"}
                    `}
                  >
                    <Icon className={`w-6 h-6 transition-colors duration-500 ${isActive ? "text-white" : "text-stone-400 group-hover:text-emerald-500"}`} />
                  </motion.div>
                  <span className={`absolute -bottom-8 text-[10px] font-bold tracking-widest uppercase transition-colors ${isActive ? "text-emerald-600" : "text-stone-400"}`}>
                    {step.subtitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CONTENIDO DINÁMICO */}
        <div className="max-w-3xl mx-auto mt-20">
          <div className="relative" style={{ perspective: "1500px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, rotateY: 30, x: 20 }}
                animate={{ opacity: 1, rotateY: 0, x: 0 }}
                exit={{ opacity: 0, rotateY: -30, x: -20 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                style={{ transformStyle: "preserve-3d" }}
                className="bg-stone-50 dark:bg-stone-900/50 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] border border-stone-100 dark:border-white/5 shadow-2xl relative overflow-hidden"
              >
                {/* Decoración interna */}
                <div className="absolute top-0 right-0 p-8 opacity-5 text-stone-900 dark:text-white">
                   {React.createElement(steps[activeStep].icon, { size: 120 })}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl font-serif italic text-emerald-600/50">0{activeStep + 1}</span>
                    <div className="h-px w-12 bg-emerald-600/30" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black mb-6 text-stone-900 dark:text-white tracking-tight">
                    {steps[activeStep].title}
                  </h3>
                  
                  <p className="text-stone-600 dark:text-stone-300 text-xl font-light leading-relaxed">
                    {steps[activeStep].text}
                  </p>

                  <div className="mt-10 flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest">
                    <span>Siguiente Paso</span>
                    <ChevronRight size={14} className="animate-bounce-x" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
      `}</style>
    </section>
  );
}