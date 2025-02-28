import type { Metadata } from "next";
import Link from "next/link";
import Menu from "@/components/menu/menu";
import BreadcrumbSchema from "@/components/breadcrumbs/bread";

export const metadata: Metadata = {
  title: "Menu | Western Food in Cyberjaya | Habebee Lounge",
  description: "Explore the menu at Habebee Lounge and discover the best Western food in Cyberjaya.",
};

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Menu", url: "/menu" },
];

export default function MenuPage() {
  return (
    <>
      {/* Breadcrumb Schema for SEO */}
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      {/* Breadcrumbs Section */}
      <div className="bg-zinc-900 text-white py-3 px-6 shadow-md mt-[60px]">
        <nav aria-label="breadcrumb" className="max-w-7xl mx-auto">
          <div className="ml-6"> {/* Ye sirf breadcrumbs ko move karega */}
            <ol className="flex items-center space-x-2 text-lg">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center">
                  {index !== breadcrumbs.length - 1 ? (
                    <Link href={crumb.url} className="hover:underline text-blue-400">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span className="font-semibold">{crumb.name}</span>
                  )}
                  {index !== breadcrumbs.length - 1 && <span className="mx-2 text-gray-400">/</span>}
                </li>
              ))}
            </ol>
          </div>
        </nav>
      </div>

      {/* Menu Section */}
      <div>
        <Menu />
      </div>
    </>
  );
}
