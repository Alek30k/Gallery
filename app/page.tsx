"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Gallery from "./components/Gallery";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Hero from "./components/Hero";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader loading={loading} />

      <main className="min-h-screen bg-[#050505] text-white selection:bg-pink-500/30 relative overflow-x-hidden">
        {/* atmósfera global */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[650px] bg-gradient-to-b from-fuchsia-700/15 via-transparent to-transparent blur-[130px]" />
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-pink-500/5 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          {/* HERO / HEADER */}
          <section className="relative flex flex-col items-center justify-center min-h-[78vh] md:min-h-[88vh] text-center">
            {/* WATERMARK GIGANTE DE MARCA */}
            <motion.img
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 0.045, scale: 1 }}
              transition={{ duration: 1.3 }}
              src="/images/logo-rdc.png"
              alt="RDC watermark"
              className="absolute top-12 md:top-6 left-1/2 -translate-x-1/2 w-[280px] sm:w-[380px] md:w-[560px] object-contain blur-[2px] pointer-events-none select-none"
            />
            <Hero />

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="-mt-2 md:mt-0"
            >
              {/* badge */}
              <span className="inline-block px-4 py-1.5 mb-8 text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase bg-white/5 border border-white/10 rounded-full text-pink-400 backdrop-blur-sm">
                ✨ Artesanía Premium en Resina
              </span>

              {/* titulo */}
              <h1 className="text-4xl sm:text-5xl md:text-8xl font-black mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 leading-none">
                Llaveros de <br />
                <span className="text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                  Resina
                </span>
              </h1>

              {/* descripcion */}
              <p className="text-gray-400 text-sm sm:text-base md:text-xl max-w-2xl mx-auto mb-10 leading-7 md:leading-relaxed px-2">
                Piezas únicas hechas a mano que capturan tu estilo.
                <span className="text-gray-200">
                  {" "}
                  Diseños personalizados
                </span>{" "}
                con acabados delicados y duraderos para cada ocasión especial.
              </p>

              {/* highlights */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                <div className="flex items-center gap-2 px-4 md:px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(236,72,153,0.05)]">
                  <span className="text-sm md:text-lg text-pink-400">✦</span>
                  <span className="text-xs md:text-sm font-medium text-gray-300">
                    Diseños Exclusivos
                  </span>
                </div>

                <div className="flex items-center gap-2 px-4 md:px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(236,72,153,0.05)]">
                  <span className="text-sm md:text-lg text-pink-400">✦</span>
                  <span className="text-xs md:text-sm font-medium text-gray-300">
                    Personalizado a tu gusto
                  </span>
                </div>
              </div>
            </motion.div>

            {/* flecha scroll */}
            <motion.a
              href="#coleccion"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
              className="mt-12 md:mt-14 flex flex-col items-center gap-2 text-gray-500 hover:text-pink-500 transition-colors"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
                Explorar
              </span>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
              </motion.div>
            </motion.a>
          </section>

          {/* GALERÍA */}
          <section id="coleccion" className="pt-10 md:pt-14 pb-20 scroll-mt-20">
            <Gallery />
          </section>

          <Footer />
        </div>

        <FloatingWhatsApp />
      </main>
    </>
  );
}
