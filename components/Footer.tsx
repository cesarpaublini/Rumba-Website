'use client';

import Link from 'next/link';
import { FaInstagram, FaTiktok, FaWhatsapp, FaTripadvisor, FaYelp, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Get in Touch */}
        <div>
          <h3 className="text-pink-600 font-semibold mb-4">Get in touch</h3>
          <ul className="space-y-2 text-sm">
            <li>Tel: (786) 565-1088</li>
            <li><a href="mailto:reservations@rumbatoursmiami.com" className="hover:underline">reservations@rumbatoursmiami.com</a></li>
            <li>Employment</li>
            <li>Influencer Partnership</li>
            <li>About us</li>
            <li>Sponsorship Opportunities</li>
          </ul>
        </div>

        {/* Information on Tours */}
        <div>
          <h3 className="text-pink-600 font-semibold mb-4">Information on Tours</h3>
          <ul className="space-y-2 text-sm">
            <li>Tours Schedule</li>
            <li>Bus Rules</li>
            <li>Cancellation Policy</li>
            <li>Operation Areas</li>
            <li>FAQs</li>
            <li>
              <Link href="/privacy-policy" className="underline">Privacy Policy and Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Reservations */}
        <div>
          <h3 className="text-pink-600 font-semibold mb-4">Reservations</h3>
          <ul className="space-y-2 text-sm">
            <li>Giveaways</li>
            <li>Promotions</li>
            <li>Private Booking</li>
            <li>Single Tickets</li>
            <li>Corporate Events</li>
            <li>Wedding Transportation</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col justify-between items-start md:items-end">
          <div className="flex gap-4 text-white text-2xl">
            <FaInstagram />
            <FaTiktok />
            <FaWhatsapp />
            <FaTripadvisor />
            <FaYelp />
            <FaFacebookF />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
          <p className="text-xs text-gray-400 mt-6 md:mt-0">© 2025 by Rumbatours Miami</p>
        </div>
      </div>
    </footer>
  );
}
