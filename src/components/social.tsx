import { Instagram } from "lucide-react";

export default function Social() {
  return (
    <section className="relative min-h-screen py-16">
      <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-0">
        {[1].map((_, index) => (
          <div key={index} className="relative w-full h-full">
            <img
              src="/img/img123.jpg"
              alt="Pub atmosphere"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <Instagram className="w-16 h-16 text-white mb-8" />
        <h2
          className="text-white text-4xl sm:text-5xl md:text-8xl font-bold mb-4"
          style={{ fontFamily: "Bebas Neue" }}
        >
          #habebeelounge
        </h2>
        <h3
          className="text-white text-3xl sm:text-4xl md:text-7xl mb-8"
          style={{ fontFamily: "Bebas Neue" }}
        >
          TAKE SELFIE & GET 20% OFF FLAT
        </h3>

        <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-base sm:text-lg md:text-xl">
          Stay updated on the latest specials, events, and news
        </p>
        <a
          href="https://www.instagram.com/habebeelounge/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#18C67E] hover:bg-emerald-600 text-white px-6 py-2 rounded-md font-semibold flex items-center gap-2 transition-colors">
            <Instagram className="w-4 h-4" />
            FOLLOW US ON INSTAGRAM
          </button>
        </a>
      </div>
    </section>
  );
}
