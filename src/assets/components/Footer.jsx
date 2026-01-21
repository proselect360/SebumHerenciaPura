import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, MessageCircle, Mail, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0a] text-stone-400 py-20 overflow-hidden border-t border-white/5">
      {/* Elemento Decorativo de Fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Columna 1: Branding */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-white">HERENCIA PURA</span>
              <span className="text-xs uppercase tracking-[0.4em] text-primary font-bold mt-1">Ancestral Skin Rituals</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm text-stone-500">
              Honramos las tradiciones de cuidado personal mediante el uso de sebo bovino purificado, 
              conectando la pureza de la tierra con tu bienestar diario.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-stone-600">
              <ShieldCheck size={14} className="text-primary" />
              <span>Garantía de Pureza 100% Natural</span>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos (Estructura Veritus) */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-white text-xs uppercase tracking-widest font-bold">Explorar</h4>
            <nav className="flex flex-col gap-4 text-sm">
              {['Productos', 'Beneficios', 'Ingredientes', 'FAQ'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="hover:text-white transition-colors flex items-center group w-fit"
                >
                  {item}
                  <ArrowUpRight size={14} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all ml-1 text-primary" />
                </a>
              ))}
            </nav>
          </div>

          {/* Columna 3: Contacto & Social */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-white text-xs uppercase tracking-widest font-bold">Contacto</h4>
            <div className="space-y-4">
              <a 
                href="mailto:sebumherenciapura@gmail.com" 
                className="group flex items-center gap-3 p-3 rounded-xl border border-white/5 hover:border-primary/50 transition-all bg-white/[0.02]"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors">
                  <Mail size={18} className="text-stone-300 group-hover:text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-tighter text-stone-600">Email Oficial</span>
                  <span className="text-sm text-stone-300">sebumherenciapura@gmail.com</span>
                </div>
              </a>

              <div className="flex gap-3">
                <a 
                  href="https://instagram.com/herencia_pura" 
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/5 hover:bg-white text-stone-300 hover:text-black transition-all font-bold text-xs"
                >
                  <Instagram size={16} /> INSTAGRAM
                </a>
                <a 
                  href="https://wa.me/573125858242" 
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/5 hover:bg-primary text-stone-300 hover:text-white transition-all font-bold text-xs"
                >
                  <MessageCircle size={16} /> WHATSAPP
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-medium tracking-wider text-stone-600 uppercase">
          <div className="flex items-center gap-1">
            © {currentYear} — Herencia Pura. <span className="hidden md:inline text-stone-800">|</span> Hecho con <Heart size={10} className="text-primary inline mx-1" /> para el mundo.
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors text-primary font-bold">Veritus Studio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}