"use client";

import { Bebas_Neue } from "next/font/google";
import { Instagram } from "lucide-react";
import { FaPhone, FaTiktok } from "react-icons/fa6";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Form() {
  return (
    <div className="relative min-h-screen w-full bg-zinc-900 text-white flex items-center justify-center py-20">
      <div className="container mx-auto max-w-5xl px-6">
        <h1
          className={`${bebasNeue.className} text-5xl text-center sm:text-7xl font-bold mb-12`}
        >
          CONTACT
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-12">
            <p className="text-lg text-center lg:text-left leading-relaxed">
              Sagittis, faucibus nibh sed rhoncus lacus, amet, quis eget tristique
              purus faucibus orci commodo fames aliquet venenatis sed aliquet
              purus felis congue vulputate.
            </p>

            <div>
              <h2 className={`${bebasNeue.className} text-3xl font-bold mb-4`}>
                SPEAK TO US
              </h2>
              <div className="space-y-3 text-lg font-medium">
                <p>📞 Call: +1 123 456 7890</p>
                <p>📧 Event Enquiry: laura@example.com</p>
                <p>📰 Press Enquiry: mark@example.com</p>
                <p>📩 Other Enquiry: mail@example.com</p>
              </div>
            </div>

            <div>
              <h2 className={`${bebasNeue.className} text-3xl font-bold mb-4`}>
                FOLLOW US
              </h2>
              <div className="flex justify-center lg:justify-start gap-6">
                <a href="#" className="hover:text-emerald-400 flex items-center gap-2">
                  <Instagram className="w-6 h-6 text-pink-500" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=60126239047&text=Reservation%20please%20%5B%20Source%20%3A%20Web%20%5D"
                  className="hover:text-emerald-400 flex items-center gap-2"
                >
                  <FaPhone className="w-6 h-6 text-green-400" />
                  <span>WhatsApp</span>
                </a>
                <a href="https://www.tiktok.com/notfound" className="hover:text-emerald-400 flex items-center gap-2">
                  <FaTiktok className="w-6 h-6" />
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </div>

          <form className="space-y-6 w-full">
            <div className="space-y-4">
              <div>
                <label className="block text-lg font-medium mb-1">Name <span className="text-red-500">*</span></label>
                <input type="text" required className="w-full h-12 px-4 bg-white text-black rounded-md" />
              </div>

              <div>
                <label className="block text-lg font-medium mb-1">Email <span className="text-red-500">*</span></label>
                <input type="email" required className="w-full h-12 px-4 bg-white text-black rounded-md" />
              </div>

              <div>
                <label className="block text-lg font-medium mb-1">Subject <span className="text-red-500">*</span></label>
                <input type="text" required className="w-full h-12 px-4 bg-white text-black rounded-md" />
              </div>

              <div>
                <label className="block text-lg font-medium mb-1">Comment or Message <span className="text-red-500">*</span></label>
                <textarea required className="w-full h-32 p-4 bg-white text-black rounded-md resize-none" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-400 hover:bg-emerald-500 text-white text-lg font-semibold py-3 rounded-md transition duration-300"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
