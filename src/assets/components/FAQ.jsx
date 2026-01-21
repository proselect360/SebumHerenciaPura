import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, HelpCircle } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);;

const toggle = (i) => {
  setOpenIndex(openIndex === i ? null : i);
};

  const faqs = [
    {
      q: "¿Huele a grasa?",
      a: "No. Nuestro proceso de purificación artesanal elimina por completo el olor fuerte, dejando un aroma neutro y limpio que desaparece al contacto con la piel.",
    },
    {
      q: "¿Sirve para piel sensible?",
      a: "Es nuestra especialidad. Al ser 100% biocompatible, es ideal para pieles reactivas, con rosácea o tendencia a la irritación.",
    },
    {
      q: "¿Es comedogénico? (¿tapa los poros?)",
      a: "No. A diferencia de los aceites vegetales o derivados del petróleo, su estructura lipídica imita el sebo humano, equilibrando la piel sin obstruir los poros.",
    },
    {
      q: "¿Se puede usar en bebés?",
      a: "Totalmente. Al carecer de fragancias, alcoholes y conservantes sintéticos, es la opción más noble y segura para la piel delicada de los más pequeños.",
    },
    {
      q: "¿De qué está hecho exactamente?",
      a: "Solo sebo de res 100% purificado mediante técnica ancestral. Un solo ingrediente vivo, sin rellenos químicos ni aditivos artificiales.",
    },
    {
      q: "¿Cuánto tiempo dura un frasco?",
      a: "Debido a su alta concentración de nutrientes, una pequeña cantidad rinde mucho. Un frasco suele durar entre 2 y 3 meses con uso diario.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white dark:bg-[#050505] relative overflow-hidden">
      {/* Decoración sutil de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-stone-200 dark:bg-white/10" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <HelpCircle size={16} className="text-emerald-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-600">Resolviendo Dudas</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-stone-900 dark:text-white tracking-tighter">
            Claridad <span className="italic font-serif font-light text-stone-500">Total.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`group rounded-[2rem] transition-all duration-500 border ${
                  isOpen 
                    ? "bg-stone-50 dark:bg-stone-900/40 border-emerald-500/20 shadow-xl" 
                    : "bg-white dark:bg-transparent border-stone-100 dark:border-white/5 hover:border-emerald-500/30"
                }`}
              >
                <button
                  className="w-full flex justify-between items-center p-6 md:p-8 text-left"
                  onClick={() => toggle(i)}
                >
                  <h3 className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
                    isOpen ? "text-emerald-600" : "text-stone-800 dark:text-stone-200"
                  }`}>
                    {item.q}
                  </h3>

                  <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-500 ${
                    isOpen ? "bg-emerald-600 text-white rotate-45" : "bg-stone-100 dark:bg-stone-800 text-stone-400"
                  }`}>
                    <Plus size={18} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 pt-0">
                        <div className="h-px w-12 bg-emerald-600/20 mb-4" />
                        <p className="text-stone-600 dark:text-stone-400 text-lg font-light leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Footer de FAQ interactivo */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-stone-400 text-sm mb-4">¿Tienes una pregunta diferente?</p>
          <a 
            href="https://wa.me/573125858242" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-emerald-600 font-bold uppercase tracking-widest text-[11px] hover:text-emerald-500 transition-colors border-b border-emerald-500/30 pb-1"
          >
            Chatea con nosotros directamente
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;