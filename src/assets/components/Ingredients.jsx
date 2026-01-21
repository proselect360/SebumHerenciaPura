import React from "react";
import { motion } from "framer-motion";
import { Leaf, Droplet, Sparkles, ShieldCheck } from "lucide-react";

export default function Ingredients() {
  const list = [
    {
      icon: <Droplet className="w-8 h-8 text-emerald-600" />,
      title: "Sebo de Res Purificado",
      desc: "Rico en vitaminas A, D, E y K. Grasa animal biocompatible que imita el sebo humano de forma exacta.",
      accent: "from-emerald-500/10"
    },
    {
      icon: <Leaf className="w-8 h-8 text-amber-600" />,
      title: "Zero Aditivos",
      desc: "Sin fragancias artificiales, alcoholes, aceites esenciales ni conservantes. Pureza en su estado más puro.",
      accent: "from-amber-500/10"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
      title: "Legado Ancestral",
      desc: "Procesado lentamente a bajas temperaturas para preservar la integridad celular de cada nutriente.",
      accent: "from-blue-500/10"
    },
  ];

  return (
    <section id="ingredientes" className="py-24 bg-white dark:bg-[#050505] relative overflow-hidden">
      {/* Orbes de fondo sutiles */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-amber-500/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <ShieldCheck size={16} className="text-emerald-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-600">Pureza Certificada</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-stone-900 dark:text-white tracking-tighter mb-4">
            Ingredientes <span className="italic font-serif font-light text-stone-500">Sin Secretos.</span>
          </h2>
          <p className="text-stone-500 dark:text-stone-400 max-w-xl mx-auto text-lg font-light">
            Seleccionamos lo que tu piel realmente reconoce. Nada más, nada menos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {list.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card Glassmorphism */}
              <div className={`h-full p-10 bg-gradient-to-br ${item.accent} to-transparent border border-stone-100 dark:border-white/5 rounded-[2.5rem] backdrop-blur-sm transition-all duration-500 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] dark:group-hover:shadow-emerald-900/10`}>
                
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-stone-900 shadow-sm flex items-center justify-center mb-8 transition-transform duration-500 group-hover:rotate-[10deg]">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-stone-900 dark:text-white tracking-tight">
                  {item.title}
                </h3>
                
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light">
                  {item.desc}
                </p>

                {/* Micro-indicador decorativo */}
                <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[10px] uppercase font-black tracking-widest text-stone-400">100% Biocompatible</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}