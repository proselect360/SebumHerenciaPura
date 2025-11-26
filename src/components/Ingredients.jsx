import React from "react";
import { motion } from "framer-motion";
import { Leaf, Droplet, Sparkles } from "lucide-react";

export default function Ingredients() {
  const list = [
    {
      icon: <Droplet className="w-7 h-7 text-primary dark:text-yellow-400" />,
      title: "Sebo de res 100% purificado",
      desc: "Rico en vitaminas A, D, E y K. Compatible con la piel humana.",
    },
    {
      icon: <Leaf className="w-7 h-7 text-primary dark:text-green-400" />,
      title: "Sin químicos añadidos",
      desc: "0 fragancias, 0 alcoholes, 0 aceites esenciales, 0 conservantes.",
    },
    {
      icon: <Sparkles className="w-7 h-7 text-primary dark:text-blue-300" />,
      title: "Pureza garantizada",
      desc: "Proceso lento ancestral para máxima seguridad y calidad.",
    },
  ];

  return (
    <section id="ingredientes" className="py-16 bg-[#faf7f2] dark:bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">
          Ingredientes Puros y Reales
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {list.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -3, scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
              className="
                p-6 bg-white dark:bg-neutral-900 
                rounded-2xl shadow-md border border-gray-200 dark:border-neutral-700 
                text-center transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
