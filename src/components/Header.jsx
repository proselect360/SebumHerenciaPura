import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { FaBars, FaTimes, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <h1 className="text-3xl font-extrabold text-primary drop-shadow-md">
          Herencia{" "}
          <span className="text-gray-700 dark:text-gray-300">Pura</span>
        </h1>

        {/* ENLACES REDES SOCIALES - ESCRITORIO */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://www.instagram.com/herencia_pura/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-primary"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.tiktok.com/@tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-primary"
            aria-label="TikTok"
          >
            <FaTiktok size={24} />
          </a>
          <a
            href="https://wa.me/573125858242"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-primary"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-lg font-medium">
          <a href="#productos" className="text-gray-900 dark:text-white hover:text-primary">Productos</a>
          {/* Botón "Cómo Usar" eliminado */}
          <a href="#ingredientes" className="text-gray-900 dark:text-white hover:text-primary">Ingredientes</a>
          <a href="#faq" className="text-gray-900 dark:text-white hover:text-primary">FAQ</a>
        </nav>

        {/* THEME TOGGLE DESKTOP */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        {/* BOTÓN MENÚ MÓVIL */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-gray-800 dark:text-gray-100"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      {open && (
        <div className="md:hidden bg-white dark:bg-black shadow-xl px-6 pb-6">
          <div className="flex flex-col gap-4 mt-4 text-lg">
            <a href="#productos" onClick={() => setOpen(false)} className="text-gray-900 dark:text-white py-1">Productos</a>
            {/* Botón "Cómo Usar" eliminado */}
            <a href="#ingredientes" onClick={() => setOpen(false)} className="text-gray-900 dark:text-white py-1">Ingredientes</a>
            <a href="#faq" onClick={() => setOpen(false)} className="text-gray-900 dark:text-white py-1">FAQ</a>

            {/* Enlaces redes sociales en modo móvil */}
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://www.instagram.com/herencia_pura/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-white hover:text-primary"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@tu_usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-white hover:text-primary"
                aria-label="TikTok"
              >
                <FaTiktok size={24} />
              </a>
              <a
                href="https://wa.me/573125858242"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-white hover:text-primary"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>

            {/* Toggle modo oscuro en móvil */}
            <div className="mt-2 flex justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
