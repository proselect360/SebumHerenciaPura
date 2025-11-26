import React from "react";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  const whatsappNumber = "573125858242"; // sin + para link
  const message = encodeURIComponent(`Hola! Me interesa el producto: ${product.name}`);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  // Lógica de precio personalizada
  let displayPrice;
  if (product.price === 20) {
    displayPrice = "45.000";
  } else if (product.price === 0) {
    displayPrice = "0.0";
  } else if (typeof product.price === "number") {
    // Si quieres formato con miles: ejemplo 45000 -> "45.000"
    displayPrice = product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  } else {
    displayPrice = product.price; // si ya es string
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl shadow-md p-6 flex flex-col"
    >
      {/* Imagen */}
      <img
        src={product.image}
        alt={product.name}
        className="rounded-xl w-full h-52 object-cover mb-4"
      />

      {/* Nombre */}
      <h4 className="text-xl font-semibold mb-2">{product.name}</h4>

      {/* Descripción */}
      <p className="text-gray-600 flex-grow">{product.description}</p>

      {/* Precio (alineado a la derecha con símbolo $) */}
      <div className="mt-4 flex items-center justify-end">
        <span className="text-lg font-bold">${displayPrice}</span>
      </div>

      {/* Botón WhatsApp (mismo color/tamaño que Tienda) */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 w-full text-center bg-primary px-5 py-3 rounded-lg font-semibold text-white hover:opacity-95 transition"
      >
        Pedir
      </a>
    </motion.div>
  );
}
