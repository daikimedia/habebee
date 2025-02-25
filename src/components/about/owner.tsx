import { Instagram, Utensils } from "lucide-react";
import { Bebas_Neue } from "next/font/google";
import { FaTiktok } from "react-icons/fa6";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Owner() {
  return (
    <div className="bg-zinc-900 text-white py-16 sm:py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 sm:mb-16">
          <div
            className={`text-emerald-500 uppercase text-lg sm:text-xl md:text-2xl font-medium ${bebasNeue.className}`}
          >
            Continuing the Tradition of Excellence
          </div>

          <div className="flex flex-wrap sm:gap-6 gap-4 justify-center sm:justify-end px-6 sm:px-8 md:px-12">
            <a
              href="#"
              className="hover:text-emerald-400 flex items-center gap-2"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.tiktok.com/notfound"
              className="hover:text-emerald-400 flex items-center gap-2"
            >
              <FaTiktok className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>TikTok</span>
            </a>

            <a
              href="https://www.foodpanda.my/restaurant/hg2r/habebee-lounge"
              className="hover:text-emerald-400 flex items-center gap-2"
            >
              <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
              <span>Foodpanda</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 mb-8 lg:mb-0">
            <h1
              className={`uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold leading-tight tracking-tighter ${bebasNeue.className}`}
            >
              Your Comfort
              <br />
              Our Priority
            </h1>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 gap-8">
            <div className="text-gray-300 text-base sm:text-lg md:text-xl">
              As we grow, our mission remains unchanged: to provide exceptional
              food, drinks, and experiences that bring people together. We’re
              constantly innovating our offerings and exploring new ways to
              surprise and delight our guests. At Habebee Lounge, every visit is
              a step into the future of cafe culture—where tradition and
              modernity blend seamlessly to create something truly special.
            </div>
            <div className="text-gray-300 text-base sm:text-lg md:text-xl">
              Whether you’re here to work, unwind, or catch up with loved ones,
              our cozy and thoughtfully designed space is here to make you feel
              at home. We’ve created an ambiance that blends modern elegance
              with a touch of rustic charm, providing the perfect backdrop for
              your cherished moments.
            </div>
          </div>
        </div>

        {/* Optional fixed element */}
        <div className="fixed top-8 right-8"></div>
      </div>
    </div>
  );
}
