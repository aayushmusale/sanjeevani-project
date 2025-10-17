// It's a good practice to define the shape of your data with an interface
export interface University {
  name: string;
  slug: string; // A URL-friendly identifier
  image: string; // Using string for path, but you can keep the StaticImageData type
  alt: string;
  location: string;
  description: string;
  annualFees: string;
}

// We're adding more details and a unique 'slug' for each university
export const universityData: University[] = [
  {
    name: "Privolzhsky Research Medical University",
    slug: "privolzhsky-research-medical-university",
    image: '/images/privolzhsky.jpg',
    alt: "Privolzhsky Research Medical University building",
    location: "Nizhny Novgorod, Russia",
    description: "Founded in 1920, PRMU is one of the leading medical universities in the Volga region, known for its strong research programs and clinical training.",
    annualFees: "$4,500 USD"
  },
  {
    name: "Sechenov University",
    slug: "sechenov-university",
    image: '/images/sechenov.jpg',
    alt: "Sechenov University building",
    location: "Moscow, Russia",
    description: "As the oldest and largest medical school in Russia, Sechenov University is a prestigious institution with a rich history of innovation in medicine and healthcare.",
    annualFees: "$9,800 USD"
  },
  {
    name: "Pirogov University",
    slug: "pirogov-university",
    image: '/images/pirogov.jpg',
    alt: "Pirogov University building",
    location: "Moscow, Russia",
    description: "Named after the famous surgeon Nikolay Pirogov, this university is a national research center and a leader in medical education and biomedical sciences.",
    annualFees: "$7,500 USD"
  },
  {
    name: "Another Russian University",
    slug: "another-russian-university",
    image: '/images/privolzhsky.jpg', // Example image
    alt: "Another Russian University building",
    location: "Kazan, Russia",
    description: "This is a placeholder description for another excellent university in Russia offering comprehensive medical programs for international students.",
    annualFees: "$5,000 USD"
  }
];