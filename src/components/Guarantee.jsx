import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, RefreshCcw, Smile } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          Garantía de Confianza
        </motion.h3>

        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          Queremos que estés tranquilo al probar nuestros productos. Cada frasco
          está hecho con ingredientes reales, procesos artesanales y estándares
          de calidad altos. Si no quedas satisfecho, nosotros respondemos.
        </p>

        {/* Tarjetas de garantía */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          
          {/* 1 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-md rounded-xl p-6"
          >
            <ShieldCheck size={40} className="mx-auto text-primary mb-4" />
            <h4 className="text-xl font-semibold mb-2">Compra Segura</h4>
            <p className="text-gray-600">
              Producto elaborado bajo procesos limpios y controlados.
            </p>
          </motion.div>

          {/* 2 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-md rounded-xl p-6"
          >
            <RefreshCcw size={40} className="mx-auto text-primary mb-4" />
            <h4 className="text-xl font-semibold mb-2">Garantía de Satisfacción</h4>
            <p className="text-gray-600">
              Si algo no cumple tus expectativas, lo resolvemos contigo.
            </p>
          </motion.div>

          {/* 3 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-md rounded-xl p-6"
          >
            <Smile size={40} className="mx-auto text-primary mb-4" />
            <h4 className="text-xl font-semibold mb-2">Soporte Cercano</h4>
            <p className="text-gray-600">
              Estamos disponibles para ayudarte vía WhatsApp cuando lo necesites.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
