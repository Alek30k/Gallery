"use client";
import { motion } from "framer-motion";
import { generateWhatsAppLink } from "../lib/whatsapp";

export default function Modal({ item, onClose }: any) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white text-black rounded-2xl overflow-hidden max-w-md w-full"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={item.image} className="w-full h-80 object-cover" />

        <div className="p-4 space-y-2">
          <h2 className="text-xl font-bold">{item.name}</h2>

          <p className="text-pink-500 text-lg">${item.price}</p>

          {item.customizable && (
            <p className="text-sm text-gray-600">
              ✨ Este producto es personalizable
            </p>
          )}

          <a
            href={generateWhatsAppLink(item)}
            target="_blank"
            className="block mt-3 bg-green-500 text-white text-center py-2 rounded-lg font-semibold"
          >
            Comprar por WhatsApp
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
