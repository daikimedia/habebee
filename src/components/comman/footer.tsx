import { Instagram } from "lucide-react";
import Link from "next/link";
import { FaPhone, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="text-white py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Link href="/" className="flex items-center gap-2 mb-6 md:mb-0">
            <img
              src="/img/logo.svg"
              alt="IrishCafe Logo"
              className="h-14 w-auto ml-4 sm:ml-8 lg:ml-32"
            />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <a
                  href=""
                  className="hover:text-emerald-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors">
                  Drinks
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Food
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Store
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-6">
            <a
              href="https://api.whatsapp.com/send?phone=60126239047&text=Reservation%20please%20%5B%20Source%20%3A%20Web%20%5D"
              className="hover:text-emerald-400 flex items-center gap-2"
            >
              <FaPhone className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
              <span>Whatsapp</span>
            </a>
            <a
              href="https://www.instagram.com/habebeelounge/"
              className="hover:text-emerald-400 flex items-center gap-2"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.tiktok.com/@habebeelounge/"
              className="hover:text-emerald-400 flex items-center gap-2"
            >
              <FaTiktok className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>TikTok</span>
            </a>
          </div>
        </div>
        <div className="text-center mt-6 md:mt-24 text-gray-400 text-sm">
          <div className="">
            Copyright © 2025 Pub and Bar | Developed by{" "}
            <a target="_blank" href="https://daikimedia.com">
              Daiki Media
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
