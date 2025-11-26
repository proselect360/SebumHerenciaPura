import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-[#faf7f2] dark:bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold mb-6 dark:text-white">
          Llévate tu Sebo Premium Hoy
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
          Hidrata, repara y protege tu piel con el poder de un producto 100% natural.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#productos"
          className="inline-block bg-primary text-white text-xl font-bold px-10 py-4 rounded-2xl shadow-lg"
        >
          Comprar Ahora
        </motion.a>

        <p className="mt-6 text-gray-600 dark:text-gray-400">
          • Hidratación profunda &nbsp;• Repara la piel &nbsp;• 100% natural  
        </p>

      </div>
    </section>
  );
}
