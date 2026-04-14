// src/components/layout/Header.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Our Services', href: '/ourservices'},
  { name: 'Universities', href: '/universities' }, 
  { name: 'About Us', href: '/about' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Gallery', href: '/gallery' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white rounded-1xl drop-shadow-[2px_2px_8px_rgba(0,0,0,0.9)]">
      {/* CHANGED: Reduced py-4 to py-2. 
        This keeps the navbar the EXACT same total height as your original code 
        while allowing the logo inside it to be taller. 
      */}
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        
        <Link href="/" className="flex items-center transition-transform hover:scale-105">
          {/* CHANGED: 
            - Height increased to h-20 (80px) 
            - Width fixed to w-32 (128px) to stretch it horizontally
            - object-fill forces the image to stretch to these new dimensions
          */}
          <Image 
            src="/images/logo.webp" 
            alt="Sanjivani Logo"
            width={180}  
            height={180} 
            className="h-20 w-20 object-fill" 
            priority 
          />
          
          {/* The Stacked Text */}
          <div className="flex flex-col ml-3 justify-center border-l-2 border-gray-200 pl-3">
            <span className="text-lg md:text-xl font-extrabold text-[#D32F2F] leading-none tracking-wide mb-1">
              Sanjivani
            </span>
            <span className="text-xs md:text-sm font-bold text-gray-700 leading-none mb-0.5">
              Education
            </span>
            <span className="text-xs md:text-sm font-bold text-gray-700 leading-none">
              Consultancy
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-black hover:text-red-600 transition">
              {link.name}
            </Link>
          ))}
          
          {/* Primary CTA */}
          <Link 
            href="/inquire" 
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg flex items-center transition duration-300"
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
          <Link 
            href="/inquire" 
            className="mt-4 block text-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Apply Now
          </Link>
        </nav>
      )}
    </header>
  );
}














// // src/components/layout/Header.tsx
// 'use client';
// import Link from 'next/link';
// import Image from 'next/image'; // 👈 1. Import Next.js Image component
// import { Menu, X, ArrowRight } from 'lucide-react';
// import { useState } from 'react';

// const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'Our Services', href: '/ourservices'},
//   { name: 'Universities', href: '/universities' }, 
//   { name: 'About Us', href: '/about' },
//   { name: 'Testimonials', href: '/testimonials' },
//   { name: 'Gallery', href: '/gallery' },
// ];

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-40 bg-white rounded-1xl drop-shadow-[2px_2px_8px_rgba(0,0,0,0.9)]">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
//         {/* ✨ UPDATED: Logo Image + Stacked Text ✨ */}
//         <Link href="/" className="flex items-center transition-transform hover:scale-105">
//           {/* The Logo Image */}
//           <Image 
//             src="/images/logo.webp" 
//             alt="Sanjivani Logo"
//             width={120}  
//             height={120} 
//             className="h-16 w-auto object-contain" 
//             priority 
//           />
          
//           {/* The Stacked Text */}
//           <div className="flex flex-col ml-3 justify-center border-l-2 border-gray-200 pl-3">
//             <span className="text-lg md:text-xl font-extrabold text-[#D32F2F] leading-none tracking-wide mb-1">
//               Sanjivani
//             </span>
//             <span className="text-xs md:text-sm font-bold text-gray-700 leading-none mb-0.5">
//               Education
//             </span>
//             <span className="text-xs md:text-sm font-bold text-gray-700 leading-none">
//               Consultancy
//             </span>
//           </div>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-6 items-center">
//           {navLinks.map((link) => (
//             <Link key={link.name} href={link.href} className="text-black hover:text-red-600 transition">
//               {link.name}
//             </Link>
//           ))}
          
//           {/* Primary CTA */}
//           <Link 
//             href="/inquire" 
//             className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg flex items-center transition duration-300"
//           >
//             Apply Now <ArrowRight className="ml-2" size={16} />
//           </Link>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isOpen && (
//         <nav className="md:hidden p-4 bg-gray-50 border-t">
//           {navLinks.map((link) => (
//             <Link 
//               key={link.name} 
//               href={link.href} 
//               className="block py-2 text-gray-700 hover:bg-gray-200 px-4 rounded-md"
//               onClick={() => setIsOpen(false)}
//             >
//               {link.name}
//             </Link>
//           ))}
//           <Link 
//             href="/inquire" 
//             className="mt-4 block text-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
//             onClick={() => setIsOpen(false)}
//           >
//             Apply Now
//           </Link>
//         </nav>
//       )}
//     </header>
//   );
// }











