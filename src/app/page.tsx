import About from "@/components/about";
import Hero from "@/components/hero";
import Host from "@/components/host";
import Images from "@/components/images";
import Menu from "@/components/menu/menu";
import Reviews from "@/components/reviews";
import Event from "@/components/event";
import Social from "@/components/social";

export default function Home() {
  return (
    <>
      <Hero />
      <Host />
      <Images />
      <About />
      {/* <Validity /> */}
      <Menu />
      <Reviews />
      <Event />
      <Social />
    </>
  );
}
