import type { Metadata } from "next";
import Menu from "@/components/menu/menu";

export const metadata: Metadata = {
  title: "Menu | Western Food in Cyberjaya | Habebee Lounge",
  description: "Explore the menu at Habebee Lounge and discover the best Western food in Cyberjaya.",
};

export default function MenuPage() {
  return (
    <>
      <Menu />
    </>
  );
}
