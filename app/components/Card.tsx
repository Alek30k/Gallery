"use client";

import { motion } from "framer-motion";

export default function Card({ item, onClick }: any) {
  const mainImage =
    item.images && item.images.length > 0 ? item.images[0] : "/placeholder.jpg";

  return (
    <motion.div
      onClick={() => onClick(item)}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className="group cursor-pointer"
    >
      <div className="relative h-[480px] rounded-[28px] overflow-hidden bg-neutral-900 shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
        {/* Imagen */}
        <img
          src={mainImage}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay oscuro premium */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        {/* Glow suave */}
        <div className="absolute inset-0 ring-1 ring-white/5 rounded-[28px]" />

        {/* Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h2 className="text-lg md:text-xl font-light tracking-wide">
            {item.name}
          </h2>

          <p className="mt-1 text-base md:text-lg text-gray-200">
            ${item.price}
          </p>

          {item.customizable && (
            <p className="mt-2 text-[11px] uppercase tracking-[2px] text-pink-300/90">
              Personalizable
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
