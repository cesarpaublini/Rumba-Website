'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-pink-600">RUMBATOURS</h1>
        <nav className="hidden md:flex gap-4 items-center text-sm text-gray-700">
          <Link href="/" className="hover:text-pink-500">Home</Link>
          <Link href="/occasions" className="hover:text-pink-500">Occasions</Link>
          <Link href="/tours" className="hover:text-pink-500">Tours</Link>
          <Link href="/advertise" className="hover:text-pink-500">Advertise</Link>
          <Link href="/vehicles" className="hover:text-pink-500">Buses</Link>
          {/* Updated Book Now Button */}
          <a
            href="https://book.tourcheckout.com/s/2cdc-68f6-621b/041a25"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-pink-700 transition"
          >
            Book Now
          </a>
        </nav>
        <button className="md:hidden text-gray-700">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}