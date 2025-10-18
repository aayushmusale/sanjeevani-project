// It's a good practice to define the shape of your data with an interface
import { University } from "../types";

export const universityData: University[] = [
  {
    // --- Basic Info ---
    name: "Privolzhsky Research Medical University",
    slug: "privolzhsky-research-medical-university",
    location: "Nizhny Novgorod, Russia",
    image: '/images/privolzhsky.webp', // Main header image
    alt: "Main building of Privolzhsky Research Medical University",
    official_website : "https://pimunn.ru/en/",
    
    // --- Detailed Info from PDF ---
    description: "Privolzhsky Research Medical University (PRMU), established in 1920, is a leading medical institution in Russia's Volga region. It is one of only two medical universities in the country with 'Research' status. PRMU is renowned for its innovative, student-centered curriculum that emphasizes early clinical skill development, attracting students from around the globe.",
    establishedYear: 1920,
    recognition: ["National Medical Commission (NMC) Approved", "Awarded Research University Status"],
    mediumOfInstruction: "English",
    
    // --- Academic Details ---
    courseDurations: [
      { name: "General Medicine (MBBS/MD)", duration: "6 Years" },
      { name: "Dentistry (BDS)", duration: "5 Years" },
      { name: "Pediatrics", duration: "6 Years" },
      { name: "Pharmacy (B.Pharm)", duration: "5 Years" },
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard (40% for reserved categories) as per NMC guidelines.",
      neet: "NEET qualification is mandatory for Indian students.",
    },

    // --- Facilities & Campus Life ---
    hostel: {
      availability: "Available",
      description: "The university provides 5 multi-story dormitories located in the city center. Rooms are fully equipped, with shared kitchens, bathrooms, and laundry facilities. Canteens and cafeterias are also available in each hostel.",
    },

    // --- Lists from PDF ---
    departments: [
      "Human Anatomy", "Clinical Biochemistry", "Pharmacology", "General Hygiene", "Microbiology, Virology, Immunology", "Pathological Anatomy", "Operative Surgery", "Psychiatry", "Internal Diseases", "Obstetrics and Gynecology", "Ophthalmology", "General Surgery and Urology", "Oncology", "Traumatology", "Pediatrics and Neonatology", "Cardio Surgery", "Neurology, Neurosurgery", "Therapeutic Dentistry", "Surgical Dentistry"
    ], // A selection of key departments
    
    affiliatedHospitals: [
      "Nizhny Novgorod Regional Cancer Center", "Cardiosurgery Hospital", "Privolzhsky Medical Center", "Regional Clinical Hospital n.a. Semashko", "Nizhny Novgorod Regional Pediatric Hospital", "Psychiatric Hospital No.I", "Maternity Hospital No.4"
    ], // A selection of key hospitals

    // --- Visuals ---
    gallery: [
        { src: '/images/gallery/prmu-students-1.jpg', alt: 'Students in a group at PRMU' },
        { src: '/images/gallery/prmu-practical-1.jpg', alt: 'PRMU students during a practical session' },
        { src: '/images/gallery/prmu-hostel-1.jpg', alt: 'Hostel room at Privolzhsky Research Medical University' },
        { src: '/images/gallery/prmu-winter.jpg', alt: 'PRMU campus during winter' },
    ],
    
    // --- Data Not in PDF (Placeholders) ---
    annualFees: "$4,500 USD (Approx.)",
  },
  {
    // --- Basic Info ---
    name: "Sechenov University",
    slug: "sechenov-university",
    location: "Moscow, Russia",
    image: '/images/sechenov.webp',
    alt: "Main building of Sechenov University",
    official_website: "https://www.sechenov.ru/eng/",
    
    // --- Detailed Info ---
    description: "As the First Moscow State Medical University, Sechenov University is the oldest and most prestigious medical school in Russia, founded in 1758. It's a leading international center for medical education, research, and healthcare, offering a vast range of programs and extensive clinical practice opportunities in its numerous affiliated university hospitals.",
    establishedYear: 1758,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English",
    
    // --- Academic Details ---
    courseDurations: [
      { name: "General Medicine (MBBS/MD)", duration: "6 Years" },
      { name: "Dentistry (BDS)", duration: "5 Years" },
      { name: "Pharmacy (B.Pharm)", duration: "5 Years" },
      { name: "Pediatrics", duration: "6 Years" },
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard (40% for reserved categories) as per NMC guidelines.",
      neet: "NEET qualification is mandatory for Indian students.",
    },

    // --- Facilities & Campus Life ---
    hostel: {
      availability: "Available",
      description: "Sechenov University provides modern, comfortable hostel facilities for international students, with shared rooms, kitchens, and study areas, all located within reach of the academic buildings.",
    },

    // --- Lists ---
    departments: [
      "Internal Diseases", "Pediatrics", "Surgery", "Cardiology", "Neurology", "Oncology", "Public Health", "Pharmacology", "Dentistry", "Obstetrics and Gynecology"
    ],
    
    affiliatedHospitals: [
      "University Clinical Hospital No. 1", "University Clinical Hospital No. 2", "University Children's Clinical Hospital", "Research Center of Traumatology and Orthopedics", "Center for Interventional Cardioangiology"
    ],

    // --- Visuals ---
    gallery: [
        { src: '/images/gallery/sechenov-students-1.jpg', alt: 'Students at Sechenov University' },
        { src: '/images/gallery/sechenov-campus-1.jpg', alt: 'Sechenov University campus building' },
        { src: '/images/gallery/sechenov-practical-1.jpg', alt: 'Students in a practical lab at Sechenov' },
        { src: '/images/gallery/sechenov-city.jpg', alt: 'View of Moscow near Sechenov University' },
    ],
    
    // --- Data Not in PDF (Placeholders) ---
    annualFees: "$9,500 USD (Approx.)",
},
{
    // --- Basic Info ---
    name: "Pirogov Russian National Research Medical University",
    slug: "pirogov-university",
    location: "Moscow, Russia",
    image: '/images/pirogov.webp',
    alt: "Main building of Pirogov University",
    official_website: "https://rsmu.ru/home_en.html",
    
    // --- Detailed Info ---
    description: "Pirogov Russian National Research Medical University (RNRMU), established in 1906, is one of the oldest and most respected medical universities in Russia. As a National Research University, it is a major hub for scientific innovation and provides high-quality medical training with a strong emphasis on practical skills in its extensive network of clinical bases across Moscow.",
    establishedYear: 1906,
    recognition: ["National Medical Commission (NMC) Approved", "Awarded National Research University Status"],
    mediumOfInstruction: "English",
    
    // --- Academic Details ---
    courseDurations: [
      { name: "General Medicine (MBBS/MD)", duration: "6 Years" },
      { name: "Dentistry (BDS)", duration: "5 Years" },
      { name: "Medical Biochemistry", duration: "6 Years" },
      { name: "Clinical Psychology", duration: "5.5 Years" },
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard (40% for reserved categories) as per NMC guidelines.",
      neet: "NEET qualification is mandatory for Indian students.",
    },

    // --- Facilities & Campus Life ---
    hostel: {
      availability: "Available",
      description: "The university offers accommodation in several student hostels. Rooms are typically shared between 2-3 students and are equipped with necessary furniture. Common areas include kitchens and bathrooms on each floor.",
    },

    // --- Lists ---
    departments: [
      "General Surgery", "Pediatric Surgery", "Traumatology and Orthopedics", "Anesthesiology", "Ophthalmology", "Forensic Medicine", "Clinical Psychology", "Biochemistry", "Urology"
    ],
    
    affiliatedHospitals: [
      "Russian Children's Clinical Hospital", "City Clinical Hospital No. 1", "Morozov Children's City Clinical Hospital", "Federal Center of Otolaryngology", "Research and Clinical Center of Gerontology"
    ],

    // --- Visuals ---
    gallery: [
        { src: '/images/gallery/pirogov-students-1.jpg', alt: 'Students at Pirogov University' },
        { src: '/images/gallery/pirogov-campus-1.jpg', alt: 'Pirogov University main building' },
        { src: '/images/gallery/pirogov-lab-1.jpg', alt: 'Students in a research lab at Pirogov' },
        { src: '/images/gallery/pirogov-winter.jpg', alt: 'Pirogov University campus in winter' },
    ],
    
    // --- Data Not in PDF (Placeholders) ---
    annualFees: "$7,800 USD (Approx.)",
}

  // ... You can add other universities here following the same structure
];
