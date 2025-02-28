import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const BLOG = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Reasons Why Habebee Lounge is the Best Restaurant in Cyberjaya",
      slug: "/cyberjaya-restaurant-near-me/blog/best-restaurant-habebee-lounge-cyberjaya/",
      header: "Why Habebee Lounge is the Best Restaurant in Cyberjaya",
      introduction: "Discover why Habebee Lounge stands out as the best restaurant in Cyberjaya. From a cozy ambiance to mouth-watering dishes, we provide an unforgettable dining experience. Located in a prime area, we offer top-quality food, exceptional service, and a welcoming atmosphere that makes every visit special.",
      keyPoints: [
        "Exceptional Western Cuisine",
        "Cozy and Relaxing Ambiance",
        "Prime Location Near MMU and Mutiara Ville",
        "Friendly and Professional Service",
        "Perfect for Casual and Formal Dining"
      ],
      internalLinks: [
        { text: "Want to try our amazing dishes? Check out our menu.", url: "/menu" },
        { text: "We're located near MMU and Mutiara Ville – visit us today!", url: "/cyberjaya-restaurant-near-me" }
      ],
      category: "Dining"
    },
    {
      id: 2,
      title: "The Best Western Food in Cyberjaya: A Must-Try at Habebee Lounge",
      slug: "/cyberjaya-restaurant-near-me/blog/best-western-food-cyberjaya-habebee-lounge/",
      header: "Discover the Best Western Food in Cyberjaya at Habebee Lounge",
      introduction: "If you're craving delicious Western food in Cyberjaya, look no further than Habebee Lounge. Our menu includes juicy steaks, crispy fish and chips, creamy pastas, and more. Come and experience the rich flavors that keep our customers coming back!",
      keyPoints: [
        "Premium Quality Steaks",
        "Gourmet Burgers",
        "Authentic Italian Pasta",
        "Fresh Salads",
        "Delicious Desserts"
      ],
      internalLinks: [
        { text: "Explore our full menu and find your new favorite dish.", url: "/menu" },
        { text: "Experience the best restaurant in Cyberjaya today!", url: "/cyberjaya-restaurant-near-me" }
      ],
      category: "Food"
    },
    {
      id: 3,
      title: "Why Habebee Lounge is the Perfect Cafe in Cyberjaya for Your Next Meeting",
      slug: "/cyberjaya-restaurant-near-me/blog/best-cafe-meeting-habebee-lounge-cyberjaya/",
      header: "The Ideal Meeting Spot in Cyberjaya",
      introduction: "Looking for the perfect cafe in Cyberjaya to have a meeting or casual gathering? Habebee Lounge offers a peaceful environment, free Wi-Fi, and delicious coffee. Whether it's a business meetup or a friendly hangout, our cafe is the ideal spot.",
      keyPoints: [
        "Free High-Speed Wi-Fi",
        "Quiet and Professional Atmosphere",
        "Variety of Coffee and Refreshments",
        "Comfortable Seating Arrangements",
        "Convenient Location for Professionals"
      ],
      internalLinks: [
        { text: "Planning a business meeting? See our special packages.", url: "/menu" },
        { text: "Check our opening hours before your visit.", url: "/cyberjaya-restaurant-near-me" }
      ],
      category: "Events"
    },
    {
      id: 4,
      title: "Food Near MMU Cyberjaya: Where to Eat Around Campus",
      slug: "/cyberjaya-restaurant-near-me/blog/food-near-mmu-cyberjaya/",
      header: "Best Food Options Near MMU Cyberjaya",
      introduction: "Students and faculty of MMU Cyberjaya, your search for the best food spots ends here! Habebee Lounge is just minutes away, offering tasty meals at student-friendly prices. Enjoy our diverse menu that caters to every craving!",
      keyPoints: [
        "Student-Friendly Prices",
        "Quick Service for Lunch Breaks",
        "Study-Friendly Environment",
        "Walking Distance from Campus",
        "Special Student Discounts"
      ],
      internalLinks: [
        { text: "Check out our student meal deals.", url: "/menu" },
        { text: "Find the shortest route from MMU to our location.", url: "/location" }
      ],
      category: "Food"
    },
    {
      id: 5,
      title: "Top Places to Eat Near Mutiara Ville Cyberjaya: Habebee Lounge Leads the Way",
      slug: "/cyberjaya-restaurant-near-me/blog/food-near-mutiara-ville-cyberjaya/",
      header: "Dining Options Near Mutiara Ville Residences",
      introduction: "If you're living or staying near Mutiara Ville, Cyberjaya, Habebee Lounge should be your go-to dining spot. We serve a variety of dishes, from local favorites to international delights, ensuring there's something for everyone.",
      keyPoints: [
        "Convenient Location for Residents",
        "Diverse Menu Options",
        "Late Night Dining Available",
        "Delivery Service to Mutiara Ville",
        "Family-Friendly Setting"
      ],
      internalLinks: [
        { text: "Order delivery to your Mutiara Ville apartment.", url: "/menu" },
        { text: "Join our loyalty program for regular customers.", url: "/cyberjaya-restaurant-near-me" }
      ],
      category: "Dining"
    },
    {
      id: 6,
      title: "Discover the Best Food Near Hospital Cyberjaya: Habebee Lounge",
      slug: "/cyberjaya-restaurant-near-me/blog/food-near-hospital-cyberjaya/",
      header: "Quality Dining Near Cyberjaya Hospital",
      introduction: "Visiting or working at Cyberjaya Hospital and looking for good food nearby? Habebee Lounge is just around the corner, offering a wide selection of meals to keep you energized throughout the day.",
      keyPoints: [
        "Quick and Efficient Service",
        "Healthy Menu Options",
        "Comfortable Resting Environment",
        "Take-Away Service Available",
        "Special Discounts for Healthcare Workers"
      ],
      internalLinks: [
        { text: "View our healthy menu selections.", url: "/menu" },
        { text: "Order ahead for quick pick-up near the hospital.", url: "/cyberjaya-restaurant-near-me" }
      ],
       category: "Food"
    },
    {
      id: 7,
      title: "The Best Restaurants in Cyberjaya: Habebee Lounge and More",
      slug: "/cyberjaya-restaurant-near-me/blog/best-restaurants-cyberjaya/",
      header: "Exploring Cyberjaya's Top Dining Establishments",
      introduction: "Cyberjaya has many great restaurants, but Habebee Lounge stands out for its unique menu, cozy ambiance, and top-notch service. Check out our recommendations for the best dining experiences in the area.",
      keyPoints: [
        "Signature Dishes at Habebee Lounge",
        "Competitive Pricing Compared to Other Venues",
        "Superior Dining Atmosphere",
        "Exceptional Customer Reviews",
        "Consistent Quality Standards"
      ],
      internalLinks: [
        { text: "See why customers rate us above other restaurants.", url: "/menu" },
        { text: "Try our award-winning signature dishes.", url: "/cyberjaya-restaurant-near-me" }
      ],
      category: "Dining"
    },
    {
      id: 8,
      title: "Best Shisha Lounge in Cyberjaya: Experience the Relaxing Vibes at Habebee Lounge",
      slug: "/cyberjaya-restaurant-near-me/blog/best-shisha-lounge-cyberjaya/",
      header: "Premium Shisha Experience in Cyberjaya",
      introduction: "For shisha lovers in Cyberjaya, Habebee Lounge is the ultimate destination. We offer a variety of flavors in a chill environment, perfect for unwinding with friends.",
      keyPoints: [
        "Wide Selection of Premium Flavors",
        "Expert Shisha Preparation",
        "Comfortable Outdoor Seating",
        "Perfect Evening Ambiance",
        "Special Shisha and Food Combos"
      ],
      internalLinks: [
        { text: "Explore our shisha menu and flavor options.", url: "/menu" },
        { text: "Reserve a premium shisha spot for your group.", url: "/cyberjaya-restaurant-near-me" }
      ],
      category: "Lounge"
    },
    {
      id: 9,
      title: "Romantic Restaurants in Cyberjaya: Why Habebee Lounge is the Perfect Date Spot",
      slug: "/cyberjaya-restaurant-near-me/blog/romantic-restaurant-cyberjaya/",
      header: "Creating Memorable Date Nights in Cyberjaya",
      introduction: "Planning a romantic date in Cyberjaya? Habebee Lounge provides a cozy setting, delicious food, and a warm atmosphere, making it the ideal spot for couples.",
      keyPoints: [
        "Intimate Seating Arrangements",
        "Ambient Lighting and Music",
        "Special Couple Menus",
        "Dessert Specialties for Two",
        "Attentive Yet Discreet Service"
      ],
      internalLinks: [
        { text: "Book our special romantic corner table.", url: "/menu" },
        { text: "View our couple's dinner packages.", url: "/cyberjaya-restaurant-near-me" }
      ],
      category: "Dining"
    },
    {
      id: 10,
      title: "Cyberjaya's Best Late-Night Restaurant: Why Habebee Lounge is the Ultimate Spot for Night Owls",
      slug: "/cyberjaya-restaurant-near-me/blog/late-night-food-cyberjaya/",
      header: "Satisfying Late-Night Cravings in Cyberjaya",
      introduction: "Looking for a great place to eat late at night in Cyberjaya? Habebee Lounge stays open late, serving delicious food and drinks for those midnight cravings.",
      keyPoints: [
        "Extended Operating Hours",
        "Full Menu Available All Night",
        "Safe and Comfortable Environment",
        "Perfect for After-Work Gatherings",
        "Late Night Special Offers"
      ],
      internalLinks: [
        { text: "Check our late night operating hours.", url: "/menu" },
        { text: "View our late night special menu.", url: "/cyberjaya-restaurant-near-me" }
      ],
      category: "Food"
    }
  ];

  return (
    <main className="bg-gradient-to-b from-[#0A0A0A] to-[#121212] min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 relative">
          <div className="absolute w-32 h-32 bg-green-500/20 rounded-full blur-3xl -top-12 left-1/2 -translate-x-1/2 z-0"></div>
         <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-[#18C67E] mb-4 relative z-10 leading-tight">
  Our Blog
</h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Discover the latest insights, tips, and stories about Habebee Lounge and the culinary scene in Cyberjaya</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-[#18C67E] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className="bg-[#1A1A1A] border border-[#2A2A2A] text-white shadow-xl rounded-2xl hover:shadow-2xl hover:shadow-green-900/10 hover:border-green-800/30 transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute w-full h-1 bg-gradient-to-r from-green-500 to-[#18C67E] top-0 left-0 rounded-t-2xl"></div>
              <CardHeader className="p-6 relative">
                <div className="inline-block px-3 py-1 bg-green-900/30 text-green-400 text-xs font-medium rounded-full mb-3 border border-green-800/30">
                  {post.category}
                </div>
                <CardTitle className="text-2xl font-bold group">
                  <div className="text-white hover:text-[#18C67E] transition-all duration-200">
                    {post.title}
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-6 space-y-6 pt-0">
                <p className="text-gray-400 leading-relaxed">{post.introduction}</p>
                
                <div className="bg-[#232323] rounded-xl p-5 border border-[#2A2A2A]">
                  <h3 className="font-semibold text-xl text-[#18C67E] mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 12 2 2 4-4"/>
                      <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9z"/>
                    </svg>
                    Key Points:
                  </h3>
                  <ul className="list-none space-y-2 text-gray-300">
                    {post.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#18C67E] flex-shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-xl text-[#18C67E] mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                    </svg>
                    Quick Links:
                  </h3>
                  <div className="space-y-1">
                    {post.internalLinks.map((link, index) => (
                      <Link 
                        key={index} 
                        href={link.url} 
                        className="text-[#18C67E] hover:text-white flex items-center group p-2 hover:bg-[#232323] rounded-lg transition-all"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 transform transition-transform group-hover:translate-x-1">
                          <path d="m9 18 6-6-6-6"/>
                        </svg>
                        {link.text}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 mt-2 border-t border-[#2A2A2A]">
                  <div>
                    <h3 className="font-semibold text-xl text-[#18C67E] mb-1 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
                      </svg>
                      Category:
                    </h3>
                    <p className="text-gray-400">{post.category}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <button className="px-6 py-3 bg-[#232323] text-[#18C67E] font-medium rounded-lg border border-[#2A2A2A] hover:bg-[#2A2A2A] transition-all inline-flex items-center gap-2">
            Load More Articles
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"/>
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
};

export default BLOG;
