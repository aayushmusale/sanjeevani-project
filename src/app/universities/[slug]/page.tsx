import React from 'react';
import Image from 'next/image';
import { universityData } from '../../../../lib/universityData'; // Adjust path to import data
import { notFound } from 'next/navigation'; // To handle cases where the university doesn't exist

// This function receives the URL parameters (`params`) from Next.js
export default function UniversityPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Find the university that matches the slug from the URL
  const university = universityData.find((uni) => uni.slug === slug);

  // If no university is found, show a 404 page
  if (!university) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* University Header with Background Image */}
          <div className="relative">
            <Image
              src={university.image}
              alt={university.alt}
              width={1200}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <h1 className="text-white text-4xl md:text-5xl font-extrabold text-center drop-shadow-lg">
                {university.name}
              </h1>
            </div>
          </div>

          {/* University Details */}
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">About the University</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {university.description}
                </p>
              </div>

              {/* Quick Facts Sidebar */}
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-red-500 pb-2">
                  Quick Facts
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>📍 Location:</strong> {university.location}
                  </li>
                  <li>
                    <strong>💰 Annual Fees:</strong> {university.annualFees}
                  </li>
                  <li>
                    <strong>✅ NMC Approved:</strong> Yes
                  </li>
                  <li>
                    <strong>🗣️ Medium:</strong> English
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}