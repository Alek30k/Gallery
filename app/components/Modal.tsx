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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-6 p-3 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-xl hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
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
                className="absolute right-6 p-3 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-xl hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* INDICADOR DE PUNTOS: Solo si hay varias imágenes */}
              <div className="absolute bottom-8 flex gap-2.5">
                {item.images.map((_: any, i: number) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 transition-all duration-500 rounded-full ${
                      index === i
                        ? "w-8 bg-pink-500"
                        : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* SECCIÓN DETALLES */}
        <div className="p-10 md:w-2/5 flex flex-col relative">
          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-gray-500 hover:text-white transition-colors"
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

          <div className="mt-4">
            <span className="px-3 py-1 bg-pink-500/10 text-pink-500 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-pink-500/20">
              {item.category}
            </span>
            <h2 className="text-4xl font-bold mt-6 mb-4 tracking-tight leading-none">
              {item.name}
            </h2>
            <p className="text-2xl text-white font-light mb-6">
              <span className="text-pink-500 font-bold">$</span>
              {item.price}
            </p>
            <p className="text-gray-400 leading-relaxed text-sm mb-10">
              {item.description ||
                "Llavero de resina artesanal con acabados premium y diseño exclusivo."}
            </p>
          </div>

          <div className="mt-auto">
            <a
              href={`https://wa.me/549XXXXXXXXXX?text=Hola! Me interesa este diseño: ${item.name}`}
              target="_blank"
              className="group relative flex items-center justify-center w-full py-4 bg-white text-black font-bold rounded-2xl overflow-hidden transition-all hover:pr-8"
            >
              <span className="relative z-10">Pedir por WhatsApp</span>
              <svg
                className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
