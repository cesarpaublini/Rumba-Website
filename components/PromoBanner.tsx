"use client";

import { useEffect, useState } from "react";

const PromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("rumba_promo");
    if (!stored) {
      const expiresAt = Date.now() + 3 * 60 * 60 * 1000;
      localStorage.setItem("rumba_promo", expiresAt.toString());
      setTimeLeft(expiresAt - Date.now());
      setVisible(true);
    } else {
      const expiresAt = parseInt(stored, 10);
      const remaining = expiresAt - Date.now();
      if (remaining > 0) {
        setTimeLeft(remaining);
        setVisible(true);
      }
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1000) {
          clearInterval(interval);
          setVisible(false);
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms: number) => {
    const h = Math.floor(ms / 3600000);
    const m = Math.floor((ms % 3600000) / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    return `${h}h ${m}m ${s}s`;
  };

  if (!visible) return null;

  return (
    <div className="w-full sticky top-[60px] z-40">
      <section className="bg-pink-600 text-white text-sm font-semibold py-2 px-4 text-center">
        <div className="flex flex-row justify-center items-center gap-2">
          <span className="whitespace-nowrap">🎉 <strong className="text-white">Book now and get $100 OFF</strong></span>
          <span className="hidden sm:inline whitespace-nowrap">– Offer ends in</span>
          <span className="whitespace-nowrap">⏳ {formatTime(timeLeft)}</span>
        </div>
      </section>
    </div>
  );
};

export default PromoBanner;
