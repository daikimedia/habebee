'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full bg-zinc-900 absolute top-0 left-0 z-50">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/cyberjaya-restaurant" className="flex items-center gap-2">
          <img
            src="/img/logobg.png"
            alt="IrishCafe Logo"
            className="h-32 w-auto border-black ml-4 sm:ml-8 lg:ml-32"
          />
        </Link>
        <nav className="hidden md:flex w-full justify-center">
          <ul className="flex space-x-2">
            {[
              { name: 'Home', path: '/cyberjaya-restaurant' },
              { name: 'About', path: '/cyberjaya-restaurant/about-us' },
              { name: 'Menu', path: '/cyberjaya-restaurant/menu' },
              { name: 'Location', path: '/cyberjaya-restaurant/location' },
              { name: 'Blog', path: '/cyberjaya-restaurant/blog' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="text-lg inline-flex h-10 items-center justify-center rounded-md px-4 py-2 font-medium text-white transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto mr-4 sm:mr-8 lg:mr-32 hidden md:block">
          <Link
            href="https://api.whatsapp.com/send?phone=60126239047&text=Reservation%20please%20%5B%20Source%20%3A%20Web%20%5D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full sm:w-auto bg-[#18C67E] hover:bg-emerald-600 text-white font-semibold px-6 py-2 text-sm rounded-md transition-colors duration-200 uppercase tracking-wide">
              Order
            </button>
          </Link>
        </div>
        <div className="ml-auto md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-black/80 backdrop-blur-md md:hidden">
          <ul className="flex flex-col space-y-2 px-4 py-4">
            {[
              { name: 'Home', path: '/cyberjaya-restaurant' },
              { name: 'About', path: '/cyberjaya-restaurant/about-us' },
              { name: 'Menu', path: '/cyberjaya-restaurant/menu' },
              { name: 'Location', path: '/cyberjaya-restaurant/location' },
              { name: 'Blog', path: '/cyberjaya-restaurant/blog' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="block rounded-md px-4 py-2 text-sm font-medium text-white transition"
                  onClick={() => setIsMenuOpen(false)} 
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="https://api.whatsapp.com/send?phone=60126239047&text=Reservation%20please%20%5B%20Source%20%3A%20Web%20%5D"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition"
                onClick={() => setIsMenuOpen(false)} 
              >
                ORDER
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
