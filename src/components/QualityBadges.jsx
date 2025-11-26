import { Leaf, ShieldCheck, CheckCircle } from "lucide-react";

export default function Certifications() {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-12 dark:text-white">
          Certificaciones y Calidad
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="p-8 bg-[#fafafa] dark:bg-[#111] rounded-2xl shadow">
            <Leaf className="w-12 h-12 mx-auto text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2 dark:text-white">100% Natural</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Sin químicos ni aditivos.
            </p>
          </div>

          <div className="p-8 bg-[#fafafa] dark:bg-[#111] rounded-2xl shadow">
            <ShieldCheck className="w-12 h-12 mx-auto text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2 dark:text-white">No tóxico</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Seguro para todo tipo de piel.
            </p>
          </div>

          <div className="p-8 bg-[#fafafa] dark:bg-[#111] rounded-2xl shadow">
            <CheckCircle className="w-12 h-12 mx-auto text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2 dark:text-white">Hecho a mano</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Proceso artesanal y cuidadoso.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
