"use client";
import { motion } from "framer-motion";

export default function Card({ item, onClick }: any) {
  // Verificamos que existan imágenes para evitar errores
  const mainImage =
    item.images && item.images.length > 0 ? item.images[0] : "/placeholder.jpg";

  return (
    <motion.div
      className="bg-[#111] rounded-[2rem] border border-white/5 overflow-hidden cursor-pointer group"
      whileHover={{ y: -10 }} // Elevación sutil al pasar el mouse
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(item)}
    >
      {/* Contenedor de Imagen */}
      <div className="relative h-[480px] overflow-hidden">
        <img
          src={mainImage} 
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Overlay premium con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

        {/* Información del producto */}
        <div className="absolute bottom-6 left-6 right-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <span className="text-[10px] uppercase tracking-widest text-pink-500 font-bold mb-2 block">
            {item.category}
          </span>

          <h2 className="text-2xl font-bold mb-1 tracking-tight">
            {item.name}
          </h2>

          <div className="flex items-center justify-between mt-4">
            {/* <p className="text-white text-xl font-light">
              <span className="text-sm opacity-60 mr-1">$</span>
              {item.price}
            </p> */}

            {item.customizable && (
              <span className="text-[10px] bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full uppercase tracking-tighter">
                ✨ Personalizable
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
