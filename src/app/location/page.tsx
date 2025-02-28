import Link from "next/link";
import Head from "next/head";
import Location from "@/components/location/location";
import BreadcrumbSchema from "@/components/breadcrumbs/bread";

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Location", url: "/location" },
];

const LocationPage = () => {
  return (
    <>
      <Head>
        <title>Find Us | Best Restaurant Near MMU & Mutiara Ville Cyberjaya</title>
        <meta 
          name="description" 
          content="Visit Habebee Lounge in Cyberjaya, conveniently located near MMU, Mutiara Ville, and the hospital. Enjoy the best food in the area today!" 
        />
      </Head>

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

      {/* Location Content */}
      <Location />
    </>
  );
};

export default LocationPage;
