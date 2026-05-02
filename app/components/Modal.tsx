"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { generateWhatsAppLink } from "../lib/whatsapp";

export default function Modal({ item, onClose }: any) {
  const [index, setIndex] = useState(0);

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
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl overflow-y-auto">
      {/* fondo click */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0"
      />

      {/* botón cerrar */}
      <button
        onClick={onClose}
        className="fixed top-5 right-5 z-[120] border border-white/15 px-4 py-2 rounded-full text-xs text-white hover:bg-white hover:text-black transition"
      >
        Cerrar
      </button>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.45 }}
        className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 px-4 md:px-10 py-20 max-w-7xl mx-auto"
      >
        {/* IMAGEN FULL */}
        <div className="relative w-full lg:w-[58%] h-[420px] md:h-[75vh] flex items-center justify-center group">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={item.images[index]}
              alt={item.name}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.45 }}
              className="w-full h-full object-contain rounded-[28px] shadow-[0_10px_60px_rgba(0,0,0,0.55)]"
            />
          </AnimatePresence>

          {/* flechas */}
          {hasMultipleImages && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-3 md:left-6 p-3 rounded-full bg-black/40 border border-white/10 text-white backdrop-blur-lg md:opacity-0 md:group-hover:opacity-100 transition"
              >
                ‹
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-3 md:right-6 p-3 rounded-full bg-black/40 border border-white/10 text-white backdrop-blur-lg md:opacity-0 md:group-hover:opacity-100 transition"
              >
                ›
              </button>

              <div className="absolute bottom-5 flex gap-2">
                {item.images.map((_: any, i: number) => (
                  <div
                    key={i}
                    className={`rounded-full transition-all duration-300 ${
                      index === i
                        ? "w-7 h-[3px] bg-pink-500"
                        : "w-2 h-[3px] bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* DETALLES */}
        <div className="w-full lg:w-[380px] text-white px-2">
          <p className="text-[10px] uppercase tracking-[3px] text-gray-500 mb-4">
            Colección artesanal
          </p>

          <h2 className="text-3xl md:text-4xl font-light tracking-wide leading-tight">
            {item.name}
          </h2>

          <p className="mt-5 text-sm text-gray-400 leading-7">
            {item.description ||
              "Pieza elaborada cuidadosamente en resina con acabados delicados y detalles únicos para regalar o recordar momentos especiales."}
          </p>

          <div className="mt-8 space-y-2 text-xs text-gray-500 uppercase tracking-[2px]">
            <p>Categoría · {item.category}</p>
            {item.customizable && <p>Diseño personalizable</p>}
          </div>

          <a
            href={generateWhatsAppLink(item)}
            target="_blank"
            className="inline-block mt-10 border border-white px-8 py-3 rounded-full text-sm hover:bg-white hover:text-black transition"
          >
            Hacer Pedido
          </a>
        </div>
      </motion.div>
    </div>
  );
}
