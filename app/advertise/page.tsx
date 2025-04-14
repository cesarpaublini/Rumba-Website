'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AdvertiseWithUs() {
  return (
    <main className="font-sans">

      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Desktop Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          src="/videos/rumba-hero-desktop.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Mobile Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover block md:hidden"
          src="/videos/rumba-hero-mobile.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Content */}
        <div className="relative z-10 text-white max-w-2xl px-6">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Advertise With Rumbatours
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Put your brand in front of Miami’s hottest party crowd.
          </p>
          <Link href="#contact">
            <span className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold shadow transition">
              Request Media Kit
            </span>
          </Link>
        </div>
      </section>

      {/* Why Advertise Section */}
      <section className="bg-white py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Why Advertise With Us</h2>
        <div className="grid gap-6 md:grid-cols-2 text-left">
          <ul className="space-y-4 text-gray-700">
            <li>✅ Over 30,000 passengers per year</li>
            <li>✅ High visibility in Wynwood, Brickell, and Downtown</li>
            <li>✅ Young, social, high-spending demographic</li>
            <li>✅ Perfect for beverage brands, events, and nightlife sponsors</li>
          </ul>
          <p className="text-gray-600 text-lg">
            Our open-air party buses are a moving billboard in the heart of Miami’s most popular districts. Engage with a vibrant audience while creating lasting brand impressions.
          </p>
        </div>
      </section>

      {/* Sponsorship Options */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Choose How You Want to Shine</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {[
            { title: "Bus Wraps", desc: "Full branded bus visibility." },
            { title: "In-Bus Video Ads", desc: "Screens play your promo videos." },
            { title: "Sponsored Tour Themes", desc: "Brand themed tours & vibes." },
            { title: "Product Giveaways", desc: "Place your product in the party." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow hover:shadow-md transition"
            >
              <div className="mb-4 text-pink-600 text-3xl">🎉</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
              <Link href="#contact" className="text-pink-600 hover:underline text-sm">
                Inquire Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Past Activations</h2>
        <div className="flex overflow-x-auto space-x-6 pb-4 no-scrollbar">
          {[
            {
              src: "/images/budlight-NOLA-PartyBus.jpg",
              alt: "Bud Light Mardi Gras Activation",
              caption: "Bud Light Mardi Gras Activation 2025",
            },
            {
              src: "/images/sony-pride-rumba-partybus.jpg",
              alt: "Sony Music Pride Parade Bus Activation",
              caption: "Sony Music Pride Parade Activation",
            },
            {
              src: "/images/nike-miami-marathon-crowd-activation-2024.jpg",
              alt: "Nike Miami Marathon Crowd Activation",
              caption: "Nike Crowd Activation — Miami Marathon",
            },
            {
              src: "/images/lanvin-party-bus-wrap-miami.jpg",
              alt: "Lanvin Trolley Branding Activation",
              caption: "LANVIN Collection Pink Trolley Activation",
            },
            {
              src: "/images/pitbull-trackhouse-party-bus-wrap.jpg",
              alt: "Pitbull Trackhouse Party Bus",
              caption: "Pitbull Trackhouse — Album Promo Bus",
            },
          ].map(({ src, alt, caption }, i) => (
            <div key={i} className="min-w-[250px] flex-shrink-0 rounded-xl overflow-hidden shadow">
              <Image
                src={src}
                alt={alt}
                width={300}
                height={200}
                className="object-cover"
              />
              <p className="text-sm text-center py-2">{caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who We've Worked With */}
      <section className="bg-white py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">Who We’ve Worked With</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: 'Nike', file: 'nike.png' },
            { name: 'Redbull', file: 'redbull.png' },
            { name: 'Sony', file: 'Sony.png' },
            { name: 'Starry', file: 'starry.png' },
          ].map(({ name, file }, i) => (
            <div
              key={i}
              className="w-32 h-16 bg-gray-100 flex items-center justify-center rounded shadow"
            >
              <Image
                src={`/images/${file}`}
                alt={name}
                width={80}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-6">Request a Custom Quote</h2>
        <p className="text-center text-gray-600 mb-6">
          Want to learn more about wrapping our buses with your brand or business?<br />
          Contact our advertising partner, <strong>Ad Focus, Inc.</strong>, to get started on a Rumba Tours Party Bus campaign today!<br /><br />
          For additional information on advertising and sponsorship opportunities, visit their website or email them directly at:{" "}
          <a href="mailto:hello@theadfocus.com" className="text-pink-600 underline">hello@theadfocus.com</a>
        </p>
        <form className="grid gap-4" action="https://formspree.io/f/mnnprqow" method="POST">
          <input type="text" name="name" required placeholder="Name" className="bg-gray-100 placeholder-gray-700 border border-gray-300 p-3 rounded-md" />
          <input type="email" name="email" required placeholder="Email" className="bg-gray-100 placeholder-gray-700 border border-gray-300 p-3 rounded-md" />
          <input type="tel" name="phone" placeholder="Phone" className="bg-gray-100 placeholder-gray-700 border border-gray-300 p-3 rounded-md" />
          <input type="text" name="brand" placeholder="Brand/Business" className="bg-gray-100 placeholder-gray-700 border border-gray-300 p-3 rounded-md" />
          <textarea name="message" rows={4} placeholder="Your Message" className="bg-gray-100 placeholder-gray-700 border border-gray-300 p-3 rounded-md"></textarea>
          <button type="submit" className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-pink-700 transition">
            Request Custom Quote
          </button>
        </form>
      </section>

      {/* Sticky Bottom CTA (Mobile) */}
      <div className="fixed bottom-4 left-0 right-0 z-50 md:hidden px-4">
        <div className="bg-black text-white flex justify-between items-center px-4 py-3 rounded-lg shadow-xl animate-slide-up">
          <span className="text-sm">🔥 Limited spots available for Summer 2025</span>
          <Link
            href="#contact"
            className="ml-4 bg-pink-600 px-3 py-2 rounded-md text-sm font-semibold hover:bg-pink-700 transition"
          >
            Let’s Talk
          </Link>
        </div>
      </div>

    </main>
  );
}