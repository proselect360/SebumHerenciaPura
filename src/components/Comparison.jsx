import React from "react";

export default function Comparison() {
  return (
    <section id="comparacion" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          ¿Por qué Elegir Herencia Pura?
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left bg-white rounded-xl shadow-md">
            <thead className="bg-primary text-white">
              <tr>
                <th className="p-4">Característica</th>
                <th className="p-4">Cremas comunes</th>
                <th className="p-4">Herencia Pura</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-4 font-medium">Ingredientes</td>
                <td className="p-4">Mezclas sintéticas</td>
                <td className="p-4 font-semibold">100% natural</td>
              </tr>

              <tr className="border-b">
                <td className="p-4 font-medium">Profundidad de hidratación</td>
                <td className="p-4">Superficial</td>
                <td className="p-4 font-semibold">Profunda y duradera</td>
              </tr>

              <tr className="border-b">
                <td className="p-4 font-medium">Vitaminas</td>
                <td className="p-4">Añadidas artificialmente</td>
                <td className="p-4 font-semibold">A, D, E y K naturales</td>
              </tr>

              <tr>
                <td className="p-4 font-medium">Compatibilidad con la piel</td>
                <td className="p-4">Puede causar irritación</td>
                <td className="p-4 font-semibold">Alta, bioidéntico</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
