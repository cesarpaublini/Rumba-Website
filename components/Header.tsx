'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-pink-600">RUMBATOURS</h1>
        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/occasions">Occasions</Link>
          <Link href="/vehicles">Buses</Link>
          <Link href="/faq">FAQ</Link>
          <Link
            href="/booking"
            className="text-pink-600 font-semibold hover:underline"
          >
            Book Now
          </Link>
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
