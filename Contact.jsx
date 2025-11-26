import React, { useEffect, useState } from 'react'

export default function Contact(){
  const [prefill, setPrefill] = useState('')

  useEffect(() => {
    const url = new URL(window.location.href)
    const product = url.searchParams.get('product')
    if(product) setPrefill(product)
  }, [])

  return (
    <section id="contacto" className="max-w-4xl mx-auto px-6 py-14">
      <h3 className="text-2xl font-bold mb-4">Contacto / Pedido</h3>
      <form
        name="pedido-herencia-pura"
        method="POST"
        data-netlify="true"
        className="grid grid-cols-1 gap-4"
      >
        <input type="hidden" name="form-name" value="pedido-herencia-pura" />
        <label className="flex flex-col">
          <span>Producto (prefill)</span>
          <input name="producto" value={prefill} onChange={(e)=>setPrefill(e.target.value)} className="p-3 border rounded" />
        </label>
        <label className="flex flex-col">
          <span>Nombre</span>
          <input name="nombre" required className="p-3 border rounded" />
        </label>
        <label className="flex flex-col">
          <span>Teléfono / WhatsApp</span>
          <input name="telefono" required className="p-3 border rounded" />
        </label>
        <label className="flex flex-col">
          <span>Dirección de envío</span>
          <input name="direccion" className="p-3 border rounded" />
        </label>
        <label className="flex flex-col">
          <span>Mensaje / Observaciones</span>
          <textarea name="mensaje" rows="4" className="p-3 border rounded"></textarea>
        </label>

        <div className="flex gap-3">
          <button type="submit" className="bg-primary text-white px-5 py-3 rounded-lg">Enviar Pedido</button>
          <a href="https://wa.me/573125858242?text=Hola%20quiero%20hacer%20un%20pedido" target="_blank" rel="noreferrer" className="bg-green-600 text-white px-5 py-3 rounded-lg">Pedir por WhatsApp</a>
        </div>
      </form>
      <p className="text-sm text-gray-500 mt-4">Recibirás confirmación por WhatsApp o correo. Ajusta los datos de contacto en el formulario.</p>
    </section>
  )
}
