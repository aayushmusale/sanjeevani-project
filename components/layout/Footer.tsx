import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              {process.env.NEXT_PUBLIC_COMPANY_NAME}
            </h3>
            <p className="text-sm mb-4">
              Your trusted partner for studying abroad. We help students achieve their dreams of international education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition"><Instagram size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition"><Youtube size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link href="/countries" className="hover:text-blue-400 transition">Countries</Link></li>
              <li><Link href="/universities" className="hover:text-blue-400 transition">Universities</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition">Blog</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Study Destinations</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/countries/russia" className="hover:text-blue-400 transition">Russia</Link></li>
              <li><Link href="/countries/canada" className="hover:text-blue-400 transition">Canada</Link></li>
              <li><Link href="/countries/germany" className="hover:text-blue-400 transition">Germany</Link></li>
              <li><Link href="/countries/uk" className="hover:text-blue-400 transition">UK</Link></li>
              <li><Link href="/countries/australia" className="hover:text-blue-400 transition">Australia</Link></li>
              <li><Link href="/countries/usa" className="hover:text-blue-400 transition">USA</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>{process.env.NEXT_PUBLIC_COMPANY_PHONE}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>{process.env.NEXT_PUBLIC_COMPANY_EMAIL}</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 Education Street, Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
