import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, RefreshCcw, Heart, Sparkles } from "lucide-react";

const cards = [
  {
    icon: ShieldCheck,
    title: "Origen Controlado",
    desc: "Cada lote proviene de sebo de libre pastoreo, procesado sin químicos reactivos.",
    color: "group-hover:text-emerald-500"
  },
  {
    icon: RefreshCcw,
    title: "Satisfecho o Resuelto",
    desc: "Nuestra prioridad es tu piel. Si el producto no es para ti, buscamos la mejor solución.",
    color: "group-hover:text-amber-500"
  },
  {
    icon: Heart,
    title: "Soporte Humano",
    desc: "¿Dudas sobre la aplicación? Te asesoramos personalmente vía WhatsApp.",
    color: "group-hover:text-rose-500"
  }
];

export default function Guarantee() {
  return (
    <section className="py-24 bg-stone-50 dark:bg-[#080808] relative overflow-hidden">
      {/* Decoración de fondo minimalista */}
      <div className="absolute top-0 left-0 w-full h-px bg-stone-200 dark:bg-white/5" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/50 dark:bg-white/5 border border-stone-300/30 dark:border-white/10 mb-6"
          >
            <Sparkles size={12} className="text-emerald-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-600 dark:text-stone-400">
              Nuestra Promesa
            </span>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 text-stone-900 dark:text-white tracking-tighter"
          >
            Tu tranquilidad <br />
            <span className="italic font-serif font-light text-emerald-600">es nuestro estándar.</span>
          </motion.h3>

          <p className="text-stone-500 dark:text-stone-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Creemos tanto en la pureza de nuestros ingredientes que eliminamos todo el riesgo para ti. Tu inversión es un compromiso con la salud de tu piel.
          </p>
        </div>

        {/* Tarjetas de Garantía Estilo Boutique */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-10 bg-white dark:bg-stone-900/40 rounded-[2.5rem] border border-stone-200 dark:border-white/5 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]"
            >
              {/* Icono con efecto de profundidad */}
              <div className="relative w-16 h-16 mb-8 mx-auto md:mx-0">
                <div className="absolute inset-0 bg-stone-100 dark:bg-stone-800 rounded-2xl rotate-6 transition-transform group-hover:rotate-12 duration-500" />
                <div className="absolute inset-0 bg-white dark:bg-stone-900 rounded-2xl shadow-sm border border-stone-100 dark:border-white/5 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-1">
                  <item.icon size={32} className={`transition-colors duration-500 text-stone-400 ${item.color}`} />
                </div>
              </div>

              <h4 className="text-xl font-bold mb-3 text-stone-900 dark:text-white tracking-tight text-center md:text-left">
                {item.title}
              </h4>
              
              <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed font-light text-center md:text-left">
                {item.desc}
              </p>

              {/* Detalle decorativo al final de la card */}
              <div className="mt-8 flex justify-center md:justify-start">
                <div className="h-1 w-8 bg-stone-100 dark:bg-white/10 rounded-full transition-all duration-500 group-hover:w-16 group-hover:bg-emerald-500/50" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}