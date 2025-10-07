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

export default function HomePage() {
  const BackgroundImage = Backgroundimage.src

  return (
    // <div className="bg-gradient-to-b from-[#002244] to-[#011627] ">
    <div className="bg-white">
      <section
        style={{

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









