import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Instagram, MessageCircle } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
// Importación personalizada según tu estructura de archivos
import StudioLogo from "./StudioLogo"; 

const navLinks = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#productos", label: "Productos" },
  { href: "#ingredientes", label: "Ingredientes" },
  { href: "#faq", label: "FAQ" },
];

const socialLinks = [
  { href: "https://instagram.com/herencia_pura", icon: Instagram, label: "Instagram" },
  { href: "https://tiktok.com/@sebum_herenacia_pura", icon: FaTiktok, label: "TikTok" },
  { href: "https://wa.me/573125858242", icon: MessageCircle, label: "WhatsApp" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const initial = localStorage.getItem("theme") || 
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    
    setTheme(initial);
    root.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-[100] transition-all duration-700 ${
        scrolled 
          ? "bg-white/70 dark:bg-black/70 backdrop-blur-2xl py-3 border-b border-stone-200/50 dark:border-white/5 shadow-sm" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Section con StudioLogo personalizado */}
        <motion.a 
          href="#hero" 
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-3 group relative z-[110]"
        >
          <div className={`transition-colors duration-500 ${scrolled ? 'text-emerald-600' : 'text-white'}`}>
             {/* Incluimos tu componente StudioLogo aquí */}
            <StudioLogo className="w-8 h-8 md:w-10 md:h-10 fill-current" />
          </div>
          <div className="flex flex-col">
            <span className={`text-lg md:text-xl font-black tracking-tighter leading-none transition-colors duration-500 ${
              scrolled ? "text-stone-900 dark:text-white" : "text-white"
            }`}>
              HERENCIA
            </span>
            <span className={`text-[10px] font-bold tracking-[0.4em] uppercase transition-colors duration-500 ${
              scrolled ? "text-emerald-600" : "text-emerald-400"
            }`}>
              Pura
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 hover:text-emerald-500 relative group ${
                scrolled ? "text-stone-600 dark:text-stone-400" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-emerald-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Socials (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 border-r border-stone-200 dark:border-white/10 pr-6 mr-3">
            {socialLinks.map((social) => (
              <a 
                key={social.label}
                href={social.href} 
                target="_blank" 
                className={`transition-all duration-300 hover:scale-110 hover:text-emerald-500 ${
                  scrolled ? "text-stone-400" : "text-white/60"
                }`}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>

          {/* Theme Toggle Boutique */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-xl transition-all duration-500 active:scale-90 ${
              scrolled 
                ? "bg-stone-100 dark:bg-stone-900 text-stone-800 dark:text-stone-200" 
                : "bg-white/10 text-white backdrop-blur-md border border-white/10 hover:bg-white/20"
            }`}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={16} strokeWidth={2.5} /> : <Moon size={16} strokeWidth={2.5} />}
          </button>

          {/* Menu Toggle (Mobile) */}
          <button
            className={`md:hidden p-2 rounded-xl transition-colors ${
              scrolled ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20" : "bg-white text-black"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay: Nivel 1000 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-0 h-screen w-full bg-white dark:bg-[#050505] z-[90] flex flex-col justify-center items-center md:hidden"
          >
            <div className="flex flex-col items-center gap-10 text-center">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black tracking-tighter text-stone-900 dark:text-white hover:text-emerald-600 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              
              <div className="flex gap-8 mt-10">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} className="text-emerald-600 p-4 bg-emerald-50 dark:bg-stone-900 rounded-2xl">
                    <social.icon size={28} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}