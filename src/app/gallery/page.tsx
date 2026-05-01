import fs from 'fs';
import path from 'path';
import Image from 'next/image';

export default function GalleryPage() {
  const imageDirectory = path.join(process.cwd(), '/public/images/studentgallery');

  const imageFilenames = fs.readdirSync(imageDirectory);

  const images = imageFilenames.map((filename, index) => ({
    id: index + 1,
    src: `/images/studentgallery/${filename}`,
    alt: `Student gallery image ${index + 1}`,
  }));

  return (
    <section className="py-16 bg-gray-50 mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Our Students
        </h2>
        
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-6">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="mb-4 sm:mb-6 break-inside-avoid group relative"
            >
              <Image 
                src={image.src} 
                alt={image.alt} 
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto rounded-lg shadow-md 
                           transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}