"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2.2 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-4 flex items-center justify-between">
        <h1 className="text-sm md:text-base tracking-[4px] font-light text-white uppercase">
          PERSONALIZABLE
        </h1>

        <a
          href="#catalogo"
          className="text-[11px] md:text-xs uppercase tracking-[3px] text-gray-300 hover:text-white transition"
        >
          Catálogo
        </a>
      </div>
    </motion.header>
  );
}
