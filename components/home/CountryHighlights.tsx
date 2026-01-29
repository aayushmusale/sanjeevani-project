import Link from 'next/link';
import Card from '../ui/Card';
import Container from '../ui/Container';
import { countries } from '../../lib/mockData';

export default function CountryHighlights() {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Study Destinations 🌍
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our top study abroad destinations with world-class universities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country) => (
            // The Link component wraps the Card for a larger clickable area
            <Link href={`/countries/${country.slug}`} key={country.slug} className="block group">
              <Card className="h-full group-hover:-translate-y-1 transition duration-300">
                <div className="text-center">
                  <div className="text-6xl mb-4">{country.flagEmoji}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {country.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {country.description}
                  </p>
                  <div className="space-y-2 text-sm text-left border-t pt-4 mt-4">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Avg. Fees:</span>
                      <span className="font-semibold">{country.averageFees}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Universities:</span>
                      <span className="font-semibold">{country.topUniversitiesCount}+</span>
                    </div>
                  </div>
                  <div className="mt-4 text-indigo-600 font-semibold flex items-center justify-center group-hover:text-indigo-700 transition">
                    Learn More →
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

// export default function CountryHighlights() {
//   return (
//     <section className="py-16 bg-gray-50">
//       <Container>
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Study Destinations
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Choose from our top study abroad destinations with world-class universities
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {countries.map((country) => (
//             <Link href={`/countries/${country.slug}`} key={country.slug}>
//               <Card hover className="h-full">
//                 <div className="text-center">
//                   <div className="text-6xl mb-4">{country.flagEmoji}</div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">
//                     {country.name}
//                   </h3>
//                   <p className="text-gray-600 mb-4 text-sm">
//                     {country.description}
//                   </p>
//                   <div className="space-y-2 text-sm text-left">
//                     <div className="flex justify-between">
//                       <span className="text-gray-500">Avg. Fees:</span>
//                       <span className="font-semibold">{country.averageFees}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-500">Universities:</span>
//                       <span className="font-semibold">{country.topUniversitiesCount}+</span>
//                     </div>
//                   </div>
//                   <div className="mt-4 text-blue-600 font-semibold hover:text-blue-700">
//                     Learn More →
//                   </div>
//                 </div>
//               </Card>
//             </Link>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }
