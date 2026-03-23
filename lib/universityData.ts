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
  // ==========================================
  // NEW UNIVERSITIES (Requested Batch)
  // ==========================================
  {
    name: "Omsk State Medical University",
    slug: "omsk-state-medical-university",
    location: "Omsk, Russia",
    image: '/images/omsk.webp',
    alt: "Main building of Omsk State Medical University",
    official_website: "https://omsk-osma.ru/",
    description: "Established in 1920, Omsk State Medical University is one of the oldest and highest-ranked medical universities in Siberia. It is renowned for its affordable tuition, strict academic discipline, and extensive clinical training programs. The university hosts a vibrant international community, with hundreds of Indian students currently enrolled.",
    establishedYear: 1920,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "UNESCO"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" },
      { name: "Pediatrics", duration: "6 Years" },
      { name: "Preventive Medicine", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard (40% for reserved categories).",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "OSMU provides well-furnished hostels equipped with modern amenities. Indian mess facilities are available on campus, offering familiar meals for international students.",
    },
    departments: [
      "Pathology", "Pharmacology", "Microbiology", "Internal Medicine", "Surgery", "Forensic Medicine", "Gynecology"
    ],
    affiliatedHospitals: [
      "Omsk Regional Clinical Hospital", "City Clinical Hospital No. 1", "Maternity Hospital No. 4"
    ],
    gallery: [
        { src: '/images/gallery/omsk-campus.jpg', alt: 'Omsk State Medical University Campus' },
        { src: '/images/gallery/omsk-hospital.jpg', alt: 'OSMU Clinical Training Facility' },
    ],
    annualFees: "$4,200 USD (Approx.)",
  },
  {
    name: "First Moscow State Medical University (MSMU)",
    slug: "first-moscow-state-medical-university",
    location: "Moscow, Russia",
    image: '/images/msmu.webp',
    alt: "First Moscow State Medical University campus",
    official_website: "https://www.sechenov.ru/eng/",
    description: "Also widely known as Sechenov University, First Moscow State Medical University is the oldest and most prestigious medical school in Russia, founded in 1758. It is an elite international center for medical education and scientific research, offering unparalleled clinical exposure in the heart of Russia's capital.",
    establishedYear: 1758,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "ECFMG"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS/MD)", duration: "6 Years" },
      { name: "Dentistry (BDS)", duration: "5 Years" },
      { name: "Pharmacy (B.Pharm)", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "MSMU offers premium, highly secure hostel accommodations in Moscow, featuring high-speed internet, recreational zones, and shared kitchens close to academic buildings.",
    },
    departments: [
      "Internal Diseases", "Pediatrics", "Surgery", "Cardiology", "Neurology", "Oncology", "Public Health"
    ],
    affiliatedHospitals: [
      "University Clinical Hospital No. 1", "University Clinical Hospital No. 2", "University Children's Clinical Hospital", "Center for Interventional Cardioangiology"
    ],
    gallery: [
        { src: '/images/gallery/msmu-campus.jpg', alt: 'MSMU Main Building' },
    ],
    annualFees: "$9,500 USD (Approx.)",
  },
  {
    name: "Kazan State Medical University",
    slug: "kazan-state-medical-university",
    location: "Kazan, Russia",
    image: '/images/kazan.webp',
    alt: "Main building of Kazan State Medical University",
    official_website: "https://kazangmu.ru/eng",
    description: "Founded in 1814, Kazan State Medical University (KSMU) is a premier, government-funded institution with over two centuries of medical excellence. Located in the multicultural hub of Tatarstan, it boasts an incredibly high standard of education and maintains clinical training across 54 highly advanced hospital units.",
    establishedYear: 1814,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "ECFMG", "GMC"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" },
      { name: "Pharmacy", duration: "5 Years" },
      { name: "Preventive Medicine", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "KSMU provides multiple well-maintained dormitories. Due to high demand, the university also heavily assists international students in finding safe, shared private accommodations nearby.",
    },
    departments: [
      "Anatomy", "Histology", "Biochemistry", "General Pathology", "General Surgery", "Obstetrics & Gynecology", "Pediatrics"
    ],
    affiliatedHospitals: [
      "Republican Clinical Hospital", "Hospital of Emergency Care", "City Hospital No. 18", "Interregional Clinical Diagnostic Center"
    ],
    gallery: [
        { src: '/images/gallery/kazan-campus.jpg', alt: 'Kazan State Medical University' },
        { src: '/images/gallery/kazan-students.jpg', alt: 'International students at KSMU' },
    ],
    annualFees: "$6,500 USD (Approx.)",
  },
  {
    name: "Tambov State University (Medical Institute)",
    slug: "tambov-state-medical-university",
    location: "Tambov, Russia",
    image: '/images/tambov.webp',
    alt: "Tambov State University Medical Institute",
    official_website: "http://eng.tsutmb.ru/",
    description: "Established in 1918, Tambov State University is a prominent public university whose Medical Institute is highly favored by international students. It is well-regarded for providing a high-quality, English-taught MBBS program at a very competitive and low fee structure, making medical education highly accessible.",
    establishedYear: 1918,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard (40% for reserved categories).",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "The university offers centrally heated, well-ventilated hostel accommodations for male and female students. Facilities include a large library, sports complexes, and internet access.",
    },
    departments: [
      "General Medicine", "Anatomy", "Physiology", "Cardiology", "Nephrology", "Oncology"
    ],
    affiliatedHospitals: [
      "Tambov Regional Clinical Hospital", "Tambov City Hospital"
    ],
    gallery: [
        { src: '/images/gallery/tambov-campus.jpg', alt: 'Tambov State University Campus' },
    ],
    annualFees: "$4,100 USD (Approx.)",
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
},
// ==========================================
  // NEW UNIVERSITIES (Batch 2: 5 to 14)
  // ==========================================
{
  name: "Belgorod State National Research University",
  slug: "belgorod-state-university",
  location: "Belgorod, Russia",
  image: '/images/belgorod.webp',
  alt: "Campus of Belgorod State National Research University",
  official_website: "https://bsuedu.ru/en/",
  description: "Established in 1876, Belgorod State National Research University is one of Russia's leading public universities, officially recognized as a National Research University. Its medical institute is highly sought after by international students for its state-of-the-art laboratories, modern curriculum, and global recognition.",
  establishedYear: 1876,
  recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "FAIMER"],
  mediumOfInstruction: "English and Russian",
  courseDurations: [
    { name: "General Medicine (MBBS)", duration: "6 Years" },
    { name: "Dentistry (BDS)", duration: "5 Years" },
    { name: "Pediatrics", duration: "6 Years" }
  ],
  academicSession: "Starts from September 1st",
  eligibility: {
    academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard (40% for reserved categories).",
    neet: "NEET qualification is mandatory for Indian students.",
  },
  hostel: {
    availability: "Available",
    description: "The campus comprises four large dormitories accommodating over 3,000 international students. The hostels have digital library access, sports complexes, and even an Indian mess facility.",
  },
  departments: [
    "Anatomy", "Medico-biological Sciences", "Internal Medicine", "General Surgery", "Obstetrics and Gynecology", "Radiology"
  ],
  affiliatedHospitals: [
    "Belgorod Regional Clinical Hospital", "City Hospital No. 2", "Regional Oncology Dispensary"
  ],
  gallery: [
      { src: '/images/gallery/belgorod-campus.jpg', alt: 'Belgorod State University main building' },
      { src: '/images/gallery/belgorod-students.jpg', alt: 'International medical students at BSU' },
  ],
  annualFees: "$4,900 USD (Approx.)",
},
{
  name: "Central State Medical Academy of the Presidential Administration",
  slug: "central-state-medical-academy",
  location: "Moscow, Russia",
  image: '/images/central-state-academy.webp',
  alt: "Central State Medical Academy building",
  official_website: "https://www.cgma.su/",
  description: "The Central State Medical Academy of the Presidential Administration of the Russian Federation is a highly prestigious, specialized medical institution. It historically focuses on advanced postgraduate training, clinical research, and VIP healthcare consulting, making its clinical resources among the most elite in Moscow.",
  establishedYear: 1968, // Note: Evolved from earlier elite medical facilities
  recognition: ["Ministry of Health of the Russian Federation", "Presidential Administration Affairs"],
  mediumOfInstruction: "Russian (English for specific international programs)",
  courseDurations: [
    { name: "Advanced General Medicine", duration: "6 Years" },
    { name: "Specialized Residency", duration: "2-3 Years" }
  ],
  academicSession: "Starts from September",
  eligibility: {
    academic: "High academic merit in core science subjects. Strict admission protocols due to its elite status.",
    neet: "NEET qualification required if applying for general MBBS equivalents.",
  },
  hostel: {
    availability: "Available",
    description: "Premium accommodation facilities are provided, reflecting the academy's association with the Presidential Administration, featuring high security and modern amenities.",
  },
  departments: [
    "Gastroenterology", "Cosmetology and Plastic Surgery", "Dermatovenerology", "Advanced Internal Medicine", "Cardiology"
  ],
  affiliatedHospitals: [
    "Medincentre Clinic", "Presidential Administration Clinical Hospital", "Botkin Hospital (Affiliate wards)"
  ],
  gallery: [
      { src: '/images/gallery/central-academy-campus.jpg', alt: 'Central State Medical Academy clinic' },
  ],
  annualFees: "$6,500 USD (Approx.)",
},
{
  name: "Chechen State University",
  slug: "chechen-state-university",
  location: "Grozny, Russia",
  image: '/images/chechen.webp',
  alt: "Chechen State University main campus",
  official_website: "https://www.chesu.ru/en/",
  description: "Established in 1938, Chechen State University is a rapidly growing hub for medical education in the North Caucasus region. The university combines classic Russian medical traditions with heavy investments in modern medical infrastructure, offering an affordable and high-quality MBBS program.",
  establishedYear: 1938,
  recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
  mediumOfInstruction: "English",
  courseDurations: [
    { name: "General Medicine (MBBS)", duration: "6 Years" },
    { name: "Dentistry", duration: "5 Years" },
    { name: "Pediatrics", duration: "6 Years" }
  ],
  academicSession: "Starts from September 1st",
  eligibility: {
    academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
    neet: "NEET qualification is mandatory for Indian students.",
  },
  hostel: {
    availability: "Available",
    description: "The university provides modern dormitories with secure, comfortable living arrangements. Facilities include reading rooms, recreation centers, and cafeterias serving international cuisine.",
  },
  departments: [
    "Human Anatomy", "Pathophysiology", "Internal Medicine", "Surgery", "Orthopedics", "Radiology"
  ],
  affiliatedHospitals: [
    "Grozny City Clinical Hospital", "Republican Clinical Hospital", "Children's Clinical Hospital of Grozny"
  ],
  gallery: [
      { src: '/images/gallery/chechen-campus.jpg', alt: 'Chechen State University Campus' },
  ],
  annualFees: "$3,800 USD (Approx.)",
},
{
  name: "South Ural State Medical University (Formerly Chelyabinsk)",
  slug: "south-ural-state-medical-university",
  location: "Chelyabinsk, Russia",
  image: '/images/south-ural.webp',
  alt: "South Ural State Medical University building",
  official_website: "http://www.chelsma.ru/",
  description: "Founded in 1944 (originally as Chelyabinsk State Medical Institute), South Ural State Medical University is a leading medical institution in the South Ural region. It is consistently ranked among the top medical universities in Russia, known for its extensive clinical bases and experienced faculty of over 740 teachers.",
  establishedYear: 1944,
  recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "UNESCO"],
  mediumOfInstruction: "English",
  courseDurations: [
    { name: "General Medicine (MBBS)", duration: "6 Years" },
    { name: "Dentistry", duration: "5 Years" },
    { name: "Pharmacy", duration: "5 Years" },
    { name: "Clinical Psychology", duration: "5.5 Years" }
  ],
  academicSession: "Starts from September 1st",
  eligibility: {
    academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
    neet: "NEET qualification is mandatory for Indian students.",
  },
  hostel: {
    availability: "Available",
    description: "The university has well-equipped hostels located close to the academic buildings. They provide a safe environment with heating, internet access, and shared kitchen facilities.",
  },
  departments: [
    "Medical-prophylactic Faculty", "Clinical Psychology", "Pediatrics", "Internal Diseases", "General Surgery"
  ],
  affiliatedHospitals: [
    "Chelyabinsk Regional Clinical Hospital", "City Clinical Hospital No. 1", "South Ural Medical University Clinic"
  ],
  gallery: [
      { src: '/images/gallery/south-ural-campus.jpg', alt: 'South Ural Medical University Campus' },
  ],
  annualFees: "$3,000 USD (Approx.)",
},
{
  name: "Chita State Medical Academy",
  slug: "chita-state-medical-academy",
  location: "Chita, Russia",
  image: '/images/chita.webp',
  alt: "Main entrance of Chita State Medical Academy",
  official_website: "https://chitgma.ru/",
  description: "Established in 1953, Chita State Medical Academy is a premier government medical university in Eastern Siberia and the Far East. It is recognized for its highly affordable fee structure and excellent academic infrastructure, including a prominent research center for Kashin-Beck disease.",
  establishedYear: 1953,
  recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
  mediumOfInstruction: "English",
  courseDurations: [
    { name: "General Medicine (MBBS)", duration: "6 Years" },
    { name: "Dentistry", duration: "5 Years" }
  ],
  academicSession: "Starts from September 1st",
  eligibility: {
    academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
    neet: "NEET qualification is mandatory for Indian students.",
  },
  hostel: {
    availability: "Available",
    description: "Students are accommodated in multi-story hostels built specifically for the academy. Students actively participate in campus life, with access to sports facilities and modern digital classrooms.",
  },
  departments: [
    "Hospital Surgery", "Traumatology", "Orthopedic Surgery", "Military Surgery", "Mental Disorder Studies"
  ],
  affiliatedHospitals: [
    "Zabaykalsky Regional Clinical Hospital", "Chita City Hospital", "Academy Dental Clinic"
  ],
  gallery: [
      { src: '/images/gallery/chita-campus.jpg', alt: 'Chita State Medical Academy' },
  ],
  annualFees: "$2,800 USD (Approx.)",
},
{
  name: "Chuvash State University (I.N. Ulyanov)",
  slug: "chuvash-state-university",
  location: "Cheboksary, Russia",
  image: '/images/chuvash.webp',
  alt: "Main building of Chuvash State University",
  official_website: "https://www.chuvsu.ru/",
  description: "Founded in 1967, Chuvash State University is an innovative educational center. Its Faculty of Medicine is particularly famous among international students because it houses the largest anatomy museum in the region, featuring over 700 original organs and human bodies for practical study.",
  establishedYear: 1967,
  recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "ECFMG", "USMLE Valid"],
  mediumOfInstruction: "English",
  courseDurations: [
    { name: "General Medicine (MBBS)", duration: "6 Years" },
    { name: "Dentistry", duration: "5 Years" },
    { name: "Pediatrics", duration: "6 Years" }
  ],
  academicSession: "Starts from September 1st",
  eligibility: {
    academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
    neet: "NEET qualification is mandatory for Indian students.",
  },
  hostel: {
    availability: "Available",
    description: "The university offers several comfortable hostels with strict security. Indian students benefit from a large existing community and accessible Indian food options nearby.",
  },
  departments: [
    "Anatomy", "Chemistry and Pharmacy", "Pediatrics", "Dentistry", "Nursing", "General Medicine"
  ],
  affiliatedHospitals: [
    "Cheboksary City Clinical Hospital", "Chuvash Republic Medical Center", "University Dental Clinic"
  ],
  gallery: [
      { src: '/images/gallery/chuvash-campus.jpg', alt: 'Chuvash State University Campus' },
  ],
  annualFees: "$3,200 USD (Approx.)",
},
{
  name: "Crimea Federal University (S.I. Georgievsky Medical Academy)",
  slug: "crimea-federal-university",
  location: "Simferopol, Russia",
  image: '/images/crimea.webp',
  alt: "Crimea Federal University Medical Academy",
  official_website: "https://eng.cfuv.ru/",
  description: "Tracing its roots back to 1918, Crimea Federal University boasts over a century of academic legacy. The S.I. Georgievsky Medical Academy is recognized globally and has been teaching international students in English for over 20 years, resulting in a very high FMGE (Medical Board) passing rate.",
  establishedYear: 1918,
  recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "WDOMS"],
  mediumOfInstruction: "English",
  courseDurations: [
    { name: "General Medicine (MBBS)", duration: "6 Years" },
    { name: "Dentistry", duration: "5 Years" },
    { name: "Pharmacy", duration: "5 Years" }
  ],
  academicSession: "Starts from September 1st",
  eligibility: {
    academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
    neet: "NEET qualification is mandatory for Indian students.",
  },
  hostel: {
    availability: "Available",
    description: "The university features dedicated floor-wise hostel facilities for boys and girls. The campus includes a beautiful church, sports complexes, and cultural areas.",
  },
  departments: [
    "General Medicine", "Post-graduate Specialization", "Pharmacy", "Pediatrics", "Dentistry"
  ],
  affiliatedHospitals: [
    "Simferopol City Clinical Hospital", "Crimean Republican Medical Center", "University Clinical Hospital"
  ],
  gallery: [
      { src: '/images/gallery/crimea-campus.jpg', alt: 'Crimea Federal University Campus' },
  ],
  annualFees: "$3,500 USD (Approx.)",
},
{
  name: "Dagestan State Medical University",
  slug: "dagestan-state-medical-university",
  location: "Makhachkala, Russia",
  image: '/images/dagestan.webp',
  alt: "Dagestan State Medical University campus",
  official_website: "https://dagsmu.com/",
  description: "Founded in 1932 in the picturesque city of Makhachkala near the Caspian Sea, Dagestan State Medical University has trained over 27,000 successful doctors. It is celebrated for its highly disciplined academic environment, multicultural student body, and strong clinical training bases.",
  establishedYear: 1932,
  recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "FAIMER", "ECFMG"],
  mediumOfInstruction: "English",
  courseDurations: [
    { name: "General Medicine (MBBS)", duration: "6 Years" },
    { name: "Dentistry", duration: "5 Years" },
    { name: "Preventive Medicine", duration: "6 Years" }
  ],
  academicSession: "Starts from September 1st",
  eligibility: {
    academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
    neet: "NEET qualification is mandatory for Indian students.",
  },
  hostel: {
    availability: "Available",
    description: "DSMU provides safe, centrally heated hostels. The campus has an active student community with various cultural and sporting events organized year-round.",
  },
  departments: [
    "General Medicine", "Pediatrics", "Dentistry", "Preventive Medicine", "Pharmacy"
  ],
  affiliatedHospitals: [
    "Makhachkala City Clinical Hospital", "Dagestan Republican Clinical Hospital", "DSMU Diagnostic Center"
  ],
  gallery: [
      { src: '/images/gallery/dagestan-campus.jpg', alt: 'Dagestan State Medical University' },
  ],
  annualFees: "$3,600 USD (Approx.)",
},
{
  name: "Far Eastern Federal University",
  slug: "far-eastern-federal-university",
  location: "Vladivostok, Russia",
  image: '/images/fefu.webp',
  alt: "Far Eastern Federal University modern campus",
  official_website: "https://www.dvfu.ru/en/",
  description: "Established in 1899, FEFU is one of Russia's most modern and prestigious educational institutions. Its magnificent campus on Russky Island is world-renowned. The university offers high-quality medical education with highly advanced clinical research facilities and technological integration.",
  establishedYear: 1899,
  recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
  mediumOfInstruction: "English",
  courseDurations: [
    { name: "General Medicine (MBBS)", duration: "6 Years" },
    { name: "Medical Biophysics", duration: "5.5 Years" }
  ],
  academicSession: "Starts from September 1st",
  eligibility: {
    academic: "An aggregate of 60% marks in Physics, Chemistry, & Biology in 12th standard (Slightly higher requirement than average).",
    neet: "NEET qualification is mandatory for Indian students.",
  },
  hostel: {
    availability: "Available",
    description: "FEFU boasts a sprawling, ultra-modern campus built for the APEC summit. Hostels are luxurious by standard definitions, featuring sea views, modern amenities, and extensive recreational facilities.",
  },
  departments: [
    "Clinical Medicine", "Biomedicine", "Pharmacy", "Public Health", "Biophysics"
  ],
  affiliatedHospitals: [
    "FEFU Medical Center (A highly advanced, world-class hospital on campus)", "Vladivostok Clinical Hospital"
  ],
  gallery: [
      { src: '/images/gallery/fefu-campus.jpg', alt: 'FEFU Campus on Russky Island' },
  ],
  annualFees: "$4,100 USD (Approx.)",
},
{
  name: "Ingush State University",
  slug: "ingush-state-university",
  location: "Magas, Russia",
  image: '/images/ingush.webp',
  alt: "Ingush State University building",
  official_website: "https://inggu.ru/",
  description: "Founded in 1994, Ingush State University is one of the youngest but fastest-growing public universities in Russia. With a modern approach to education, it has quickly become the largest higher education institution in its region, offering excellent clinical programs and modern dormitories.",
  establishedYear: 1994,
  recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
  mediumOfInstruction: "English and Russian",
  courseDurations: [
    { name: "General Medicine (MBBS)", duration: "6 Years" },
    { name: "Pediatrics", duration: "6 Years" }
  ],
  academicSession: "Starts from September 1st",
  eligibility: {
    academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
    neet: "NEET qualification is mandatory for Indian students.",
  },
  hostel: {
    availability: "Available",
    description: "The university offers a vast academic structure including recently built, well-furnished hostels. Students have access to a canteen, sports areas, and labs directly on campus.",
  },
  departments: [
    "Fundamental Medical Sciences", "Clinical Anatomy", "Internal Medicine", "Surgery", "Pediatrics"
  ],
  affiliatedHospitals: [
    "Ingushetia Republican Clinical Hospital", "Magas City Hospital"
  ],
  gallery: [
      { src: '/images/gallery/ingush-campus.jpg', alt: 'Ingush State University' },
  ],
  annualFees: "$2,600 USD (Approx.)",
},
// ==========================================
  // NEW UNIVERSITIES (Batch 3: 16 to 25)
  // ==========================================
  {
    name: "I.M. Sechenov First Moscow State Medical University",
    slug: "sechenov-first-moscow-state-medical-university",
    location: "Moscow, Russia",
    image: '/images/sechenov-first.webp',
    alt: "I.M. Sechenov First Moscow State Medical University",
    official_website: "https://www.sechenov.ru/eng/",
    description: "Often referred to simply as Sechenov University, it is the oldest, largest, and leading Russian medical university, founded in 1758. It is an internationally recognized hub for medical science and training, offering unparalleled clinical exposure and top-tier research facilities in the heart of Moscow.",
    establishedYear: 1758,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "ECFMG"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" },
      { name: "Pharmacy", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Provides highly secure, premium hostel accommodations within Moscow. Facilities include study rooms, high-speed internet, and shared kitchens, making it highly comfortable for international students.",
    },
    departments: [
      "Internal Medicine", "Surgery", "Pediatrics", "Cardiology", "Neurology", "Oncology"
    ],
    affiliatedHospitals: [
      "Sechenov University Clinical Center", "University Children's Clinical Hospital", "Botkin Hospital"
    ],
    gallery: [
        { src: '/images/gallery/sechenov-main.jpg', alt: 'Sechenov University Main Building' },
        { src: '/images/gallery/sechenov-lab.jpg', alt: 'Sechenov Clinical Laboratory' },
    ],
    annualFees: "$9,500 USD (Approx.)",
  },
  {
    name: "Irkutsk State Medical University",
    slug: "irkutsk-state-medical-university",
    location: "Irkutsk, Russia",
    image: '/images/irkutsk.webp',
    alt: "Irkutsk State Medical University main campus",
    official_website: "https://ismu.baikal.ru/",
    description: "Established in 1919, Irkutsk State Medical University is one of the oldest higher medical education institutions in Eastern Siberia. It has a rich tradition of training highly qualified doctors and features extensive clinical bases in the beautiful region near Lake Baikal.",
    establishedYear: 1919,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English and Russian",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Pediatrics", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard (40% for reserved categories).",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Comfortable dormitory facilities are provided with centralized heating. The university ensures a safe environment with easy access to city transport and Indian dining options.",
    },
    departments: [
      "Human Anatomy", "Pathology", "General Surgery", "Internal Diseases", "Pediatrics"
    ],
    affiliatedHospitals: [
      "Irkutsk Regional Clinical Hospital", "City Clinical Hospital No. 1", "Irkutsk Diagnostic Center"
    ],
    gallery: [
        { src: '/images/gallery/irkutsk-campus.jpg', alt: 'Irkutsk Medical University Campus' },
    ],
    annualFees: "$3,500 USD (Approx.)",
  },
  {
    name: "Izhevsk State Medical Academy",
    slug: "izhevsk-state-medical-academy",
    location: "Izhevsk, Russia",
    image: '/images/izhevsk.webp',
    alt: "Izhevsk State Medical Academy",
    official_website: "https://igma.ru/",
    description: "Founded in 1933, Izhevsk State Medical Academy is a leading educational and scientific medical center in the Udmurt Republic. It has trained over 25,000 doctors and is well-regarded for its hands-on clinical training and welcoming environment for international students.",
    establishedYear: 1933,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "The academy offers fully furnished hostels with 24/7 security, reading rooms, and recreation centers. Shared kitchens and nearby supermarkets make daily life convenient.",
    },
    departments: [
      "Morphology", "Physiology", "General Surgery", "Obstetrics and Gynecology", "Therapy"
    ],
    affiliatedHospitals: [
      "Republican Clinical Hospital (Izhevsk)", "City Hospital No. 2", "Igma Dental Clinic"
    ],
    gallery: [
        { src: '/images/gallery/izhevsk-campus.jpg', alt: 'Izhevsk State Medical Academy' },
    ],
    annualFees: "$4,000 USD (Approx.)",
  },
  {
    name: "Immanuel Kant Baltic Federal University",
    slug: "immanuel-kant-baltic-federal-university",
    location: "Kaliningrad, Russia",
    image: '/images/immanuel-kant.webp',
    alt: "Immanuel Kant Baltic Federal University campus",
    official_website: "https://eng.kantiana.ru/",
    description: "IKBFU is a prestigious federal university located in Kaliningrad, a unique Russian exclave in Europe. The Medical Institute at IKBFU combines European educational standards with classic Russian medical training, utilizing ultra-modern simulation centers.",
    establishedYear: 1947,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "FAIMER"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "The university boasts European-style dormitories equipped with modern appliances, en-suite options, and high-speed Wi-Fi, located in one of Russia's most beautiful and safe cities.",
    },
    departments: [
      "Fundamental Medicine", "Clinical Medicine", "Surgery", "Psychiatry", "Public Health"
    ],
    affiliatedHospitals: [
      "Kaliningrad Regional Clinical Hospital", "Federal Center for Cardiovascular Surgery", "IKBFU Clinical Center"
    ],
    gallery: [
        { src: '/images/gallery/kant-campus.jpg', alt: 'IKBFU European-style Campus' },
    ],
    annualFees: "$4,200 USD (Approx.)",
  },
  {
    name: "Kazan Federal University",
    slug: "kazan-federal-university",
    location: "Kazan, Russia",
    image: '/images/kazan-federal.webp',
    alt: "Main building of Kazan Federal University",
    official_website: "https://kpfu.ru/eng",
    description: "Founded in 1804, Kazan Federal University is one of the oldest and highest-ranking universities in Russia. Its Institute of Fundamental Medicine and Biology is highly prestigious, offering a cutting-edge curriculum heavily focused on biotechnology, genomics, and clinical practice.",
    establishedYear: 1804,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" },
      { name: "Pharmacy", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "KFU houses students in the Universiade Village, often considered one of the best and most modern student campuses in Russia, functioning like a self-sufficient mini-city.",
    },
    departments: [
      "Morphology and General Pathology", "Fundamental and Clinical Pharmacology", "Surgical Diseases", "Internal Medicine"
    ],
    affiliatedHospitals: [
      "KFU University Clinic", "Republican Clinical Hospital", "Interregional Clinical Diagnostic Center"
    ],
    gallery: [
        { src: '/images/gallery/kazan-federal-campus.jpg', alt: 'Kazan Federal University' },
        { src: '/images/gallery/kazan-universiade.jpg', alt: 'Universiade Village Hostels' },
    ],
    annualFees: "$5,500 USD (Approx.)",
  },
  {
    name: "Kazan State Medical University",
    slug: "kazan-state-medical-university-2",
    location: "Kazan, Russia",
    image: '/images/kazan-smu.webp',
    alt: "Kazan State Medical University",
    official_website: "https://kazangmu.ru/eng",
    description: "With over 200 years of history, Kazan State Medical University is a top-tier, government-funded institution. It is highly favored by international students for its strict academic standards, extensive practical training across 54 hospitals, and vibrant student life in Tatarstan's capital.",
    establishedYear: 1814,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "ECFMG", "GMC"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Provides six well-maintained hostels with reading rooms and gyms. Dedicated international student support ensures a smooth transition to Russian student life.",
    },
    departments: [
      "Normal Anatomy", "Biochemistry", "General Surgery", "Obstetrics & Gynecology", "Pediatrics"
    ],
    affiliatedHospitals: [
      "Republican Clinical Hospital (Kazan)", "Emergency Medicine Center", "Kazan Children's Hospital"
    ],
    gallery: [
        { src: '/images/gallery/ksmu-campus.jpg', alt: 'KSMU Main Building' },
    ],
    annualFees: "$6,500 USD (Approx.)",
  },
  {
    name: "Khabarovsk State Medical Institute",
    slug: "khabarovsk-state-medical-institute",
    location: "Khabarovsk, Russia",
    image: '/images/khabarovsk.webp',
    alt: "Khabarovsk State Medical Institute campus",
    official_website: "https://www.fesmu.ru/",
    description: "Also known as Far Eastern State Medical University, this institute was founded in 1929. It serves as a major medical and scientific hub for the Russian Far East, known for its rigorous training and excellent facilities for research in unique climatic medical conditions.",
    establishedYear: 1929,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English and Russian",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Pediatrics", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Students are housed in standard university dormitories. Rooms are centrally heated and shared, with common kitchens and laundry facilities on each floor.",
    },
    departments: [
      "Therapy", "Surgery", "Pediatrics", "Infectious Diseases", "Public Health"
    ],
    affiliatedHospitals: [
      "Khabarovsk Regional Hospital No. 1", "City Clinical Hospital No. 2"
    ],
    gallery: [
        { src: '/images/gallery/khabarovsk-campus.jpg', alt: 'Far Eastern State Medical University' },
    ],
    annualFees: "$3,600 USD (Approx.)",
  },
  {
    name: "Khanty-Mansiysk State Medical Academy",
    slug: "khanty-mansiysk-state-medical-academy",
    location: "Khanty-Mansiysk, Russia",
    image: '/images/khanty-mansiysk.webp',
    alt: "Khanty-Mansiysk State Medical Academy",
    official_website: "http://hmgma.ru/",
    description: "Founded in 1994, this academy is a relatively young but rapidly modernizing institution located in the wealthy oil-producing region of Yugra. It is heavily funded, offering students access to highly advanced simulation centers and state-of-the-art regional hospitals.",
    establishedYear: 1994,
    recognition: ["Ministry of Health of the Russian Federation", "World Health Organization (WHO)"],
    mediumOfInstruction: "Russian (English support available)",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Because it is a heavily funded academy, the dormitories are known for being modern, highly comfortable, and very secure.",
    },
    departments: [
      "Clinical Medicine", "Anatomy", "Surgical Diseases", "Internal Therapy"
    ],
    affiliatedHospitals: [
      "Yugra Regional Clinical Hospital", "Khanty-Mansiysk Clinical Center"
    ],
    gallery: [
        { src: '/images/gallery/khanty-campus.jpg', alt: 'Khanty-Mansiysk Medical Academy' },
    ],
    annualFees: "$3,800 USD (Approx.)",
  },
  {
    name: "Kabardino-Balkarian State University (Medical Faculty)",
    slug: "kabardino-balkarian-state-university",
    location: "Nalchik, Russia",
    image: '/images/kabardino.webp',
    alt: "Kabardino-Balkarian State University Medical Faculty",
    official_website: "https://eng.kbsu.ru/",
    description: "Established in 1957 in the beautiful, safe resort city of Nalchik, KBSU's Medical Faculty is incredibly popular among international students. It offers a very affordable fee structure, high NMC passing ratios, and a mild climate compared to the rest of Russia.",
    establishedYear: 1957,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard (40% for reserved categories).",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Features newly renovated hostels with excellent security. Indian food is easily accessible through university-managed mess facilities, creating a 'home away from home' experience.",
    },
    departments: [
      "Normal Anatomy", "Microbiology", "General Surgery", "Cardiology", "Traumatology"
    ],
    affiliatedHospitals: [
      "Republican Clinical Hospital Nalchik", "City Hospital No. 1"
    ],
    gallery: [
        { src: '/images/gallery/kabardino-campus.jpg', alt: 'KBSU Campus in Nalchik' },
    ],
    annualFees: "$3,200 USD (Approx.)",
  },
  {
    name: "Kemerovo State University",
    slug: "kemerovo-state-university",
    location: "Kemerovo, Russia",
    image: '/images/kemerovo.webp',
    alt: "Kemerovo State University campus",
    official_website: "https://kemsu.ru/",
    description: "Kemerovo State University, established in 1973, is a prominent regional university in Siberia. While primarily known as a comprehensive university, its medical programs are gaining traction for offering rigorous scientific training integrated with advanced biological and health sciences.",
    establishedYear: 1973,
    recognition: ["Ministry of Science and Higher Education of the Russian Federation", "World Health Organization (WHO)"],
    mediumOfInstruction: "Russian and English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Pediatrics", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Hostels are centrally located with good access to academic buildings and public transport. Facilities include sports halls, study areas, and student cafes.",
    },
    departments: [
      "Fundamental Medicine", "Biology and Genetics", "Internal Diseases", "Public Health"
    ],
    affiliatedHospitals: [
      "Kemerovo Regional Clinical Hospital", "Kuzbass Cardiology Center"
    ],
    gallery: [
        { src: '/images/gallery/kemerovo-campus.jpg', alt: 'Kemerovo State University' },
    ],
    annualFees: "$3,400 USD (Approx.)",
  },
  // ==========================================
  // NEW UNIVERSITIES (Batch 4: 26 to 35)
  // ==========================================
  {
    name: "S. M. Kirov Military Medical Academy",
    slug: "kirov-military-medical-academy",
    location: "Saint Petersburg, Russia",
    image: '/images/kirov-military.webp',
    alt: "Kirov Military Medical Academy",
    official_website: "https://www.vmeda.org/",
    description: "Founded in 1798, this is the oldest military medical academy in Russia. While primarily focused on training medical personnel for the Russian Armed Forces, its civilian faculties and immense historical contributions to medical science make it a legendary institution with world-class trauma and military surgery departments.",
    establishedYear: 1798,
    recognition: ["Ministry of Defense of the Russian Federation", "Ministry of Health of the Russian Federation"],
    mediumOfInstruction: "Russian",
    courseDurations: [
      { name: "General Medicine", duration: "6 Years" },
      { name: "Military Medicine", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "Strict admission criteria due to military status; usually requires an aggregate of 50%+ in PCB.",
      neet: "Required for Indian students applying to civilian equivalent programs (if available).",
    },
    hostel: {
      availability: "Available",
      description: "Accommodations are heavily disciplined and secure, reflecting the military nature of the institution.",
    },
    departments: [
      "Military Field Surgery", "Traumatology and Orthopedics", "Aero-Space Medicine", "Naval Medicine"
    ],
    affiliatedHospitals: [
      "Military Medical Academy Clinical Center", "Various Military District Hospitals"
    ],
    gallery: [
        { src: '/images/gallery/kirov-military-campus.jpg', alt: 'Kirov Military Medical Academy' },
    ],
    annualFees: "$5,000 USD (Approx. for civilian programs)",
  },
  {
    name: "Kirov State Medical University",
    slug: "kirov-state-medical-university",
    location: "Kirov, Russia",
    image: '/images/kirov-state.webp',
    alt: "Kirov State Medical University",
    official_website: "https://kirovgma.ru/",
    description: "Established in 1987, Kirov State Medical University is a modern, rapidly developing university in the Kirov region. It is well-known for its strong faculty, affordable tuition, and a welcoming, peaceful environment that is highly conducive to intense medical studies.",
    establishedYear: 1987,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English and Russian",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Pediatrics", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Provides three comfortable, well-equipped dormitories near the main academic buildings, featuring reading halls, gyms, and 24-hour security.",
    },
    departments: [
      "Internal Medicine", "Surgery", "Pediatrics", "Psychiatry", "Anatomy"
    ],
    affiliatedHospitals: [
      "Kirov Regional Clinical Hospital", "Kirov Clinical Hospital No. 3"
    ],
    gallery: [
        { src: '/images/gallery/kirov-state-campus.jpg', alt: 'Kirov State Medical University Campus' },
    ],
    annualFees: "$3,200 USD (Approx.)",
  },
  {
    name: "Krasnoyarsk State Medical University (Prof. V.F. Voino-Yasenetsky)",
    slug: "krasnoyarsk-state-medical-university",
    location: "Krasnoyarsk, Russia",
    image: '/images/krasnoyarsk.webp',
    alt: "Krasnoyarsk State Medical University",
    official_website: "https://krasgmu.ru/",
    description: "Founded in 1942, this university is a leading medical and scientific center in Siberia. Its General Medicine Faculty in English has gained massive popularity among international students due to its high-tech simulation centers and integration with European medical education standards.",
    establishedYear: 1942,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "FAIMER"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Students are provided with safe, warm, and comfortable hostel rooms. The campus has excellent sports facilities and student cafeterias offering diverse cuisines.",
    },
    departments: [
      "Fundamental Medicine", "Surgical Diseases", "Pediatrics", "Dentistry", "Pharmacy"
    ],
    affiliatedHospitals: [
      "Krasnoyarsk Regional Clinical Hospital", "City Clinical Hospital No. 20"
    ],
    gallery: [
        { src: '/images/gallery/krasnoyarsk-campus.jpg', alt: 'Krasnoyarsk Medical University' },
    ],
    annualFees: "$4,500 USD (Approx.)",
  },
  {
    name: "Kuban State Medical University",
    slug: "kuban-state-medical-university",
    location: "Krasnodar, Russia",
    image: '/images/kuban.webp',
    alt: "Kuban State Medical University",
    official_website: "https://ksma.ru/",
    description: "Established in 1920, Kuban State Medical University is located in the warm, southern city of Krasnodar. It is one of the top 10 medical universities in Russia, famous for its practical training approach, large botanical garden for pharmacology, and exceptionally high NMC screening test pass rates.",
    establishedYear: 1920,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" },
      { name: "Pharmacy", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "The university offers standard dormitory accommodations within a short walking distance from the main campus. Krasnodar's mild climate makes it highly favorable for Indian students.",
    },
    departments: [
      "Normal Anatomy", "Pathological Anatomy", "General Surgery", "Obstetrics and Gynecology", "Pediatrics"
    ],
    affiliatedHospitals: [
      "Krasnodar Regional Clinical Hospital", "Center for Thoracic Surgery", "Krasnodar Maternity Hospital"
    ],
    gallery: [
        { src: '/images/gallery/kuban-campus.jpg', alt: 'Kuban State Medical University' },
    ],
    annualFees: "$3,800 USD (Approx.)",
  },
  {
    name: "Kursk State Medical University",
    slug: "kursk-state-medical-university",
    location: "Kursk, Russia",
    image: '/images/kursk.webp',
    alt: "Kursk State Medical University",
    official_website: "https://kurskmed.com/en",
    description: "Established in 1935, KSMU holds the distinction of being the first university in Russia to begin teaching the MBBS program entirely in English. It has one of the largest international student populations in Russia, offering incredible support, Indian mess facilities, and world-class simulation labs.",
    establishedYear: 1935,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "GMC", "USMLE"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" },
      { name: "Pharmacy", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "KSMU provides six fully furnished hostels. They are highly secure, centrally heated, and surrounded by essential amenities including authentic Indian restaurants.",
    },
    departments: [
      "Human Anatomy", "Histology", "General Surgery", "Internal Medicine", "Pharmacology"
    ],
    affiliatedHospitals: [
      "Kursk Regional Clinical Hospital", "City Clinical Hospital No. 4", "Regional Perinatal Center"
    ],
    gallery: [
        { src: '/images/gallery/kursk-campus.jpg', alt: 'Kursk State Medical University' },
    ],
    annualFees: "$5,100 USD (Approx.)",
  },
  {
    name: "Mari State University",
    slug: "mari-state-university",
    location: "Yoshkar-Ola, Russia",
    image: '/images/mari-state.webp',
    alt: "Mari State University campus",
    official_website: "https://marsu.ru/en/",
    description: "Founded in 1972, Mari State University is highly popular among international medical aspirants due to its incredibly low tuition fees combined with high-quality education. The university is a member of the Volga Region's Association of Classical Universities and provides excellent clinical exposure.",
    establishedYear: 1972,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "ECFMG"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Offers safe and comfortable hostel accommodations with CCTV surveillance. The hostels have reading rooms, recreation areas, and Indian food is readily available in the mess.",
    },
    departments: [
      "Fundamental Medicine", "Clinical Medicine", "Anatomy", "Physiology", "Pathology"
    ],
    affiliatedHospitals: [
      "Yoshkar-Ola City Hospital", "Republican Clinical Hospital (Mari El)"
    ],
    gallery: [
        { src: '/images/gallery/mari-campus.jpg', alt: 'Mari State University' },
    ],
    annualFees: "$3,300 USD (Approx.)",
  },
  {
    name: "M.K. Ammosov Sakha (Yakutsk) State University (North-Eastern Federal University)",
    slug: "ammosov-sakha-state-university",
    location: "Yakutsk, Russia",
    image: '/images/ammosov-sakha.webp',
    alt: "North-Eastern Federal University campus",
    official_website: "https://www.s-vfu.ru/en/",
    description: "Now officially part of the North-Eastern Federal University (NEFU), the Medical Institute in Yakutsk has been training doctors since 1957. Located in one of the coldest cities on earth, it boasts highly specialized research in human adaptation to extreme climates and robust clinical training facilities.",
    establishedYear: 1956,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "Russian and English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Pediatrics", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "The university provides heavily insulated, modern, and warm dormitories designed specifically to withstand the extreme Siberian winters comfortably.",
    },
    departments: [
      "Normal and Pathological Anatomy", "Therapy", "Surgery", "Pediatrics", "Traumatology"
    ],
    affiliatedHospitals: [
      "National Medical Center of the Sakha Republic", "Yakutsk City Clinical Hospital"
    ],
    gallery: [
        { src: '/images/gallery/yakutsk-campus.jpg', alt: 'NEFU Campus in Yakutsk' },
    ],
    annualFees: "$3,800 USD (Approx.)",
  },
  {
    name: "Moscow Medical Stomatology Institute (Faculty of Medicine)",
    slug: "moscow-medical-stomatology-institute",
    location: "Moscow, Russia",
    image: '/images/msumd-faculty.webp',
    alt: "Moscow Medical Stomatology Institute",
    official_website: "https://www.msmsu.ru/eng/",
    description: "Historically a dedicated institute for dentistry, it has evolved into a premier multidisciplinary medical university. The Faculty of Medicine offers world-class training in General Medicine, utilizing the massive clinical infrastructure of Moscow's capital healthcare system.",
    establishedYear: 1922,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English and Russian",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Accommodation is provided in dedicated Moscow dormitories with standard student amenities, shared kitchens, and high security.",
    },
    departments: [
      "Internal Diseases", "Surgical Diseases", "Traumatology", "Cardiology"
    ],
    affiliatedHospitals: [
      "Yevdokimov Clinical Center", "Moscow City Clinical Hospital No. 50"
    ],
    gallery: [
        { src: '/images/gallery/msumd-faculty.jpg', alt: 'Medical Faculty Building' },
    ],
    annualFees: "$6,500 USD (Approx.)",
  },
  {
    name: "Moscow State University of Medicine and Dentistry (A.I. Yevdokimov)",
    slug: "moscow-state-university-medicine-dentistry",
    location: "Moscow, Russia",
    image: '/images/msumd.webp',
    alt: "Moscow State University of Medicine and Dentistry",
    official_website: "https://www.msmsu.ru/eng/",
    description: "Also known as MSUMD, this is the leading university in Russia for Dentistry and one of the top institutions for General Medicine. It commands immense respect globally and is deeply integrated with Russia's top dental and medical research laboratories.",
    establishedYear: 1922,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "Dental Council of India (DCI)"],
    mediumOfInstruction: "English and Russian",
    courseDurations: [
      { name: "Dentistry (BDS)", duration: "5 Years" },
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Clinical Psychology", duration: "5.5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Offers safe and modern hostel facilities within Moscow. The hostels are equipped with internet, reading halls, and leisure spaces.",
    },
    departments: [
      "Therapeutic Dentistry", "Surgical Dentistry", "Orthodontics", "General Surgery", "Anatomy"
    ],
    affiliatedHospitals: [
      "MSUMD Clinical Center of Dentistry", "Center of Maxillofacial Surgery"
    ],
    gallery: [
        { src: '/images/gallery/msumd-main.jpg', alt: 'MSUMD Main Building' },
    ],
    annualFees: "$7,000 USD (Approx.)",
  },
  {
    name: "Lomonosov Moscow State University (Faculty of Fundamental Medicine)",
    slug: "moscow-state-university-lomonosov",
    location: "Moscow, Russia",
    image: '/images/lomonosov.webp',
    alt: "Lomonosov Moscow State University Main Building",
    official_website: "https://www.msu.ru/en/",
    description: "Lomonosov Moscow State University is the highest-ranked, most prestigious university in Russia. Its Faculty of Fundamental Medicine offers a highly elite, rigorous medical program that heavily emphasizes scientific research, biomedicine, and next-generation clinical technologies.",
    establishedYear: 1755,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "ECFMG"],
    mediumOfInstruction: "Russian (Requires intensive preparatory language year)",
    courseDurations: [
      { name: "General Medicine (MBBS/MD)", duration: "6 Years" },
      { name: "Pharmacy", duration: "5.5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "Extremely competitive. Requires exceptional high school grades and passing internal university entrance exams.",
      neet: "NEET qualification required for Indian applicants.",
    },
    hostel: {
      availability: "Available",
      description: "Students live in the historic, iconic main building of MSU or modern adjacent dormitories, offering a world-class, intellectually stimulating campus environment.",
    },
    departments: [
      "Internal Medicine", "Surgery", "Biophysics", "Pharmacology", "Fundamental Medical Science"
    ],
    affiliatedHospitals: [
      "MSU Medical Research and Educational Center", "Leading Federal Medical Centers in Moscow"
    ],
    gallery: [
        { src: '/images/gallery/lomonosov-campus.jpg', alt: 'Lomonosov MSU Iconic Building' },
    ],
    annualFees: "$8,500 USD (Approx.)",
  },
  {
    name: "North Caucasian State Academy",
    slug: "north-caucasian-state-academy",
    location: "Cherkessk, Russia",
    image: '/images/north-caucasian.webp',
    alt: "North Caucasian State Academy",
    official_website: "https://ncsa.ru/",
    description: "Located in the beautiful region of Karachay-Cherkessia, the North Caucasian State Academy's Medical Institute is known for its highly affordable tuition, peaceful study environment, and supportive faculty dedicated to international medical graduates.",
    establishedYear: 1938,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "The academy provides clean, basic dormitory accommodations. It is known for having a tight-knit international student community that organizes cultural events and communal dining.",
    },
    departments: [
      "Anatomy and Physiology", "Clinical Disciplines", "Surgical Diseases", "Pediatrics"
    ],
    affiliatedHospitals: [
      "Cherkessk City Clinical Hospital", "Karachay-Cherkessian Republican Hospital"
    ],
    gallery: [
        { src: '/images/gallery/ncsa-campus.jpg', alt: 'North Caucasian State Academy' },
    ],
    annualFees: "$2,500 USD (Approx.)",
  },
  // ==========================================
  // NEW UNIVERSITIES (Batch 5: 36 to 49 - Adjusted for duplicates)
  // ==========================================
  {
    name: "Northern State Medical University",
    slug: "northern-state-medical-university",
    location: "Arkhangelsk, Russia",
    image: '/images/northern-state.webp',
    alt: "Northern State Medical University campus",
    official_website: "http://www.nsmu.ru/eng/",
    description: "Located in Arkhangelsk, Northern State Medical University is a recognized center of medical education and research in the European North of Russia. Since 1932, it has offered a welcoming environment for international students, with strong partnerships with universities across Europe.",
    establishedYear: 1932,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" },
      { name: "Pediatrics", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "NSMU offers three comfortable student hostels with well-furnished rooms, reading halls, and internet access. The campus is well-connected to city infrastructure.",
    },
    departments: [
      "Human Anatomy", "Medical Biology", "General Surgery", "Internal Diseases", "Pediatrics"
    ],
    affiliatedHospitals: [
      "Arkhangelsk Regional Clinical Hospital", "First City Clinical Hospital"
    ],
    gallery: [
        { src: '/images/gallery/northern-campus.jpg', alt: 'Northern State Medical University' },
    ],
    annualFees: "$4,200 USD (Approx.)",
  },
  {
    name: "Nizhny Novgorod State Medical Academy (Faculty of Medicine)",
    slug: "nizhny-novgorod-state-medical-academy",
    location: "Nizhny Novgorod, Russia",
    image: '/images/nizhny-novgorod.webp',
    alt: "Nizhny Novgorod State Medical Academy",
    official_website: "https://pimunn.ru/en/",
    description: "Note: Officially renamed to Privolzhsky Research Medical University (PRMU), this institution remains one of the most prestigious and highly demanded medical academies in the Volga region, renowned for its excellent English-medium MBBS program and advanced research facilities.",
    establishedYear: 1920,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Offers safe, centrally heated hostels with Indian mess facilities available on campus to accommodate the large international student community.",
    },
    departments: [
      "Morphology", "Pathology", "Internal Medicine", "Surgical Diseases", "Obstetrics and Gynecology"
    ],
    affiliatedHospitals: [
      "Nizhny Novgorod Regional Hospital", "Academy Clinical Center"
    ],
    gallery: [
        { src: '/images/gallery/nizhny-campus.jpg', alt: 'Nizhny Novgorod Medical Academy' },
    ],
    annualFees: "$4,500 USD (Approx.)",
  },
  {
    name: "North Ossetian State Medical Academy",
    slug: "north-ossetian-state-medical-academy",
    location: "Vladikavkaz, Russia",
    image: '/images/north-ossetian.webp',
    alt: "North Ossetian State Medical Academy",
    official_website: "https://nosma.ru/",
    description: "Founded in 1939, North Ossetian State Medical Academy is situated in the scenic foothills of the Caucasus Mountains. It provides an excellent, low-cost medical education with a strong emphasis on practical clinical skills and community health.",
    establishedYear: 1939,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Provides basic but comfortable dormitory accommodations. The city is known for being affordable, peaceful, and highly welcoming to international students.",
    },
    departments: [
      "Human Anatomy", "Histology", "General Surgery", "Internal Diseases", "Traumatology"
    ],
    affiliatedHospitals: [
      "Republican Clinical Hospital (Vladikavkaz)", "City Clinical Hospital"
    ],
    gallery: [
        { src: '/images/gallery/north-ossetian-campus.jpg', alt: 'North Ossetian Medical Academy' },
    ],
    annualFees: "$3,000 USD (Approx.)",
  },
  {
    name: "Yaroslav-the-Wise Novgorod State University (Faculty of Medicine)",
    slug: "novgorod-state-university",
    location: "Veliky Novgorod, Russia",
    image: '/images/novgorod.webp',
    alt: "Novgorod State University Medical Faculty",
    official_website: "https://www.novsu.ru/english/",
    description: "Located in one of Russia's most historic cities, Veliky Novgorod, this university offers a modern, high-quality medical program. The Institute of Medical Education is fully integrated with regional hospitals, ensuring extensive hands-on clinical exposure.",
    establishedYear: 1993,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English and Russian",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "The university provides modern, well-maintained hostels located near the academic buildings, featuring 24/7 security and recreational areas.",
    },
    departments: [
      "Fundamental Medicine", "Internal Medicine", "Surgical Diseases", "Pediatrics"
    ],
    affiliatedHospitals: [
      "Novgorod Regional Clinical Hospital", "Central City Hospital"
    ],
    gallery: [
        { src: '/images/gallery/novgorod-campus.jpg', alt: 'Novgorod State University' },
    ],
    annualFees: "$3,600 USD (Approx.)",
  },
  {
    name: "Novosibirsk State Medical University",
    slug: "novosibirsk-state-medical-university",
    location: "Novosibirsk, Russia",
    image: '/images/novosibirsk-smu.webp',
    alt: "Novosibirsk State Medical University",
    official_website: "https://ngmu.ru/",
    description: "Established in 1935, NSMU is a leading medical institution in Siberia, located in Russia's third-largest city. It boasts a large network of clinical bases and is highly reputed for its strict academic standards and excellent international student support.",
    establishedYear: 1935,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" },
      { name: "Pediatrics", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Offers safe and secure student dormitories. Living in Novosibirsk provides students with access to a vibrant, metropolitan lifestyle and excellent public transport.",
    },
    departments: [
      "Hospital Therapy", "Hospital Surgery", "Pediatrics", "Obstetrics and Gynecology", "Public Health"
    ],
    affiliatedHospitals: [
      "Novosibirsk Regional Clinical Hospital", "State Novosibirsk Clinical Hospital No. 1"
    ],
    gallery: [
        { src: '/images/gallery/novosibirsk-smu-campus.jpg', alt: 'Novosibirsk State Medical University' },
    ],
    annualFees: "$4,100 USD (Approx.)",
  },
  {
    name: "Novosibirsk State University (Vladimir Zelman Institute for Medicine and Psychology)",
    slug: "novosibirsk-state-university",
    location: "Novosibirsk, Russia",
    image: '/images/novosibirsk-state.webp',
    alt: "Novosibirsk State University Campus",
    official_website: "https://english.nsu.ru/",
    description: "Novosibirsk State University is one of Russia's elite institutions, located in the famous scientific research hub of Akademgorodok. The Vladimir Zelman Institute offers an incredibly rigorous, science-focused medical program tailored for future medical researchers and top-tier clinicians.",
    establishedYear: 1959,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard (Competitive entrance).",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Students live in the picturesque, forest-surrounded campus of Akademgorodok, which features high-quality dormitories, extensive sports facilities, and a highly academic environment.",
    },
    departments: [
      "Clinical Medicine", "Neurosciences", "Molecular Biology", "Psychology"
    ],
    affiliatedHospitals: [
      "Center of Clinical and Experimental Medicine", "Meshalkin National Medical Research Center"
    ],
    gallery: [
        { src: '/images/gallery/nsu-campus.jpg', alt: 'NSU Akademgorodok Campus' },
    ],
    annualFees: "$5,500 USD (Approx.)",
  },
  {
    name: "Ogarev Mordovia State University",
    slug: "ogarev-mordovia-state-university",
    location: "Saransk, Russia",
    image: '/images/ogarev-mordovia.webp',
    alt: "Ogarev Mordovia State University Main Building",
    official_website: "https://mrsu.ru/en/",
    description: "Located in the beautiful, clean, and safe city of Saransk, Ogarev Mordovia State University is incredibly popular among international medical students. The Medical Institute is known for its excellent infrastructure, highly supportive faculty, and massive Indian student community.",
    establishedYear: 1931,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" },
      { name: "Pediatrics", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Provides highly secure, comfortable hostels with dedicated Indian mess facilities. The campus environment is very active, celebrating international festivals regularly.",
    },
    departments: [
      "Human Anatomy", "Pathology", "General Surgery", "Internal Diseases", "Pediatrics"
    ],
    affiliatedHospitals: [
      "Mordovia Republican Clinical Hospital", "Saransk City Clinical Hospital No. 4"
    ],
    gallery: [
        { src: '/images/gallery/ogarev-campus.jpg', alt: 'Ogarev Mordovia State University' },
    ],
    annualFees: "$3,600 USD (Approx.)",
  },
  {
    name: "Orenburg State Medical University",
    slug: "orenburg-state-medical-university",
    location: "Orenburg, Russia",
    image: '/images/orenburg.webp',
    alt: "Orenburg State Medical University",
    official_website: "https://orgma.ru/",
    description: "Founded in 1944, Orenburg State Medical University is highly sought after by Indian students due to its exceptional track record in NMC (FMGE) passing ratios. It offers a structured English-medium program with heavy emphasis on daily clinical practice.",
    establishedYear: 1944,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "ECFMG"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" },
      { name: "Pediatrics", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "The university provides three hostels with 24/7 security. The presence of a large Indian student community means Indian dining and groceries are readily available.",
    },
    departments: [
      "Normal Anatomy", "Histology", "General Surgery", "Internal Medicine", "Pediatrics"
    ],
    affiliatedHospitals: [
      "Orenburg Regional Clinical Hospital", "Municipal Clinical Hospital No. 1"
    ],
    gallery: [
        { src: '/images/gallery/orenburg-campus.jpg', alt: 'Orenburg State Medical University' },
    ],
    annualFees: "$4,000 USD (Approx.)",
  },
  {
    name: "Orel State University (Medical Institute)",
    slug: "orel-state-university",
    location: "Oryol (Orel), Russia",
    image: '/images/orel.webp',
    alt: "Orel State University Medical Institute",
    official_website: "https://int.oreluniver.ru/",
    description: "Established in 1931, Orel State University is a Classical University offering a comprehensive Medical Institute. Located relatively close to Moscow, it offers European-standard education with modern clinical simulation centers at a very affordable fee structure.",
    establishedYear: 1931,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Pediatrics", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Students are housed in well-equipped university dormitories. The city of Oryol is known for being quiet, extremely safe, and perfect for focused studies.",
    },
    departments: [
      "Human Anatomy", "Pathological Physiology", "Internal Diseases", "Surgery", "Obstetrics"
    ],
    affiliatedHospitals: [
      "Orel Regional Clinical Hospital", "Botkin City Medical Center"
    ],
    gallery: [
        { src: '/images/gallery/orel-campus.jpg', alt: 'Orel State University' },
    ],
    annualFees: "$3,200 USD (Approx.)",
  },
  {
    name: "Pskov State University",
    slug: "pskov-state-university",
    location: "Pskov, Russia",
    image: '/images/pskov.webp',
    alt: "Pskov State University campus",
    official_website: "https://english.pskgu.ru/",
    description: "Pskov State University is a rapidly growing educational hub located near the borders of Estonia and Latvia. Its Medical Faculty offers a rigorous General Medicine program integrated with modern technologies, making it an excellent gateway to European medical practices.",
    establishedYear: 2011, // Note: Formed by the merger of several older institutions
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "The university provides modern, comfortable hostels in a city renowned for its ancient history and exceptionally safe, peaceful environment.",
    },
    departments: [
      "Fundamental Medicine", "Clinical Medicine", "Therapy", "Surgical Disciplines"
    ],
    affiliatedHospitals: [
      "Pskov Regional Clinical Hospital", "Pskov City Hospital"
    ],
    gallery: [
        { src: '/images/gallery/pskov-campus.jpg', alt: 'Pskov State University' },
    ],
    annualFees: "$3,500 USD (Approx.)",
  },
  // ==========================================
  // NEW UNIVERSITIES (Batch 6: 50 to 59 - Adjusted for duplicates)
  // ==========================================
  {
    name: "Penza State University (Medical Institute)",
    slug: "penza-state-medical-university",
    location: "Penza, Russia",
    image: '/images/penza.webp',
    alt: "Penza State University campus",
    official_website: "https://pnzgu.ru/en",
    description: "Penza State University is the largest institution of higher education in the Penza region. Its Medical Institute is highly regarded for its modern educational technologies, large anatomical museums, and a very strong Indian student community.",
    establishedYear: 1943,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" },
      { name: "Pharmacy", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Provides highly secure, well-equipped dormitories right on the campus. The Indian student association is very active here, ensuring a comfortable cultural transition.",
    },
    departments: [
      "Human Anatomy", "Internal Diseases", "Surgery", "Pediatrics", "Neurology"
    ],
    affiliatedHospitals: [
      "Penza Regional Clinical Hospital", "City Clinical Hospital No. 6"
    ],
    gallery: [
        { src: '/images/gallery/penza-campus.jpg', alt: 'Penza State University' },
    ],
    annualFees: "$3,500 USD (Approx.)",
  },
  {
    name: "Peoples' Friendship University of Russia (RUDN), Faculty of Medicine",
    slug: "peoples-friendship-university",
    location: "Moscow, Russia",
    image: '/images/rudn.webp',
    alt: "Peoples' Friendship University of Russia (RUDN)",
    official_website: "https://eng.rudn.ru/",
    description: "RUDN University is uniquely famous for its massive international student body, representing over 150 countries. Located in Moscow, its Medical Faculty offers top-tier clinical training, world-class research labs, and an incredibly diverse, globally focused campus life.",
    establishedYear: 1960,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "ECFMG"],
    mediumOfInstruction: "English and Russian",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" },
      { name: "Pharmacy", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "RUDN has one of the best student campuses in Russia, essentially functioning as a 'micro-city' with international cafes, sports complexes, and highly secure dormitories.",
    },
    departments: [
      "General Pathology", "Normal Physiology", "Surgery", "Internal Medicine", "Obstetrics and Gynecology"
    ],
    affiliatedHospitals: [
      "RUDN University Clinical Center", "Leading Moscow City Hospitals"
    ],
    gallery: [
        { src: '/images/gallery/rudn-campus.jpg', alt: 'RUDN University Campus' },
    ],
    annualFees: "$8,500 USD (Approx.)",
  },
  {
    name: "Perm State Medical University",
    slug: "perm-state-medical-university",
    location: "Perm, Russia",
    image: '/images/perm.webp',
    alt: "Perm State Medical University",
    official_website: "https://psma.ru/",
    description: "Founded in 1916, Perm State Medical University is one of the oldest and biggest medical universities in the Ural region. It boasts a very high number of patented medical inventions and offers exceptional practical training for international students.",
    establishedYear: 1916,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" },
      { name: "Pediatrics", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "The university features seven student dormitories located close to academic buildings, with Indian dining options available and strong security measures.",
    },
    departments: [
      "Human Anatomy", "Histology", "General Surgery", "Internal Diseases", "Traumatology"
    ],
    affiliatedHospitals: [
      "Perm Regional Clinical Hospital", "City Clinical Hospital No. 4"
    ],
    gallery: [
        { src: '/images/gallery/perm-campus.jpg', alt: 'Perm State Medical University' },
    ],
    annualFees: "$4,000 USD (Approx.)",
  },
  {
    name: "Petrozavodsk State University (Faculty of Medicine)",
    slug: "petrozavodsk-state-university",
    location: "Petrozavodsk, Russia",
    image: '/images/petrozavodsk.webp',
    alt: "Petrozavodsk State University campus",
    official_website: "https://petrsu.ru/en",
    description: "Located in the beautiful Republic of Karelia near the Finnish border, PetrSU is a flagship university in Northern Europe. Its Medical Institute is renowned for its advanced research in IT-medicine, genetics, and its peaceful, European-style student environment.",
    establishedYear: 1940,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English and Russian",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Pediatrics", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Students live in well-maintained, modern hostels. Petrozavodsk is known as one of the safest and most ecologically clean cities in Russia.",
    },
    departments: [
      "Anatomy and Histology", "Faculty Surgery", "Internal Medicine", "Pediatrics"
    ],
    affiliatedHospitals: [
      "Karelia Republican Clinical Hospital", "Petrozavodsk City Hospital"
    ],
    gallery: [
        { src: '/images/gallery/petrozavodsk-campus.jpg', alt: 'Petrozavodsk State University' },
    ],
    annualFees: "$3,600 USD (Approx.)",
  },
  {
    name: "Rostov State Medical University",
    slug: "rostov-state-medical-university",
    location: "Rostov-on-Don, Russia",
    image: '/images/rostov.webp',
    alt: "Rostov State Medical University",
    official_website: "https://rostgmu.ru/",
    description: "Rostov State Medical University is the largest foundational medical training, research, and treatment center in southern Russia. It operates its own massive multidisciplinary clinic and offers a highly sought-after English-medium MBBS program.",
    establishedYear: 1930,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" },
      { name: "Pediatrics", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "The university provides excellent hostel facilities in a warmer, southern climate. It has a very active international student community and access to global cuisines.",
    },
    departments: [
      "Normal Anatomy", "Pathophysiology", "Surgical Diseases", "Internal Medicine", "Pediatrics"
    ],
    affiliatedHospitals: [
      "RostGMU Multidisciplinary Clinic", "Rostov Regional Clinical Hospital"
    ],
    gallery: [
        { src: '/images/gallery/rostov-campus.jpg', alt: 'Rostov State Medical University' },
    ],
    annualFees: "$4,200 USD (Approx.)",
  },
  {
    name: "Russian Medical Academy for Continuous Professional Education",
    slug: "russian-medical-academy-cpe",
    location: "Moscow, Russia",
    image: '/images/rmanpo.webp',
    alt: "Russian Medical Academy for Continuous Professional Education",
    official_website: "https://rmapo.ru/",
    description: "RMANPO is an elite, specialized institution primarily focused on postgraduate medical training, residencies, and continuous education for practicing doctors. It represents the pinnacle of advanced medical specialization in the Russian Federation.",
    establishedYear: 1930,
    recognition: ["Ministry of Health of the Russian Federation", "World Health Organization (WHO)"],
    mediumOfInstruction: "Russian",
    courseDurations: [
      { name: "Postgraduate Residency (Various Specialties)", duration: "2-3 Years" },
      { name: "Ph.D. in Medicine", duration: "3-4 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "Requires a completed MBBS/MD degree and successful passing of internal entrance exams.",
      neet: "Not applicable (Postgraduate level).",
    },
    hostel: {
      availability: "Available",
      description: "Offers specialized dormitory accommodations for postgraduate students and medical professionals training in Moscow.",
    },
    departments: [
      "Advanced Surgery", "Cardiology", "Oncology", "Endocrinology", "Pediatrics"
    ],
    affiliatedHospitals: [
      "Botkin Hospital", "Leading Federal Medical Centers in Moscow"
    ],
    gallery: [
        { src: '/images/gallery/rmanpo-campus.jpg', alt: 'RMANPO Campus' },
    ],
    annualFees: "$6,500 USD (Approx. for Residency)",
  },
  {
    name: "Russian Education Center - Medical University in Russia",
    slug: "russian-education-center",
    location: "Multiple Cities, Russia",
    image: '/images/rec-placeholder.webp',
    alt: "Russian Education Center",
    official_website: "N/A",
    description: "Note: The 'Russian Education Center' typically acts as a major organizing body and consultancy rather than a standalone medical university. It partners with top State Medical Universities across the Russian Federation to facilitate the admission, housing, and integration of international students.",
    establishedYear: 0,
    recognition: ["Ministry of Education and Science of the Russian Federation"],
    mediumOfInstruction: "English and Russian",
    courseDurations: [
      { name: "Facilitates General Medicine (MBBS)", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "Adheres to the standard aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Coordinates premium hostel placements for international students at partner universities.",
    },
    departments: [
      "Admissions", "Student Support", "Visa Facilitation"
    ],
    affiliatedHospitals: [
      "Partner University Clinical Bases"
    ],
    gallery: [
        { src: '/images/gallery/rec-students.jpg', alt: 'Students assisted by REC' },
    ],
    annualFees: "Varies by Partner University",
  },
  {
    name: "Ryazan State Medical University",
    slug: "ryazan-state-medical-university",
    location: "Ryazan, Russia",
    image: '/images/ryazan.webp',
    alt: "Ryazan State Medical University",
    official_website: "https://www.rzgmu.ru/en/",
    description: "Named after the famous physiologist I.P. Pavlov, Ryazan State Medical University is a highly respected institution. It offers a very strong English-medium MBBS program, advanced research facilities, and a supportive environment for its large cohort of international students.",
    establishedYear: 1943,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" },
      { name: "Pharmacy", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Provides fully furnished dormitories with high security. The campus is compact, with academic buildings, hospitals, and hostels located in close proximity.",
    },
    departments: [
      "Physiology", "Normal Anatomy", "Surgical Diseases", "Internal Medicine", "Dentistry"
    ],
    affiliatedHospitals: [
      "Ryazan Regional Clinical Hospital", "City Clinical Hospital No. 11"
    ],
    gallery: [
        { src: '/images/gallery/ryazan-campus.jpg', alt: 'Ryazan State Medical University' },
    ],
    annualFees: "$4,500 USD (Approx.)",
  },
  {
    name: "North-Western State Medical University named after I.I. Mechnikov",
    slug: "north-western-state-medical-university",
    location: "Saint Petersburg, Russia",
    image: '/images/mechnikov.webp',
    alt: "Mechnikov North-Western State Medical University",
    official_website: "https://szgmu.ru/eng/",
    description: "Formed in 2011 by the merger of two prominent St. Petersburg medical academies, Mechnikov University is a powerhouse of medical education and public health in Russia's cultural capital. It boasts vast clinical bases and highly advanced European-standard training.",
    establishedYear: 2011,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English and Russian",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Preventive Medicine", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Offers standard university dormitories in St. Petersburg. Due to the city's popularity, students often share rooms in historic but modernized buildings.",
    },
    departments: [
      "General Surgery", "Internal Diseases", "Public Health", "Epidemiology", "Dentistry"
    ],
    affiliatedHospitals: [
      "Peter the Great Hospital", "NWSMU Clinical Center"
    ],
    gallery: [
        { src: '/images/gallery/mechnikov-campus.jpg', alt: 'Mechnikov University Campus' },
    ],
    annualFees: "$5,500 USD (Approx.)",
  },
  {
    name: "Saint Petersburg State Pavlov Medical University",
    slug: "saint-petersburg-state-pavlov-medical-university",
    location: "Saint Petersburg, Russia",
    image: '/images/pavlov.webp',
    alt: "First Pavlov State Medical University of St. Petersburg",
    official_website: "https://www.1spbgmu.ru/en/",
    description: "Also known as the First Saint Petersburg State Medical University, it was founded in 1897 as the first medical university for women in Russia. Today, it is a world-class institution offering elite medical training, particularly famous for its cardiology and surgical programs.",
    establishedYear: 1897,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "FAIMER"],
    mediumOfInstruction: "English and Russian",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Provides highly secure, centrally located hostels in St. Petersburg. The living experience in Russia's cultural capital offers students incredible extracurricular and cultural opportunities.",
    },
    departments: [
      "Hospital Surgery", "Hospital Therapy", "Neurology", "Obstetrics and Gynecology"
    ],
    affiliatedHospitals: [
      "Pavlov First Saint Petersburg State Medical University Clinic", "Almazov National Medical Research Centre"
    ],
    gallery: [
        { src: '/images/gallery/pavlov-campus.jpg', alt: 'Pavlov Medical University' },
    ],
    annualFees: "$6,500 USD (Approx.)",
  },
  // ==========================================
  // NEW UNIVERSITIES (Batch 7: 60 to 69)
  // ==========================================
  {
    name: "Saint Petersburg State Pediatric Medical University",
    slug: "saint-petersburg-state-pediatric-medical-university",
    location: "Saint Petersburg, Russia",
    image: '/images/spb-pediatric.webp',
    alt: "Saint Petersburg State Pediatric Medical University",
    official_website: "https://gpmu.org/",
    description: "Founded in 1925, this is the oldest pediatric university in the world and one of the most distinguished medical schools in Russia. While famous for pediatrics, its General Medicine faculty is equally prestigious and highly sought after by international students.",
    establishedYear: 1925,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "FAIMER"],
    mediumOfInstruction: "English and Russian",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Pediatrics", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Students are accommodated in comfortable, centrally heated hostels located within a short distance from the main campus. Security is maintained 24/7.",
    },
    departments: [
      "Pediatrics", "Neonatology", "General Surgery", "Internal Diseases", "Medical Biophysics"
    ],
    affiliatedHospitals: [
      "SPbSPMU Perinatal Center", "Mariinsky Hospital", "St. Petersburg City Children's Hospital"
    ],
    gallery: [
        { src: '/images/gallery/spb-pediatric-campus.jpg', alt: 'SPb Pediatric Medical University' },
    ],
    annualFees: "$5,200 USD (Approx.)",
  },
  {
    name: "Saint Petersburg Medico-Social Institute (SPb MSI)",
    slug: "saint-petersburg-medico-social-institute",
    location: "Saint Petersburg, Russia",
    image: '/images/spb-msi.webp',
    alt: "Saint Petersburg Medico-Social Institute",
    official_website: "https://medinstitut.org/",
    description: "SPb MSI is a modern, dynamic private medical institute in St. Petersburg. It is known for its highly personalized approach to education, smaller class sizes, and excellent support systems specifically tailored for international students adjusting to Russian medical standards.",
    establishedYear: 2004,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "The institute assists students in securing comfortable, modern accommodations in St. Petersburg, often in partnered student housing or private dormitories.",
    },
    departments: [
      "Morphological Disciplines", "Surgical Diseases", "Internal Medicine", "Social Medicine"
    ],
    affiliatedHospitals: [
      "Institute Clinical Center", "Partnered St. Petersburg City Hospitals"
    ],
    gallery: [
        { src: '/images/gallery/spb-msi-campus.jpg', alt: 'SPb Medico-Social Institute' },
    ],
    annualFees: "$4,500 USD (Approx.)",
  },
  {
    name: "Saint Petersburg State University (Faculty of Medicine)",
    slug: "saint-petersburg-state-university",
    location: "Saint Petersburg, Russia",
    image: '/images/spbu.webp',
    alt: "Saint Petersburg State University main building",
    official_website: "https://english.spbu.ru/",
    description: "Founded in 1724 by Peter the Great, SPbU is one of the two most prestigious universities in Russia (alongside Lomonosov MSU). Its Faculty of Medicine offers an elite, highly academic medical program integrated with world-class scientific research.",
    establishedYear: 1724,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "ECFMG"],
    mediumOfInstruction: "Russian (Requires preparatory year)",
    courseDurations: [
      { name: "General Medicine (MBBS/MD)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "Highly competitive. Requires excellent high school grades and passing strict university entrance exams.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Students live in the historic and modern dormitories of SPbU. The campus spans beautiful historical buildings across the city, offering a rich cultural experience.",
    },
    departments: [
      "Fundamental Medicine", "Pathology", "General Surgery", "Internal Diseases", "Organization of Health Care"
    ],
    affiliatedHospitals: [
      "SPbU Clinic of Advanced Medical Technologies", "Sokolov Clinical Hospital"
    ],
    gallery: [
        { src: '/images/gallery/spbu-campus.jpg', alt: 'Saint Petersburg State University' },
    ],
    annualFees: "$7,000 USD (Approx.)",
  },
  {
    name: "Saint Luka Lugansk State Medical University",
    slug: "saint-luka-lugansk-state-medical-university",
    location: "Lugansk, Russia",
    image: '/images/lugansk.webp',
    alt: "Saint Luka Lugansk State Medical University",
    official_website: "https://lgmu.ru/",
    description: "Named after Saint Luka (a famous surgeon and bishop), this university has a rich history of training medical professionals. It focuses heavily on practical clinical skills and community medicine, offering an affordable education path.",
    establishedYear: 1956,
    recognition: ["Ministry of Health of the Russian Federation", "World Health Organization (WHO)"],
    mediumOfInstruction: "Russian and English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" },
      { name: "Pediatrics", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Standard university dormitories are provided on a unified campus, with essential amenities and close proximity to academic buildings.",
    },
    departments: [
      "Normal Anatomy", "Surgical Diseases", "Internal Medicine", "Pediatrics"
    ],
    affiliatedHospitals: [
      "Lugansk Republican Clinical Hospital", "City Hospital No. 2"
    ],
    gallery: [
        { src: '/images/gallery/lugansk-campus.jpg', alt: 'Lugansk State Medical University' },
    ],
    annualFees: "$3,000 USD (Approx.)",
  },
  {
    name: "Samara State Medical University",
    slug: "samara-state-medical-university",
    location: "Samara, Russia",
    image: '/images/samara.webp',
    alt: "Samara State Medical University",
    official_website: "https://samsmu.ru/en/",
    description: "Samara State Medical University is one of Russia's largest and most innovative medical universities. It is particularly famous for its IT-medicine institute, developing 3D anatomical simulators and VR surgical training systems used across the country.",
    establishedYear: 1919,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "FAIMER"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" },
      { name: "Pharmacy", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "The university provides modern, highly secure dormitories. Samara is a beautiful city on the Volga River, offering an excellent quality of life for students.",
    },
    departments: [
      "Operative Surgery", "Clinical Anatomy", "Internal Diseases", "Traumatology", "IT Medicine"
    ],
    affiliatedHospitals: [
      "Clinics of SamSMU", "Samara Regional Clinical Hospital", "Pirogov City Clinical Hospital"
    ],
    gallery: [
        { src: '/images/gallery/samara-campus.jpg', alt: 'Samara State Medical University' },
    ],
    annualFees: "$4,500 USD (Approx.)",
  },
  {
    name: "Saratov State Medical University (V.I. Razumovsky)",
    slug: "saratov-state-medical-university",
    location: "Saratov, Russia",
    image: '/images/saratov.webp',
    alt: "Saratov State Medical University campus",
    official_website: "https://sgmu.ru/en/",
    description: "Founded in 1909 by Emperor Nicholas II, Saratov State Medical University is one of the oldest and most respected medical schools in Russia. It is highly popular among international students due to its excellent English-medium curriculum, vast clinical bases, and historic campus.",
    establishedYear: 1909,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "ECFMG"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" },
      { name: "Pharmacy", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Provides fully furnished, centrally heated dormitories. The campus has an active Indian student community, ensuring availability of Indian food and cultural support.",
    },
    departments: [
      "Human Anatomy", "Histology", "Hospital Therapy", "General Surgery", "Pediatrics"
    ],
    affiliatedHospitals: [
      "Saratov Regional Clinical Hospital", "University Clinical Hospital No. 1", "Mirotvortsev Clinical Hospital"
    ],
    gallery: [
        { src: '/images/gallery/saratov-campus.jpg', alt: 'Saratov State Medical University' },
    ],
    annualFees: "$4,000 USD (Approx.)",
  },
  {
    name: "Siberian State Medical University",
    slug: "siberian-state-medical-university",
    location: "Tomsk, Russia",
    image: '/images/siberian.webp',
    alt: "Siberian State Medical University",
    official_website: "https://ssmu.ru/en/",
    description: "Located in the historic student city of Tomsk, Siberian State Medical University is a top-3 medical university in Russia and the only medical university awarded the title of 'National Research University'. It is a powerhouse of medical science, clinical research, and education.",
    establishedYear: 1888,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "National Research University Status"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" },
      { name: "Pharmacy", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Offers excellent, highly secure student dormitories. Tomsk is renowned as the 'Oxford of Siberia', providing an incredible, youthful, and intellectually stimulating environment.",
    },
    departments: [
      "Morphology", "Biochemistry", "General Surgery", "Internal Medicine", "Pediatrics"
    ],
    affiliatedHospitals: [
      "SibMed Clinics (University's own massive hospital network)", "Tomsk Regional Clinical Hospital"
    ],
    gallery: [
        { src: '/images/gallery/siberian-campus.jpg', alt: 'Siberian State Medical University' },
    ],
    annualFees: "$4,300 USD (Approx.)",
  },
  {
    name: "Smolensk State Medical University",
    slug: "smolensk-state-medical-university",
    location: "Smolensk, Russia",
    image: '/images/smolensk.webp',
    alt: "Smolensk State Medical University",
    official_website: "https://smolgmu.ru/",
    description: "Smolensk State Medical University is a major medical and research center with a massive international footprint. It is incredibly popular among Indian students, offering a fully English-medium MBBS program, high FMGE passing rates, and excellent on-campus facilities.",
    establishedYear: 1920,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "ECFMG", "GMC"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" },
      { name: "Pharmacy", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Provides four robust, centrally heated hostels. Due to the high number of Indian students, there are multiple Indian mess options and cultural societies active on campus.",
    },
    departments: [
      "Human Anatomy", "Pathology", "General Surgery", "Internal Diseases", "Pediatrics"
    ],
    affiliatedHospitals: [
      "Smolensk Regional Clinical Hospital", "City Clinical Hospital No. 1", "Smolensk Perinatal Center"
    ],
    gallery: [
        { src: '/images/gallery/smolensk-campus.jpg', alt: 'Smolensk State Medical University' },
    ],
    annualFees: "$4,500 USD (Approx.)",
  },
  {
    name: "State Classical Academy (Maimonides), Faculty of Medicine",
    slug: "state-classical-academy",
    location: "Moscow, Russia",
    image: '/images/maimonides.webp',
    alt: "State Classical Academy Medical Faculty",
    official_website: "https://rguk.ru/",
    description: "Originally the Maimonides State Classical Academy, it is now integrated into the Kosygin State University. Its Faculty of Social Medicine provides specialized, high-quality medical training right in the capital city of Moscow, focusing on comprehensive patient care.",
    establishedYear: 1991,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "Russian and English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Students have access to the university's dormitories located in Moscow, providing a safe living environment with access to the capital's vast resources.",
    },
    departments: [
      "Social Medicine", "Internal Diseases", "Surgical Disciplines", "Dentistry"
    ],
    affiliatedHospitals: [
      "Moscow City Clinical Hospital No. 67", "Various Moscow State Clinics"
    ],
    gallery: [
        { src: '/images/gallery/maimonides-campus.jpg', alt: 'State Classical Academy' },
    ],
    annualFees: "$5,500 USD (Approx.)",
  },
  {
    name: "Stavropol State Medical University",
    slug: "stavropol-state-medical-university",
    location: "Stavropol, Russia",
    image: '/images/stavropol.webp',
    alt: "Stavropol State Medical University",
    official_website: "https://stgmu.ru/en/",
    description: "Founded in 1938, Stavropol State Medical University is a premier medical university in southern Russia. It is highly attractive to international students due to its warm climate, extremely safe and green city environment, and excellent, highly affordable English-medium medical programs.",
    establishedYear: 1938,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" },
      { name: "Pediatrics", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Provides four modern, comfortable dormitories. The hostels have sports complexes, reading halls, and a dedicated Indian mess facility serving three meals a day.",
    },
    departments: [
      "Anatomy", "Histology", "General Surgery", "Internal Diseases", "Pediatrics"
    ],
    affiliatedHospitals: [
      "Stavropol Regional Clinical Hospital", "City Clinical Hospital No. 4", "Regional Children's Hospital"
    ],
    gallery: [
        { src: '/images/gallery/stavropol-campus.jpg', alt: 'Stavropol State Medical University' },
    ],
    annualFees: "$3,800 USD (Approx.)",
  },
  // ==========================================
  // NEW UNIVERSITIES (Batch 8: 70 to 82 - Final Batch)
  // ==========================================
  {
    name: "Volgograd State Medical University",
    slug: "volgograd-state-medical-university",
    location: "Volgograd, Russia",
    image: '/images/volgograd.webp',
    alt: "Volgograd State Medical University",
    official_website: "https://www.volgmed.ru/en/",
    description: "Founded in 1935, Volgograd State Medical University is renowned for its high standard of education, strong research foundation, and excellent FMGE/NMC pass rates. It has a beautiful campus situated in the historic and heroic city of Volgograd along the Volga River.",
    establishedYear: 1935,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "FAIMER"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" },
      { name: "Pharmacy", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Provides seven comfortable, centrally heated hostels. The university has a very large and welcoming Indian student community, ensuring easy access to Indian food and cultural festivals.",
    },
    departments: [
      "Human Anatomy", "General Surgery", "Internal Diseases", "Pharmacology", "Pediatrics"
    ],
    affiliatedHospitals: [
      "Volgograd Regional Clinical Hospital", "City Clinical Hospital No. 1", "University Multidisciplinary Clinic"
    ],
    gallery: [
        { src: '/images/gallery/volgograd-campus.jpg', alt: 'Volgograd State Medical University' },
    ],
    annualFees: "$4,200 USD (Approx.)",
  },
  {
    name: "Pyatigorsk Medical and Pharmaceutical Institute",
    slug: "pyatigorsk-medical-pharmaceutical-institute",
    location: "Pyatigorsk, Russia",
    image: '/images/pyatigorsk.webp',
    alt: "Pyatigorsk Medical and Pharmaceutical Institute",
    official_website: "https://www.pmedpharm.ru/",
    description: "Now operating as a major branch of the Volgograd State Medical University, the Pyatigorsk Institute is historically one of the most famous pharmaceutical and medical institutes in Russia. Located in a beautiful resort city famous for its mineral springs.",
    establishedYear: 1943,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English and Russian",
    courseDurations: [
      { name: "Dentistry", duration: "5 Years" },
      { name: "Pharmacy", duration: "5 Years" },
      { name: "General Medicine (MBBS)", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Students are housed in well-equipped dormitories near the campus. Pyatigorsk is a calm, safe resort town, providing a highly focused study environment.",
    },
    departments: [
      "Pharmacognosy", "Pharmaceutical Chemistry", "Clinical Dentistry", "Therapy"
    ],
    affiliatedHospitals: [
      "Pyatigorsk City Clinical Hospital", "Resort Polyclinics of Pyatigorsk"
    ],
    gallery: [
        { src: '/images/gallery/pyatigorsk-campus.jpg', alt: 'Pyatigorsk Institute' },
    ],
    annualFees: "$3,500 USD (Approx.)",
  },
  {
    name: "Voronezh N.N. Burdenko State Medical University",
    slug: "voronezh-state-medical-university",
    location: "Voronezh, Russia",
    image: '/images/voronezh.webp',
    alt: "Voronezh State Medical University campus",
    official_website: "https://vrngmu.ru/en/",
    description: "Established in 1918, Voronezh State Medical University (named after N.N. Burdenko) is one of the leading research and teaching centers in Russia. It is highly sought after by international students for its brilliant English-medium curriculum and European-standard clinical bases.",
    establishedYear: 1918,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "ECFMG"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" },
      { name: "Pediatrics", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Provides fully furnished, highly secure dormitories with internet, reading rooms, and canteens. Voronezh is a major youth and student city, offering a vibrant lifestyle.",
    },
    departments: [
      "Normal Anatomy", "Pathological Physiology", "Hospital Surgery", "Pediatrics", "Dentistry"
    ],
    affiliatedHospitals: [
      "Voronezh Regional Clinical Hospital", "Burdenko University Clinic", "City Hospital No. 3"
    ],
    gallery: [
        { src: '/images/gallery/voronezh-campus.jpg', alt: 'Voronezh State Medical University' },
    ],
    annualFees: "$4,000 USD (Approx.)",
  },
  {
    name: "Tula State University (Medical Institute)",
    slug: "tula-state-university",
    location: "Tula, Russia",
    image: '/images/tula.webp',
    alt: "Tula State University Medical Institute",
    official_website: "https://tulsu.ru/en",
    description: "Tula State University is the largest state university in Central Russia. Its Medical Institute has rapidly developed to offer modern, high-tech medical education. Located just a couple of hours from Moscow, it offers an affordable alternative to capital-city universities.",
    establishedYear: 1930,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English and Russian",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Students live in university-managed dormitories featuring standard amenities, gyms, and tight security. The city of Tula is historic, safe, and welcoming.",
    },
    departments: [
      "Internal Medicine", "Surgical Diseases", "Anatomy", "Physiology"
    ],
    affiliatedHospitals: [
      "Tula Regional Clinical Hospital", "City Hospital of Tula"
    ],
    gallery: [
        { src: '/images/gallery/tula-campus.jpg', alt: 'Tula State University' },
    ],
    annualFees: "$3,600 USD (Approx.)",
  },
  {
    name: "Tver State Medical University",
    slug: "tver-state-medical-academy",
    location: "Tver, Russia",
    image: '/images/tver.webp',
    alt: "Tver State Medical University",
    official_website: "https://tvgmu.ru/eng/",
    description: "Formerly known as Tver State Medical Academy, this university has been a pioneer in international medical education since 1962. It has an immense international alumni network and is known for its highly experienced faculty and excellent Indian student support.",
    establishedYear: 1936,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "Sri Lankan Medical Council (SLMC)"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" },
      { name: "Pharmacy", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Features four major hostels that are well-heated and secure. Tver's location between Moscow and St. Petersburg makes it an ideal, affordable student city.",
    },
    departments: [
      "Human Anatomy", "General Surgery", "Internal Diseases", "Pediatrics", "Stomatology"
    ],
    affiliatedHospitals: [
      "Tver Regional Clinical Hospital", "University Dental Clinic", "City Hospital No. 6"
    ],
    gallery: [
        { src: '/images/gallery/tver-campus.jpg', alt: 'Tver State Medical University' },
    ],
    annualFees: "$4,500 USD (Approx.)",
  },
  {
    name: "Tyumen State Medical University",
    slug: "tyumen-state-medical-university",
    location: "Tyumen, Russia",
    image: '/images/tyumen.webp',
    alt: "Tyumen State Medical University",
    official_website: "https://www.tyumsmu.ru/en/",
    description: "Located in one of the wealthiest and fastest-growing cities in Russia, Tyumen State Medical University boasts cutting-edge laboratories, modern simulation centers, and heavily funded clinical research programs.",
    establishedYear: 1963,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English and Russian",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" },
      { name: "Pediatrics", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Provides modernized dormitories with excellent heating and internet access. Tyumen consistently ranks as one of the best Russian cities for quality of life.",
    },
    departments: [
      "Morphology", "Clinical Pharmacy", "Surgical Diseases", "Internal Medicine", "Pediatrics"
    ],
    affiliatedHospitals: [
      "Tyumen Regional Clinical Hospital No. 1", "Federal Center for Neurosurgery (Tyumen)"
    ],
    gallery: [
        { src: '/images/gallery/tyumen-campus.jpg', alt: 'Tyumen State Medical University' },
    ],
    annualFees: "$3,800 USD (Approx.)",
  },
  {
    name: "Ural State Medical University",
    slug: "ural-state-medical-university",
    location: "Yekaterinburg, Russia",
    image: '/images/ural.webp',
    alt: "Ural State Medical University",
    official_website: "https://usma.ru/",
    description: "Based in Yekaterinburg, the fourth-largest city in Russia, Ural State Medical University is a top-tier institution. It provides an exceptional, highly modern educational experience with access to massive, high-tech regional clinical hospitals.",
    establishedYear: 1930,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Dentistry", duration: "5 Years" },
      { name: "Pediatrics", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Students live in secure, comfortable hostels within the bustling, cosmopolitan city of Yekaterinburg, offering excellent transport and cultural amenities.",
    },
    departments: [
      "Fundamental Medicine", "Hospital Surgery", "Internal Diseases", "Pediatrics", "Dentistry"
    ],
    affiliatedHospitals: [
      "Sverdlovsk Regional Clinical Hospital No. 1", "Yekaterinburg City Clinical Hospital No. 40"
    ],
    gallery: [
        { src: '/images/gallery/ural-campus.jpg', alt: 'Ural State Medical University' },
    ],
    annualFees: "$4,200 USD (Approx.)",
  },
  {
    name: "Ulyanovsk State University (Institute of Medicine, Ecology and Physical Culture)",
    slug: "ulyanovsk-state-university",
    location: "Ulyanovsk, Russia",
    image: '/images/ulyanovsk.webp',
    alt: "Ulyanovsk State University Medical Institute",
    official_website: "https://www.ulsu.ru/en/",
    description: "Ulyanovsk State University is renowned for being one of the first universities in Russia to fully integrate its medical institute into a broader classical university structure. It offers a very popular, highly affordable English-medium MBBS program with strong Indian student support.",
    establishedYear: 1988,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)", "ECFMG"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Pediatrics", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Provides highly secure, well-maintained dormitories. The university has a massive Indian student community, meaning Indian mess facilities and festivals are a core part of campus life.",
    },
    departments: [
      "Human Anatomy", "Physiology", "General Surgery", "Internal Diseases", "Oncology"
    ],
    affiliatedHospitals: [
      "Ulyanovsk Regional Clinical Hospital", "City Clinical Hospital No. 1"
    ],
    gallery: [
        { src: '/images/gallery/ulyanovsk-campus.jpg', alt: 'Ulyanovsk State University' },
    ],
    annualFees: "$3,500 USD (Approx.)",
  },
  {
    name: "Pacific State Medical University (Formerly Vladivostok State Medical University)",
    slug: "vladivostok-state-medical-university",
    location: "Vladivostok, Russia",
    image: '/images/vladivostok.webp',
    alt: "Pacific State Medical University",
    official_website: "https://psmu.ru/",
    description: "Located in the major Pacific port city of Vladivostok, this university is a leading medical and scientific center in the Russian Far East. It has strong ties with medical institutions across the Asia-Pacific region, offering unique clinical perspectives.",
    establishedYear: 1958,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English and Russian",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Preventive Medicine", duration: "6 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Offers standard, centrally heated dormitories. Vladivostok is a dynamic, culturally diverse city with beautiful coastal scenery.",
    },
    departments: [
      "Marine Medicine", "Therapy", "Surgery", "Pediatrics", "Epidemiology"
    ],
    affiliatedHospitals: [
      "Pacific Fleet Military Hospital", "Vladivostok Clinical Hospital No. 1", "Primorsky Regional Hospital"
    ],
    gallery: [
        { src: '/images/gallery/vladivostok-campus.jpg', alt: 'Pacific State Medical University' },
    ],
    annualFees: "$4,000 USD (Approx.)",
  },
  {
    name: "Yaroslavl State Medical University",
    slug: "yaroslavl-state-medical-academy",
    location: "Yaroslavl, Russia",
    image: '/images/yaroslavl.webp',
    alt: "Yaroslavl State Medical University",
    official_website: "https://ysmu.ru/",
    description: "Founded in 1944, Yaroslavl State Medical University is a major regional center for excellent medical education and biomedical research. Located in a beautiful, historic city near Moscow, it offers rigorous academic training and extensive clinical practice.",
    establishedYear: 1944,
    recognition: ["National Medical Commission (NMC) Approved", "World Health Organization (WHO)"],
    mediumOfInstruction: "English",
    courseDurations: [
      { name: "General Medicine (MBBS)", duration: "6 Years" },
      { name: "Pediatrics", duration: "6 Years" },
      { name: "Pharmacy", duration: "5 Years" }
    ],
    academicSession: "Starts from September 1st",
    eligibility: {
      academic: "An aggregate of 50% marks in Physics, Chemistry, & Biology in 12th standard.",
      neet: "NEET qualification is mandatory for Indian students.",
    },
    hostel: {
      availability: "Available",
      description: "Students are provided with well-equipped, secure hostel accommodations. Yaroslavl's proximity to Moscow allows for easy travel while maintaining lower living costs.",
    },
    departments: [
      "Human Anatomy", "Pathology", "Internal Diseases", "Surgical Diseases", "Pediatrics"
    ],
    affiliatedHospitals: [
      "Yaroslavl Regional Clinical Hospital", "City Clinical Hospital No. 9", "University Medical Center"
    ],
    gallery: [
        { src: '/images/gallery/yaroslavl-campus.jpg', alt: 'Yaroslavl State Medical University' },
    ],
    annualFees: "$4,100 USD (Approx.)",
  } // <--- VERY IMPORTANT: This closes the array!

  // ... You can add other universities here following the same structure
];
