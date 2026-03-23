import { BookOpen, FileText, Globe, Home, LifeBuoy, Plane } from 'lucide-react';
import React from 'react';

// Descriptions are now written from the perspective of Sanjivani Education Consultancy.
const servicesData = [
  {
    icon: <Globe className="h-10 w-10 text-red-600 mb-4" />,
    title: 'University & Course Selection',
    description: "At Sanjivani Education, our personalized counseling sessions help you navigate Russia's top-tier, NMC-recognized medical universities. We analyze your academic background and career aspirations to curate a list of institutions where you will thrive, ensuring a perfect match for your future."
  },
  {
    icon: <FileText className="h-10 w-10 text-red-600 mb-4" />,
    title: 'Application & Admission Guidance',
    description: "Our expert team provides meticulous, step-by-step assistance to ensure your application is flawless. We help compile academic transcripts, craft statements of purpose, and prepare all documentation to guarantee your admission to your chosen university."
  },
  {
    icon: <BookOpen className="h-10 w-10 text-red-600 mb-4" />,
    title: 'VISA & Documentation Support',
    description: "We understand the Russian student VISA process can be complex. That's why our team manages everything from form filling and document apostille to scheduling embassy appointments. Our mock interview sessions will prepare you thoroughly, ensuring our 99% VISA success rate works for you."
  },
  {
    icon: <Plane className="h-10 w-10 text-red-600 mb-4" />,
    title: 'Pre-Departure Briefing',
    description: "To ensure you are fully prepared, Sanjivani conducts comprehensive orientation sessions before you fly. We cover crucial topics like Russian culture, academic expectations, and safety protocols, and we connect you with alumni and other students traveling with you."
  },
  {
    icon: <Home className="h-10 w-10 text-red-600 mb-4" />,
    title: 'Travel & Accommodation',
    description: "Our team takes the stress out of travel by arranging group flight bookings at competitive prices. Furthermore, Sanjivani coordinates directly with the universities to secure safe and comfortable hostel accommodation, ensuring your room is ready for you upon arrival."
  },
  {
    icon: <LifeBuoy className="h-10 w-10 text-red-600 mb-4" />,
    title: 'On-Arrival & Post-Admission Support',
    description: "Our commitment to you continues long after you land in Russia. Sanjivani arranges airport pickups, assists with university registration and medical check-ups, and helps you settle in. We remain your local guardian and support system for the entire duration of your MBBS course."
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-50">
      <section className="container mx-auto px-6 py-20 pt-32 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Our Services
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          From your first question to your final graduation, we provide comprehensive support to ensure your journey to becoming a doctor in Russia is smooth and successful.
        </p>
      </section>

      {/* Services Grid Section */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out flex flex-col items-start"
            >
              {service.icon}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-left flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}