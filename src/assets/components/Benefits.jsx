import React from "react";
import { motion } from "framer-motion";
import { Droplets, ShieldCheck, Zap, Heart, Sparkles } from "lucide-react";

const benefits = [
  {
    title: "Hidratación Profunda",
    description: "Penetra en las capas más profundas de la dermis sin dejar rastro graso.",
    icon: Droplets,
    color: "text-blue-400",
  },
  {
    title: "Calma Instantánea",
    description: "Fórmula biocompatible que alivia rojeces y pieles reactivas.",
    icon: Zap,
    color: "text-yellow-400",
  },
  {
    title: "Barrera Natural",
    description: "Refuerza la protección cutánea contra agentes externos irritantes.",
    icon: ShieldCheck,
    color: "text-emerald-400",
  },
  {
    title: "Bio-Vitaminas",
    description: "Rico en vitaminas A, D, E y K para una regeneración celular real.",
    icon: Sparkles,
    color: "text-purple-400",
  },
  {
    title: "Ética Ancestral",
    description: "Tradición purificada que respeta el ciclo natural de tu cuerpo.",
    icon: Heart,
    color: "text-red-400",
  },
];

// Duplicamos para el efecto infinito fluido
const infiniteBenefits = [...benefits, ...benefits];

export default function SeboResBeneficios() {
  return (
    <section 
      id="beneficios"
      className="py-24 bg-stone-50 dark:bg-[#050505] overflow-hidden relative"
    >
      {/* Decoración de fondo minimalista */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none dark:invert" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-3">Resultados Reales</h2>
            <h3 className="text-5xl md:text-6xl font-black tracking-tighter text-stone-900 dark:text-white">
              El poder de lo <span className="italic font-serif font-light">puro</span>.
            </h3>
          </div>
          <p className="max-w-md text-stone-500 dark:text-stone-400 text-lg font-light">
            Más que una crema, es un retorno a la sabiduría biológica de nuestra piel.
          </p>
        </motion.div>
      </div>

      {/* Slider Infinito con Framer Motion */}
      <div className="relative flex overflow-hidden py-10">
        <motion.div 
          className="flex gap-6 pr-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, 
            ease: "linear", 
            repeat: Infinity 
          }}
          whileHover={{ transition: { duration: 60 } }} // Se ralentiza al poner el mouse
        >
          {infiniteBenefits.map((benefit, idx) => (
            <div
              key={idx}
              className="w-[350px] flex-shrink-0 group relative"
            >
              <div className="h-full bg-white dark:bg-[#0a0a0a] border border-stone-200 dark:border-white/5 p-8 rounded-[2rem] transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:group-hover:shadow-primary/10">
                
                <div className={`mb-6 p-4 w-fit rounded-2xl bg-stone-100 dark:bg-white/5 ${benefit.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <benefit.icon size={28} strokeWidth={1.5} />
                </div>

                <h4 className="text-xl font-bold text-stone-900 dark:text-white mb-3 tracking-tight">
                  {benefit.title}
                </h4>
                
                <p className="text-stone-500 dark:text-stone-400 leading-relaxed font-light">
                  {benefit.description}
                </p>

                {/* Línea decorativa inferior */}
                <div className="mt-8 w-8 h-1 bg-stone-200 dark:bg-white/10 group-hover:w-full group-hover:bg-primary transition-all duration-700" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradientes laterales para suavizar el corte del slider */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-stone-50 dark:from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-stone-50 dark:from-[#050505] to-transparent z-10 pointer-events-none" />
    </section>
  );
}