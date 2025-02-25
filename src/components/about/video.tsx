import { Play } from "lucide-react";

export default function Video() {
  return (
    <div className="bg-zinc-900 mb-32">
      <div className="relative w-full h-[50vh] md:h-[70vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/img/hero-banner.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
          <Play className="w-8 h-8 text-white" />
        </button>

        <div className="absolute top-8 right-8"></div>
      </div>
    </div>
  );
}
