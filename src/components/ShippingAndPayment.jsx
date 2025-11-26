import React from "react";
import { Package, Truck, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function ShippingAndPayment() {
  return (
    <section id="shipping" className="py-20 bg-[#faf7f2] dark:bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">
          Envíos & Métodos de Pago
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-neutral-800">
            <Truck className="w-12 h-12 mx-auto text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
              Envíos Nacionales
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Rápidos y seguros a todo el país.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-neutral-800">
            <Package className="w-12 h-12 mx-auto text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
              Contra Entrega
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Paga al recibir tu producto.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-neutral-800">
            <ShieldCheck className="w-12 h-12 mx-auto text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
              Pagos Seguros
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Tus pagos están protegidos.
            </p>
          </div>
        </div>

        {/* Bloque destacado animado para Sabana Occidente */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 bg-primary/10 dark:bg-primary/20 p-8 rounded-2xl shadow-lg border border-primary dark:border-primary"
        >
          <h3 className="text-2xl font-bold mb-4 text-primary">¡Envío Gratis y Pago Contra Entrega!</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Para compras en la Sabana Occidente de Bogotá: Madrid, Funza y Mosquera.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Recibe tu producto y paga directamente al recibirlo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
