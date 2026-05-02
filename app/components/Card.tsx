"use client";

import { motion } from "framer-motion";

export default function Card({ item, onClick }: any) {
  return (
    <motion.div
      onClick={() => onClick(item)}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.985 }}
      className="group cursor-pointer"
    >
      <div
        className={`relative h-[500px] rounded-[30px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.45)]
        ${
          item.featured
            ? "ring-1 ring-pink-500/20 shadow-[0_0_40px_rgba(219,39,119,0.12)]"
            : "ring-1 ring-white/5"
        }`}
      >
        {/* Imagen */}
        <img
          src={item.images[0]}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* Badge superior */}
        {item.tag && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-[2px] text-white">
            {item.tag}
          </div>
        )}

        {/* Featured glow */}
        {item.featured && (
          <div className="absolute inset-0 bg-pink-500/5 pointer-events-none" />
        )}

        {/* Info inferior */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white bg-gradient-to-t from-black/95 via-black/78 to-transparent backdrop-blur-[2px]">
          <h2 className="text-xl font-light tracking-wide leading-tight">
            {item.name}
          </h2>

          {item.customizable && (
            <p className="mt-2 text-[11px] text-pink-300 tracking-[2px] uppercase">
              Personalizable
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
