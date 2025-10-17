import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // 👈 Import the Link component
import { universityData } from '../../lib/universityData'; // 👈 Import data from the new file

export default function TopUniversities() {
  return (
    <section className="text-black py-16">
      <div className="container mx-auto px-6">
        {/* Header Section (remains the same) */}
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
            <p className="text-lg leading-relaxed text-black">
              Russia is the home of the leading medical universities across the globe. From being affordable to
              delivering quality education, and research exposure, the students can explore various opportunities
              in the field of medicine. Here are the top medical universities in Russia that are a common choice
              for Indian students!
            </p>
          </div>
        </div>

        {/* University Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {universityData.map((university) => (
            // ✨ WRAP EACH CARD IN A LINK ✨
            <Link 
              key={university.slug} 
              href={`/universities/${university.slug}`} 
              className="group block"
            >
              <div
                className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl relative h-full"
              >
                <Image
                  src={university.image}
                  alt={university.alt}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 text-white">
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-red-300 transition-colors duration-300">
                    {university.name}
                  </h3>
                  <span className="block w-12 h-0.5 bg-red-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}