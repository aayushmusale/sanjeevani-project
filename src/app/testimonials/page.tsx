"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion } from "motion/react";
import { useRef } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
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
                <span className="text-gray-500 text-sm">{t.designation}</span>
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
      quote: "Like this video and ask your questions in comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.",
      name: "Avinash Kr",
      designation: "Co-Founder at xyz",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop"
    },
    {
      quote: "Like this video and ask your questions in comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.",
      name: "Bharat Kunal",
      designation: "Manager at xyz",
      src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3387&auto=format&fit=crop"
    },
    {
      quote: "Like this video and ask your questions in comment section, don't forget to Subscribe Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing and photoshop.",
      name: "Prabhakar D",
      designation: "Founder / CEO at xyz",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop"
    },
    {
      quote: "Sanjeevani made my dream of studying abroad a reality. Their guidance and university selection process was incredibly smooth and stress-free from start to finish.",
      name: "Riya Kabadi",
      designation: "Student at ABC University",
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3461&auto=format&fit=crop"
    },
    {
      quote: "The counselors here truly care about your future. They helped me secure an amazing scholarship for my undergraduate studies. Highly recommended!",
      name: "Shlok Dahale",
      designation: "Engineering Student",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop"
    }
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
      {/* Passing the data into our helper component */}
      <AnimatedTestimonials testimonials={sanjeevaniTestimonials} />
    </main>
  );
}
















