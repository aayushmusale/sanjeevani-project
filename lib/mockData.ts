import { Country, University, Testimonial, BlogPost } from '../types';
// import { Country, University, Testimonial, BlogPost } from '../types'

export interface Country {
    name: string;
    slug: string;
    flagEmoji: string;
    description: string;
    averageFees: string;
    topUniversitiesCount: number;
}

export const countries: Country[] = [
  {
    name: 'Russia',
    slug: 'russia',
    flagEmoji: '🇷🇺',
    description: 'Study MBBS in Russia with world-class medical education at affordable fees.',
    highlights: [
      'MCI/NMC Approved Universities',
      'Low Tuition Fees (₹15-25 Lakhs)',
      'No Entrance Exam Required',
      '6-Year MBBS Program',
      'English Medium Instruction'
    ],
    whyStudyHere: 'Russia offers high-quality medical education with globally recognized degrees. With over 50 years of experience in training international students, Russian medical universities provide excellent infrastructure, experienced faculty, and affordable education.',
    popularCourses: ['MBBS', 'MD', 'General Medicine'],
    averageFees: '₹18-25 Lakhs (Complete Course)',
    livingCost: '₹15,000-25,000 per month',
    topUniversitiesCount: 15
  },
  {
    name: 'Canada',
    slug: 'canada',
    flagEmoji: '🇨🇦',
    description: 'Experience world-class education in Canada with excellent post-study work opportunities.',
    highlights: [
      'Top-Ranked Universities Globally',
      'Post-Graduation Work Permit (PGWP)',
      'Pathway to Permanent Residency',
      'Multicultural Environment',
      'Research Opportunities'
    ],
    whyStudyHere: 'Canada is known for its high-quality education system, welcoming immigration policies, and excellent quality of life.',
    popularCourses: ['Business Management', 'Engineering', 'Computer Science', 'Healthcare'],
    averageFees: '₹12-25 Lakhs per year',
    livingCost: '₹60,000-1,00,000 per month',
    topUniversitiesCount: 20
  },
  {
    name: 'Germany',
    slug: 'germany',
    flagEmoji: '🇩🇪',
    description: 'Study in Germany with low or no tuition fees at world-renowned universities.',
    highlights: [
      'Free Education at Public Universities',
      'Strong Economy & Job Market',
      'Industry-Focused Curriculum',
      '18-Month Post-Study Work Visa',
      'Central European Location'
    ],
    whyStudyHere: 'Germany offers high-quality education with minimal tuition fees, strong industry connections.',
    popularCourses: ['Engineering', 'Business', 'Computer Science', 'Medicine'],
    averageFees: '₹0-2 Lakhs per year',
    livingCost: '₹60,000-80,000 per month',
    topUniversitiesCount: 25
  },
  {
    name: 'UK',
    slug: 'uk',
    flagEmoji: '🇬🇧',
    description: 'Study in the UK at prestigious universities with a rich academic heritage.',
    highlights: [
      'World-Class Universities',
      'Shorter Course Duration',
      '2-Year Post-Study Work Visa',
      'Globally Recognized Degrees',
      'Diverse Student Community'
    ],
    whyStudyHere: 'The UK is home to some of the world\'s oldest and most prestigious universities.',
    popularCourses: ['Business', 'Engineering', 'Law', 'Medicine', 'Arts'],
    averageFees: '₹18-35 Lakhs per year',
    livingCost: '₹80,000-1,50,000 per month',
    topUniversitiesCount: 30
  },
  {
    name: 'Australia',
    slug: 'australia',
    flagEmoji: '🇦🇺',
    description: 'Study in Australia with high-quality education and excellent lifestyle.',
    highlights: [
      'Top-Ranked Universities',
      'Work While You Study',
      'Post-Study Work Rights',
      'Safe & Welcoming Country',
      'Beautiful Climate'
    ],
    whyStudyHere: 'Australia offers world-class education and excellent career opportunities.',
    popularCourses: ['Engineering', 'IT', 'Business', 'Healthcare', 'Hospitality'],
    averageFees: '₹15-30 Lakhs per year',
    livingCost: '₹70,000-1,20,000 per month',
    topUniversitiesCount: 18
  },
  {
    name: 'USA',
    slug: 'usa',
    flagEmoji: '🇺🇸',
    description: 'Study in the USA at the world\'s leading universities and research institutions.',
    highlights: [
      'Home to Top Global Universities',
      'Cutting-Edge Research',
      'Optional Practical Training',
      'Diverse Course Options',
      'Strong Alumni Networks'
    ],
    whyStudyHere: 'The USA offers unparalleled academic excellence and innovation.',
    popularCourses: ['Computer Science', 'Business', 'Engineering', 'Medicine'],
    averageFees: '₹20-50 Lakhs per year',
    livingCost: '₹1,00,000-2,00,000 per month',
    topUniversitiesCount: 50
  }
];

