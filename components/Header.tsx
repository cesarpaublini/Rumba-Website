'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-pink-600">RUMBATOURS</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4 items-center text-sm text-gray-700">
          <Link href="/" className="hover:text-pink-500">Home</Link>
          <Link href="/occasions" className="hover:text-pink-500">Occasions</Link>
          <Link href="/tours" className="hover:text-pink-500">Tours</Link>
          <Link href="/advertise" className="hover:text-pink-500">Advertise</Link>
          <Link href="/buses" className="hover:text-pink-500">Buses</Link>
          <Link
            href="https://book.tourcheckout.com/s/2cdc-68f6-621b/041a25"
            className="bg-pink-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-pink-700 transition"
          >
            Book Now
          </Link>
        </nav>

        {/* Hamburger Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700 text-2xl">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow px-4 py-6 space-y-4">
          <Link href="/" onClick={closeMenu} className="block text-gray-700 hover:text-pink-500">Home</Link>
          <Link href="/occasions" onClick={closeMenu} className="block text-gray-700 hover:text-pink-500">Occasions</Link>
          <Link href="/tours" onClick={closeMenu} className="block text-gray-700 hover:text-pink-500">Tours</Link>
          <Link href="/advertise" onClick={closeMenu} className="block text-gray-700 hover:text-pink-500">Advertise</Link>
          <Link href="/buses" onClick={closeMenu} className="block text-gray-700 hover:text-pink-500">Buses</Link>
          <Link
            href="https://book.tourcheckout.com/s/2cdc-68f6-621b/041a25"
            onClick={closeMenu}
            className="inline-block w-full bg-pink-600 text-white text-center px-4 py-2 rounded-full font-semibold hover:bg-pink-700 transition"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}