"use client";
import { motion } from "framer-motion";

export default function Card({ item, onClick }: any) {
  return (
    <motion.div
      className="bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => onClick(item)}
    >
      {/* Imagen vertical */}
      <div className="relative h-[480px] overflow-hidden rounded-3xl group">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay oscuro suave */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Texto sobre la imagen */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h2 className="text-lg font-semibold">{item.name}</h2>

          <p className="text-pink-400 text-xl font-bold">${item.price}</p>

          {item.customizable && (
            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
              Personalizable
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
