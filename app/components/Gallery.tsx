"use client";
import { useState } from "react";
import { products } from "../data/products";
import Card from "./Card";
import Modal from "./Modal";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["todos", "amor", "letras", "niños", "eventos"];

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("todos");

  const filtered =
    filter === "todos"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <div className="w-full">
      {/* Contenedor Sticky: Se queda fijo al scrollear en móvil y desktop */}
      <div className="sticky top-0 z-40 bg-[#050505]/80 backdrop-blur-md py-4 -mx-4 px-2 md:px-6">
        <div className="flex justify-center">
          <div className="sticky top-0 z-40 bg-[#050505]/75 backdrop-blur-xl py-3 mb-6">
            <div className="w-full overflow-x-auto no-scrollbar px-2">
              <nav className="flex gap-2 min-w-max">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`relative px-4 md:px-5 py-2 text-[11px] md:text-sm cursor-pointer font-medium capitalize rounded-full whitespace-nowrap transition-all duration-300
            ${
              filter === cat
                ? "text-white"
                : "text-gray-400 border border-white/10 bg-white/5"
            }`}
                  >
                    {filter === cat && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-pink-600 rounded-full shadow-[0_0_14px_rgba(219,39,119,0.35)]"
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 22,
                        }}
                      />
                    )}

                    <span className="relative z-10">{cat}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de Galería */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10  px-0 md:px-2"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card item={item} onClick={setSelected} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <Modal item={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
