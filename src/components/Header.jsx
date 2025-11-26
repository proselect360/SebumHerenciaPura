import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { FaBars, FaTimes } from "react-icons/fa";

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

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-lg font-medium">
          <a
            href="#productos"
            className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary"
          >
            Productos
          </a>
          <a
            href="#howtouse"
            className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary"
          >
            Cómo Usar
          </a>
          <a
            href="#ingredientes"
            className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary"
          >
            Ingredientes
          </a>
          <a
            href="#faq"
            className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary"
          >
            FAQ
          </a>
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

      {/* MENU MÓVIL */}
      {open && (
        <div className="md:hidden bg-white dark:bg-black shadow-xl px-6 pb-6">
          <div className="flex flex-col gap-4 mt-4 text-lg">
            <a
              href="#productos"
              onClick={() => setOpen(false)}
              className="text-gray-900 dark:text-white py-1"
            >
              Productos
            </a>
            <a
              href="#howtouse"
              onClick={() => setOpen(false)}
              className="text-gray-900 dark:text-white py-1"
            >
              Cómo Usar
            </a>
            <a
              href="#ingredientes"
              onClick={() => setOpen(false)}
              className="text-gray-900 dark:text-white py-1"
            >
              Ingredientes
            </a>
            <a
              href="#faq"
              onClick={() => setOpen(false)}
              className="text-gray-900 dark:text-white py-1"
            >
              FAQ
            </a>

            {/* TOGGLE MODO OSCURO EN MÓVIL */}
            <div className="mt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
