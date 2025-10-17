// src/components/information/Carousel.tsx
'use client'; // This must stay because Swiper is interactive

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Define the shape of the data the component expects
interface ImageProps {
  id: number;
  src: string;
  alt: string;
}

interface CarouselProps {
  images: ImageProps[];
}

// The component now receives 'images' as a prop
export default function Carousel({ images }: CarouselProps) {
  // A good practice: handle the case where there are no images
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-black mb-12">Our Student Gallery</h2>
        
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          className="mySwiper w-full max-w-5xl"
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              {/* Using aspect-video and object-fit cover is great for a uniform carousel */}
              <div className="relative w-full aspect-video bg-gray-200 shadow-xl rounded-lg overflow-hidden">
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  fill 
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}