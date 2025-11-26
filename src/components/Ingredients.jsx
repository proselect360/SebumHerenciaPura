import React from "react";
import { Leaf, Droplet, Sparkles } from "lucide-react";

export default function Ingredients() {
  const list = [
    {
      icon: <Droplet className="w-7 h-7 text-primary" />,
      title: "Sebo de res 100% purificado",
      desc: "Rico en vitaminas A, D, E y K. Compatible con la piel humana."
    },
    {
      icon: <Leaf className="w-7 h-7 text-primary" />,
      title: "Sin químicos añadidos",
      desc: "0 fragancias, 0 alcoholes, 0 aceites esenciales, 0 conservantes."
    },
    {
      icon: <Sparkles className="w-7 h-7 text-primary" />,
      title: "Pureza garantizada",
      desc: "Proceso lento ancestral para máxima seguridad y calidad."
    }
  ];

  return (
    <section id="ingredientes" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Ingredientes Puros y Reales
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {list.map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-md border text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
