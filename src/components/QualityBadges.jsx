import { motion } from "framer-motion";
import { Leaf, ShieldCheck, CheckCircle } from "lucide-react";

export default function Certifications() {
  const qualities = [
    { icon: Leaf, title: "100% Natural", text: "Elaborado con ingredientes naturales, sin químicos ni aditivos." },
    { icon: ShieldCheck, title: "Seguro para la piel", text: "Diseñado para todo tipo de piel, libre de tóxicos." },
    { icon: CheckCircle, title: "Proceso Artesanal", text: "Hecho a mano con cuidado y atención en cada detalle." },
  ];

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 dark:text-white">Nuestros Valores de Calidad</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {qualities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-8 bg-[#fafafa] dark:bg-[#111] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <item.icon className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
