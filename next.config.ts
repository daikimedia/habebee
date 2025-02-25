/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/cyberjaya-restaurant",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/cyberjaya-restaurant/about-us",
        permanent: true,
      },
      {
        source: "/menu",
        destination: "/cyberjaya-restaurant/menu",
        permanent: true,
      },
      {
        source: "/location",
        destination: "/cyberjaya-restaurant/location",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/cyberjaya-restaurant/blog",
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/cyberjaya-restaurant",
        destination: "/",
      },
      {
        source: "/cyberjaya-restaurant/about-us",
        destination: "/about",
      },
      {
        source: "/cyberjaya-restaurant/menu",
        destination: "/menu",
      },
      {
        source: "/cyberjaya-restaurant/location",
        destination: "/location",
      },
      {
        source: "/cyberjaya-restaurant/blog",
        destination: "/blog",
      },
      {
        source: "/cyberjaya-restaurant/blog/top-5-reasons-best-restaurant-cyberjaya",
        destination: "/blog/top-5-reasons-best-restaurant-cyberjaya",
      },
    ];
  },
};

export default nextConfig;
