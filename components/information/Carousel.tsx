// {/* --- Horizontal Line --- */}
//       <hr className="border-gray-200" />
      
//       {/* 2. Mock Testimonial Section (Social Proof) */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-10">What Our Students Say</h2>
          
//           {/* Implement your Swiper TestimonialCarousel here */}
//           <div className="h-64 flex items-center justify-center bg-gray-100 rounded-lg border-2 border-dashed border-gray-300">
//             <p className="text-gray-500">
//                 Testimonial Carousel Component Framework Goes Here (fetches from MongoDB StudentReviews)
//             </p>
//           </div>
//         </div>
//       </section>



export default function Carousel() {
    return (
        
    //   <hr className="border-gray-200" />
      
      <section className="py-16 bg-white bg-gradient-to-b from-[#002244] to-[#011627] ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-10">What Our Students Say</h2>
          
          {/* Implement your Swiper TestimonialCarousel here */}
          <div className="h-64 flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
            <p className="text-gray-500">
                Testimonial Carousel Component Framework Goes Here (fetches from MongoDB StudentReviews)
            </p>
          </div>
        </div>
      </section>
    )
}