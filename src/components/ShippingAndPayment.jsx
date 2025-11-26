import React from "react";
import { Package, Truck, ShieldCheck } from "lucide-react";

export default function ShippingAndPayment() {
  return (
    <section id="shipping" className="py-20 bg-[#faf7f2]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-bold mb-10">
          Envíos & Métodos de Pago
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Truck className="w-12 h-12 mx-auto text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Envíos Nacionales</h3>
            <p className="text-gray-700">Rápidos y seguros a todo el país.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Package className="w-12 h-12 mx-auto text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Contra Entrega</h3>
            <p className="text-gray-700">Paga al recibir tu producto.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <ShieldCheck className="w-12 h-12 mx-auto text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Pagos Seguros</h3>
            <p className="text-gray-700">Tus pagos están protegidos.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
