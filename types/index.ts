// src/types/index.ts (Define your Zod Schema and TypeScript Type)
import { z } from 'zod';

export const InquirySchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().regex(/^\d{10,15}$/, { message: 'Please enter a valid 10-15 digit phone number.' }),
  interestedIn: z.string().optional(),
});

export type InquiryFormInputs = z.infer<typeof InquirySchema>;



// export interface Country {
//   name: string;
//   slug: string;
//   flagEmoji: string;
//   description: string;
//   highlights: string[];
//   whyStudyHere: string;
//   popularCourses: string[];
//   averageFees: string;
//   livingCost: string;
//   topUniversitiesCount: number;
// }

// export interface University {
//   name: string;
//   slug: string;
//   country: string;
//   city: string;
//   description: string;
//   establishedYear?: number;
//   ranking?: string;
//   accreditation: string[];
//   fees: string;
//   duration: string;
//   facilities: string[];
// }

// export interface Testimonial {
//   studentName: string;
//   country: string;
//   university: string;
//   reviewText: string;
//   rating: number;
//   year: number;
// }

// export interface BlogPost {
//   title: string;
//   slug: string;
//   excerpt: string;
//   content: string;
//   author: string;
//   category: string;
//   publishedAt: string;
// }
 