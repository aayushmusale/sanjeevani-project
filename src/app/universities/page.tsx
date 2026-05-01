// src/app/universities/page.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Search, MapPin, Building2 } from 'lucide-react';
import { universityData } from '../../../lib/universityData';

export default function UniversitiesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter universities based on the search query
  const filteredUniversities = universityData.filter((uni) =>
    uni.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen pt-28 pb-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Partner Universities
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our extensive network of top-tier medical universities in Russia. 
            Find the perfect institution to begin your medical career.
          </p>
        </div>

        {/* Search Bar Section */}
        <div className="max-w-2xl mx-auto mb-12 relative">
          <div className="relative flex items-center w-full h-14 rounded-full focus-within:shadow-lg bg-white overflow-hidden border border-gray-200">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <Search size={20} />
            </div>
            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search for a university..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center">
            Showing {filteredUniversities.length} institutions
          </p>
        </div>

        {/* Universities Grid */}
        {filteredUniversities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUniversities.map((uni) => (
              <Link key={uni.slug} href={`/universities/${uni.slug}`}>
                <div className="relative rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-red-400 transition-all duration-300 min-h-[280px] flex flex-col justify-between group">
                  
                  {/* Background Image with Hover Zoom Effect */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${uni.image})` }} 
                  />
                  
                  {/* Dark Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300 group-hover:opacity-90" />

                  {/* Card Content (Relative to sit above absolute layers) */}
                  <div className="relative p-6 flex flex-col justify-between h-full z-10">
                    <div>
                      {/* Frosted glass effect on icon container */}
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors duration-300">
                        <Building2 className="text-white" size={24} />
                      </div>
                      <h3 className="font-semibold text-xl text-white mb-2 leading-tight drop-shadow-md">
                        {uni.name}
                      </h3>
                    </div>
                    
                    <div className="mt-4 flex items-center text-sm text-gray-200">
                      <MapPin size={16} className="mr-1 text-red-400" />
                      Russia
                    </div>
                  </div>
                  
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No universities found</h3>
            <p className="text-gray-500">Try adjusting your search terms.</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-4 text-red-600 hover:text-red-700 font-medium"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

