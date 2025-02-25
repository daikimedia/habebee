import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function About2() {
  return (
    <div className="relative text-white py-32 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2
              className={`${bebasNeue.className} text-7xl leading-none uppercase`}
            >
              Where Quality Meets Responsibility
            </h2>
            <div className="space-y-6  font-bold">
              <p>
                We take pride in sourcing only the finest ingredients and
                partnering with local suppliers who share our values of
                sustainability and ethical practices. At Habebee Lounge, every
                cup of coffee and every plate served reflects our commitment to
                quality and our planet. Beyond the food, we strive to foster a
                sense of community by creating a welcoming environment where
                everyone feels valued.
              </p>
              <p>
                From the moment you step through our doors, you’ll feel the
                essence of Habebee Lounge—a place where every detail is designed
                to make your visit unforgettable. Our interiors reflect a
                harmonious blend of modern elegance and timeless charm,
                providing the perfect backdrop for any occasion. Whether it’s a
                solo coffee break, a gathering with friends, or a family outing,
                Habebee Lounge is your go-to destination.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/img/main-about.jpg"
              alt="Irish Pub Scene"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
