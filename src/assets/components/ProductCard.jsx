import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight } from "lucide-react";

export default function ProductCard({ product }) {
  const whatsappNumber = "573125858242";
  const message = encodeURIComponent(`¡Hola! ✨ Me gustaría obtener información sobre el producto: ${product.name}`);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  // Formateador de precios profesional (Nivel 1000)
  const displayPrice = React.useMemo(() => {
    if (product.price === 20) return "49.000";
    if (product.price === 0) return "Consultar";
    return new Intl.NumberFormat('es-CO').format(product.price);
  }, [product.price]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white dark:bg-[#0a0a0a] rounded-[2.5rem] p-4 flex flex-col border border-stone-100 dark:border-white/5 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-emerald-900/10"
    >
      {/* Contenedor de Imagen con Efecto Zoom */}
      <div className="relative overflow-hidden rounded-[2rem] aspect-square mb-6">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {/* Overlay gradiente sobre la imagen al hacer hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
        
        {/* Badge de Precio Flotante */}
        <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-sm">
          <span className="text-sm font-black text-stone-900 dark:text-white tracking-tight">
            ${displayPrice}
          </span>
        </div>
      </div>

      {/* Cuerpo de la Tarjeta */}
      <div className="px-3 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-xl font-bold text-stone-900 dark:text-white tracking-tight leading-tight">
            {product.name}
          </h4>
          <div className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight size={20} />
          </div>
        </div>

        <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed font-light line-clamp-2 mb-6">
          {product.description}
        </p>

        {/* Botón de Acción Estilo Luxury */}
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.98 }}
          className="mt-auto relative flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-stone-900 dark:bg-white text-white dark:text-black font-bold text-xs uppercase tracking-[0.2em] transition-all hover:bg-emerald-600 dark:hover:bg-emerald-500 dark:hover:text-white overflow-hidden"
        >
          <MessageCircle size={16} />
          Pedir ahora
          
          {/* Brillo dinámico en el botón al hacer hover */}
          <motion.div 
            className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
            whileHover={{ left: '100%' }}
            transition={{ duration: 0.6 }}
          />
        </motion.a>
      </div>
    </motion.div>
  );
}