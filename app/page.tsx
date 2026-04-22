"use client";
import Gallery from "./components/Gallery";
import { motion } from "framer-motion";

export default function Home() {
  return (
    // CAMBIO: Quitamos overflow-x-hidden de aquí para que funcione el sticky
    <main className="min-h-screen bg-[#050505] text-white selection:bg-pink-500/30 relative">
      {/* Contenedor para los glows: Aquí sí usamos overflow-hidden para que los brillos no se escapen */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-pink-900/20 via-transparent to-transparent blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* SECCIÓN HERO */}
        <section className="flex flex-col items-center justify-center pt-24 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
              acabados de alta resistencia y brillo cristalino.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 transition-colors hover:bg-white/10">
                <span className="text-green-400 text-lg">🚚</span>
                <span className="text-sm font-medium text-slate-300">
                  Envíos a todo el país
                </span>
              </div>
              <div className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 transition-colors hover:bg-white/10">
                <span className="text-pink-400 text-lg">💖</span>
                <span className="text-sm font-medium text-slate-300">
                  100% Hecho a mano
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECCIÓN DE GALERÍA */}
        <section className="py-12 border-t border-white/5">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold italic tracking-tight">
              Explora la Colección
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent ml-8 hidden md:block" />
          </div>

          {/* El componente Gallery ahora podrá ser sticky */}
          <Gallery />
        </section>

        <footer className="py-12 text-center text-gray-600 text-sm border-t border-white/5">
          <p>
            © {new Date().getFullYear()} Llaveros de Resina - Hecho con amor ✨
          </p>
        </footer>
      </div>

      <motion.a
        href="https://wa.me/549XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.3)] transition-all group"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="font-bold hidden md:inline">Hacer Pedido</span>
      </motion.a>
    </main>
  );
}
