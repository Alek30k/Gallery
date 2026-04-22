"use client";
import Gallery from "./components/Gallery";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-pink-500/30 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-pink-900/20 via-transparent to-transparent blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* SECCIÓN HERO - Ajustamos el alto para que la flecha quede bien ubicada */}
        <section className="relative flex flex-col items-center justify-center min-h-[90vh] pt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-white/5 border border-white/10 rounded-full text-pink-400 backdrop-blur-sm">
              ✨ Artesanía Premium en Resina
            </span>

            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
              Llaveros de <br />
              <span className="text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                Resina
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Piezas únicas hechas a mano que capturan tu estilo.
              <span className="text-gray-200"> Diseños personalizados</span> con
              acabados de alta resistencia.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-green-400 text-lg">🚚</span>
                <span className="text-sm font-medium text-slate-300">
                  Envíos a todo el país
                </span>
              </div>
              <div className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-pink-400 text-lg">💖</span>
                <span className="text-sm font-medium text-slate-300">
                  100% Hecho a mano
                </span>
              </div>
            </div>
          </motion.div>

          {/* INDICADOR DE SCROLL ANIMADO */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
              Explorar
            </span>
            <motion.a
              href="#coleccion"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-gray-400 hover:text-pink-500 transition-colors cursor-pointer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </motion.a>
          </motion.div>
        </section>

        {/* SECCIÓN DE GALERÍA - Le agregamos el ID para el scroll */}
        <section
          id="coleccion"
          className="py-12 border-t border-white/5 scroll-mt-20"
        >
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold italic tracking-tight">
              Nuestra Colección
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent ml-8 hidden md:block" />
          </div>

          <Gallery />
        </section>

        <footer className="py-12 text-center text-gray-600 text-sm border-t border-white/5">
          <p>
            © {new Date().getFullYear()} Llaveros de Resina - Hecho con amor ✨
          </p>
        </footer>
      </div>

      {/* BOTÓN WHATSAPP ... */}
    </main>
  );
}
