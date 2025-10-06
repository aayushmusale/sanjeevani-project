import React from 'react';

const eligibilityCriteria = [
  "The student must have completed 17 years of age on or before 31st December of the admission year.",
  "The student must have qualified the NEET (National Eligibility cum Entrance Test) exam.",
  "The student must have secured a minimum of 50% aggregate marks in PCB (Physics, Chemistry, and Biology) in their 12th standard.",
  "The student must have completed 10+2 from a recognized board (CBSE, ISC, or equivalent).",
  "The student must have a valid passport and all necessary documentation prepared.",
];

export function Guidelines() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:space-x-12 items-start">
          
          {/* Left Side: Bold Question */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#002244] leading-tight text-white">
              What is the eligibility you need to study abroad?
            </h2>
            <p className="text-sm text-red-600 mt-2">
              (Criteria are generally country and university specific)
            </p>
          </div>
          
          {/* Right Side: Bullet Points */}
          <div className="lg:w-2/3">
            <ul className="space-y-4 text-lg text-gray-700 text-white">
              {eligibilityCriteria.map((item, index) => (
                <li key={index} className="flex items-start">
                  {/* Custom Bullet Point (Red Circle) */}
                  <span className="h-2 w-2 bg-red-600 rounded-full flex-shrink-0 mt-2.5 mr-4"></span>
                  
                  {/* Eligibility Text */}
                  <span>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}