"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ item, onClose }: any) {
  const [index, setIndex] = useState(0);

  // Verificamos cuántas imágenes hay
  const hasMultipleImages = item.images && item.images.length > 1;

  const nextImage = () => {
    if (!hasMultipleImages) return;
    setIndex((prev) => (prev + 1) % item.images.length);
  };

  const prevImage = () => {
    if (!hasMultipleImages) return;
    setIndex((prev) => (prev - 1 + item.images.length) % item.images.length);
  };

  return (
    <div className="fixed inset-0 z-[100] flex overflow-y-auto  items-start justify-center p-2 py-8 bg-black/95 backdrop-blur-md">
      {/* Fondo con blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/95 backdrop-blur-md"
      />

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] overflow-hidden max-w-5xl w-full shadow-2xl flex flex-col md:flex-row h-auto md:h-[600px]"
      >
        {/* SECCIÓN IMAGEN / CAROUSEL */}
        <div className="relative w-full md:w-3/5 h-[400px] md:h-full bg-black flex items-center justify-center group">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={item.images[index]}
              alt={item.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="w-full h-full object-contain p-4"
            />
          </AnimatePresence>

          {/* FLECHAS: Solo se renderizan si hay más de una imagen */}
          {hasMultipleImages && (
            <>
              {/* Botones de navegación - Ocultos en mobile para no tapar la foto, aparecen al tocar */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 p-2 rounded-full bg-black/50 border border-white/10 text-white backdrop-blur-md md:opacity-0 md:group-hover:opacity-100 transition-all"
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 p-2 rounded-full bg-black/50 border border-white/10 text-white backdrop-blur-md md:opacity-0 md:group-hover:opacity-100 transition-all"
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Indicador de puntitos ajustado */}
              <div className="absolute bottom-6 flex gap-2">
                {item.images.map((_: any, i: number) => (
                  <div
                    key={i}
                    className={`h-1 transition-all duration-300 rounded-full ${
                      index === i ? "w-6 bg-pink-500" : "w-1.5 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        {/* SECCIÓN DETALLES */}
        <div className="p-6 md:p-10 md:w-2/5 flex flex-col justify-between bg-[#0a0a0a]">
          {/* Botón cerrar flotante para móvil para que siempre esté visible */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 bg-black/20 backdrop-blur-lg rounded-full text-gray-400 hover:text-white"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div>
            <span className="px-3 py-1 bg-pink-500/10 text-pink-500 text-[10px] font-bold uppercase tracking-widest rounded-full border border-pink-500/20">
              {item.category}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2 tracking-tight">
              {item.name}
            </h2>
            <p className="text-xl text-white font-light mb-4">
              <span className="text-pink-500 font-bold">$</span>
              {item.price}
            </p>
            <p className="text-gray-400 leading-relaxed text-sm mb-8">
              {item.description || "Pieza artesanal de alta calidad."}
            </p>
          </div>

          <a
            href={`https://wa.me/5493718462342?text=Hola! Me interesa el llavero: ${item.name}`}
            target="_blank"
            className="w-full py-4 bg-white text-black font-bold rounded-2xl text-center hover:bg-pink-500 hover:text-white transition-all shadow-xl"
          >
            Hacer Pedido por WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  );
}
