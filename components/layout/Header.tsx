// src/components/layout/Header.tsx
'use client';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react'; // Use icons for CTA and menu
import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'About Us', href: '/about' },
  // { name: 'Contact', href: '/contact' },
  // 'Countries' link will be dynamic
];

// Mock data (will be replaced by Sanity fetch in the final version)
const mockCountries = ['Russia', 'Canada', 'Germany'];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Company Name */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          {process.env.NEXT_PUBLIC_COMPANY_NAME || 'Consultancy'}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-gray-600 hover:text-indigo-600 transition">
              {link.name}
            </Link>
          ))}
          
          {/* Dynamic Countries Dropdown (Framework) */}
          <div className="relative group">
            <button className="text-gray-600 hover:text-indigo-600 transition">
              Countries
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 w-40 mt-1 rounded-md">
              {mockCountries.map((country) => (
                <Link key={country} href={`/countries/${country.toLowerCase()}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {country}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Primary CTA */}
          <Link 
            href="/inquire" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg flex items-center transition duration-300"
          >
            Apply Now <ArrowRight className="ml-2" size={16} />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <nav className="md:hidden p-4 bg-gray-50 border-t">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="block py-2 text-gray-700 hover:bg-gray-200 px-4 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="py-2 border-t mt-2">
            <p className="text-sm font-semibold text-gray-500 px-4">Countries</p>
            {mockCountries.map((country) => (
                <Link key={country} href={`/countries/${country.toLowerCase()}`} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                  - {country}
                </Link>
              ))}
          </div>
          <Link 
            href="/inquire" 
            className="mt-4 block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Apply Now
          </Link>
        </nav>
      )}
    </header>
  );
}



// 'use client';

// import Link from 'next/link';
// import { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <Link href="/" className="flex items-center space-x-2">
//             <span className="text-2xl font-bold text-blue-600">
//               {process.env.NEXT_PUBLIC_COMPANY_NAME || 'StudyAbroad'}
//             </span>
//           </Link>

//           <div className="hidden md:flex items-center space-x-8">
//             <Link href="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
//             <Link href="/countries" className="text-gray-700 hover:text-blue-600 transition">Countries</Link>
//             <Link href="/universities" className="text-gray-700 hover:text-blue-600 transition">Universities</Link>
//             <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition">Blog</Link>
//             <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">About Us</Link>
//             <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
//             <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
//               Apply Now
//             </Link>
//           </div>

//           <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {mobileMenuOpen && (
//           <div className="md:hidden py-4 space-y-4">
//             <Link href="/" className="block text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Home</Link>
//             <Link href="/countries" className="block text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Countries</Link>
//             <Link href="/universities" className="block text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Universities</Link>
//             <Link href="/blog" className="block text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
//             <Link href="/about" className="block text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
//             <Link href="/contact" className="block text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
//             <Link href="/contact" className="block bg-blue-600 text-white px-6 py-2 rounded-lg text-center" onClick={() => setMobileMenuOpen(false)}>
//               Apply Now
//             </Link>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }
