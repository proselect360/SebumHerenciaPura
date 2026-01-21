import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Sparkles, ChevronDown, ArrowRight } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  // Efecto de paralaje suave para la imagen de fondo
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section 
      className="relative w-full h-[90vh] md:h-screen min-h-[750px] flex items-center justify-center overflow-hidden bg-[#050505]"
      aria-labelledby="hero-heading"
    >
      {/* Background con Paralaje y Tratamiento Cinematográfico */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0 scale-110"
      >
        <div 
          className="absolute inset-0 bg-no-repeat"
          style={{ 
            backgroundImage: "url('/images/hero.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 20%',
          }}
        />
        {/* Overlay de color para unificar con el tema oscuro */}
        <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply" />
      </motion.div>
      
      {/* Gradientes de Profundidad (Vignette) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-[#050505] z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-0" />

      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
        
        {/* Badge Flotante con Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10 shadow-2xl"
        >
          <Leaf className="w-4 h-4 text-emerald-500" />
          <span className="text-[10px] font-black tracking-[0.4em] text-white/90 uppercase">
            Pureza Ancestral Certificada
          </span>
          <Sparkles className="w-4 h-4 text-emerald-500" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <h1 
            id="hero-heading"
            className="text-7xl md:text-[10rem] font-black text-white tracking-tighter leading-[0.8] mb-10 select-none"
          >
            PIEL <span className="italic font-serif font-light text-emerald-500/90">VIVA</span>.<br />
            <span className="text-white/90">SIN QUÍMICOS.</span>
          </h1>

          <p className="max-w-xl mx-auto text-lg md:text-2xl text-stone-400 font-light leading-relaxed">
            Rescata tu barrera cutánea con el poder del sebo bovino purificado. 
            <span className="text-emerald-500 font-medium italic block mt-2 md:inline md:ml-2"> 
              Biocompatibilidad real para resultados visibles.
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#productos"
            className="group relative flex items-center gap-3 bg-white text-black px-12 py-6 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] overflow-hidden"
          >
            {/* Efecto de brillo interior */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-stone-200/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <span className="relative z-10">Comprar Ahora</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <button className="px-8 py-6 text-white/60 hover:text-white font-bold text-sm uppercase tracking-widest transition-colors flex items-center gap-2 group">
            Ver el Proceso
            <div className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-emerald-500 transition-all duration-500" />
          </button>
        </motion.div>
      </div>

      {/* Indicador de scroll de alta gama */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 rotate-180 [writing-mode:vertical-lr]">
         
        </span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-emerald-500/50 via-emerald-500/10 to-transparent" />
      </motion.div>
    </section>
  );
}