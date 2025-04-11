'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function Hero() {
  const [isPromoActive, setIsPromoActive] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('rumba_promo');
    const expiresAt = stored ? parseInt(stored, 10) : 0;
    const stillValid = expiresAt > Date.now();
    setIsPromoActive(stillValid);
  }, []);

  return (
    <>
      {/* Load Tourcheckout Booking Widget */}
      <Script id="tourcheckout-loader" strategy="afterInteractive">
        {`
          (function(config) {
            window._tcConfig = config || {};
            var scriptId = 'tc-book-button-js';
            if (document.getElementById(scriptId)) return;
            var head = document.getElementsByTagName('head')[0];
            var elem = document.createElement('script'); elem.id = scriptId;
            var basePath = 'https://book.tourcheckout.com';
            elem.src = basePath + '/' + 'tcloader.js';
            head.appendChild(elem);
          })({key: '2cdc-68f6-621b'});
        `}
      </Script>

      <section className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="hidden sm:block w-full h-full object-cover"
          >
            <source src="/videos/hero-desktop.mp4" type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="block sm:hidden w-full h-full object-cover"
          >
            <source src="/videos/hero-mobile.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Overlay Text (Mobile + Desktop) */}
        <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center text-center px-4">
          <div className="relative z-10 max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-md leading-tight">
              Book Miami's #1 Open-Air Party Bus Experience
            </h1>
            <p className="mt-3 text-white text-base sm:text-lg md:text-xl">
              Perfect for bachelorettes, birthdays, tourists, locals & corporate groups.
            </p>
            <a
  href="https://book.tourcheckout.com/s/2cdc-68f6-621b/041a25"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => {
    const event = new Event('trigger-booking-popup')
    window.dispatchEvent(event)
  }}
  className="mt-6 inline-block bg-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-700 transition"
>
  ⚡ Book Now
</a>
          </div>
        </div>
      </section>
    </>
  );
}