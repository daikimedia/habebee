import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const BLOG = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Reasons Why Habebee Lounge is the Best Restaurant in Cyberjaya",
      slug: "/cyberjaya-restaurant/blog/top-5-reasons-best-restaurant-cyberjaya/",
      header: "Why Habebee Lounge is the Best Restaurant in Cyberjaya",
      introduction: "Looking for the best place to eat in Cyberjaya? Here are five reasons why Habebee Lounge should be your go-to restaurant in the area.",
      keyPoints: [
        "Exceptional Western Cuisine",
        "Cozy and Relaxing Ambiance", 
        "Prime Location Near MMU and Mutiara Ville",
        "Friendly and Professional Service",
        "Perfect for Casual and Formal Dining"
      ],
      internalLinks: [
        { text: "Want to try our amazing dishes? Check out our menu.", url: "/menu" },
        { text: "We're located near MMU and Mutiara Ville – visit us today!", url: "/location" }
      ]
    },
    {
      id: 2,
      title: "The Best Western Food in Cyberjaya: A Must-Try at Habebee Lounge",
      slug: "/cyberjaya-restaurant/blog/best-western-food-cyberjaya-habebee-lounge/",
      header: "Discover the Best Western Food in Cyberjaya at Habebee Lounge",
      introduction: "If you're craving Western cuisine in Cyberjaya, look no further than Habebee Lounge. Our menu is packed with delicious options made from the freshest ingredients.",
      keyPoints: [
        "Premium Quality Steaks",
        "Gourmet Burgers",
        "Authentic Italian Pasta",
        "Fresh Salads",
        "Delicious Desserts"
      ],
      internalLinks: [
        { text: "Explore our full menu and find your new favorite dish.", url: "/menu" },
        { text: "Experience the best restaurant in Cyberjaya today!", url: "/" }
      ]
    }
  ];

  return (
    <main className="bg-[#0F0F0F] min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center text-green-500 mb-12">Our Blog</h1>

        <div className="grid gap-10 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Card key={post.id} className="bg-[#1A1A1A] border border-[#2A2A2A] text-white shadow-lg rounded-2xl hover:shadow-xl transition-all">
              <CardHeader className="p-6">
                <CardTitle className="text-2xl font-semibold hover:text-[#18C67E] transition-all">
                  <Link href={post.slug}>{post.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <p className="text-gray-400">{post.introduction}</p>
                <div>
                  <h3 className="font-semibold text-xl text-[#18C67E] mb-2">Key Points:</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-300">
                    {post.keyPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-xl text-[#18C67E] mb-2">Quick Links:</h3>
                  <div className="space-y-2">
                    {post.internalLinks.map((link, index) => (
                      <Link key={index} href={link.url} className="text-[#18C67E] hover:underline block">
                        {link.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BLOG;
