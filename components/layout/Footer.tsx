import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand & Socials */}
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

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link href="/ourservices" className="hover:text-blue-400 transition">Our Services</Link></li>
              <li><Link href="/universities" className="hover:text-blue-400 transition">Universities</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link href="/testimonials" className="hover:text-blue-400 transition">Testimonials</Link></li>
              <li><Link href="/gallery" className="hover:text-blue-400 transition">Gallery</Link></li>
            </ul>
          </div>

          {/* Column 3: Study Destinations */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Study Destinations</h3>
            <ul className="space-y-2 text-sm">
              <h6>Russia</h6>
              <h6>Georgia</h6>
              <h6>Kyrgyzstan</h6>
              <h6>Egypt</h6>
              <h6>Kazakhstan</h6>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>{process.env.NEXT_PUBLIC_COMPANY_PHONE},</span>
                <span>{process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>{process.env.NEXT_PUBLIC_COMPANY_EMAIL}</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>107, 1st Floor, Business guild Complex, Opp hotel new Wadeshwar, Law College Rd, Pune, Maharashtra, 411004.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright, Dev Credit & Legal Links */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_COMPANY_NAME}. All rights reserved.</p>
            <p className="mt-1 text-gray-500">Website developed by @aayushmusale</p>
          </div>
          
          <div className="flex space-x-6 text-gray-400">
            <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-blue-400 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}