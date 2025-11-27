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
    <section
      id="productos"
      className="w-full py-20 bg-white dark:bg-[#0d0d0d]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-white">
            Nuestros Productos
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg">
            Cuidado ancestral hecho con ingredientes reales.
          </p>
        </div>

        {/* Carrusel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-[#0d0d0d] rounded-2xl"
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
              <SwiperSlide key={p.id} className="bg-white dark:bg-[#0d0d0d]">
                <ProductCard product={p} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
