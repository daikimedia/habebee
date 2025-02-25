import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function About() {
  return (
    <section className="text-white py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`${bebasNeue.className} text-[#18C67E] text-2xl uppercase mb-8 sm:mb-12 text-center md:text-left`}
        >
          ABOUT US
        </h2>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-20">
          <div className="w-full md:w-1/2">
            <h3
              className={`${bebasNeue.className} text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-center md:text-left mb-6 uppercase`}
            >
              Our Journey of Flavors and Hospitality
            </h3> 
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-base sm:text-lg font-bold mb-6 text-center md:text-left">
              A Tale of Bringing People Together Through Taste and Warmth
            </p>
            <p className="text-[#DEE3E1] text-sm sm:text-base mb-8 text-center md:text-left">
              At Habebee Lounge, we believe in creating more than just great
              food and drinks – we create memories that last a lifetime. Founded
              with a passion for connecting communities, our cafe draws
              inspiration from rich traditions of hospitality and the love for
              authentic flavors. Every corner of our space and every item on our
              menu is designed to bring joy, comfort, and a sense of belonging.
            </p>
            <div className="text-center md:text-left">
              <button className="bg-[#18C67E] hover:bg-emerald-700 text-white font-bold py-2 px-6 rounded transition ">
                READ MORE →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
