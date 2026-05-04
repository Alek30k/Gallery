"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function FeaturedCarousel({ items, onSelect }: any) {
  return (
    <section className="w-full max-w-7xl mx-auto px-2 md:px-6 mb-20 md:mb-28">
      {/* CABECERA EDITORIAL */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10 md:mb-14"
      >
        <div className="w-14 h-[1px] bg-white/20 mx-auto mb-4" />

        <p className="text-[10px] uppercase tracking-[4px] text-gray-500 mb-3">
          Más Vendidas{" "}
        </p>

        <h2 className="text-2xl md:text-4xl font-light tracking-wide text-white">
          Piezas más elegidas
        </h2>

        <p className="hidden md:block t-4 text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-7">
          Una selección de nuestros diseños personalizados más pedidos para
          regalar, sorprender y conservar momentos especiales.
        </p>
      </motion.div>

      <Swiper
        modules={[Autoplay, Pagination, EffectCoverflow]}
        effect="coverflow"
        centeredSlides
        slidesPerView={1.15}
        spaceBetween={12}
        loop
        autoplay={{ delay: 4200, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 1.8,
          slideShadows: false,
          scale: 0.9,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1.55,
            spaceBetween: 20,
          },
        }}
      >
        {items.map((item: any) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-[430px] md:h-[620px] rounded-[28px] md:rounded-[34px] overflow-hidden border border-white/5 bg-black">
              <img
                src={item.images[0]}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(219,39,119,0.10),transparent_35%)]" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 h-full flex flex-col justify-end md:justify-center px-6 md:px-14 pb-12 md:pb-0 max-w-xl"
              >
                <p className="text-[10px] uppercase tracking-[4px] text-gray-400 mb-3">
                  Colección Destacada
                </p>

                <h2 className="text-3xl md:text-5xl font-light text-white leading-tight">
                  {item.name}
                </h2>

                <p className="mt-5 text-sm md:text-base text-gray-300 leading-7">
                  {item.description}
                </p>

                <button
                  onClick={() => onSelect(item)}
                  className="mt-8 w-fit border border-white px-8 py-3 rounded-full text-sm text-white hover:bg-white hover:text-black transition"
                >
                  Ver Detalles
                </button>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
