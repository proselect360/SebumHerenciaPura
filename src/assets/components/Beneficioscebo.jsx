import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Droplets, 
  Flame,      // 1. Corregido el import aquí
  ShieldAlert, 
  Stethoscope,
  ChevronRight,
  Plus
} from 'lucide-react';

const afecciones = [
  {
    id: "kp",
    title: "Queratosis Pilaris",
    description: "Suaviza protuberancias ásperas en brazos y muslos, mejorando la textura al nutrir folículos obstruidos.",
    longDesc: "El sebo purificado contiene ácidos grasos que imitan la barrera natural, permitiendo una exfoliación biológica suave.",
    icon: Sparkles,
    accent: "bg-emerald-500",
    glow: "shadow-emerald-500/20"
  },
  {
    id: "ec",
    title: "Eczema y Dermatitis",
    description: "Calma picor, enrojecimiento y grietas secas, reteniendo humedad por su alta biocompatibilidad.",
    longDesc: "A diferencia de las cremas con base de agua, el sebo no se evapora, creando un sello protector duradero.",
    icon: Stethoscope,
    accent: "bg-amber-500",
    glow: "shadow-amber-500/20"
  },
  {
    id: "ps", // 2. AQUÍ ESTABA EL ERROR: Cambiamos FlameKindling por Flame
    title: "Psoriasis Leve",
    description: "Disminuye escamas y placa inflamada, promoviendo la regeneración celular sin irritantes químicos.",
    longDesc: "Rico en vitaminas liposolubles que ayudan a calmar la sobreproducción de células cutáneas.",
    icon: Flame, 
    accent: "bg-red-500",
    glow: "shadow-red-500/20"
  },
  {
    id: "dh",
    title: "Deshidratación Extrema",
    description: "Restaura la elasticidad en codos, rodillas y talones de forma inmediata y real.",
    longDesc: "Ideal para climas extremos o pieles que han perdido su capacidad de retener lípidos.",
    icon: Droplets,
    accent: "bg-blue-500",
    glow: "shadow-blue-500/20"
  },
  {
    id: "rs",
    title: "Rosácea e Irritación",
    description: "Reduce el enrojecimiento facial y fortalece la barrera contra factores ambientales dañinos.",
    longDesc: "Fórmula 100% libre de fragancias y alcoholes que suelen detonar brotes de rosácea.",
    icon: ShieldAlert,
    accent: "bg-pink-500",
    glow: "shadow-pink-500/20"
  }
];

export default function Beneficioscebo() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="py-24 bg-[#080808] relative overflow-hidden text-white">
      {/* Luces radiales de fondo */}
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className={`absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] transition-colors duration-1000 ${afecciones[selected].accent}/10`} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6"
          >
            <Plus size={12} className="text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400">Dermatología Ancestral</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
            Sanación <span className="text-primary italic font-serif font-light text-primary">Real</span>.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Listado lateral */}
          <div className="lg:col-span-5 space-y-2">
            {afecciones.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setSelected(idx)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-500 group relative overflow-hidden ${
                  selected === idx ? "bg-white/10 border-white/10" : "hover:bg-white/[0.02] border-transparent"
                } border`}
              >
                <div className="flex items-center gap-6 relative z-10">
                  <span className={`text-xs font-mono ${selected === idx ? "text-primary" : "text-stone-600"}`}>
                    0{idx + 1}
                  </span>
                  <h4 className={`text-lg font-bold transition-all ${
                    selected === idx ? "translate-x-2 text-white" : "text-stone-500"
                  }`}>
                    {item.title}
                  </h4>
                </div>
                {selected === idx && (
                  <motion.div layoutId="active-bg" className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
                )}
              </button>
            ))}
          </div>

          {/* Panel Glassmorphism */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="relative h-full"
              >
                <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-3xl rounded-[3rem] border border-white/10 shadow-2xl" />
                <div className="relative z-10 p-10 md:p-16 flex flex-col">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 shadow-lg ${afecciones[selected].accent} ${afecciones[selected].glow}`}>
                    {React.createElement(afecciones[selected].icon, { size: 32, className: "text-white" })}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">{afecciones[selected].title}</h3>
                  <p className="text-xl text-stone-300 font-light leading-relaxed mb-6">{afecciones[selected].description}</p>
                  <p className="text-sm text-stone-500 italic border-l-2 border-primary/30 pl-4">{afecciones[selected].longDesc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}