import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Comparison() {
  const rows = [
    { feature: "Ingredientes", common: "Mezclas sintéticas", pure: "100% natural" },
    { feature: "Profundidad de hidratación", common: "Superficial", pure: "Profunda y duradera" },
    { feature: "Vitaminas", common: "Añadidas artificialmente", pure: "A, D, E y K naturales" },
    { feature: "Compatibilidad con la piel", common: "Puede causar irritación", pure: "Alta, bioidéntico" },
  ];

  return (
    <section id="comparacion" className="py-16 bg-[#faf7f2] dark:bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white dark:bg-neutral-900 p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            ¿Por qué Elegir Herencia Pura?
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left rounded-xl shadow-md bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-200">
              <thead className="bg-primary text-white dark:bg-primary">
                <tr>
                  <th className="p-4">Característica</th>
                  <th className="p-4">Cremas comunes</th>
                  <th className="p-4">Herencia Pura</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <AnimatePresence key={i}>
                    <motion.tr
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="border-b border-gray-200 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
                    >
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="p-4">{row.common}</td>
                      <td className="p-4 font-semibold text-primary dark:text-primary">{row.pure}</td>
                    </motion.tr>
                  </AnimatePresence>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
