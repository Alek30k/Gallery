import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <h1 className="text-4xl font-bold text-center py-8">
        Llaveros de Resina ✨
      </h1>

      <p className="text-center text-gray-300 mb-6">
        Diseños únicos y personalizados
      </p>

      <p className="text-center text-gray-400 mb-4">
        💖 Diseños únicos hechos a mano
      </p>

      <p className="text-center text-green-400 mb-6 font-semibold">
        🚚 Envíos a todo el país | 📲 Pedidos por WhatsApp
      </p>

      <Gallery />

      {/* Botón flotante WhatsApp */}
      <a
        href="https://wa.me/549XXXXXXXXXX"
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg"
      >
        WhatsApp
      </a>
    </main>
  );
}
