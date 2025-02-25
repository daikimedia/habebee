import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Event() {
  return (
    <section className="text-white py-16 px-4 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`${bebasNeue.className} text-7xl font-bold mb-6`}>
            UPCOMING EVENTS
          </h2>
          <p className="text-[#DEE3E1]  text-lg max-w-3xl mx-auto">
            Looking for the perfect spot to host your event? Or need catering
            for your special day? Habebee Lounge has got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <img
              src="/img/main-about.jpg?height=400&width=600"
              alt="Group of friends enjoying at meetup"
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="flex gap-6 flex-col md:flex-row">
              <div className="relative">
                <div className="w-16 h-0.5 bg-emerald-400 mb-4" />
                <div className="space-y-1">
                  <div className={`${bebasNeue.className} text-lg font-bold`}>
                    JUN 20
                  </div>
                  <div className={`${bebasNeue.className} text-lg font-bold`}>
                    2021
                  </div>
                </div>
              </div>
              <div>
                <h3
                  className={`${bebasNeue.className} text-[40px] font-bold leading-tight mb-4`}
                >
                  GROUP MEETUP NIGHT
                </h3>
                <p className="text-gray-300 mb-8">
                  Orci posuere eu fringilla accumsan, consequat mollis amet,
                  nullam mollis ullamcorper elit mauris eget.
                </p>
                <button className="border rounded-md border-white px-8 py-3 text-sm font-medium hover:bg-white hover:text-black transition-colors">
                  BOOK YOUR TABLE
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <img
              src="/img/about-banner.jpg?height=400&width=600"
              alt="Pool tables in a bar"
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="flex gap-6 flex-col md:flex-row">
              <div className="relative">
                <div className="w-16 h-0.5 bg-emerald-400 mb-4" />
                <div className="space-y-1">
                  <div className={`${bebasNeue.className} text-lg font-bold`}>
                    JUN 20
                  </div>
                  <div className={`${bebasNeue.className} text-lg font-bold`}>
                    2021
                  </div>
                </div>
              </div>
              <div>
                <h3
                  className={`${bebasNeue.className} text-[40px] font-bold leading-tight mb-4`}
                >
                  POOL BALL NIGHT
                </h3>
                <p className="text-gray-300 mb-8">
                  Orci posuere eu fringilla accumsan, consequat mollis.
                </p>
                <button className="border rounded-md border-white px-8 py-3 text-sm font-medium hover:bg-white hover:text-black transition-colors">
                  BOOK YOUR TABLE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
