"use client";
import { useState } from "react";
import { products } from "../data/products";
import Card from "./Card";
import Modal from "./Modal";
import { motion } from "framer-motion";

const categories = ["todos", "amor", "letras", "colores"];

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("todos");

  const filtered =
    filter === "todos"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {" "}
      {/* Filtros */}
      <div className="flex gap-2 mb-4 justify-center flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full ${
              filter === cat
                ? "bg-pink-500 text-white"
                : "bg-gray-800 text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Galería */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {" "}
        {filtered.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Card item={item} onClick={setSelected} />
          </motion.div>
        ))}
      </div>
      {selected && <Modal item={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
