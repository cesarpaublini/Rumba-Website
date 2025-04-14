import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';
import Script from 'next/script';
import BookingBanner from '@/components/bookingPopup'   
import { Analytics } from "@vercel/analytics/react"

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
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <BookingBanner />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}