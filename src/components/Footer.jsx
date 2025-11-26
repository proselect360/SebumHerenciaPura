import React from 'react';
import { Instagram, MessageCircle, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-gray-200 dark:text-gray-300 py-10 mt-12 border-t border-gray-700 dark:border-gray-600">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          <div className="text-center md:text-left md:flex-1">
            <h3 className="text-lg font-semibold">Herencia Pura</h3>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Cuidado natural para tu piel</p>
          </div>

          <div className="text-center md:text-left md:flex-1">
            <p className="text-sm text-gray-400 dark:text-gray-500">
              © {new Date().getFullYear()} Herencia Pura. Todos los derechos reservados.
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Hecho con tradición y cariño</p>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start md:flex-1 justify-center md:justify-end space-y-2 md:space-y-0 md:space-x-6">
            <a
              href="mailto:sebumherenciapura@gmail.com"
              className="text-sm text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-gray-200 transition flex items-center"
            >
              <Send className="w-4 h-4 mr-1" />
              sebumherenciapura@gmail.com
            </a>
            <a
              href="https://instagram.com/herencia_pura"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-gray-200 transition flex items-center"
            >
              <Instagram className="w-4 h-4 mr-1" />
              @herencia_pura
            </a>
            <a
              href="https://wa.me/573125858242"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-gray-200 transition flex items-center"
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-600">
          Desarrollado con React y Tailwind CSS. Inspirado en la naturaleza y la tradición.
        </div>
      </div>
    </footer>
  );
}
