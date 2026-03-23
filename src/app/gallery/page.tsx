import fs from 'fs';
import path from 'path';
import Image from 'next/image';

export default function GalleryPage() {
  // 1. DEFINE THE PATH to your images directory inside the `public` folder.
  const imageDirectory = path.join(process.cwd(), '/public/images/studentgallery');

  // 2. READ ALL FILENAMES from that directory.
  // Note: This code runs on the server during the build or request, not in the browser.
  const imageFilenames = fs.readdirSync(imageDirectory);

  // 3. CREATE AN ARRAY of image objects with the necessary properties.
  const images = imageFilenames.map((filename, index) => ({
    id: index + 1,
    // The `src` path must be a public URL, not a file system path.
    src: `/images/studentgallery/${filename}`,
    alt: `Student gallery image ${index + 1}`,
  }));

  return (
    <section className="py-16 bg-gray-50 mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Our Students
        </h2>
        
        {/* MASONRY CONTAINER: This uses CSS columns for a flexible layout. */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-6">
          {images.map((image) => (
            // WRAPPER: `break-inside-avoid` prevents an image from splitting across columns.
            <div 
              key={image.id} 
              className="mb-4 sm:mb-6 break-inside-avoid group relative"
            >
              <Image 
                // SETUP FOR UNKNOWN IMAGE SIZES:
                // `width` and `height` are set to 0, and `sizes` is used.
                // `w-full h-auto` lets the image fill the column width and adjust its height automatically.
                src={image.src} 
                alt={image.alt} 
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto rounded-lg shadow-md 
                           transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              {/* Optional: Overlay for a subtle hover effect */}
              {/* <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>  */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}