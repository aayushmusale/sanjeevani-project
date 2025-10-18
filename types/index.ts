// src/types/index.ts
import { z } from 'zod';

export const InquirySchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().regex(/^\d{10,15}$/, { message: 'Please enter a valid 10-15 digit phone number.' }),
  interestedIn: z.string().optional(),
});

export type InquiryFormInputs = z.infer<typeof InquirySchema>;

// This is the correct, detailed University interface. KEEP THIS ONE.
export interface University {
  // Basic Info
  name: string;
  slug: string;
  location: string;
  image: string;
  alt: string;
  official_website : string;

  // Detailed Info
  description: string;
  establishedYear: number;
  recognition: string[];
  mediumOfInstruction: string;
  annualFees: string;

  // Academic Details
  courseDurations: { name: string; duration: string }[];
  academicSession: string;
  eligibility: {
    academic: string;
    neet: string;
  };

  // Facilities
  hostel: {
    availability: string;
    description: string;
  };

  // Lists
  departments: string[];
  affiliatedHospitals: string[];
  gallery: { src: string; alt: string }[];
}

export interface Country {
  name: string;
  slug: string;
  flagEmoji: string;
  description: string;
  highlights: string[];
  whyStudyHere: string;
  popularCourses: string[];
  averageFees: string;
  livingCost: string;
  topUniversitiesCount: number;
}

export interface Testimonial {
  studentName: string;
  country: string;
  university: string;
  reviewText: string;
  rating: number;
  year: number;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  publishedAt: string;
}