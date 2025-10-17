// components/information/ServiceCarousel.tsx
import { Briefcase, GraduationCap, Globe, DollarSign } from 'lucide-react';
import React from 'react';
import Footer from '../../../components/layout/Footer';
// Define the structure for a Service Card
interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

// Mock Data for the Services (Replace with your actual data)
const services: Service[] = [
  {
    id: 1,
    title: 'Career Counseling',
    description: 'Expert guidance to choose the right medical specialization and destination country based on your profile and goals.',
    icon: Briefcase,
  },
  {
    id: 2,
    title: 'Guaranteed Admission',
    description: 'We ensure your admission process is flawless, providing guaranteed placement in top NMC/MCI-approved universities.',
    icon: GraduationCap,
  },
  {
    id: 3,
    title: 'Visa & Travel Support',
    description: 'Complete documentation for student visas, including visa interview preparation and assisted travel arrangements.',
    icon: Globe,
  },
  {
    id: 4,
    title: 'Financial Planning',
    description: 'Detailed breakdown of tuition fees, cost of living, and assistance with education loan documentation.',
    icon: DollarSign,
  },
  {
    id: 5,
    title: 'Post-Admission Care',
    description: 'Continuous support for accommodation, local registration, and mentoring throughout your entire 6-year course.',
    icon: Briefcase, // Using Briefcase again, choose a better icon if available
  },
];

export const Services: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Core Services
        </h2>
        
        {/* Carousel Container: 
          - overflow-x-scroll allows horizontal scrolling
          - whitespace-nowrap keeps the cards on a single line
          - snap-x ensures the cards snap nicely into view
        */}
        <div className="flex overflow-x-scroll space-x-6 pb-4 md:pb-6 snap-x snap-mandatory scrollbar-hide">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="flex-shrink-0 w-80 snap-center p-6 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-red-600 rounded-full text-white">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <p className="text-center text-sm text-gray-500 mt-6">
          &lt; Scroll to see all our services &gt;
        </p>
      </div>

    </section>
    
  );
};