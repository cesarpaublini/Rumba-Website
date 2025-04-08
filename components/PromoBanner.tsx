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
    <div className="w-full sticky top-0 z-50">
      <div className="bg-pink-600 text-white text-center text-sm font-semibold py-2 px-4 flex items-center justify-center overflow-x-auto whitespace-nowrap">
        <div className="jump-text inline-flex items-center">
          🎉 Book now and get
          <span className="font-bold text-white px-1">$100 OFF</span> – Offer ends in
          <span className="font-mono px-1">{formatTime(timeLeft)}</span>
        </div>
      </div>
    </div>
  );
    
};

export default PromoBanner;
