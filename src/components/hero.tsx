import Link from "next/link";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center px-4 sm:px-8 lg:px-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/img/hero-banner.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/100" />
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        <h1
          className={`${bebasNeue.className} font-bold text-white text-5xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl leading-tight mb-6`}
        >
          WELCOME TO THE Habebee Lounge  
          <br className="hidden sm:block" />
          The Best Restaurant in Cyberjaya
        </h1>
        <p className="text-gray-300 text-sm sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12">
          Habebee Lounge offers a unique dining experience in the heart of Cyberjaya. Whether you&apos;re craving delicious Western cuisine or a relaxing cafe ambiance, we have something for everyone.
        </p>
        <Link
          href="https://api.whatsapp.com/send?phone=60126239047&text=Reservation%20please%20%5B%20Source%20%3A%20Web%20%5D"
          className="bg-[#18C67E] hover:bg-emerald-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-md text-xs sm:text-sm md:text-base uppercase tracking-wide transition-colors duration-200"
        >
          BOOK A TABLE
        </Link>
      </div>
    </section>
  );
}
