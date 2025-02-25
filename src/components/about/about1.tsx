import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function About1() {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center px-4 sm:px-8 lg:px-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/img/about-banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        <h1
          className={`${bebasNeue.className} text-white font-bold text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6`}
        >
          Our Story <br /> Habebee Lounge, Cyberjaya
        </h1>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed px-2 sm:px-6">
          At Habebee Lounge, we believe in offering more than just great food – 
          we offer an experience. From our carefully crafted Western dishes to our 
          cozy cafe setting, we aim to create a welcoming space for everyone in Cyberjaya. We’re passionate about serving the best food in Cyberjaya, using fresh ingredients and creating dishes that bring people together.

        </p>
      </div>
    </section>
  );
}
