"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion } from "motion/react";
import { useRef } from "react";
import bharath from '../../../public/images/studentgallery/bharath.webp'
type Testimonial = {
  quote: string;
  name: string;
  // designation: string;
  src: string;
};

const AnimatedTestimonials = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (scrollContainerRef.current) {
      // Calculate scroll distance based on the width of one card + the gap (24px = gap-6)
      const card = scrollContainerRef.current.firstElementChild as HTMLElement;
      const scrollAmount = card ? card.clientWidth + 24 : scrollContainerRef.current.clientWidth; 
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.firstElementChild as HTMLElement;
      const scrollAmount = card ? card.clientWidth + 24 : scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-40 font-sans antialiased">
      {/* Sliding Cards Container */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pt-14 pb-8 [&::-webkit-scrollbar]:hidden"
        style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
      >
        {testimonials.map((t, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            key={index} 
            // 1 card on mobile, 2 on tablet, 3 on desktop
            className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] flex-shrink-0 snap-start"
          >
            {/* Inner Card Styling matching the Screenshot */}
            <div className="relative bg-[#f5f5f5] pt-16 pb-10 px-8 text-center rounded-sm shadow-md h-full flex flex-col justify-between border border-gray-100">
              
              {/* Overlapping Avatar */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <img
                  src={t.src}
                  alt={t.name}
                  className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-sm bg-white"
                  draggable={false}
                />
              </div>

              {/* Quote Text */}
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8 mt-2 flex-grow">
                <span className="text-amber-500 font-serif text-3xl leading-none mr-1 align-bottom">“</span>
                {t.quote}
                <span className="text-amber-500 font-serif text-3xl leading-none ml-1 align-bottom">”</span>
              </p>

              {/* Name & Designation */}
              <div className="flex flex-row items-center justify-center flex-wrap gap-1.5">
                <h4 className="text-amber-500 font-semibold text-base">{t.name}</h4>
                {/* <span className="text-gray-500 text-sm">{t.designation}</span> */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="group flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 hover:bg-amber-500 transition-colors duration-300 shadow-sm"
        >
          <IconArrowLeft className="h-6 w-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
        </button>
        <button
          onClick={handleNext}
          className="group flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 hover:bg-amber-500 transition-colors duration-300 shadow-sm"
        >
          <IconArrowRight className="h-6 w-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
        </button>
      </div>
    </div>
  );
};


export default function TestimonialsPage() {
  const sanjeevaniTestimonials = [
    {
      quote: "I am Bharat Kunal, I am studying at Privolzhsky state medical University. Sanjivani Education gave me an amazing opportunity to study MBBS in Russia. The team helped me very much. Thank you very much Team Sanjivani and Akash Dighe Sir.",
      name: "Bharat Kunal",
      // designation: "Manager at xyz",
      // Notice how we don't include the word 'public'
      src: "/images/studentgallery/bharath.webp" 
    },
    {
      quote: "The counselors here truly care about your future. Got admission in Kazan State University with amazing staff and amazing college experience. All thanks to Sanjivani Eduacation to help me secure my dream University.",
      name: "Shlok Dahale",
      // designation: "Engineering Student",
      src: "/images/studentgallery/shlok.webp"
    }
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
      {/* Passing the data into our helper component */}
      <AnimatedTestimonials testimonials={sanjeevaniTestimonials} />
    </main>
  );
}














