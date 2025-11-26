import React from "react";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  const whatsappNumber = "573125858242";
  const message = encodeURIComponent(`Hola! Me interesa el producto: ${product.name}`);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  // Lógica de precio personalizada
  let displayPrice;
  if (product.price === 20) {
    displayPrice = "45.000";
  } else if (product.price === 0) {
    displayPrice = "0.0";
  } else if (typeof product.price === "number") {
    displayPrice = product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  } else {
    displayPrice = product.price;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md dark:shadow-lg p-6 flex flex-col"
    >
      {/* Imagen */}
      <img
        src={product.image}
        alt={product.name}
        className="rounded-xl w-full h-52 object-cover mb-4"
      />

      {/* Nombre */}
      <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{product.name}</h4>

      {/* Descripción */}
      <p className="text-gray-600 dark:text-gray-300 flex-grow">{product.description}</p>

      {/* Precio */}
      <div className="mt-4 flex items-center justify-end">
        <span className="text-lg font-bold text-gray-800 dark:text-white">${displayPrice}</span>
      </div>

      {/* Botón WhatsApp */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 w-full text-center bg-primary text-white px-5 py-3 rounded-lg font-semibold hover:opacity-95 transition"
      >
        Pedir
      </motion.a>
    </motion.div>
  );
}