// src/components/layout/Header.tsx
// 'use client';
// import Link from 'next/link';
// import { Menu, X, ArrowRight } from 'lucide-react';
// import { useState } from 'react';

// // Added 'Universities' directly to standard navLinks
// const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'Our Services', href: '/ourservices'},
//   { name: 'Universities', href: '/universities' }, // Redirects to the new directory page
//   { name: 'About Us', href: '/about' },
//   // { name: 'Blog', href: '/blog' },
//   { name: 'Gallery', href: '/gallery' },
// ];

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-40 bg-white rounded-1xl drop-shadow-[2px_2px_8px_rgba(0,0,0,0.9)]">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         {/* Logo/Company Name */}
//         <Link href="/" className="text-2xl font-bold text-black">
//           {process.env.NEXT_PUBLIC_COMPANY_NAME || 'Consultancy'}
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-6 items-center">
//           {navLinks.map((link) => (
//             <Link key={link.name} href={link.href} className="text-black hover:text-red-600 transition">
//               {link.name}
//             </Link>
//           ))}
          
//           {/* Primary CTA */}
//           <Link 
//             href="/inquire" 
//             className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg flex items-center transition duration-300"
//           >
//             Apply Now <ArrowRight className="ml-2" size={16} />
//           </Link>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isOpen && (
//         <nav className="md:hidden p-4 bg-gray-50 border-t">
//           {navLinks.map((link) => (
//             <Link 
//               key={link.name} 
//               href={link.href} 
//               className="block py-2 text-gray-700 hover:bg-gray-200 px-4 rounded-md"
//               onClick={() => setIsOpen(false)}
//             >
//               {link.name}
//             </Link>
//           ))}
//           <Link 
//             href="/inquire" 
//             className="mt-4 block text-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
//             onClick={() => setIsOpen(false)}
//           >
//             Apply Now
//           </Link>
//         </nav>
//       )}
//     </header>
//   );
// }
















// // src/components/layout/Header.tsx
// 'use client';
// import Link from 'next/link';
// import { Menu, X, ArrowRight } from 'lucide-react';
// import { useState } from 'react';
// import { universityData } from '../../lib/universityData'; // ✨ 1. IMPORT the real data

// const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'Our Services', href: '/ourservices'},
//   { name: 'About Us', href: '/about' },
//   { name: 'Blog', href: '/blog' },
//   { name: 'Gallery', href: '/gallery' },
// ];

// // ✨ 2. DELETE the mockCountries array
// // const mockCountries = ['Privolzhsky University', 'Sechenov University', 'Pirogov University'];

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-40 bg-white rounded-1xl drop-shadow-[2px_2px_8px_rgba(0,0,0,0.9)]">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         {/* Logo/Company Name */}
//         <Link href="/" className="text-2xl font-bold text-black">
//           {process.env.NEXT_PUBLIC_COMPANY_NAME || 'Consultancy'}
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-6 items-center">
//           {navLinks.map((link) => (
//             <Link key={link.name} href={link.href} className="text-black hover:text-red-600 transition">
//               {link.name}
//             </Link>
//           ))}
          
//           {/* Dynamic Universities Dropdown */}
//           <div className="relative group">
//             <button className="text-black hover:text-red-600 transition">
//               Universities
//             </button>
//             <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 w-60 mt-1 rounded-md">
            
//               {/* ✨ 3. USE universityData and the correct slug for the link */}
//               {universityData.map((university) => (
//                 <Link 
//                   key={university.slug} 
//                   href={`/universities/${university.slug}`} 
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                 >
//                   {university.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
          
