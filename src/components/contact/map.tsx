export default function Map() {
  return (
    <section className="w-full bg-zinc-900 text-white py-12 px-6 mt-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#18C67E]">
          Visit Habebee Lounge – Your Best Dining Option in Cyberjaya
        </h2>
        
        <p className="text-lg sm:text-xl mb-6">
          Habebee Lounge is conveniently located near MMU, Mutiara Ville, and the hospital in Cyberjaya. 
          Whether you&apos;re a student, local resident, or visitor, we&apos;re easy to find and ready to serve you.
        </p>

        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg border border-gray-700">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.786524733683!2d101.6385!3d2.9252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdcdd4e4a5c711%3A0x5b5b68e6d25a3eaa!2sMutiara%20Ville%20Cyberjaya!5e0!3m2!1sen!2smy!4v1707901234567!5m2!1sen!2smy"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
