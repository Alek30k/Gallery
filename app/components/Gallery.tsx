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
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Contenedor de Filtros con Glassmorphism */}
      <div className="flex justify-center mb-16">
        <nav className="flex gap-1 p-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative px-6 py-2 text-sm font-medium capitalize transition-colors duration-300 ${
                filter === cat
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {/* Indicador animado (LayoutId hace la magia) */}
              {filter === cat && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-pink-600 rounded-xl shadow-[0_0_15px_rgba(219,39,119,0.5)]"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Grid de Galería con AnimatePresence */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Card item={item} onClick={setSelected} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State: Por si no hay productos en una categoría */}
      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 text-gray-500"
        >
          No hay diseños disponibles en esta categoría por ahora.
        </motion.div>
      )}

      {/* Modal con AnimatePresence para cierre suave */}
      <AnimatePresence>
        {selected && (
          <Modal item={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