//           {/* Primary CTA */}
//           <Link 
//             href="/inquire" 
//             className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg flex items-center transition duration-300"
//           >
//             Apply Now <ArrowRight className="ml-2" size={16} />
//           </Link>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isOpen && (
//         <nav className="md:hidden p-4 bg-gray-50 border-t">
//           {navLinks.map((link) => (
//             <Link 
//               key={link.name} 
//               href={link.href} 
//               className="block py-2 text-gray-700 hover:bg-gray-200 px-4 rounded-md"
//               onClick={() => setIsOpen(false)}
//             >
//               {link.name}
//             </Link>
//           ))}
//           <div className="py-2 border-t mt-2">
//             <p className="text-sm font-semibold text-gray-500 px-4">Universities</p>
//             {/* ✨ 4. APPLY THE SAME FIX to the mobile menu */}
//             {universityData.map((university) => (
//                 <Link 
//                   key={university.slug} 
//                   href={`/universities/${university.slug}`} 
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   - {university.name}
//                 </Link>
//               ))}
//           </div>
//           <Link 
//             href="/inquire" 
//             className="mt-4 block text-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
//             onClick={() => setIsOpen(false)}
//           >
//             Apply Now
//           </Link>
//         </nav>
//       )}
//     </header>
//   );
// }





















// // // src/components/layout/Header.tsx
// // 'use client';
// // import Link from 'next/link';
// // import { Menu, X, ArrowRight } from 'lucide-react'; // Use icons for CTA and menu
// // import { useState } from 'react';

// // const navLinks = [
// //   { name: 'Home', href: '/' },
// //   { name: 'Our Services', href: '/ourservices'},
// //   { name: 'About Us', href: '/about' },
// //   { name: 'Blog', href: '/blog' },
// //   {name: 'Gallery', href: '/gallery'},
  
// //   // { name: 'Contact', href: '/contact' },
// //   // 'Countries' link will be dynamic
// // ];

// // // Mock data (will be replaced by Sanity fetch in the final version)
// // const mockCountries = ['Privolzhsky University', 'Sechenov University', 'Pirogov University'];

// // export default function Header() {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <header className="fixed top-0 left-0 right-0 z-40 bg-white rounded-1xl drop-shadow-[2px_2px_8px_rgba(0,0,0,0.9)]">
// //       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
// //         {/* Logo/Company Name */}
// //         <Link href="/" className="text-2xl font-bold text-black">
// //           {process.env.NEXT_PUBLIC_COMPANY_NAME || 'Consultancy'}
// //         </Link>

// //         {/* Desktop Navigation */}
// //         <nav className="hidden md:flex space-x-6 items-center">
// //           {navLinks.map((link) => (
// //             <Link key={link.name} href={link.href} className="text-black hover:text-red-600 transition">
// //               {link.name}
// //             </Link>
// //           ))}
          
// //           {/* Dynamic Countries Dropdown (Framework) */}
// //           <div className="relative group">
// //             <button className="text-black hover:text-red-600 transition">
// //               Universities
// //             </button>
// //             <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 w-60 mt-1 rounded-md">
// //               {mockCountries.map((country) => (
// //                 <Link key={country} href={`/countries/${country.toLowerCase()}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
// //                   {country}
// //                 </Link>
// //               ))}
// //             </div>
// //           </div>
          
// //           {/* Primary CTA */}
// //           <Link 
// //             href="/inquire" 
// //             className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg flex items-center transition duration-300"
// //           >
// //             Apply Now <ArrowRight className="ml-2" size={16} />
// //           </Link>
// //         </nav>

// //         {/* Mobile Menu Button */}
// //         <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
// //           {isOpen ? <X size={28} /> : <Menu size={28} />}
// //         </button>
// //       </div>

// //       {/* Mobile Menu Overlay */}
// //       {isOpen && (
// //         <nav className="md:hidden p-4 bg-gray-50 border-t">
// //           {navLinks.map((link) => (
// //             <Link 
// //               key={link.name} 
// //               href={link.href} 
// //               className="block py-2 text-gray-700 hover:bg-gray-200 px-4 rounded-md"
// //               onClick={() => setIsOpen(false)}
// //             >
// //               {link.name}
// //             </Link>
// //           ))}
// //           <div className="py-2 border-t mt-2">
// //             <p className="text-sm font-semibold text-gray-500 px-4">Countries</p>
// //             {mockCountries.map((country) => (
// //                 <Link key={country} href={`/countries/${country.toLowerCase()}`} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
// //                   - {country}
// //                 </Link>
// //               ))}
// //           </div>
// //           <Link 
// //             href="/inquire" 
// //             className="mt-4 block text-center bg-indigo-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
// //             onClick={() => setIsOpen(false)}
// //           >
// //             Apply Now
// //           </Link>
// //         </nav>
// //       )}
// //     </header>
// //   );
// // }
