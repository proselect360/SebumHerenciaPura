import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  // Aparece el mensaje de ayuda después de 3 segundos para captar atención
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      
      {/* Tooltip de ayuda estilo Boutique */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 px-5 py-3 rounded-2xl shadow-2xl backdrop-blur-xl mb-2"
          >
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 bg-stone-200 dark:bg-stone-800 text-stone-500 rounded-full w-5 h-5 text-[10px] flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
            >
              ✕
            </button>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
              <p className="text-xs font-bold text-stone-800 dark:text-stone-200 tracking-tight">
                ¿Dudas con tu tipo de piel? <br />
                <span className="font-light text-stone-500">Estamos en línea para ayudarte.</span>
              </p>
            </div>
            {/* Triángulo del Tooltip */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white dark:bg-stone-900 border-r border-b border-stone-200 dark:border-white/10 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón Principal Magnético */}
      <motion.a
        href="https://wa.me/573125858242"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="group relative flex items-center justify-center w-16 h-16 bg-emerald-600 text-white rounded-[2rem] shadow-[0_20px_40px_rgba(16,185,129,0.3)] transition-all duration-500 overflow-hidden"
      >
        {/* Efecto de Brillo Infinito */}
        <motion.div 
          animate={{ 
            x: ['-100%', '100%'],
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
        />

        {/* Aura de pulso (Ring) */}
        <div className="absolute inset-0 rounded-[2rem] border-2 border-emerald-500 animate-ping opacity-20 scale-125" />

        <MessageCircle size={30} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
        
        {/* Destello sutil */}
        <Sparkles size={12} className="absolute top-3 right-3 text-emerald-200 opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.a>
    </div>
  );
}