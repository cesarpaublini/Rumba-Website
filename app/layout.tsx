import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';
import Script from 'next/script';
import BookingBanner from '@/components/bookingPopup';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rumbatours Miami - Party Bus Rentals',
  description: 'Open-air party bus rentals in Miami for bachelorettes, birthdays, tourists, and corporate events.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Hotjar Tracking Code */}
        <Script id="hotjar" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:6373312,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>

        {/* Tour Checkout Button */}
        <Script id="tourcheckout" strategy="beforeInteractive">
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

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S1H7NHT8EQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S1H7NHT8EQ');
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <BookingBanner />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}