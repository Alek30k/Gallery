"use client";
import { useState } from "react";
import { products } from "../data/products";
import Card from "./Card";
import Modal from "./Modal";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["todos", "amor", "letras", "colores"];

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
      <div className="sticky top-0 z-40 bg-[#050505]/80 backdrop-blur-md py-4 -mx-6 px-6">
        <div className="flex justify-center">
          <nav className="flex gap-1 p-1 bg-white/5 border border-white/10 rounded-xl overflow-x-auto no-scrollbar max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-5 py-2 text-xs md:text-sm font-medium capitalize transition-colors duration-300 whitespace-nowrap ${
                  filter === cat
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {filter === cat && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-pink-600 rounded-lg shadow-[0_0_15px_rgba(219,39,119,0.4)]"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Grid de Galería */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-2"
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
