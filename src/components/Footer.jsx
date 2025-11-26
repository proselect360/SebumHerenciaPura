import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 mt-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div>© {new Date().getFullYear()} Herencia Pura</div>
        <div className="text-sm text-gray-400">Hecho con tradición y cariño — Contacto: <a href="mailto:sebumherenciapura@gmail.com" className="underline">sebumherenciapura@gmail.com</a></div>
      </div>
    </footer>
  )
}
