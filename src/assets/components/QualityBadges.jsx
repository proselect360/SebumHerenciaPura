import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Award, Microscope, Droplets } from "lucide-react";

export default function Certifications() {
  const qualities = [
    { 
      icon: Leaf, 
      title: "100% Biocompatible", 
      text: "Fórmula zero químicos que el cuerpo reconoce y absorbe de inmediato.",
      glow: "group-hover:text-emerald-500"
    },
    { 
      icon: Microscope, 
      title: "Pureza Molecular", 
      text: "Sebo filtrado en triple etapa para eliminar impurezas sin degradar nutrientes.",
      glow: "group-hover:text-blue-500" 
    },
    { 
      icon: Award, 
      title: "Grado Artesanal", 
      text: "Lotes limitados producidos bajo estándares de herboristería clásica.",
      glow: "group-hover:text-amber-500"
    },
  ];

  return (
    <section className="py-24 bg-stone-50 dark:bg-[#030303] relative overflow-hidden">
      {/* Líneas decorativas de fondo (Grid sutil) */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block p-3 rounded-full bg-emerald-500/10 mb-4"
          >
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 dark:text-white tracking-tighter">
            Estándares de <span className="italic font-serif font-light text-emerald-600">Excelencia</span>
          </h2>
          <p className="text-stone-500 max-w-lg mx-auto font-light">
            Nuestro compromiso con la salud dermatológica va más allá de lo convencional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {qualities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative p-10 bg-white dark:bg-stone-900/40 rounded-[3rem] border border-stone-200 dark:border-white/5 transition-all duration-500 hover:shadow-2xl dark:hover:shadow-emerald-900/5 overflow-hidden"
            >
              {/* Círculo de fondo que se expande en hover */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-stone-50 dark:bg-white/5 rounded-full transition-transform duration-700 group-hover:scale-[3]" />

              <div className="relative z-10 text-center md:text-left">
                <div className={`w-16 h-16 rounded-2xl bg-stone-100 dark:bg-stone-800 flex items-center justify-center mb-6 transition-all duration-500 shadow-inner ${item.glow}`}>
                  <item.icon className="w-8 h-8 transition-transform duration-500 group-hover:scale-110" />
                </div>
                
                <h3 className="text-xl font-black mb-3 dark:text-white tracking-tight uppercase text-[13px] tracking-[0.15em]">
                  {item.title}
                </h3>
                
                <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed font-light">
                  {item.text}
                </p>
              </div>

              {/* Decoración: Icono sutil de fondo */}
              <Droplets className="absolute -bottom-6 -left-6 w-24 h-24 text-stone-900/5 dark:text-white/5 rotate-12" />
            </motion.div>
          ))}
        </div>

        {/* Banner de Garantía Final */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-8 rounded-3xl border-2 border-dashed border-stone-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">✓</div>
            <div className="text-left">
              <h4 className="font-bold dark:text-white text-lg tracking-tight">Garantía de Origen</h4>
              <p className="text-sm text-stone-500">Sebo 100% de libre pastoreo, libre de hormonas.</p>
            </div>
          </div>
          <button className="px-8 py-3 bg-stone-900 dark:bg-white text-white dark:text-black rounded-full font-bold text-xs uppercase tracking-widest hover:bg-emerald-600 dark:hover:bg-emerald-500 dark:hover:text-white transition-colors">
            Ver Proceso Completo
          </button>
        </motion.div>
      </div>
    </section>
  );
}