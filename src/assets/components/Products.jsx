import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

// Importamos el ProductCard y los datos
import ProductCard from "./ProductCard";
import products from "../../data/products";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Products() {
  return (
    <section
      id="productos"
      className="w-full py-24 bg-[#fcfcfc] dark:bg-[#050505] overflow-hidden relative"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-emerald-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-amber-500/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Encabezado Editorial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-12 bg-emerald-600" />
              <span className="text-emerald-600 font-bold tracking-[0.3em] text-[10px] uppercase">
                Colección Esencial
              </span>
            </motion.div>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-stone-900 dark:text-white leading-[0.9]">
              Rituales de <br />
              <span className="italic font-serif font-light text-emerald-600">Pureza</span>.
            </h3>
          </div>

          <div className="flex items-center gap-4">
            {/* Botones de Navegación Personalizados */}
            <button className="swiper-prev-custom w-14 h-14 rounded-full border border-stone-200 dark:border-white/10 flex items-center justify-center hover:bg-white dark:hover:bg-white/5 hover:border-emerald-500 transition-all group">
              <ChevronLeft size={20} className="text-stone-400 group-hover:text-emerald-600" />
            </button>
            <button className="swiper-next-custom w-14 h-14 rounded-full border border-stone-200 dark:border-white/10 flex items-center justify-center hover:bg-white dark:hover:bg-white/5 hover:border-emerald-500 transition-all group">
              <ChevronRight size={20} className="text-stone-400 group-hover:text-emerald-600" />
            </button>
          </div>
        </div>

        {/* Carrusel Swiper Customizado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            navigation={{
              nextEl: ".swiper-next-custom",
              prevEl: ".swiper-prev-custom",
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-20 !overflow-visible"
          >
            {products.map((p) => (
              <SwiperSlide key={p.id}>
                <div className="group relative">
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/80 dark:bg-black/80 backdrop-blur-md p-2 rounded-full border border-white/20">
                      <Sparkles size={16} className="text-emerald-500" />
                    </div>
                  </div>
                  <ProductCard product={p} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Footer simple sin logo */}
        <div className="mt-12 text-center opacity-40">
          <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-stone-500">
            Herencia Pura — Cuidado Biocompatible
          </p>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #10b981 !important;
          opacity: 0.2;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 20px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  );
}