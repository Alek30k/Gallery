"use client";

import { useState, useRef } from "react";
import { products } from "../data/products";
import Card from "./Card";
import Modal from "./Modal";
import { motion, AnimatePresence } from "framer-motion";
import FeaturedCarousel from "./FeaturedCarousel";

const categories = ["todos", "amor", "letras", "niños", "eventos"];

export default function Gallery() {
  const [selected, setSelected] = useState<any>(null);
  const [filter, setFilter] = useState("todos");

  const gridRef = useRef<HTMLDivElement>(null);

  const handleFilter = (cat: string) => {
    setSelected(null);
    setFilter(cat);

    setTimeout(() => {
      gridRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 120);
  };

  const filtered =
    filter === "todos"
      ? products
      : products.filter((p) => p.category === filter);

  const featuredItems = products.filter((p) => p.featured);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <FeaturedCarousel items={featuredItems} onSelect={setSelected} />
      {/* NAV STICKY PREMIUM */}
      <div className="sticky top-0 z-40 bg-[#050505]/85 backdrop-blur-md py-3 md:py-4 -mx-4 px-3 md:px-6 border-b border-white/5">
        <div className="w-full px-1">
          {" "}
          <nav className="grid grid-cols-3 sm:grid-cols-5 gap-2 w-full max-w-xl mx-auto md:flex md:justify-center md:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`relative w-full md:w-auto px-2 md:px-5 py-2 text-[10px] md:text-sm font-medium capitalize rounded-full transition-all duration-300 cursor-pointer
      ${
        filter === cat
          ? "text-white"
          : "text-gray-400 bg-white/5 border border-white/10"
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

                <span className="relative z-10 block truncate">{cat}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* GRID PREMIUM */}
      <motion.div
        ref={gridRef}
        layout
        className="scroll-mt-24 md:scroll-mt-28 mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10 px-3 md:px-2"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              <Card item={item} onClick={setSelected} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <Modal item={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
