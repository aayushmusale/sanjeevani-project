// src/app/page.tsx
import InquiryForm from '../../components/forms/InquiryForm';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Backgroundimage from '../../components/images/backgroudimage.jpg'

import { WhyUs } from "../../components/information/WhyUs";
import Carousel from "../../components/information/Carousel";
import TopUniversities from "../../components/information/TopUniversities";
import { Guidelines } from '../../components/information/Guidelines';
import Footer from '../../components/layout/Footer';
// import TestimonialCarousel from '@/components/ui/TestimonialCarousel'; // To be implemented

// Mock Data for Quick Highlights
const highlights = [
  { name: 'Low Fees', description: 'Affordable tuition options globally.', icon: 'DollarSign' },
  { name: 'NMC/MCI Approved', description: 'Courses recognized by medical councils.', icon: 'Award' },
  { name: '6-Year Course', description: 'Structured, comprehensive medical programs.', icon: 'Clock' },
  { name: 'Worldwide Recognition', description: 'Degrees accepted in major countries.', icon: 'Globe' },
];

// Note: In the App Router, data fetching can be done directly in the Server Component
// For SSG, you don't need `getStaticProps` anymore. Next.js 15 handles static rendering 
// by default for pages without dynamic data requests.

export default function HomePage() {
  // If you were fetching dynamic data for the homepage (e.g., testimonials),
  // you would call a server function here.
  // const testimonials = await getTestimonials();

  const BackgroundImage = Backgroundimage.src

  return (
    <div className="bg-gradient-to-b from-[#002244] to-[#011627] ">

      {/* 1. Catchy Banner & CTA Section (SSG) */}
      <section
        style={{
          // The URL must be wrapped in url('...')
          backgroundImage: `url('${BackgroundImage}')`,
        }}
        className="relative bg-no-repeat bg-cover bg-center text-white pt-32 pb-32">
        <div className="container mx-auto px-10 flex flex-col lg:flex-row items-center justify-between">

          {/* Left: Banner Content & Highlights */}
          <div className="lg:w-1/2 space-y-6 mb-10 lg:mb-0">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Your Future Starts Here.
            </h1>
            <p className="text-xl opacity-90">
              Study MBBS in top universities with <b>Guaranteed Admission</b> and <b>Global Recognition.</b>
            </p>

            {/* Quick Highlights */}
            <div className="grid grid-cols-2 gap-4 text-sm pt-4">
              {highlights.map((item) => (
                <div key={item.name} className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-xs opacity-70 hidden md:block">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right: Lead Generation Form (CTA) */}
          <div className="w-full lg:w-5/15 mt-20 bg-white rounded-xl shadow-2xl">
            <InquiryForm />
          </div>

        </div>
      </section>
      <WhyUs />
      <TopUniversities />
      <Guidelines />
      <Carousel />

      <Footer/>

    </div>
  );
}














// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
