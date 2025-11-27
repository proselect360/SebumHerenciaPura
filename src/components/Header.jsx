import React, { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);   // menú móvil
  const [theme, setTheme] = useState("light");   // light | dark

  // tema inicial
  useEffect(() => {
    const root = document.documentElement;
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved || (prefersDark ? "dark" : "light");

    setTheme(initial);
    if (initial === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);

    if (next === "dark") root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem("theme", next);

    // cerrar menú móvil al cambiar tema
    setIsOpen(false);
  };

  const navLinks = [
    { href: "#beneficios", label: "Beneficios" },
    { href: "#productos", label: "Productos" },
    { href: "#ingredientes", label: "Ingredientes" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-black/90 backdrop-blur border-b border-gray-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-primary">Herencia</span>
          <span className="text-2xl font-extrabold text-gray-900 dark:text-white">
            Pura
          </span>
        </a>

        {/* Centro: redes (desktop) */}
        <div className="hidden md:flex items-center gap-4 text-xl text-gray-800 dark:text-gray-100">
          <a
            href="https://instagram.com/herencia_pura"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://tiktok.com/@sebum_herenacia_pura"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaTiktok />
          </a>
          <a
            href="https://wa.me/573125858242"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Derecha */}
        <div className="flex items-center gap-3">
          {/* Links desktop */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Toggle tema */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-neutral-700 transition"
            aria-label="Cambiar tema"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Hamburguesa móvil */}
          <button
            className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-100"
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menú móvil (incluye links + redes) */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-neutral-800 bg-white dark:bg-black">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 dark:text-gray-100 py-1 hover:text-primary dark:hover:text-primary transition"
              >
                {link.label}
              </a>
            ))}

            <div className="flex items-center gap-4 pt-2 text-xl text-gray-800 dark:text-gray-100">
              <a
                href="https://instagram.com/herencia_pura/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="hover:text-primary transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://tiktok.com/@sebum_herenacia_pura"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="hover:text-primary transition"
              >
                <FaTiktok />
              </a>
              <a
                href="https://wa.me/573125858242"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="hover:text-primary transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
