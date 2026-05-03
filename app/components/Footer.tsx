"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-24 border-t border-white/5 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Marca */}
        <div>
          <h2 className="text-lg tracking-[4px] font-light uppercase text-white">
            PERSONALIZABLE
          </h2>

          <p className="mt-4 text-sm text-gray-500 leading-7 max-w-xs mx-auto md:mx-0">
            Diseños artesanales en resina creados para regalar, recordar y
            emocionar.
          </p>
        </div>

        {/* Servicios */}
        <div>
          <h3 className="text-xs uppercase tracking-[3px] text-gray-400 mb-4">
            Servicios
          </h3>

          <ul className="space-y-3 text-sm text-gray-500 ">
            <li>Pedidos personalizados</li>
            <li>Souvenirs para eventos</li>
            <li>Tarjetas, diseños exclusivos</li>
            <li>Venta por mayor y menor</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-xs uppercase tracking-[3px] text-gray-400 mb-4">
            Contacto
          </h3>

          <div className="space-y-4 text-sm text-gray-500 flex flex-col items-center md:items-start">
            <a
              href="https://wa.me/5493718462342"
              target="_blank"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <FaWhatsapp size={16} />
              WhatsApp
            </a>

            <a
              href="https://www.instagram.com/rdcjabones/?hl=es-la"
              target="_blank"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <FaInstagram size={16} />
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* línea inferior */}
      <div className="border-t border-white/5 py-5 text-center text-[10px] tracking-[2px] uppercase text-gray-600">
        © {new Date().getFullYear()} Llaveros de Resina - Hecho con amor ✨{" "}
      </div>
    </motion.footer>
  );
}
