// src/app/about/page.tsx
import WhyChooseUs from '../../../components/home/WhyChooseUs';
import { Users, Building2 } from 'lucide-react';
// import TestimonialCarousel from '@/components/ui/TestimonialCarousel'; // To be implemented

export default function AboutUsPage() {
  return (
    <div className="pt-16">
      
      {/* Hero Section */}
      <section className=" text-black  py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold">
            Pioneering Your Global Education Journey
          </h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto opacity-90">
            We are dedicated to providing ethical, transparent, and comprehensive consulting services for aspiring students.
          </p>
        </div>
      </section>

      {/* Our Mission/Vision */}
      <section className="py-16 text-black bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <Building2 className="h-10 w-10 text-indigo-600" />
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="">
              To be the most trusted study abroad consultant, simplifying the complexities of international admissions and ensuring every student finds their ideal, recognized, and affordable program. We prioritize the student's long-term career success over short-term gains.
            </p>
          </div>
          <div className="space-y-4">
            <Users className="h-10 w-10 text-indigo-600" />
            <h2 className="text-3xl font-bold">Our Values</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Integrity: Absolute transparency in fees and processes.</li>
              <li>Excellence: Providing up-to-date and accurate university information.</li>
              <li>Support: Guiding students from application to post-arrival.</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Component Integration */}
      <WhyChooseUs />

      {/* Social Proof Section - Testimonial Carousel */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-10">Our Success Stories</h2>
          
          {/* TestimonialCarousel component logic goes here */}
          <div className="h-64 flex items-center justify-center bg-indigo-50 rounded-lg border-2 border-dashed border-indigo-200">
            <p className="text-indigo-600">
                TestimonialCarousel Component - Fetches reviews from MongoDB's StudentReviews collection.
            </p>
          </div>
          {/* Note: You must install @hookform/resolvers for the InquiryForm to work properly. */}
        </div>
      </section>
    </div>
  );
}