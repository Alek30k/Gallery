"use client";

import { useState } from "react";
import { products } from "../data/products";
import Card from "./Card";
import Modal from "./Modal";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import FeaturedCarousel from "./FeaturedCarousel";

const categories = ["todos", "amor", "letras", "niños", "eventos"];

export default function Gallery() {
  const [selected, setSelected] = useState<any>(null);
  const [filter, setFilter] = useState("todos");

  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [300, 500], [1, 0.94]);
  const opacity = useTransform(scrollY, [300, 500], [1, 0.97]);
  const y = useTransform(scrollY, [300, 500], [0, -2]);

  const handleFilter = (cat: string) => {
    setSelected(null);
    setFilter(cat);
  };

  const filtered =
    filter === "todos"
      ? products
      : products.filter((p) => p.category === filter);

  const featuredItems = products.filter((p) => p.featured);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* ================= FEATURED ================= */}
      {featuredItems.length > 0 && (
        <div className="mb-12 md:mb-16">
          <FeaturedCarousel items={featuredItems} onSelect={setSelected} />
        </div>
      )}

      {/* ================= FLOATING LUXURY FILTER ================= */}
      <div className="sticky top-3 md:top-5 z-50 mb-10 md:mb-14 px-2 flex justify-center">
        <motion.div
          style={{ scale, opacity, y }}
          className="w-full max-w-xl rounded-[28px] border border-white/10 bg-[#080808]/82 backdrop-blur-2xl px-3 py-4 md:px-5 md:py-5 shadow-[0_12px_45px_rgba(0,0,0,0.38)]"
        >
          <p className="text-center text-[10px] md:text-xs uppercase tracking-[0.35em] text-gray-500 mb-4">
            Explorar Colección
          </p>

          <nav className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`relative w-full px-2 md:px-4 py-2.5 text-[10px] sm:text-[11px] md:text-sm font-medium capitalize rounded-full overflow-hidden transition-all duration-300 cursor-pointer
                ${
                  filter === cat
                    ? "text-white"
                    : "text-gray-400 bg-white/[0.03] border border-white/8 hover:text-gray-200"
                }`}
              >
                {filter === cat && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 shadow-[0_0_18px_rgba(236,72,153,0.35)]"
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 22,
                    }}
                  />
                )}

                <span className="relative z-10 block truncate tracking-wide">
                  {cat}
                </span>
              </button>
            ))}
          </nav>
        </motion.div>
      </div>

      {/* ================= GRID ================= */}
      <motion.div
        layout
        className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10 px-2 md:px-1"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 25 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: "easeOut",
              }}
            >
              <Card item={item} onClick={setSelected} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selected && (
          <Modal item={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
