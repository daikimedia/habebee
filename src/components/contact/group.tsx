import Image from "next/image";

export default function Group() {
  const images = [
    {
      src: "/img/img-gl-1.jpg",
      alt: "Friends enjoying drinks at bar",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/img/img-gl-2.jpg",
      alt: "Bar interior with bottle display",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/img/img-gl-3.jpg",
      alt: "Bartender working",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/img/img-gl-4.jpg",
      alt: "Bar counter scene",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/img/img-gl-5.jpg",
      alt: "Kitchen staff working",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/img/img-gl-6.jpg",
      alt: "Pool table in bar",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/img/img-gl-7.jpg",
      alt: "Outdoor bar seating",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/img/img-gl-8.jpg",
      alt: "Liquor bottle display",
      className: "col-span-1 row-span-1",
    },
  ];

  return (
    <section className="py-16 bg-zinc-900">
      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative aspect-[4/3] ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 700px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
