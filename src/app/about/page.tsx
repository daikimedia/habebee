import Link from "next/link";
import About1 from "@/components/about/about1";
import About2 from "@/components/about/about2";
import Owner from "@/components/about/owner";
import Video from "@/components/about/video";
import Social from "@/components/social";
import BreadcrumbSchema from "@/components/breadcrumbs/bread";

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
];

export default function AboutPage() {
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

      {/* About Page Sections */}
      <About1 />
      <About2 />
      <Owner />
      <Video />
      <Social />
    </>
  );
}
