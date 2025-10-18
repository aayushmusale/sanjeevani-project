// src/app/services/page.tsx
import { Briefcase, GraduationCap, Globe, DollarSign } from 'lucide-react';
import React from 'react';

// Define the structure for a Service Card
interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

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
    icon: Briefcase,
  },
];

// ✅ CHANGED to a default export
export default function Services() {
  return (
    <section className="py-16 bg-gray-50 pt-32"> {/* Added pt-32 for spacing below the fixed header */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Core Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="p-6 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
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
      </div>
    </section>
  );
};