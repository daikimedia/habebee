'use client'
import { useState } from 'react'
import { Bebas_Neue } from 'next/font/google'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
})

type MenuItem = {
  id: string
  name: string
  description: string | null
  price?: number 
  options?: { [key: string]: number | null } 
}

type MenuSection = {
  title: string
  category: 'food' | 'drinks'
  items: MenuItem[]
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<'food' | 'drinks'>('food')

  const foodMenu: MenuSection[] = [
    {
      title: 'HABEBEE SIGNATURE',
      category: 'food',
      items: [
        {
          id: 'HS1',
          name: 'PARATHA BURGER',
          price: 35.9,
          description: 'Featuring a crispy cheese patty and generous drizzle of cheese sauce',
        },
        {
          id: 'HS2',
          name: 'LAMB POTTALAM',
          price: 36.9,
          description: 'Perfectly wrapped in a fragrant banana leaf',
        },
        {
          id: 'HS3',
          name: 'TOMYAM PASTA',
          price: 32.9,
          description: null,
        },
        {
          id: 'HS4',
          name: 'TERIYAKI CHICKEN CHOP WITH BUTTER RICE',
          price: 29.9,
          description: null,
        },
        {
          id: 'HS5',
          name: 'PREMIUM FRIED RICE (2-3 PAX)',
          price: 62.9,
          description: null,
        },
      ],
    },
    {
      title: 'MAIN',
      category: 'food',
      items: [
        { id: 'M1', name: 'GRILLED CHICKEN CHOP', price: 24.9, description: null },
        { id: 'M2', name: 'GRILLED LAMB CHOP', price: 32.9, description: null },
        { id: 'M3', name: 'GRILLED SALMON STEAK', price: 32.9, description: null },
        { id: 'M4', name: 'FISH & CHIPS', price: 19.9, description: null },
        { id: 'M5', name: 'HABEBEE CHICKEN CHOP', price: 25.9, description: null },
      ],
    },
    {
      title: 'RICE DISHES',
      category: 'food',
      items: [
        { id: 'RD1', name: 'KONG POW CHICKEN', price: 16.9, description: null },
        { id: 'RD2', name: 'VARUVAL CHICKEN', price: 16.9, description: null },
        { id: 'RD3', name: 'SWEET & SOUR CHICKEN', price: 16.9, description: null },
        { id: 'RD4', name: 'LEMON CHICKEN', price: 16.9, description: null },
        { id: 'RD5', name: 'BLACK PEPPER CHICKEN', price: 16.9, description: null },
        { id: 'RD6', name: 'KAM HEONG CHICKEN', price: 16.9, description: null },
        { id: 'RD7', name: 'CREAMY GARLIC CHICKEN', price: 16.9, description: null },
        { id: 'RD8', name: 'MONGOLIAN CHICKEN', price: 16.9, description: null },
        { id: 'RD9', name: 'BUTTERMILK CHICKEN', price: 16.9, description: null },
        { id: 'RD10', name: 'SALTED EGG CHICKEN', price: 24.9, description: null },
        { id: 'RD11', name: 'KONG POW FISH', price: 16.9, description: null },
        { id: 'RD12', name: 'VARUVAL FISH', price: 16.9, description: null },
        { id: 'RD13', name: 'SWEET AND SOUR FISH', price: 16.9, description: null },
        { id: 'RD14', name: 'LEMON FISH', price: 16.9, description: null },
        { id: 'RD15', name: 'KAM HEONG FISH', price: 16.9, description: null },
        { id: 'RD16', name: 'CREAMY GARLIC FISH', price: 16.9, description: null },
        { id: 'RD17', name: 'MONGOLIAN FISH', price: 16.9, description: null },
        { id: 'RD18', name: 'SALSTED EGG FISH', price: 24.9, description: null },
      ],
    },
    {
      title: 'SNACKS',
      category: 'food',
      items: [
        { id: 'SK1', name: 'FRENCH FRIES', price: 10.9, description: null },
        { id: 'SK2', name: 'WEDGES', price: 11.9, description: null },
        { id: 'SK3', name: 'FRIED CHICKEN WINGS', price: 15.9, description: null },
        { id: 'SK4', name: 'KOREAN CHICKEN WINGS', price: 19.9, description: null },
        { id: 'SK5', name: 'CHEESE NUGGETS', price: 12.9, description: null },
        { id: 'SK6', name: 'FRIED OYSTER MUSHROOM', price: 12.9, description: null },
        { id: 'SK7', name: 'KEROPOK KEPING', price: 7.9, description: null },
        { id: 'SK8', name: 'CHEEZY NACHOS', price: 35.9, description: null },
        { id: 'SK9', name: 'FRIED ANCHOVIES WITH SAUSAGE', price: 16.9, description: null },
        { id: 'SK10', name: 'FRIED ANCHOVIES', price: 14.9, description: null },
        { id: 'SK11', name: 'CHICKEN MEATBALL', price: 12.9, description: null },
        { id: 'SK12', name: 'FRIED EGG CHILLI ONION', price: 12.9, description: null },
        { id: 'SK13', name: 'POPCORN CHICKEN', price: 15.9, description: null },
        { id: 'SK14', name: 'CHEESE SEAFOOD TOFU', price: 12.9, description: null },
        { id: 'SK15', name: 'CHICKEN PLATTER', price: 29.9, description: null },
        { id: 'SK16', name: 'COCKTAIL SAUSAGE', price: 12.9, description: null },
      ],
    },
    {
      title: 'LITE & SALADS',
      category: 'food',
      items: [
        { id: 'LS1', name: 'CLUB SANDWICH', price: 14.9, description: null },
        { id: 'LS2', name: 'MUSHROOM SOUP WITH GARLIC BREAD', price: 11.9, description: null },
        { id: 'LS3', name: 'GRILLED CHICKEN SALAD', price: 16.9, description: null },
        { id: 'LS4', name: 'CAESAR SALAD', price: 13.9, description: null },
      ],
    },
    {
      title: 'WAFFELS',
      category: 'food',
      items: [
        { id: 'LS10', name: 'ORIGINAL WAFFEL', price: 14.9, description: null },
        { id: 'LS11', name: 'STRAWBERRY WAFFEL', price: 19.9, description: null },
        { id: 'LS12', name: 'STRAWBERRY NUTELLA WAFFEL', price: 21.9, description: null },
        { id: 'LS13', name: 'BANANA CHOCOLATE WAFFEL', price: 17.9, description: null },
      ],
    },

    {
      title: 'PASTA',
      category: 'food',
      items: [
        { id: 'P1', name: 'CHICKEN AGLIO OLIO', price: 15.9, description: null },
        { id: 'P2', name: 'SEAFOOD AGLIO OLIO', price: 23.9, description: null },
        { id: 'P3', name: 'VEGETARIAN AGLIO OLIO', price: 12.9, description: null },
        { id: 'P4', name: 'CARBONARA CHICKEN', price: 17.9, description: null },
        { id: 'P5', name: 'BOLOGNESE CHICKEN', price: 17.9, description: null },
      ],
    },
    {
      title: 'FROM THE WOK',
      category: 'food',
      items: [
        { id: 'FW1', name: 'CHICKEN FRIED RICE', price: 13.9, description: null },
        { id: 'FW2', name: 'KAMPUNG FRIED RICE', price: 14.9, description: null },
        { id: 'FW3', name: 'SEAFOOD FRIED RICE', price: 21.9, description: null },
        { id: 'FW4', name: 'TOMYAM FRIED RICE', price: 16.9, description: null },
        { id: 'FW5', name: 'KAM HEONG FRIED RICE', price: 19.9, description: null },
        { id: 'FW6', name: 'VARUVAL FRIED RICE', price: 18.9, description: null },
        { id: 'FW7', name: 'VEGETARIAN FRIED RICE', price: 12.9, description: null },
      ],
    },
  ]
  const drinksMenu: MenuSection[] = [
    {
      title: 'HABEBEE LIQUID',
      category: 'drinks',
      items: [
        { id: 'HL1', name: 'SPARKLING REBINA LYCHEE', price: 13.9, description: null },
        { id: 'HL2', name: 'SPARKLING REBINA LEMON', price: 13.9, description: null },
        { id: 'HL3', name: 'SPARKLING ROSE SYRUP', price: 13.9, description: null },
        { id: 'HL4', name: 'MOJITO', price: 13.9, description: null },
        { id: 'HL5', name: 'EARL GREY ROSE TEA', price: 13.9, description: null },
        { id: 'HL6', name: 'BERRY SODA', price: 13.9, description: null },
        { id: 'HL7', name: 'PASSION SODA', price: 13.9, description: null },
        { id: 'HL8', name: 'LIME SOUR PLUM SODA', price: 15.9, description: null },
      ],
    },
    {
      title: 'TEA POT',
      category: 'drinks',
      items: [
        { id: 'TP1', name: 'ENGLISH BREAKFAST TEA', price: 12.9, description: null },
        { id: 'TP2', name: 'EARL GREY TEA', price: 12.9, description: null },
        { id: 'TP3', name: 'JASMINE GREEN TEA', price: 12.9, description: null },
        { id: 'TP4', name: 'PURE CHAMOMILE TEA', price: 12.9, description: null },
        { id: 'TP5', name: 'LYCHEE TEA', price: 12.9, description: null },
        { id: 'TP6', name: 'STRAWBERRY TEA', price: 12.9, description: null },
        { id: 'TP7', name: 'BLACKCURRANT TEA', price: 12.9, description: null },
      ],
    },
    {
      title: 'FRESH JUICE',
      category: 'drinks',
      items: [
        { id: 'FJ1', name: 'ORANGE', price: 11.9, description: null },
        { id: 'FJ2', name: 'APPLE', price: 11.9, description: null },
        { id: 'FJ3', name: 'WATERMELON', price: 11.9, description: null },
        { id: 'FJ4', name: 'CARROT MILK', price: 11.9, description: null },
        { id: 'FJ5', name: 'MIXED FRUIT', price: 15.9, description: null },
        { id: 'FJ6', name: 'ICED LEMON', price: 11.9, description: null },
        { id: 'FJ7', name: 'LIME JUICE', price: 11.9, description: null },
        { id: 'FJ8', name: 'HOT HONEY LEMON', price: 10.9, description: null },
        { id: 'FJ9', name: 'ICED HONEY LEMON', price: 11.9, description: null },
        { id: 'FJ10', name: 'WATERMELON FROSTY', price: 15.9, description: null },
      ],
    },
    {
      title: 'TEA',
      category: 'drinks',
      items: [
        { id: 'T1', name: 'THAI MILK TEA', price: 10.9, description: null },
        { id: 'T2', name: 'THAI MILK GREEN TEA', price: 10.9, description: null },
        { id: 'T3', name: 'JAPANESE MACHA', price: 10.9, description: null },
        { id: 'T4', name: 'ICED PEACH TEA', price: 10.9, description: null },
        { id: 'T5', name: 'ICED PASSION FRUIT TEA', price: 10.9, description: null },
        { id: 'T6', name: 'HOT CHOCOLATE', price: 12.9, description: null },
        { id: 'T7', name: 'ICED CHOCOLATE', price: 13.9, description: null },
        { id: 'T8', name: 'HOT LEMON TEA', price: 10.9, description: null },
        { id: 'T9', name: 'ICED LEMON TEA', price: 11.9, description: null },
      ],
    },
    {
      title: 'COFFEE',
      category: 'drinks',
      items: [
        { id: 'C1', name: 'HOT WHITE COFFEE', price: 9.9, description: null },
        { id: 'C2', name: 'ICED WHITE COFFEE', price: 10.9, description: null },
        { id: 'C3', name: 'AMERICANO', price: 10.9, description: null },
        { id: 'C4', name: 'HOT CAPPUCCINO', price: 12.9, description: null },
        { id: 'C5', name: 'ICED CAPPUCCINO', price: 13.9, description: null },
        { id: 'C6', name: 'HOT LATTE', price: 12.9, description: null },
        { id: 'C7', name: 'ICED LATTE', price: 13.9, description: null },
        { id: 'C8', name: 'HOT MOCHA', price: 12.9, description: null },
        { id: 'C9', name: 'ICED MOCHA', price: 13.9, description: null },
      ],
    },
    {
      title: 'BLENDED',
      category: 'drinks',
      items: [
        { id: 'B1', name: 'CHOCOLATE FRAPPE', price: 13.9, description: null },
        { id: 'B2', name: 'BANANA FRAPPE', price: 13.9, description: null },
        { id: 'B3', name: 'VANILLA FRAPPE', price: 13.9, description: null },
        { id: 'B4', name: 'OREO FRAPPE', price: 13.9, description: null },
        { id: 'B5', name: 'STRAWBERRY FRAPPE', price: 13.9, description: null },
      ],
    },
    {
      title: 'SOJU',
      category: 'drinks',
      items: [
        { id: 'S1', name: 'LYCHEE', options: { '1-BTL': 27, '5-BTLS': 125 }, description: null },
        { id: 'S2', name: 'PEACH', options: { '1-BTL': 27, '5-BTLS': 125 }, description: null },
        {
          id: 'S3',
          name: 'STRAWBERRY',
          options: { '1-BTL': 27, '5-BTLS': 125 },
          description: null,
        },
        { id: 'S4', name: 'PINEAPPLE', options: { '1-BTL': 27, '5-BTLS': 125 }, description: null },
        {
          id: 'S5',
          name: 'GREEN GRAPE',
          options: { '1-BTL': 27, '5-BTLS': 125 },
          description: null,
        },
        { id: 'S6', name: 'CITRON', options: { '1-BTL': 27, '5-BTLS': 125 }, description: null },
        {
          id: 'S7',
          name: 'POMEGRANATE',
          options: { '1-BTL': 27, '5-BTLS': 125 },
          description: null,
        },
        { id: 'S8', name: 'MANGO', options: { '1-BTL': 27, '5-BTLS': 125 }, description: null },
      ],
    },
    {
      title: 'SHOTS',
      category: 'drinks',
      items: [
        { id: 'ST1', name: 'BACARDI CARTA BLANCA', price: 18, description: null },
        { id: 'ST2', name: 'ABSOLUT VODKA', price: 18, description: null },
        { id: 'ST3', name: 'AUCHENTOSHAN SINGLE MALT', price: 27, description: null },
        { id: 'ST4', name: 'GLENLIVET 12Y', price: 27, description: null },
        { id: 'ST5', name: 'SINGLETON 12Y', price: 27, description: null },
        { id: 'ST6', name: "JACK DANIEL'S", price: 20, description: null },
        { id: 'ST7', name: 'BULLDOG GIN', price: 23, description: null },
        { id: 'ST8', name: 'SUNTORY ROKU GIN', price: 22, description: null },
        { id: 'ST9', name: 'JAMESON IRISH WHISKY', price: 21, description: null },
        { id: 'ST10', name: 'TEQUILA', price: 15, description: null },
        { id: 'ST11', name: 'TEQUILA & SHOTS', price: 50, description: null },
      ],
    },
    {
      title: 'COCKTAIL',
      category: 'drinks',
      items: [
        { id: 'CT1', name: 'LONG ISLAND', price: 26.9, description: null },
        { id: 'CT2', name: 'MARGARITA', price: 22.9, description: null },
        { id: 'CT3', name: 'BLUE CURACAO MOJITO', price: 24.9, description: null },
        { id: 'CT4', name: 'COSMOPOLITAN', price: 22.9, description: null },
        { id: 'CT5', name: 'JAGERBOMB', price: 19.9, description: null },
        { id: 'CT6', name: 'SEX ON THE BEACH', price: 25.9, description: null },
        { id: 'CT7', name: 'GIMLET', price: 26.9, description: null },
        { id: 'CT8', name: "BEE'S KNEES", price: 24.9, description: null },
        { id: 'CT9', name: 'LEMON DROP', price: 23.9, description: null },
        { id: 'CT10', name: 'VODKA TONIC', price: 24.9, description: null },
      ],
    },
    {
      title: 'BOTTLE BEER',
      category: 'drinks',
      items: [
        { id: 'BB1', name: 'ANCHOR', options: { '1-BTL': 15.9, '5-BTL': 75.2 }, description: null },
        { id: 'BB2', name: 'TIGER', options: { '1-BTL': 17.2, '5-BTL': 81.2 }, description: null },
        {
          id: 'BB3',
          name: 'HEINEKEN',
          options: { '1-BTL': 20.9, '5-BTL': 98.2 },
          description: null,
        },
        {
          id: 'BB4',
          name: 'GUINNESS STOUT',
          options: { '1-BTL': 18.9, '5-BTL': 87.6 },
          description: null,
        },
        {
          id: 'BB5',
          name: 'EDELWEISS',
          options: { '1-BTL': 20.9, '5-BTL': 98.6 },
          description: null,
        },
        {
          id: 'BB6',
          name: 'APPLE FOX',
          options: { '1-BTL': 16.9, '5-BTL': 79.5 },
          description: null,
        },
      ],
    },
    {
      title: 'DRAUGHT BEER',
      category: 'drinks',
      items: [
        {
          id: 'DB1',
          name: 'TIGER',
          options: { '1-MUG': 14.9, '10-MUG': 138.9 },
          description: null,
        },
        {
          id: 'DB2',
          name: 'HEINEKEN',
          options: { '1-GLASS': 17.9, '2-GLASS': 34.3, '3-GLASS': null },
          description: null,
        },
        {
          id: 'DB3',
          name: 'GUINNESS STOUT',
          options: { '1-GLASS': 17.7, '2-GLASS': null, '3-GLASS': 50.8 },
          description: null,
        },
        {
          id: 'DB4',
          name: 'EDELWEISS',
          options: { '1-GLASS': 18.5, '2-GLASS': 35.4, '3-GLASS': 53.2 },
          description: null,
        },
      ],
    },
    {
      title: 'H2O',
      category: 'drinks',
      items: [
        { id: 'H1', name: 'WATER (HOT) COWAY', price: 1, description: null },
        { id: 'H2', name: 'WATER (WARM) COWAY', price: 1, description: null },
        { id: 'H3', name: 'WATER (ICED) COWAY', price: 1.5, description: null },
        { id: 'H4', name: 'MINERAL WATER (500ML)', price: 3, description: null },
        { id: 'H5', name: 'MINERAL WATER (1.5L)', price: 6, description: null },
        { id: 'H6', name: 'COKE', price: 7.9, description: null },
        { id: 'H7', name: 'SPRITE', price: 7.9, description: null },
        { id: 'H8', name: 'A&W ROOT BEER', price: 7.9, description: null },
        { id: 'H9', name: 'GINGER ALE', price: 7.9, description: null },
        { id: 'H10', name: 'SODA', price: 7.9, description: null },
        { id: 'H11', name: 'TONIC', price: 7.9, description: null },
        { id: 'H12', name: 'BITTER LEMON', price: 7.9, description: null },
        { id: 'H13', name: 'RED BULL', price: 10.9, description: null },
      ],
    },
    {
      title: 'DESSERT',
      category: 'drinks',
      items: [
        { id: 'D1', name: 'AFFOGATO', price: 13.9, description: null },
        { id: 'D2', name: 'ICE CREAM (3 SCOOPS)', price: 10.9, description: null },
      ],
    },
  ]

  return (
    <div
      className={`${bebasNeue.variable} font-sans min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 text-white`}
    >
      <div className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-[#18C67E] text-6xl sm:text-7xl lg:text-8xl font-bold drop-shadow-lg font-bebas-neue tracking-wide">
              Menu
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl mt-4 max-w-2xl mx-auto leading-relaxed">
              Taste the Best Western Food in Cyberjaya At Habebee Lounge, we specialize in Western
              cuisine, offering a wide range of delicious dishes. Whether you&apos;re in the mood for a
              hearty meal or a light snack, our menu has something for every palate.
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            {['food', 'drinks'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category as 'food' | 'drinks')}
                className={`px-10 py-3 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-110 shadow-md ${
                  activeCategory === category
                    ? 'bg-[#18C67E] text-black shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {category === 'food' ? 'Food Menu' : 'Drinks Menu'}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {(activeCategory === 'food' ? foodMenu : drinksMenu).map((section) => (
              <div
                key={section.title}
                className="bg-white/10 rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                <h2 className="text-[#18C67E] text-4xl font-bold mb-6 border-b-2 border-[#18C67E]/30 pb-3">
                  {section.title}
                </h2>

                <div className="space-y-6">
                  {section.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center border-b border-white/10 pb-2 last:border-none"
                    >
                      <div>
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        {item.description && <p className="text-gray-300">{item.description}</p>}
                        {item.options && (
                          <div className="flex gap-4 mt-2">
                            {Object.entries(item.options).map(([option, value]) => (
                              <span
                                key={option}
                                className="bg-zinc-700/50 rounded-full px-3 py-1 text-sm"
                              >
                                {option}: {value}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <span className="text-lg font-bold">
                        RM {item.price ? item.price.toFixed(2) : 'N/A'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
