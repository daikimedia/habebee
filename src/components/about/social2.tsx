import { Instagram } from "lucide-react";

export default function Social2() {
  return (
    <section className="relative min-h-screen mt-32">
      <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
        {[1, 3, 5, 4].map((_, index) => (
          <div key={index} className="relative w-full h-full">
            <img
              src="/img/img123.jpg?height=800&width=400"
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
          #IRISHCAFE4US
        </h2>
        <h3
          className="text-white text-3xl sm:text-4xl md:text-7xl mb-8"
          style={{ fontFamily: "Bebas Neue" }}
        >
          TAKE SELFIE & GET 20% OFF FLAT
        </h3>

        <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-base sm:text-lg md:text-xl">
          Adipiscing fringilla a, in sit nunc orci, laoreet in nulla elementum
          volutpat nec tristique non eget donec tempus integer amet tellus
          cursus sed sagittis.
        </p>
        <button className="bg-[#18C67E] hover:bg-emerald-600 text-white px-6 py-2 rounded-md font-semibold flex items-center gap-2 transition-colors">
          <Instagram className="w-4 h-4" />
          FOLLOW US ON INSTAGRAM
        </button>
      </div>
    </section>
  );
}
