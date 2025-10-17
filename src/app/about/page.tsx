import { Award, Compass, HeartHandshake, Map, Plane, ShieldCheck } from 'lucide-react';
import Carousel from '../../../components/information/Carousel';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import sanjivanilogo from '../../../components/images/SanjivaniLogo.jpg'

// This is a Server Component, so we can fetch data here.
export default function AboutUsPage() {
  // Dynamically load gallery images for the carousel
  const imageDirectory = path.join(process.cwd(), '/public/images/studentgallery');
  const imageFilenames = fs.readdirSync(imageDirectory);
  const galleryImages = imageFilenames.map((filename, index) => ({
    id: index + 1,
    src: `/images/studentgallery/${filename}`,
    alt: `Student gallery image ${index + 1}`,
  }));

  return (
    <div className="bg-gray-50 text-gray-800 pt-20">
      
      {/* 1. HERO SECTION - More Empathetic and Student-Focused */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Your Dream of Becoming a Doctor is Closer Than You Think.
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
            We know the path to studying MBBS in Russia can feel overwhelming. At Sanjivani, we’ve been in your shoes. We’re not just consultants; we’re your senior guides, here to make that path clear, simple, and successful.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY SECTION - Builds Trust and Authenticity */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
             {/* Replace with an actual image of your team or office for better impact */}
            <Image 
              src= {sanjivanilogo}
              alt="Sanjivani Education Consultancy Team"
              width={600}
              height={400}
              className="rounded-lg shadow-xl object-cover"
            />
          </div>
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-red-600">Our Story: More Than a Consultancy</h2>
            <p className="text-lg text-gray-700">
              Sanjivani was founded after seeing too many bright students get lost in confusing paperwork, false promises, and a lack of proper guidance. We built this consultancy on a simple principle: to be the honest, reliable senior you wish you had when starting this journey.
            </p>
            <p className="text-lg text-gray-700">
              Our mission isn’t just to get you an admission letter; it’s to ensure you land safely in Russia, settle in comfortably, and have a local support system to help you succeed throughout your entire 6-year medical degree. **Your success is our success.**
            </p>
          </div>
        </div>
      </section>
      
      {/* 3. YOUR JOURNEY TIMELINE - Informative and Valuable */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-2">Your Journey With Us, Simplified</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">Here’s a clear roadmap of how we’ll guide you, every step of the way.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center p-6">
              <Compass className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">1. Counseling & University Matching</h3>
              <p className="text-gray-600">We start by understanding your goals and budget to help you select the perfect NMC-recognized university.</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center p-6">
              <Award className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">2. Application & Guaranteed Admission</h3>
              <p className="text-gray-600">Our experts handle all the paperwork, ensuring a flawless application for guaranteed admission.</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center p-6">
              <Plane className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">3. VISA & Pre-Departure</h3>
              <p className="text-gray-600">We manage the entire VISA process and conduct detailed briefings so you are fully prepared for your journey.</p>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center p-6">
              <HeartHandshake className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">4. Arrival & On-Campus Support</h3>
              <p className="text-gray-600">We welcome you at the airport in Russia and provide support for the entire duration of your 6-year course.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SUCCESS STORIES (CAROUSEL) - Social Proof */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">See Our Students Thriving in Russia</h2>
          {/* Pass the dynamically loaded images to your Carousel component */}
          <Carousel images={galleryImages} />
        </div>
      </section>
    </div>
  );
}


















// // src/app/about/page.tsx
// import WhyChooseUs from '../../../components/home/WhyChooseUs';
// import { Users, Building2 } from 'lucide-react';
// import Carousel from '../../../components/information/Carousel';
// // import TestimonialCarousel from '@/components/ui/TestimonialCarousel'; // To be implemented

// export default function AboutUsPage() {
//   return (
//     <div className="pt-16">
      
//       {/* Hero Section */}
//       <section className=" text-black  py-20">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-5xl font-extrabold">
//             Pioneering Your Global Education Journey
//           </h1>
//           <p className="mt-4 text-xl max-w-3xl mx-auto opacity-90">
//             We are dedicated to providing ethical, transparent, and comprehensive consulting services for aspiring students.
//           </p>
//         </div>
//       </section>

//       {/* Our Mission/Vision */}
//       <section className="py-16 text-black bg-white">
//         <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
//           <div className="space-y-4">
//             <Building2 className="h-10 w-10 text-indigo-600" />
//             <h2 className="text-3xl font-bold">Our Mission</h2>
//             <p className="">
//               To be the most trusted study abroad consultant, simplifying the complexities of international admissions and ensuring every student finds their ideal, recognized, and affordable program. We prioritize the student's long-term career success over short-term gains.
//             </p>
//           </div>
//           <div className="space-y-4">
//             <Users className="h-10 w-10 text-indigo-600" />
//             <h2 className="text-3xl font-bold">Our Values</h2>
//             <ul className="list-disc list-inside space-y-2">
//               <li>Integrity: Absolute transparency in fees and processes.</li>
//               <li>Excellence: Providing up-to-date and accurate university information.</li>
//               <li>Support: Guiding students from application to post-arrival.</li>
//             </ul>
//           </div>
//         </div>
//       </section>
      
//       {/* Why Choose Us Component Integration */}
//       <WhyChooseUs />

//       {/* Social Proof Section - Testimonial Carousel */}
//       <section className="py-16 sm:py-24">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold text-white mb-10">Our Success Stories</h2>
//                 <Carousel/>
//           {/* Note: You must install @hookform/resolvers for the InquiryForm to work properly. */}
//         </div>
//       </section>
//     </div>
//   );
// }