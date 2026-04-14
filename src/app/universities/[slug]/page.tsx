// src/app/universities/[slug]/page.tsx
import React from 'react';
import { notFound } from 'next/navigation';

import { universityData } from '../../../../lib/universityData'; 
import { CheckCircle, MapPin, ExternalLink, Microscope, Stethoscope } from 'lucide-react';

const InfoListItem = ({ icon, children }: { icon: React.ReactNode, children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-red-600 mr-3 mt-1">{icon}</span>
    <span>{children}</span>
  </li>
);

export default async function UniversityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const university = universityData.find((uni) => uni.slug === slug);

  if (!university) {
    notFound();
  }
  
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          
          <div
            className="relative w-full h-56 md:h-72 bg-cover bg-center"
            style={{ backgroundImage: `url('${university.image || '/default-uni-bg.jpg'}')` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4">
              <div className="text-center">
                <h1 className="text-white text-3xl md:text-5xl font-extrabold drop-shadow-lg">
                  {university.name}
                </h1>
                <p className="text-gray-200 text-lg mt-2 flex items-center justify-center">
                  <MapPin size={20} className="mr-2" /> {university.location || 'Russia'}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2 space-y-8">
                <section>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-red-500 pl-4">About the University</h2>
                  <p className="text-gray-700 text-lg leading-relaxed">{university.description}</p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-red-500 pl-4">Eligibility Criteria</h2>
                  <ul className="space-y-3 text-gray-700 text-lg">
                    
                    <InfoListItem icon={<CheckCircle size={24} />}>{university.eligibility?.academic}</InfoListItem>
                    <InfoListItem icon={<CheckCircle size={24} />}>{university.eligibility?.neet}</InfoListItem>
                  </ul>
                </section>
                
                 <section>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-red-500 pl-4">Hostel & Facilities</h2>
                  <p className="text-gray-700 text-lg leading-relaxed">{university.hostel?.description}</p>
                </section>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg self-start">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-red-500 pb-2">Quick Facts</h3>
                <ul className="space-y-4 text-gray-700">
                  {/* <li><strong>💰 Annual Fees:</strong> {university.annualFees}</li> */}
                  <li><strong>📅 Established:</strong> {university.establishedYear}</li>
                  <li><strong>🗣️ Medium:</strong> {university.mediumOfInstruction}</li>
                  <li><strong>🎓 Recognition:</strong> {university.recognition?.join(', ')}</li>
                  <li><strong>🗓️ Academic Session:</strong> {university.academicSession}</li>
                  <li><strong>🏨 Hostel:</strong> {university.hostel?.availability}</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Courses & Duration</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {university.courseDurations?.map(course => (
                    <div key={course.name} className="bg-red-50 p-4 rounded-lg text-center">
                      <p className="font-bold text-red-800">{course.name}</p>
                      <p className="text-red-600">{course.duration}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Key Departments</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
                  {university.departments?.map((dept) => (
                    <InfoListItem key={dept} icon={<Microscope size={20} />}>{dept}</InfoListItem>
                  ))}
                </div>
              </section>
              
              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Affiliated Hospitals for Clinical Training</h2>
                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
                  {university.affiliatedHospitals?.map((hospital) => (
                    <InfoListItem key={hospital} icon={<Stethoscope size={20} />}>{hospital}</InfoListItem>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}









