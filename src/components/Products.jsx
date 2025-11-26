import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProductCard from "./ProductCard";
import products from "../data/products";
import { motion } from "framer-motion";

export default function Products() {
  return (
    <section id="productos" className="max-w-6xl mx-auto px-6 py-20">
      {/* Título */}
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold tracking-tight">Nuestros Productos</h3>
        <p className="text-gray-600 mt-2 text-lg">
          Cuidado ancestral hecho con ingredientes reales.
        </p>
      </div>

      {/* Carrusel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={25}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {products.map((p) => (
            <SwiperSlide key={p.id}>
              <ProductCard product={p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
