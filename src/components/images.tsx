import Image from "next/image";

export default function Images() {
  return (
    <div className="w-full overflow-hidden bg-zinc-900 py-16">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="relative w-full md:w-[850px] h-[300px] md:h-[500px]">
          <Image
            src="/img/img-sec-1.jpg"
            alt="Nightclub scene with red neon lighting"
            fill
            className="object-cover transition-transform"
            priority
          />
        </div>

        <div className="relative w-full md:w-[850px] h-[300px] md:h-[500px]">
          <Image
            src="/img/img-sec-2.jpg"
            alt="Sports fans watching a game"
            fill
            className="object-cover transition-transform"
          />
        </div>

        <div className="relative w-full md:w-[850px] h-[300px] md:h-[500px]">
          <Image
            src="/img/img-sec-3.jpg"
            alt="Friends enjoying drinks at a pub"
            fill
            className="object-cover transition-transform"
          />
        </div>
      </div>
    </div>
  );
}
