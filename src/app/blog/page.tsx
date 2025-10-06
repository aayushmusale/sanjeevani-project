// pages/blog.jsx

import React from 'react';
import Link from 'next/link';

// You would typically import your Navbar, Footer, and Post components here
// import Navbar from '../components/Navbar'; 
// import Footer from '../components/Footer'; 

// --- Static Data Placeholder ---
const blogPosts = [
  { id: 1, title: "Top 5 Visa Tips", category: "Visa", date: "Oct 2025" },
  { id: 2, title: "MBBS in Russia Guide", category: "Country Guide", date: "Sep 2025" },
];

export default function BlogPage() {
  return (
    <>
      {/* <Navbar />  <-- Uncomment if you use a layout component */}
      
      <main className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center mt-14">
            The Study Abroad Blog
          </h1>

          <div className="space-y-6">
            {blogPosts.map((post) => (
              <div key={post.id} className="p-6 bg-white shadow rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-indigo-600 uppercase mb-1">
                  {post.category}
                </p>
                
                {/* This link simulates navigating to a dynamic post page (e.g., /blog/1).
                  You would need a [id].jsx file in pages/blog/ for this to work.
                */}
                <Link 
                  href={`/blog/${post.id}`} 
                  className="text-xl font-semibold text-gray-800 hover:text-indigo-600 transition"
                >
                  {post.title}
                </Link>

                <p className="text-sm text-gray-500 mt-2">
                  Published: {post.date}
                </p>
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-center text-gray-600">
            More content coming soon!
          </p>

        </div>
      </main>
      
      {/* <Footer />  <-- Uncomment if you use a layout component */}
    </>
  );
}












// export default function BlogPage() {
//   return (
//     <div className="pt-16">
      
//       {/* Hero Section */}
//       <section className=" text-white  py-20">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-5xl font-extrabold">
//             This is a blog page
//           </h1>
//         </div>
//       </section>
//     </div>
//   );
// }