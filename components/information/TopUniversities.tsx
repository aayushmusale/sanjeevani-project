import React from 'react';

import Image from 'next/image';
import UniversityImg from '../images/Universityimg.jpg'
// Assuming you have these images in your public folder or accessible via a path
// For demonstration, I'm using placeholder image URLs.
// In a real project, you'd import them or use a robust CDN.

const universityData = [
  {
    name: "Orenburg State Medical University",
    // image: "https://via.placeholder.com/400x250/2E8B57/FFFFFF?text=Orenburg+Medical", // Example placeholder
    image : UniversityImg,
    alt: "Orenburg State Medical University building"
  },
  {
    name: "Perm State Medical University",
    image: UniversityImg,
    alt: "Perm State Medical University building"
  },
  {
    name: "Mari State University",
    image: UniversityImg,
    alt: "Mari State University building"
  },
  // Add more universities as needed
  {
    name: "Another Russian University",
    image: UniversityImg,
    alt: "Another Russian University building"
  }
];

export default function TopUniversities() {
  return (
    <section className="bg-gradient-to-b from-[#002244] to-[#011627] text-white py-16">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:space-x-12 mb-12">
          <div className="lg:w-1/2">
            <p className="text-red-500 text-sm font-semibold mb-2 flex items-center">
              <span className="w-8 h-0.5 bg-red-500 mr-2"></span>
              Top Places to Study MBBS Program in Russia
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Top Medical Universities <br /> in Russia for Indian Students
            </h1>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <p className="text-lg leading-relaxed text-gray-300">
              Russia is the home of the leading medical universities across the globe. From being affordable to
              delivering quality education, and research exposure, the students can explore various opportunities
              in the field of medicine. Here are the top 3 medical universities in Russia that are a common choice
              for Indian students!
            </p>
          </div>
        </div>

        {/* University Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {universityData.map((university, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative group"
            >
              <Image
                src = {university.image}
                alt={university.alt}
                width = {400}
                height = {250}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 text-white">
                <h3 className="text-xl font-semibold mb-1 group-hover:text-red-300 transition-colors duration-300">
                  {university.name}
                </h3>
                {/* You can add more details here if needed */}
                <span className="block w-12 h-0.5 bg-red-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}