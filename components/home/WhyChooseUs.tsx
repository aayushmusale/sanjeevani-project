// src/components/ui/WhyChooseUs.tsx
import { CheckCircle, DollarSign, Award, Clock, Globe, Zap } from 'lucide-react';
import React from 'react';

// Define the structure for a single feature card
interface Feature {
  name: string;
  description: string;
  icon: React.ElementType; // Use React.ElementType for Lucide icons
}

// Data for the 'Why Choose Us' section
const features: Feature[] = [
  { name: 'Low Fees Guaranteed', description: 'Access quality education without the burden of high tuition costs.', icon: DollarSign },
  { name: 'NMC/MCI Approved', description: 'Study medical programs with official recognition from the National Medical Commission.', icon: Award },
  { name: '6-Year Integrated Course', description: 'Structured and comprehensive curriculum for a complete academic journey.', icon: Clock },
  { name: 'Worldwide Recognition', description: 'Your degree is recognized globally, opening doors for international practice.', icon: Globe },
  { name: 'Expert Counseling', description: 'Personalized guidance from admission to visa application and settlement.', icon: CheckCircle },
  { name: 'End-to-End Support', description: 'Full support including documentation, travel, and on-site assistance.', icon: Zap },
];

export default function WhyChooseUs({ title = "Why Choose Global Education Consultants?" }) {
  return (
    <section className="py-16 sm:py-24 text-white bg-gradient-to-b from-[#002244] to-[#011627]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-xl">
            We provide specialized support to make your dream of studying abroad a reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300"
            >
              <feature.icon className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




















// import { CheckCircle, Award, Users, Globe, DollarSign, Headphones } from 'lucide-react';
// import Container from '../ui/Container';
// import Card from '../ui/Card';

// export default function WhyChooseUs() {
//     const features = [
//         {
//             icon: Award,
//             title: 'Expert Counseling',
//             description: 'Get guidance from experienced education consultants with 10+ years of expertise'
//         },
//         {
//             icon: CheckCircle,
//             title: 'NMC Approved',
//             description: 'All our partner universities are approved by NMC/MCI and WHO'
//         },
//         {
//             icon: Users,
//             title: '5000+ Students Placed',
//             description: 'Successfully helped thousands of students achieve their dreams'
//         },
//         {
//             icon: Globe,
//             title: 'Multiple Countries',
//             description: 'Access to top universities across Russia, Canada, Germany, UK, USA & more'
//         },
//         {
//             icon: DollarSign,
//             title: 'Affordable Fees',
//             description: 'Study at world-class universities with low tuition fees and no hidden costs'
//         },
//         {
//             icon: Headphones,
//             title: '24/7 Support',
//             description: 'Round-the-clock assistance for admissions, visa, and student queries'
//         }
//     ];

//     return (




//         Why Choose Us ?


//             Your trusted partner for studying abroad with comprehensive support at every step




//     {
//         features.map((feature, index) => {
//             const Icon = feature.icon;
//             return (






//                 { feature.title }
                  
                  
//                     { feature.description }
                  
                
              
//             );
//     })
// }
        
      
    
//   );
// }