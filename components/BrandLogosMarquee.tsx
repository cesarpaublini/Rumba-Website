'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';

const logos = [
  'miami-heat.png',
  'miami-marlins.png',
  'miami-dolphins.png',
  'nike.png',
  'redbull.png',
  'batch.png',
  'gopuff.png',
  'lanvin.png',
  'starry.png',
  'sony.png',
  'wedding-wire.png',
];

export default function LogoMarquee() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (marqueeRef.current) {
      const marquee = marqueeRef.current as HTMLDivElement;
      const marqueeWidth = marquee.scrollWidth - marquee.clientWidth;
      let startPosition = 0;

      function animate() {
        startPosition += 0.2;
        if (startPosition > marqueeWidth) {
          startPosition = 0;
        }
        marquee.style.transform = `translateX(-${startPosition}px)`;
        requestAnimationFrame(animate);
      }

      animate();
      let animationFrame: number;

      animationFrame = requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }
  }, []);

  return (
    <section className="py-10 bg-white">
      <h2 className="text-center text-lg font-semibold text-gray-600 mb-8">
        Trusted by brands like…
      </h2>
      <div className="overflow-hidden relative">
        <div
          className="flex gap-16 whitespace-nowrap px-6"
          ref={marqueeRef}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center justify-center min-w-[120px] h-[60px]">
              <Image
                src={`/images/${logo}`}
                alt={logo.replace('.png', '')}
                width={120}
                height={60}
                className="object-contain grayscale opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
