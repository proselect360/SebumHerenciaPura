import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#faf7f2] to-[#e8e4dc] dark:from-[#0d0d0d] dark:to-[#1a1a1a]">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white animate-pulse">
          Llévate tu Sebo Premium Hoy
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
          Hidrata, repara y protege tu piel con el poder de un producto 100% natural.
        </p>

        <motion.a
          whileHover={{ scale: 1.08, boxShadow: "0 10px 25px rgba(255, 255, 255, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          href="#productos"
          className="inline-block bg-primary text-white text-xl font-bold px-10 py-4 rounded-2xl shadow-lg border-2 border-transparent hover:border-primary transition-all duration-300 animate-pulse"
        >
          Comprar Ahora
        </motion.a>

        <p className="mt-6 text-gray-600 dark:text-gray-400 text-sm tracking-wide">
          • Hidratación profunda &nbsp;• Repara la piel &nbsp;• 100% natural
        </p>
      </div>
    </section>
  );
}
