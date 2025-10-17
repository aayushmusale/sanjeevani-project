'use client';

import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import { Country, State, City }  from 'country-state-city';

// Define types for better code safety
interface ICountry { isoCode: string; name: string; }
interface IState { isoCode: string; name: string; }
interface ICity { name: string; }
interface FormData { name: string; email: string; phone: string; country: string; state: string; city: string; university: string; }
interface FormErrors { name?: string; email?: string; phone?: string; country?: string; state?: string; city?: string; }

export default function ApplyNowPage() {
  // State for form data and errors
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', country: '', state: '', city: '', university: '' });
  const [errors, setErrors] = useState<FormErrors>({});

  // State for dropdown options and selections
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('');

  // Effect to load countries on initial render
  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  // Effect to update states when a country is selected
  useEffect(() => {
    const statesOfCountry = State.getStatesOfCountry(selectedCountry);
    setStates(statesOfCountry || []);
    setCities([]);
    setSelectedState('');
    setFormData(prev => ({ ...prev, state: '', city: '' }));
  }, [selectedCountry]);

  // Effect to update cities when a state is selected
  useEffect(() => {
    const citiesOfState = City.getCitiesOfState(selectedCountry, selectedState);
    setCities(citiesOfState || []);
    setFormData(prev => ({ ...prev, city: '' }));
  }, [selectedState, selectedCountry]);

  // Form validation logic
  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be exactly 10 digits.';
    if (!formData.country) newErrors.country = 'Country is required.';
    if (!formData.state) newErrors.state = 'State is required.';
    if (!formData.city) newErrors.city = 'City is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handlers for form inputs and selections
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const countryIsoCode = e.target.value;
    setSelectedCountry(countryIsoCode);
    const countryName = Country.getCountryByCode(countryIsoCode)?.name || '';
    setFormData(prev => ({...prev, country: countryName, state: '', city: ''}));
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const stateIsoCode = e.target.value;
    setSelectedState(stateIsoCode);
    const stateName = State.getStateByCodeAndCountry(stateIsoCode, selectedCountry)?.name || '';
    setFormData(prev => ({...prev, state: stateName, city: ''}));
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cityName = e.target.value;
    setFormData(prev => ({...prev, city: cityName}));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Submitted:', formData);
      alert('Thank you for your application! We will be in touch shortly.');
      setFormData({ name: '', email: '', phone: '', country: '', state: '', city: '', university: '' });
      setSelectedCountry('');
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-lg mx-auto">
                {/* CHANGE: Reduced margin below the heading */}
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Apply Now</h2>
                {/* CHANGE: Reduced spacing between form fields */}
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  
                  {/* Name, Email, Phone (No Changes) */}
                  <div>
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleTextChange} placeholder="e.g., John Doe" required className={`form-input ${errors.name ? 'border-red-500' : ''}`} />
                    {errors.name && <p className="error-message">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleTextChange} placeholder="e.g., john.doe@example.com" required className={`form-input ${errors.email ? 'border-red-500' : ''}`} />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleTextChange} placeholder="e.g., 9876543210" required className={`form-input ${errors.phone ? 'border-red-500' : ''}`} />
                    {errors.phone && <p className="error-message">{errors.phone}</p>}
                  </div>
    
                  {/* Location Grids */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Country */}
                    <div>
                      <label htmlFor="country" className="form-label">Country</label>
                      <select id="country" onChange={handleCountryChange} value={selectedCountry} required className={`form-input ${errors.country ? 'border-red-500' : ''}`}>
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                          <option key={country.isoCode} value={country.isoCode}>{country.name}</option>
                        ))}
                      </select>
                      {errors.country && <p className="error-message">{errors.country}</p>}
                    </div>
                    {/* State */}
                    <div>
                      <label htmlFor="state" className="form-label">State</label>
                      <select id="state" onChange={handleStateChange} value={selectedState} required disabled={!selectedCountry} className={`form-input ${errors.state ? 'border-red-500' : ''}`}>
                        <option value="">Select State</option>
                        {states.map((state) => (
                          <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
                        ))}
                      </select>
                      {errors.state && <p className="error-message">{errors.state}</p>}
                    </div>
                  </div>
    
                  {/* CHANGE: NEW GRID for City and University */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* City */}
                    <div>
                      <label htmlFor="city" className="form-label">City</label>
                      <select id="city" onChange={handleCityChange} value={formData.city} required disabled={!selectedState} className={`form-input ${errors.city ? 'border-red-500' : ''}`}>
                        <option value="">Select City</option>
                        {cities.map((city) => (
                          <option key={city.name} value={city.name}>{city.name}</option>
                        ))}
                      </select>
                      {errors.city && <p className="error-message">{errors.city}</p>}
                    </div>
                    {/* University */}
                    <div>
                      <label htmlFor="university" className="form-label">University (Optional)</label>
                      <input type="text" id="university" name="university" value={formData.university} onChange={handleTextChange} placeholder="e.g., Kazan Federal" className="form-input" />
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <button type="submit" className="w-full flex justify-center items-center py-3 px-4 text-md font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 ease-in-out transform hover:scale-105">
                    <Send className="h-5 w-5 mr-2" />
                    Submit Application
                  </button>
                </form>
              </div>
  );
}





















// // src/components/forms/InquiryForm.tsx
// 'use client';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod'; // Install this package
// import { InquirySchema, InquiryFormInputs } from '../../types';// Import the Zod schema
// import { Loader2, Send } from 'lucide-react';

// export default function InquiryForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting, isSubmitSuccessful },
//     reset,
//   } = useForm<InquiryFormInputs>({
//     resolver: zodResolver(InquirySchema),
//     defaultValues: { name: '', email: '', phone: '', interestedIn: '' },
//   });

//   const onSubmit = async (data: InquiryFormInputs) => {
//     try {
//       const response = await fetch('/api/leads', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
        
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to submit inquiry.');
//       }
      
//       console.log('Lead submitted:', await response.json());
//       reset(); // Clear form on success
//     } catch (error) {
//       console.error(error);
//       // Handle error display
//     }
//   };

//   if (isSubmitSuccessful) {
//     return (
//       <div className="p-6 bg-green-100 border-l-4 border-green-500 text-green-700 rounded-md">
//         <p className="font-bold">Thank You! 🎉</p>
//         <p>Your inquiry has been successfully submitted. We will contact you shortly.</p>
//       </div>
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6 bg-white shadow-lg rounded-xl">
//       {/* <h2 className="text-2xl font-bold mb-4 text-black">Book Your Free Counseling</h2> */}
      
//       {/* Name Field */}
//       <div>
//         <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//         <input
//           id="name"
//           {...register('name')}
//           className={`mt-1 block w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-2 text-black`}
//         />
//         {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
//       </div>

//       {/* Email Field */}
//       <div>
//         <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//         <input
//           id="email"
//           type="email"
//           {...register('email')}
//           className={`mt-1 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-2 text-black`}
//         />
//         {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
//       </div>

//       {/* Phone Field */}
//       <div>
//         <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
//         <input
//           id="phone"
//           type="tel"
//           {...register('phone')}
//           className={`mt-1 block w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-2 text-black`}
//         />
//         {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
//       </div>

//       {/* Interested In Field */}
//       <div>
//         <label htmlFor="interestedIn" className="block text-sm font-medium text-gray-700">Interested Course/University</label>
//         <input
//           id="interestedIn"
//           {...register('interestedIn')}
//           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
//         />
//       </div>

//       {/* Submit Button */}
//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition"
//       >
//         {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
//         {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
//       </button>
//     </form>
//   );
// }