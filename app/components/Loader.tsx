"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ loading }: { loading: boolean }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl px-5 md:text-5xl text-center font-light tracking-[6px]"
          >
            LLAVEROS PERSONALIZABLE
          </motion.h1>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 120, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-[1px]  bg-pink-500 mt-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-4 px-5 text-[14px] tracking-[4px] uppercase"
          >
            Colección de resina hecha a mano
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
