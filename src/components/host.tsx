import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { Instagram, MapPin, Eye, Utensils } from "lucide-react";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Host() {
  return (
    <div className="bg-zinc-900 text-white relative py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[40%_10%_45%] gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 md:px-0">
        <div className="pt-4 sm:pt-6 lg:pt-10">
          <h2
            className={`${bebasNeue.className} text-[#18C67E] text-xl tracking-wider mb-4 sm:mb-8 lg:mb-12`}
          >
            WE ARE THE
          </h2>
          <div className="space-y-2 sm:space-y-4">
            <h1
              className={`${bebasNeue.className} text-[#DEE3E1] text-[60px] sm:text-[80px] md:text-[120px] leading-[0.9] font-bold tracking-tight`}
            >
              Best
              <br />
              Host
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8 ml-auto md:mr-16">
          <Image
            src="/img/best-host.jpg"
            alt="Host profile"
            width={450}
            height={450}
            className="rounded-lg object-cover md:mr-[300px] sm:mr-0 sm:mt-6 w-[90%] sm:w-[75%] lg:w-[450px]"
          />
        </div>
        <div className="space-y-6 md:space-y-12 mt-8 sm:mt-12 md:mt-16 md:max-w-xl mx-auto md:ml-16 sm:ml-0">
          <div className="space-y-4">
            <h3
              className={`${bebasNeue.className} text-[#DEE3E1] mb-4 sm:mb-6 lg:mb-8 text-lg font-medium text-center md:text-left`}
            >
              FOLLOW US
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 mt-4 sm:mt-12">
              <a
                href="https://www.instagram.com/habebeelounge/"
                className="hover:text-emerald-400 flex items-center gap-2"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" />
                <span className="text-sm sm:text-base ">Instagram</span>
              </a>
              <a
                href="https://www.google.com/search?sca_esv=a47a5816891b9334&kgmid=/g/11q49c82ht&q=Habebee+Lounge+Cyberjaya&shndl=30&shem=lcuae,uaasie&source=sh/x/loc/uni/m1/1&kgs=0ffbeb2e50d31271"
                className="hover:text-emerald-400 flex items-center gap-2"
              >
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                <span className="text-sm sm:text-base">GMB</span>
              </a>
              <a
                href="https://www.tripadvisor.com/Restaurant_Review-g298312-d28004439-Reviews-Habebee_Lounge-Cyberjaya_Sepang_District_Selangor.html"
                className="hover:text-emerald-400 flex items-center gap-2"
              >
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                <span className="text-sm sm:text-base">TripAdvisor</span>
              </a>
              <a
                href="https://www.foodpanda.my/restaurant/hg2r/habebee-lounge"
                className="hover:text-emerald-400 flex items-center gap-2"
              >
                <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                <span className="text-sm sm:text-base">Foodpanda</span>
              </a>
            </div>
          </div>
          <div className="text-white mt-4 text-sm sm:text-base space-y-4 sm:space-y-8">
            <h3 className="font-bold text-2xl sm:text-3xl">
              Habebee Lounge: Where Moments Become Memories
            </h3>
            <p className="font-bold">
              Discover a cozy retreat where every sip and bite tells a story. At
              Habebee Lounge, we blend tradition with innovation to create a
              space that feels like home. From our expertly crafted coffees to
              our mouthwatering dishes, every detail is designed to delight your
              senses and bring people together in a welcoming atmosphere.
            </p>
            <p className="text-[#DEE3E1]">
              Enjoy the charm of a warm, inviting ambiance paired with flavors
              that satisfy the soul. Whether you&apos;re here for a quick
              catch-up with friends or a moment of solitude, Habebee Lounge
              offers the perfect e&apos;scape to relax, connect, and indulge.
              Let us make your every visit unforgettable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
