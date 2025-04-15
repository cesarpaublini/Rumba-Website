'use client';

import Link from 'next/link';
import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaTripadvisor,
  FaYelp,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="text-pink-600 font-semibold">Get in Touch</h3>
          <p>📞 (786) 565-1088</p>
          <a
            href="mailto:reservations@rumbatoursmiami.com"
            className="hover:underline text-sm"
          >
            📧 reservations@rumbatoursmiami.com
          </a>
          <a
            href="https://book.tourcheckout.com/s/2cdc-68f6-621b/041a25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition mt-2"
          >
            Book Now
          </a>
        </div>

        {/* Center Nav Buttons - Horizontal */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/occasions" className="hover:underline">Occasions</Link>
          <Link href="/tours" className="hover:underline">Tours</Link>
          <Link href="/advertise" className="hover:underline">Advertise</Link>
          <Link href="/vehicles" className="hover:underline">Buses</Link>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <h3 className="text-pink-600 font-semibold">Connect</h3>
          <div className="flex gap-3 text-white text-2xl">
            <FaInstagram />
            <FaTiktok />
            <FaWhatsapp />
            <FaTripadvisor />
            <FaYelp />
            <FaFacebookF />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
          <p className="text-xs text-gray-400 mt-2">
            © 2025 by Rumbatours Miami
          </p>
        </div>
      </div>
    </footer>
  );
}