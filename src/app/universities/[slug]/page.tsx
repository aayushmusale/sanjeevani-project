import React from 'react';
import { notFound } from 'next/navigation';
import { universityData } from '../../../../lib/universityData'; // Correct path to your data file
import { CheckCircle, MapPin, ExternalLink, Microscope, Stethoscope } from 'lucide-react';


// This is a small helper component for displaying list items with icons
const InfoListItem = ({ icon, children }: { icon: React.ReactNode, children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-red-600 mr-3 mt-1">{icon}</span>
    <span>{children}</span>
  </li>
);

export default function UniversityPage({ params }: { params: { slug:string } }) {
  const { slug } = params;
  const university = universityData.find((uni) => uni.slug === slug);

  if (!university) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          
          {/* ✨ University Header with Background Image - UPDATED SECTION ✨ */}
          <div
  className="relative w-full h-56 md:h-72 bg-cover bg-center"
  style={{ backgroundImage: `url('${university.image}')` }}
>
  {/* This is the dark overlay, which remains the same */}
  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4">
    <div className="text-center">
      <h1 className="text-white text-3xl md:text-5xl font-extrabold drop-shadow-lg">
        {university.name}
      </h1>
      <p className="text-gray-200 text-lg mt-2 flex items-center justify-center">
        <MapPin size={20} className="mr-2" /> {university.location}
      </p>
    </div>
  </div>
</div>

          {/* Main Content Area (remains the same) */}
          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

              {/* Left Column: Detailed Information */}
              <div className="lg:col-span-2 space-y-8">
                <section>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-red-500 pl-4">About the University</h2>
                  <p className="text-gray-700 text-lg leading-relaxed">{university.description}</p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-red-500 pl-4">Eligibility Criteria</h2>
                  <ul className="space-y-3 text-gray-700 text-lg">
                    <InfoListItem icon={<CheckCircle size={24} />}>{university.eligibility.academic}</InfoListItem>
                    <InfoListItem icon={<CheckCircle size={24} />}>{university.eligibility.neet}</InfoListItem>
                  </ul>
                </section>
                
                 <section>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-red-500 pl-4">Hostel & Facilities</h2>
                  <p className="text-gray-700 text-lg leading-relaxed">{university.hostel.description}</p>
                </section>
              </div>

              {/* Right Column: Quick Facts Sidebar */}
              <div className="bg-gray-100 p-6 rounded-lg self-start">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-red-500 pb-2">Quick Facts</h3>
                <ul className="space-y-4 text-gray-700">
                  <li><strong>💰 Annual Fees:</strong> {university.annualFees}</li>
                  <li><strong>📅 Established:</strong> {university.establishedYear}</li>
                  <li><strong>🗣️ Medium:</strong> {university.mediumOfInstruction}</li>
                  <li><strong>🎓 Recognition:</strong> {university.recognition.join(', ')}</li>
                  <li><strong>🗓️ Academic Session:</strong> {university.academicSession}</li>
                  <li><strong>🏨 Hostel:</strong> {university.hostel.availability}</li>
                </ul>
                <a 
                  href={university.official_website}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 w-full flex items-center justify-center bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition-all duration-300"
                >
                  Visit Official Website
                  <ExternalLink className="ml-2" size={18} />
                </a>
              </div>
            </div>
            
            {/* Full-width sections for lists */}
            <div className="mt-12">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Courses & Duration</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {university.courseDurations.map(course => (
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
                  {university.departments.map((dept) => (
                    <InfoListItem key={dept} icon={<Microscope size={20} />}>{dept}</InfoListItem>
                  ))}
                </div>
              </section>
              
              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Affiliated Hospitals for Clinical Training</h2>
                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
                  {university.affiliatedHospitals.map((hospital) => (
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










// import React from 'react';
// import Image from 'next/image';
// import { notFound } from 'next/navigation';
// import { universityData } from '../../../../lib/universityData'; // Correct path to your data file
// import { BookOpen, CheckCircle, Clock, Home, MapPin, Microscope, Stethoscope, Users } from 'lucide-react';

// // This is a small helper component for displaying list items with icons
// const InfoListItem = ({ icon, children }: { icon: React.ReactNode, children: React.ReactNode }) => (
//   <li className="flex items-start">
//     <span className="text-red-600 mr-3 mt-1">{icon}</span>
//     <span>{children}</span>
//   </li>
// );

// export default function UniversityPage({ params }: { params: { slug:string } }) {
//   const { slug } = params;
//   const university = universityData.find((uni) => uni.slug === slug);

//   if (!university) {
//     notFound();
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen pt-20">
//       <div className="container mx-auto px-4 py-12">
//         <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          
//           {/* University Header with Background Image */}
//           <div className="relative">
//             <Image
//               src={university.image}
//               alt={university.alt}
//               width={1200}
//               height={400}
//               className="w-full h-56 md:h-72 object-cover"
//               priority // Load the main image faster
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4">
//               <div className="text-center">
//                 <h1 className="text-white text-3xl md:text-5xl font-extrabold drop-shadow-lg">
//                   {university.name}
//                 </h1>
//                 <p className="text-gray-200 text-lg mt-2 flex items-center justify-center">
//                   <MapPin size={20} className="mr-2" /> {university.location}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Main Content Area */}
//           <div className="p-6 md:p-10">
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

//               {/* Left Column: Detailed Information */}
//               <div className="lg:col-span-2 space-y-8">
//                 {/* About Section */}
//                 <section>
//                   <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-red-500 pl-4">About the University</h2>
//                   <p className="text-gray-700 text-lg leading-relaxed">{university.description}</p>
//                 </section>

//                 {/* Eligibility Section */}
//                 <section>
//                   <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-red-500 pl-4">Eligibility Criteria</h2>
//                   <ul className="space-y-3 text-gray-700 text-lg">
//                     <InfoListItem icon={<CheckCircle size={24} />}>{university.eligibility.academic}</InfoListItem>
//                     <InfoListItem icon={<CheckCircle size={24} />}>{university.eligibility.neet}</InfoListItem>
//                   </ul>
//                 </section>
                
//                 {/* Hostel & Facilities */}
//                  <section>
//                   <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-red-500 pl-4">Hostel & Facilities</h2>
//                   <p className="text-gray-700 text-lg leading-relaxed">{university.hostel.description}</p>
//                 </section>
//               </div>

//               {/* Right Column: Quick Facts Sidebar */}
//               <div className="bg-gray-100 p-6 rounded-lg self-start">
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-red-500 pb-2">Quick Facts</h3>
//                 <ul className="space-y-4 text-gray-700">
//                   <li><strong>💰 Annual Fees:</strong> {university.annualFees}</li>
//                   <li><strong>📅 Established:</strong> {university.establishedYear}</li>
//                   <li><strong>🗣️ Medium:</strong> {university.mediumOfInstruction}</li>
//                   <li><strong>🎓 Recognition:</strong> {university.recognition.join(', ')}</li>
//                   <li><strong>🗓️ Academic Session:</strong> {university.academicSession}</li>
//                   <li><strong>🏨 Hostel:</strong> {university.hostel.availability}</li>
//                 </ul>
//               </div>
//             </div>
            
//             {/* Full-width sections for lists */}
//             <div className="mt-12">
//               {/* Courses and Duration */}
//               <section className="mb-12">
//                 <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Courses & Duration</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                   {university.courseDurations.map(course => (
//                     <div key={course.name} className="bg-red-50 p-4 rounded-lg text-center">
//                       <p className="font-bold text-red-800">{course.name}</p>
//                       <p className="text-red-600">{course.duration}</p>
//                     </div>
//                   ))}
//                 </div>
//               </section>

//               {/* Departments Section */}
//               <section className="mb-12">
//                 <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Key Departments</h2>
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
//                   {university.departments.map((dept) => (
//                     <InfoListItem key={dept} icon={<Microscope size={20} />}>{dept}</InfoListItem>
//                   ))}
//                 </div>
//               </section>
              
//               {/* Affiliated Hospitals Section */}
//               <section>
//                 <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Affiliated Hospitals for Clinical Training</h2>
//                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
//                   {university.affiliatedHospitals.map((hospital) => (
//                     <InfoListItem key={hospital} icon={<Stethoscope size={20} />}>{hospital}</InfoListItem>
//                   ))}
//                 </div>
//               </section>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// // import React from 'react';
// // import Image from 'next/image';
// // import { universityData } from '../../../../lib/universityData'; // Adjust path to import data
// // import { notFound } from 'next/navigation'; // To handle cases where the university doesn't exist

// // // This function receives the URL parameters (`params`) from Next.js
// // export default function UniversityPage({ params }: { params: { slug: string } }) {
// //   const { slug } = params;

// //   // Find the university that matches the slug from the URL
// //   const university = universityData.find((uni) => uni.slug === slug);

// //   // If no university is found, show a 404 page
// //   if (!university) {
// //     notFound();
// //   }

// //   return (
// //     <div className="bg-gray-50 min-h-screen">
// //       <div className="container mx-auto px-4 py-12">
// //         <div className="bg-white rounded-lg shadow-xl overflow-hidden">
// //           {/* University Header with Background Image */}
// //           <div className="relative">
// //             <Image
// //               src={university.image}
// //               alt={university.alt}
// //               width={1200}
// //               height={400}
// //               className="w-full h-64 object-cover"
// //             />
// //             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
// //               <h1 className="text-white text-4xl md:text-5xl font-extrabold text-center drop-shadow-lg">
// //                 {university.name}
// //               </h1>
// //             </div>
// //           </div>

// //           {/* University Details */}
// //           <div className="p-8 md:p-12">
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //               {/* Main Content */}
// //               <div className="md:col-span-2">
// //                 <h2 className="text-3xl font-bold text-gray-800 mb-4">About the University</h2>
// //                 <p className="text-gray-700 text-lg leading-relaxed">
// //                   {university.description}
// //                 </p>
// //               </div>

// //               {/* Quick Facts Sidebar */}
// //               <div className="bg-gray-100 p-6 rounded-lg">
// //                 <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-red-500 pb-2">
// //                   Quick Facts
// //                 </h3>
// //                 <ul className="space-y-3 text-gray-700">
// //                   <li>
// //                     <strong>📍 Location:</strong> {university.location}
// //                   </li>
// //                   <li>
// //                     <strong>💰 Annual Fees:</strong> {university.annualFees}
// //                   </li>
// //                   <li>
// //                     <strong>✅ NMC Approved:</strong> Yes
// //                   </li>
// //                   <li>
// //                     <strong>🗣️ Medium:</strong> English
// //                   </li>
// //                 </ul>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }