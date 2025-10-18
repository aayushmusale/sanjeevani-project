// src/components/ui/TestimonialCarousel.tsx
'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Card from '../ui/Card';
import Container from '../ui/Container';
import { testimonials } from '../../lib/mockData';

export default function TestimonialCarousel() {
  const [idx, setIdx] = useState(0);
  
  if (!testimonials || testimonials.length === 0) {
    return (
        <section className="py-16 bg-gray-50 text-center">
             <p className="text-gray-500">No testimonials available yet.</p>
        </section>
    );
  }
  
  const current = testimonials[idx];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Success Stories</h2>
          <p className="text-lg text-gray-600">Hear from our students and build trust</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="relative">
            <div className="text-center">
              {/* Rating Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={24} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              
              {/* Review Text - ✨ FIX IS HERE ✨ */}
              <p className="text-lg italic mb-6">
                &ldquo;{current.reviewText}&rdquo;
              </p>
              
              {/* Student Info */}
              <h4 className="font-bold text-xl">{current.studentName}</h4>
              <p className="text-gray-600">
                {current.university}, <span className="font-semibold text-indigo-600">{current.country}</span>
              </p>
              <p className="text-gray-500 text-sm mt-1">Class of {current.year}</p>
            </div>
            
            {/* Previous Button */}
            <button
              onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            {/* Next Button */}
            <button
              onClick={() => setIdx((idx + 1) % testimonials.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </Card>
          
          {/* Indicator Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-3 h-3 rounded-full transition-colors ${i === idx ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}