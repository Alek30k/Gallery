"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative pt-6 md:pt-8 pb-4">
      <div className="relative z-10 flex flex-col items-center">
        <motion.img
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          src="/images/logo-rdc.png"
          alt="logo"
          className="w-[72px] md:w-[95px] mb-3 drop-shadow-[0_0_18px_rgba(249,115,22,0.12)]"
        />

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 40 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="h-[1px] bg-white/20 mb-3"
        />
      </div>
    </div>
  );
}
