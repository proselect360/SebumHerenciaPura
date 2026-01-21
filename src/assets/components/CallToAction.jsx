import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Heart } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-32 bg-[#faf7f2] dark:bg-[#050505] relative overflow-hidden">
      {/* Círculos de luz ambiental para un efecto premium */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <Sparkles className="w-5 h-5 text-emerald-600" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-500 dark:text-stone-400">
            Edición Limitada
          </span>
          <Sparkles className="w-5 h-5 text-emerald-600" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black mb-8 text-stone-900 dark:text-white tracking-tighter leading-[0.9]"
        >
          Tu piel merece <br />
          <span className="italic font-serif font-light text-emerald-600">lo real.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-stone-600 dark:text-stone-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Únete a quienes ya rescataron su barrera cutánea con el poder ancestral del sebo purificado. 100% biocompatible, 0% químicos.
        </motion.p>

        <div className="flex flex-col items-center gap-8">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#productos"
            className="group relative inline-flex items-center justify-center gap-3 bg-stone-900 dark:bg-white text-white dark:text-black text-xl font-bold px-12 py-6 rounded-[2rem] shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Efecto de brillo que recorre el botón */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
            />
            
            <span>Comenzar mi Ritual</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </motion.a>

          {/* Badges de confianza minimalistas */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 md:gap-12"
          >
            <div className="flex items-center gap-2 text-stone-400 dark:text-stone-500">
              <ShieldCheck size={16} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Seguro para Piel Sensible</span>
            </div>
            <div className="flex items-center gap-2 text-stone-400 dark:text-stone-500">
              <Heart size={16} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Hecho a Mano en Colombia</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}