import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SeboResBeneficios = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    {
      title: "Queratosis Pilaris",
      description: "Suaviza protuberancias ásperas en brazos y muslos, reduciendo sequedad y mejorando textura al nutrir folículos obstruidos.",
      icon: "✨",
      color: "#10B981"
    },
    {
      title: "Eczema y Dermatitis",
      description: "Calma picor, enrojecimiento y grietas secas, reteniendo humedad por su similitud con el sebo humano.",
      icon: "🌿",
      color: "#F59E0B"
    },
    {
      title: "Psoriasis Leve",
      description: "Disminuye escamas y placa inflamada, promoviendo regeneración celular sin irritar.",
      icon: "🔥",
      color: "#EF4444"
    },
    {
      title: "Piel Extremadamente Seca",
      description: "Restaura elasticidad y previene deshidratación en codos, rodillas o talones.",
      icon: "💧",
      color: "#3B82F6"
    },
    {
      title: "Rosácea e Irritación",
      description: "Reduce enrojecimiento y fortalece la barrera contra factores ambientales.",
      icon: "❤️",
      color: "#EC4899"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full py-20 bg-[#faf7f2] dark:bg-[#0d0d0d]"
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Título Principal */}
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white"
        >
          Transforma tu piel con Sebo de Res Herencia Pura
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-center text-gray-700 dark:text-gray-300 mb-16 font-medium max-w-3xl mx-auto leading-relaxed"
        >
          Alivia afecciones cutáneas secas e inflamatorias con hidratación profunda y reparación natural
        </motion.p>

        {/* Carrusel premium */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 pb-6 relative">
          {/* Elemento decorativo izquierdo */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-2 h-16 bg-gray-200 dark:bg-gray-700 rounded-r-md shadow-sm"></div>

          <AnimatePresence mode="wait">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="snap-start flex-shrink-0 w-72"
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.2)" }}
                  className="group relative overflow-hidden rounded-3xl p-6 bg-white dark:bg-[#0d0d0d] dark:border-gray-700 backdrop-blur-md border border-white/50 shadow-2xl cursor-pointer transition-all duration-300"
                >
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Icono animado */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                    className="text-4xl mb-4 mx-auto"
                    style={{ 
                      color: section.color,
                      transform: 'rotate(0deg)',
                      transformOrigin: 'center center'
                    }}
                  >
                    {section.icon}
                  </motion.div>

                  {/* Título */}
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200 group-hover:text-gray-900 transition-colors duration-300 text-center">
                    {section.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-center text-sm">
                    {section.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Elemento decorativo derecho */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-2 h-16 bg-gray-200 dark:bg-gray-700 rounded-l-md shadow-sm"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default SeboResBeneficios;
