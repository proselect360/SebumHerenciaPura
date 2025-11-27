import React, { useState, useEffect, useRef } from "react";

export function SeboResBeneficios() {
  const benefits = [
    {
      title: "Hidratación profunda y de larga duración",
      description: "Penetra en las capas más profundas de la piel, manteniéndola hidratada por horas sin sensación grasa.",
      extra: "Ideal para pieles secas y deshidratadas."
    },
    {
      title: "Alivia irritaciones y piel reactiva",
      description: "Calma rojeces, picazón y sensibilidad gracias a su composición biocompatible.",
      extra: "Perfecto para pieles sensibles y reactivas."
    },
    {
      title: "Fortalece la barrera cutánea naturalmente",
      description: "Refuerza la protección natural de la piel, previniendo la pérdida de humedad y la entrada de agentes irritantes.",
      extra: "Ayuda a prevenir futuras irritaciones."
    },
    {
      title: "Rico en vitaminas A, D, E y K",
      description: "Aporta nutrientes esenciales que favorecen la regeneración celular y la salud de la piel.",
      extra: "Promueve una piel más sana y luminosa."
    },
    {
      title: "Textura suave sin sensación grasa",
      description: "Absorción rápida y no deja residuos, ideal para todo tipo de pieles.",
      extra: "Deja la piel suave y cómoda."
    }
  ];

  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Duplica los beneficios para simular un carrusel infinito
  const infiniteBenefits = [...benefits, ...benefits];

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const clientWidth = carouselRef.current.clientWidth;
        const newIndex = (currentIndex + 1) % benefits.length;

        setCurrentIndex(newIndex);
        carouselRef.current.scrollTo({
          left: clientWidth * newIndex,
          behavior: "smooth"
        });
      }
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [currentIndex, benefits.length]);

  return (
    <section
      className="py-20 bg-[#FAF7F2] dark:bg-[#0d0d0d]"
      id="beneficios"
      aria-label="Beneficios del sebo purificado"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-10 tracking-tight text-gray-900 dark:text-white">
          Beneficios
        </h2>

        <div
          ref={carouselRef}
          className="
            flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory 
            scroll-smooth 
            [-webkit-overflow-scrolling:touch]
            scrollbar-hide
          "
        >
          {infiniteBenefits.map((b, i) => (
            <div
              key={i}
              className="
                min-w-[260px] bg-white dark:bg-[#0d0d0d] p-6 rounded-2xl shadow-lg 
                text-center text-lg snap-center transition-all duration-300 
                hover:shadow-2xl hover:-translate-y-1
                border border-white/50 dark:border-gray-700
              "
            >
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                {b.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                {b.description}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                {b.extra}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SeboResBeneficios;
