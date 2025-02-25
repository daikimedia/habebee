import { Star } from "lucide-react";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Reviews() {
  return (
    <section className="px-6 py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-16 mb-16 lg:mr-48">
          <div className="flex-1 text-center lg:text-left">
            <h3
              className={`${bebasNeue.className} text-emerald-400 text-2xl tracking-wider font-medium mb-8 lg:mb-16`}
            >
              REVIEWS
            </h3>
            <h2
              className={`${bebasNeue.className} text-white text-5xl lg:text-7xl font-bold leading-tight tracking-tight`}
            >
              WHAT OUR GUESTS SAY
            </h2>
          </div>

          <div className="text-white lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="flex flex-col items-center lg:items-start">
              <span
                className={`${bebasNeue.className} text-5xl lg:text-7xl text-[#DEE3E1] font-bold leading-none`}
              >
                4.5
              </span>
              <div className="pt-4 text-center lg:text-left">
                <p className="text-lg font-bold text-[#DEE3E1]">Out of 5</p>
                <div className="flex gap-1 justify-center lg:justify-start text-emerald-400 mt-2">
                  <Star className="w-3 h-3 fill-emerald-400" />
                  <Star className="w-3 h-3 fill-emerald-400" />
                  <Star className="w-3 h-3 fill-emerald-400" />
                  <Star className="w-3 h-3 fill-emerald-400" />
                  <Star className="w-3 h-3 fill-emerald-100/90" />
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-1 text-[#DEE3E1] text-lg lg:mt-0">
              <div className="flex justify-center lg:justify-start items-center gap-3">
                <span className="text-xl">G</span>
                <span>2,394 Ratings</span>
              </div>
              <div className="flex justify-center lg:justify-start items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5  fill-gray-300"
                >
                  <path d="M255.9 120.9l9.1-15.7c5.6-9.8 18.1-13.1 27.9-7.5 9.8 5.6 13.1 18.1 7.5 27.9l-87.5 151.5h63.3c20.5 0 32 24.1 23.1 40.8H113.8c-11.3 0-20.4-9.1-20.4-20.4 0-11.3 9.1-20.4 20.4-20.4h52l66.6-115.4-20.8-36.1c-5.6-9.8-2.3-22.2 7.5-27.9 9.8-5.6 22.2-2.3 27.9 7.5l8.9 15.7zm-78.7 218l-19.6 34c-5.6 9.8-18.1 13.1-27.9 7.5-9.8-5.6-13.1-18.1-7.5-27.9l14.6-25.2c16.4-5.1 29.8-1.2 40.4 11.6zm168.9-61.7h53.1c11.3 0 20.4 9.1 20.4 20.4 0 11.3-9.1 20.4-20.4 20.4h-29.5l19.9 34.5c5.6 9.8 2.3 22.2-7.5 27.9-9.8 5.6-22.2 2.3-27.9-7.5-33.5-58.1-58.7-101.6-75.4-130.6-17.1-29.5-4.9-59.1 7.2-69.1 13.4 23 33.4 57.7 60.1 104zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216z" />
                </svg>{" "}
                <span>989 Ratings</span>
              </div>
              <div className="flex justify-center lg:justify-start items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-gray-300"
                >
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                <span>2,574 Ratings</span>
              </div>
              <div className="flex justify-center lg:justify-start items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-gray-300"
                >
                  <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                </svg>
                <span>1,293 Ratings</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="border border-gray-600 p-10 bg-transparent">
            <div className="flex gap-1 text-emerald-400 mb-6">
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
            </div>
            <p className="text-[#DEE3E1] font-bold text-lg leading-relaxed mb-8">
              Had a great early dinner in the evening. The food was tasty and
              the staff were very helpful and friendly. The poratha burger was
              great and the chicken was very well-cooked. Will come back here
              again. Thank you for the great food.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-[#DEE3E1] text-md font-bold tracking-wide">
                Vee lan
              </span>
            </div>
          </div>

          <div className="border border-gray-600 p-10 bg-transparent">
            <div className="flex gap-1 text-emerald-400 mb-6">
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
            </div>
            <p className="text-[#DEE3E1] text-lg font-bold leading-relaxed mb-8">
              Habeebee is truly a culinary gem ! The ambience, service, and food
              are all top-notch. Its delightful dining experience that leaves a
              lasting impression. Especially tomyam creamy pasta nailed 😋
            </p>
            <div className="flex items-center gap-4">
              <span className="text-[#DEE3E1] text-md font-bold tracking-wide">
                Thayalan Thaya
              </span>
            </div>
          </div>

          <div className="border border-gray-600 p-10 bg-transparent">
            <div className="flex gap-1 text-emerald-400 mb-6">
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
            </div>
            <p className="text-[#DEE3E1] text-lg font-bold leading-relaxed mb-8">
              I had the superb butter chicken rice. Never taste the tastiest
              butter chicken before . Love it so much . The best restaurant in
              Cyberjaya with good environment . Lot of family ppl enjoying their
              outing in here .
            </p>
            <div className="flex items-center gap-4">
              <span className="text-[#DEE3E1] font-bold text-lg tracking-wide">
                Prabakaran Govindersamy
              </span>
            </div>
          </div>

          <div className="border border-gray-600 p-10 bg-transparent">
            <div className="flex gap-1 text-emerald-400 mb-6">
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
              <Star className="w-4 h-4 fill-emerald-400" />
            </div>
            <p className="text-[#DEE3E1] text-lg font-bold leading-relaxed mb-8">
              I went this place to have dinner with friends. I went in with no
              expectations, just wanna kill some time but turns out the food
              here was good. I ordered the spaghetti Bolognese and fries, all of
              them tasted delicious. The price here was not bad too. Will
              definitely come back here to try other dishes soon.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-[#DEE3E1] font-bold text-md tracking-wide">
                Vinoth Naidu
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
