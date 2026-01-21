import React from 'react';
import { motion } from "framer-motion";
import { Leaf, TestTube, Recycle, History } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="nosotros" className="relative bg-[#fcfcfc] dark:bg-[#050505] py-24 overflow-hidden">
      {/* Textura sutil de fondo o decoración circular */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-stone-100 dark:bg-stone-900/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* Columna Izquierda: Título y Concepto */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-emerald-500/10 text-emerald-600">
                <History size={18} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400">Desde el Origen</span>
            </div>

            <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-stone-900 dark:text-white leading-[0.85]">
              Nuestra <br />
              <span className="italic font-serif font-light text-emerald-600">Historia</span>.
            </h3>

            <div className="h-1 w-24 bg-emerald-600/20 rounded-full" />
            
            <p className="text-xl text-stone-500 dark:text-stone-400 font-light leading-relaxed max-w-md">
              Herencia Pura nace del deseo de volver a lo esencial: ingredientes reales, procesos honestos y resultados que se sienten en la piel.
            </p>
          </motion.div>

          {/* Columna Derecha: Texto Detallado y Lista */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-stone-900/40 p-8 md:p-12 rounded-[3rem] border border-stone-100 dark:border-white/5 shadow-sm">
            <div className="space-y-6 text-stone-700 dark:text-stone-300 leading-relaxed text-lg font-light">
              <p>
                Nuestro sebo de res es purificado con técnicas tradicionales transmitidas por generaciones. Logramos una textura <span className="text-stone-900 dark:text-white font-medium">suave, limpia y sin olores fuertes</span>—solo un aroma natural sutil propio del proceso artesanal.
              </p>
              
              <p>
                Cada lote se elabora en pequeños procesos, garantizando seguridad y calidad. Creemos en el poder de lo ancestral combinado con estándares modernos para ofrecer un producto <span className="italic font-serif">auténtico</span>.
              </p>

              <div className="pt-8 space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="mt-1 p-2 rounded-xl bg-stone-100 dark:bg-stone-800 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                    <Leaf size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 dark:text-white text-sm uppercase tracking-widest">Natural y Trazable</h4>
                    <p className="text-sm text-stone-500">Ingredientes 100% de origen conocido.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="mt-1 p-2 rounded-xl bg-stone-100 dark:bg-stone-800 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                    <TestTube size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 dark:text-white text-sm uppercase tracking-widest">Pureza Controlada</h4>
                    <p className="text-sm text-stone-500">Procesos purificados artesanalmente.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="mt-1 p-2 rounded-xl bg-stone-100 dark:bg-stone-800 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                    <Recycle size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 dark:text-white text-sm uppercase tracking-widest">Empaque Responsable</h4>
                    <p className="text-sm text-stone-500">Materiales aptos para reciclaje.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}