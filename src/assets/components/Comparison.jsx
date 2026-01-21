import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, RefreshCcw, Leaf, ZapOff } from "lucide-react";

const items = [
  {
    title: "Ingredientes",
    common: ["Mezclas sintéticas", "Fragancias y rellenos"],
    pure: ["Sebo de res purificado", "0% fragancias artificiales"],
  },
  {
    title: "Profundidad",
    common: ["Hidratación superficial", "Sensación pegajosa"],
    pure: ["Hidratación profunda", "Textura nutritiva, no grasosa"],
  },
  {
    title: "Compatibilidad",
    common: ["Pueden irritar piel sensible", "Formulaciones genéricas"],
    pure: ["Bioidéntico a tu piel", "Ideal para piel reactiva"],
  },
  {
    title: "Filosofía",
    common: ["Enfoque cosmético masivo", "Marketing vs Calidad"],
    pure: ["Recetas ancestrales", "Prioridad: salud celular"],
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
    const baseInterval = 5000;
    const startDelay = 1200 * index;
    
    const timeout = setTimeout(() => {
      setFlipped(prev => !prev);
      const interval = setInterval(() => {
        setFlipped(prev => !prev);
      }, baseInterval);
      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [autoPlay, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="h-[280px] w-full cursor-pointer"
      style={{ perspective: "1000px" }} // Fix: Estilo en línea para compatibilidad
      onClick={() => { setAutoPlay(false); setFlipped(!flipped); }}
    >
      <motion.div
        className="relative h-full w-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: "preserve-3d" }} // Fix: Estilo en línea
      >
        {/* LADO A: INDUSTRIAL */}
        <div
          className="absolute inset-0 rounded-[2rem] border border-red-500/10 bg-white dark:bg-stone-900 p-8 shadow-xl"
          style={{ backfaceVisibility: "hidden" }} // Fix: Estilo en línea
        >
          <div className="flex justify-between items-start mb-6">
            <div className="p-2 rounded-lg bg-red-50 text-red-500 dark:bg-red-500/10">
              <ZapOff size={20} />
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-red-400 uppercase">Estándar Industrial</span>
          </div>
          
          <h3 className="text-xl font-black text-stone-900 dark:text-white mb-4 tracking-tight">
            {item.title}
          </h3>
          
          <ul className="space-y-3">
            {item.common.map((text, i) => (
              <li key={i} className="flex items-center gap-2 text-stone-500 text-sm">
                <AlertCircle size={14} className="flex-shrink-0" />
                {text}
              </li>
            ))}
          </ul>

          <div className="absolute bottom-6 right-8 flex items-center gap-2 text-stone-300">
            <span className="text-[10px] uppercase font-bold tracking-widest">Descubrir</span>
            <RefreshCcw size={12} className="animate-spin" style={{ animationDuration: '3s' }} />
          </div>
        </div>

        {/* LADO B: ANCESTRAL (PUREZA) */}
        <div
          className="absolute inset-0 rounded-[2rem] border border-emerald-500/20 bg-[#fdfcfb] dark:bg-[#0a0a0a] p-8 shadow-2xl overflow-hidden"
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)" 
          }} // Fix: Estilo en línea
        >
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600">
              <Leaf size={20} />
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-emerald-600 uppercase italic">Herencia Pura</span>
          </div>
          
          <h3 className="text-xl font-black text-stone-900 dark:text-white mb-4 tracking-tight relative z-10">
            {item.title}
          </h3>
          
          <ul className="space-y-3 relative z-10">
            {item.pure.map((text, i) => (
              <li key={i} className="flex items-center gap-2 text-stone-700 dark:text-stone-300 font-medium text-sm">
                <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Comparison() {
  return (
    <section id="comparacion" className="py-24 bg-stone-50 dark:bg-[#050505] relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-stone-900 dark:text-white tracking-tighter"
          >
            La Diferencia <span className="italic font-serif font-light text-emerald-600">Herencia</span>.
          </motion.h2>
          <p className="mt-4 text-stone-500 max-w-2xl mx-auto text-lg">
            No todas las hidrataciones son iguales. Da la vuelta y compruébalo.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {items.map((item, index) => (
            <FlipCard
              key={item.title}
              item={item}
              index={index}
              autoPlayGlobal={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}