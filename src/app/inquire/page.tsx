'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InquirySchema, InquiryFormInputs } from '../../../types';
import { Loader2, Send } from 'lucide-react';
import Backgroundimage from '../../../components/images/mbbsimage.jpg'

export default function InquiryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<InquiryFormInputs>({
    resolver: zodResolver(InquirySchema),
    defaultValues: { name: '', email: '', phone: '', interestedIn: '' },
  });

  const onSubmit = async (data: InquiryFormInputs) => {
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit inquiry.');
      }
      
      console.log('Lead submitted:', await response.json());
      reset(); // Clear form on success
    } catch (error) {
      console.error(error);
      // Handle error display
    }
  };

  if (isSubmitSuccessful) {
    return (
      <div className="p-6 bg-green-100 border-l-4 border-green-500 text-green-700 rounded-md">
        <p className="font-bold">Thank You! 🎉</p>
        <p>Your inquiry has been successfully submitted. We will contact you shortly.</p>
      </div>
    );
  }


  const BackgroundImage = Backgroundimage.src;

  return (
     <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center p-4" 
      style={{ backgroundImage: `url('${BackgroundImage}')`,}}>
    <div className="flex justify-center w-full mt-15">
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 p-8 bg-white shadow-xl rounded-2xl max-w-lg w-full mx-auto mt-16 mb-16" 

      >
        <h2 className="text-2xl font-bold mb-6 text-center">Book Your Free Counseling</h2>
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            id="name"
            {...register('name')}
            className={`mt-1 block w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className={`mt-1 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className={`mt-1 block w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="interestedIn" className="block text-sm font-medium text-gray-700">Interested Course/University</label>
          <input
            id="interestedIn"
            {...register('interestedIn')}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

    
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 transition"
        >
          {isSubmitting ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Send className="mr-2 h-5 w-5" />}
          {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
        </button>
      </form>
    </div>
    </div>
  );
}


















// // 'use client';
// // import { useForm } from 'react-hook-form';
// // import { zodResolver } from '@hookform/resolvers/zod';
// // import { InquirySchema, InquiryFormInputs } from '../../../types';
// // import { Loader2, Send } from 'lucide-react';


// // export default function InquiryForm() {
// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors, isSubmitting, isSubmitSuccessful },
// //     reset,
// //   } = useForm<InquiryFormInputs>({
// //     resolver: zodResolver(InquirySchema),
// //     defaultValues: { name: '', email: '', phone: '', interestedIn: '' },
// //   });

// //   const onSubmit = async (data: InquiryFormInputs) => {
// //     try {
// //       const response = await fetch('/api/leads', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(data),
// //       });

// //       if (!response.ok) {
// //         throw new Error('Failed to submit inquiry.');
// //       }
      
// //       console.log('Lead submitted:', await response.json());
// //       reset(); // Clear form on success
// //     } catch (error) {
// //       console.error(error);
// //       // Handle error display
// //     }
// //   };

// //   if (isSubmitSuccessful) {
// //     return (
// //       <div className="p-6 bg-green-100 border-l-4 border-green-500 text-green-700 rounded-md">
// //         <p className="font-bold">Thank You! 🎉</p>
// //         <p>Your inquiry has been successfully submitted. We will contact you shortly.</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     // Removed 'container' class from outer div as it's not needed here and can sometimes cause issues.
// //     // The main container for the form
// //     <div className="flex justify-center items-start min-h-screen">
// //     <form 
// //       onSubmit={handleSubmit(onSubmit)} 
// //       // Removed 'mt-40' and 'my-20' which were pushing the form far down.
// //       // Used 'p-6' for padding, 'bg-white' for background.
// //       // 'shadow-lg' and 'rounded-xl' for styling.
// //       // 'max-w-lg' for width control, and 'mx-auto' and 'mt-12' for top margin and horizontal centering.
// //       className="space-y-4 p-6 bg-white shadow-lg rounded-xl max-w-lg mx-auto mt-12 mb-12 w-full" 
// //     >
// //       <h2 className="text-2xl font-bold mb-4">Book Your Free Counseling</h2>
      
// //       {/* Name Field */}
// //       <div>
// //         <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
// //         <input
// //           id="name"
// //           {...register('name')}
// //           // Added 'focus:ring-indigo-500 focus:border-indigo-500' for better focus styling
// //           className={`mt-1 block w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500`}
// //         />
// //         {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
// //       </div>

// //       {/* Email Field */}
// //       <div>
// //         <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
// //         <input
// //           id="email"
// //           type="email"
// //           {...register('email')}
// //           className={`mt-1 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500`}
// //         />
// //         {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
// //       </div>

// //       {/* Phone Field */}
// //       <div>
// //         <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
// //         <input
// //           id="phone"
// //           type="tel"
// //           {...register('phone')}
// //           className={`mt-1 block w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500`}
// //         />
// //         {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
// //       </div>

// //       {/* Interested In Field */}
// //       <div>
// //         <label htmlFor="interestedIn" className="block text-sm font-medium text-gray-700">Interested Course/University</label>
// //         <input
// //           id="interestedIn"
// //           {...register('interestedIn')}
// //           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
// //         />
// //       </div>

// //       {/* Submit Button */}
// //       <button
// //         type="submit"
// //         disabled={isSubmitting}
// //         className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition"
// //       >
// //         {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
// //         {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
// //       </button>
// //     </form>
// //     </div>
// //   );
// // }