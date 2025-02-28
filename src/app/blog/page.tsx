import Link from "next/link";
import { BLOG } from "@/components/blog/blog";
import BreadcrumbSchema from "@/components/breadcrumbs/bread";

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
];

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <div className="bg-zinc-900 text-white py-3 px-6 shadow-md mt-[60px]">
        <nav aria-label="breadcrumb" className="max-w-7xl mx-auto">
          <div className="ml-6"> 
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

      <BLOG />
    </>
  );
}