export const universities: University[] = [
  {
    name: 'Kazan Federal University',
    slug: 'kazan-federal-university',
    country: 'Russia',
    city: 'Kazan',
    description: 'One of the oldest and most prestigious universities in Russia, offering world-class medical education.',
    establishedYear: 1804,
    ranking: 'Top 10 Medical Universities in Russia',
    accreditation: ['NMC', 'WHO', 'FAIMER'],
    fees: '₹22 Lakhs (Complete)',
    duration: '6 Years',
    facilities: ['Modern Campus', 'Hostels', 'Library', 'Research Labs', 'Sports Complex']
  },
  {
    name: 'First Moscow State Medical University',
    slug: 'first-moscow-state-medical-university',
    country: 'Russia',
    city: 'Moscow',
    description: 'The oldest and most prestigious medical university in Russia with excellent infrastructure.',
    establishedYear: 1758,
    ranking: '#1 Medical University in Russia',
    accreditation: ['NMC', 'WHO', 'FAIMER', 'ECFMG'],
    fees: '₹25 Lakhs (Complete)',
    duration: '6 Years',
    facilities: ['Teaching Hospital', 'Research Centers', 'Digital Library', 'Hostels']
  },
  {
    name: 'University of Toronto',
    slug: 'university-of-toronto',
    country: 'Canada',
    city: 'Toronto',
    description: 'Canada\'s top-ranked university with world-class research and academic programs.',
    establishedYear: 1827,
    ranking: 'Top 20 Universities Worldwide',
    accreditation: ['AUCC', 'AACSB'],
    fees: '₹22-30 Lakhs per year',
    duration: '3-4 Years',
    facilities: ['Multiple Campuses', 'Libraries', 'Research Centers', 'Student Housing']
  },
  {
    name: 'Technical University of Munich',
    slug: 'technical-university-munich',
    country: 'Germany',
    city: 'Munich',
    description: 'Leading technical university in Germany with strong industry partnerships.',
    establishedYear: 1868,
    ranking: 'Top 50 Universities Worldwide',
    accreditation: ['ABET', 'ACQUIN'],
    fees: '₹0 (Public University)',
    duration: '3-4 Years',
    facilities: ['Modern Labs', 'Innovation Centers', 'Libraries', 'Sports Facilities']
  }
];

export interface Testimonial {
  studentName: string;
  reviewText: string;
  university: string;
  country: string;
  rating: number; // 1 to 5
  year: number;
}

export const testimonials: Testimonial[] = [
  {
    studentName: 'Priya Sharma',
    country: 'Russia',
    university: 'Kazan Federal University',
    reviewText: 'Excellent guidance throughout the admission process. The team helped me secure admission to a top NMC-approved university. The faculty is amazing and the education quality is world-class.',
    rating: 5,
    year: 2023
  },
  {
    studentName: 'Rahul Verma',
    country: 'Canada',
    university: 'University of Toronto',
    reviewText: 'Professional service from start to finish. They handled my visa process smoothly and I got admission to my dream university. Highly recommended!',
    rating: 5,
    year: 2023
  },
  {
    studentName: 'Anjali Patel',
    country: 'Germany',
    university: 'Technical University of Munich',
    reviewText: 'The consultancy made my dream of studying in Germany come true. They provided excellent support for course selection and visa guidance.',
    rating: 5,
    year: 2024
  },
  {
    studentName: 'Vikram Singh',
    country: 'Russia',
    university: 'First Moscow State Medical University',
    reviewText: 'Best decision to choose this consultancy. They guided me step by step and I am now studying at the #1 medical university in Russia!',
    rating: 5,
    year: 2024
  }
];

export const blogPosts: BlogPost[] = [
  {
    title: 'Complete Guide to Study MBBS in Russia 2024',
    slug: 'complete-guide-study-mbbs-russia-2024',
    excerpt: 'Everything you need to know about studying MBBS in Russia including admission process, fees, top universities, and career prospects.',
    content: `
      <h2>Why Choose Russia for MBBS?</h2>
      <p>Russia has been a preferred destination for medical students from around the world for decades. Here's why:</p>
      <ul>
        <li>Affordable tuition fees compared to private colleges in India</li>
        <li>NMC/WHO approved universities</li>
        <li>High-quality education with modern infrastructure</li>
        <li>No entrance exam or donation required</li>
        <li>6-year program including internship</li>
      </ul>
      
      <h2>Top Medical Universities in Russia</h2>
      <p>Russia boasts over 50 medical universities that are recognized by NMC and WHO...</p>
    `,
    author: 'Dr. Education Expert',
    category: 'MBBS Abroad',
    publishedAt: '2024-01-15'
  },
  {
    title: 'Top 10 Reasons to Study in Canada',
    slug: 'top-10-reasons-study-canada',
    excerpt: 'Discover why Canada is the top choice for international students and how you can benefit from studying there.',
    content: `
      <h2>Why Canada?</h2>
      <p>Canada has become one of the most popular destinations for international students...</p>
    `,
    author: 'Study Abroad Counselor',
    category: 'Study Abroad',
    publishedAt: '2024-02-01'
  }
];
