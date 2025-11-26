import React from "react";

export function BenefitsCarousel() {
  const benefits = [
    "Hidratación profunda y de larga duración",
    "Alivia irritaciones y piel reactiva",
    "Fortalece la barrera cutánea naturalmente",
    "Rico en vitaminas A, D, E y K",
    "Textura suave sin sensación grasa",
  ];

  return (
    <section
      className="py-20 bg-[#FAF7F2]"
      id="beneficios"
      aria-label="Beneficios del sebo purificado"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-10 tracking-tight">
          Beneficios
        </h2>

        <div
          className="
            flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory 
            scroll-smooth 
            [-webkit-overflow-scrolling:touch]
          "
        >
          {benefits.map((b, i) => (
            <div
              key={i}
              className="
                min-w-[260px] bg-white p-6 rounded-2xl shadow-lg 
                text-center text-lg snap-center transition-all duration-300 
                hover:shadow-2xl hover:-translate-y-1
              "
            >
              <p>{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default BenefitsCarousel;
