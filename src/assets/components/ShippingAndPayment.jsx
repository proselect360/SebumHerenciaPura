import React from "react";
import { Package, Truck, ShieldCheck, MapPin, Zap, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

export default function ShippingAndPayment() {
  const benefits = [
    {
      icon: Truck,
      title: "Envíos Nacionales",
      desc: "Logística premium con seguimiento en tiempo real a toda Colombia.",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      icon: CreditCard,
      title: "Pago Contra Entrega",
      desc: "Máxima tranquilidad: pagas en efectivo o transferencia al recibir.",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      icon: ShieldCheck,
      title: "Compra Protegida",
      desc: "Garantía de satisfacción y soporte personalizado vía WhatsApp.",
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    }
  ];

  return (
    <section id="shipping" className="py-24 bg-white dark:bg-[#050505] relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 dark:via-white/10 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-6"
          >
            <Zap size={14} className="text-emerald-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
              Logística Eficiente
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-stone-900 dark:text-white tracking-tighter">
            Directo a tu <span className="italic font-serif font-light text-emerald-600">Puerta</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 bg-stone-50 dark:bg-stone-900/40 rounded-[2.5rem] border border-stone-100 dark:border-white/5 transition-all duration-500 hover:shadow-2xl"
            >
              <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-stone-900 dark:text-white tracking-tight">
                {item.title}
              </h3>
              <p className="text-stone-500 dark:text-stone-400 leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bloque Sabana Occidente: Nivel 1000 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 relative group"
        >
          {/* Resplandor animado de fondo */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
          
          <div className="relative bg-white dark:bg-stone-900 p-10 md:p-16 rounded-[3rem] border border-stone-100 dark:border-white/10 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-shrink-0 w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-600/20">
              <MapPin size={40} className="text-white animate-bounce" />
            </div>
            
            <div className="flex-grow text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
                <h3 className="text-3xl font-black text-stone-900 dark:text-white tracking-tighter">
                  Privilegio Sabana Occidente
                </h3>
                <span className="bg-emerald-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  Exclusivo
                </span>
              </div>
              <p className="text-stone-600 dark:text-stone-400 text-xl font-light leading-relaxed mb-6">
                Envío <span className="font-bold text-emerald-600 underline underline-offset-4">GRATIS</span> y pago contra entrega en <span className="font-semibold text-stone-800 dark:text-stone-200">Madrid, Funza y Mosquera.</span>
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-400 uppercase tracking-widest">
                  <Zap size={14} className="text-amber-500" />
                  Entrega Prioritaria
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-stone-400 uppercase tracking-widest">
                  <Package size={14} className="text-amber-500" />
                  Sin Costos Ocultos
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}