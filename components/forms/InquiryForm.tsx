'use client';

import React, { useState, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Country, State, City } from 'country-state-city';

interface ICountry { isoCode: string; name: string; }
interface IState { isoCode: string; name: string; }
interface ICity { name: string; }
interface FormData { name: string; email: string; phone: string; country: string; state: string; city: string; university: string; }
interface FormErrors { name?: string; email?: string; phone?: string; country?: string; state?: string; city?: string; }

export default function ApplyNowPage() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', country: '', state: '', city: '', university: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  useEffect(() => {
    const statesOfCountry = State.getStatesOfCountry(selectedCountry);
    setStates(statesOfCountry || []);
    setCities([]);
    setSelectedState('');
    setFormData(prev => ({ ...prev, state: '', city: '' }));
  }, [selectedCountry]);

  useEffect(() => {
    const citiesOfState = City.getCitiesOfState(selectedCountry, selectedState);
    setCities(citiesOfState || []);
    setFormData(prev => ({ ...prev, city: '' }));
  }, [selectedState, selectedCountry]);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.email.trim()) newErrors.email = 'Required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Must be 10 digits';
    if (!formData.country) newErrors.country = 'Required';
    if (!formData.state) newErrors.state = 'Required';
    if (!formData.city) newErrors.city = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Thank you! We will be in touch shortly.');
        setFormData({ name: '', email: '', phone: '', country: '', state: '', city: '', university: '' });
        setSelectedCountry('');
        setSelectedState('');
        setErrors({});
      }
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    /* INCREASED: Restored container padding to p-7 and max-width to md (448px) */
    <div className="bg-white p-7 rounded-2xl shadow-2xl w-full max-w-md mx-auto">
      {/* INCREASED: Margin below heading mb-6 */}
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Apply Now</h2>
      
      {/* INCREASED: Vertical spacing space-y-5 */}
      <form onSubmit={handleSubmit} className="space-y-5 text-black" noValidate>
        
        <div>
          <label htmlFor="name" className="form-label text-sm font-semibold mb-1 block">Full Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleTextChange} placeholder="e.g., John Doe" required className={`form-input py-2.5 ${errors.name ? 'border-red-500' : ''}`} />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>

        {/* Email and Phone Grid - Increased gap to 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="form-label text-sm font-semibold mb-1 block">Email Address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleTextChange} placeholder="Email" required className={`form-input py-2.5 ${errors.email ? 'border-red-500' : ''}`} />
          </div>
          <div>
            <label htmlFor="phone" className="form-label text-sm font-semibold mb-1 block">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleTextChange} placeholder="Phone" required className={`form-input py-2.5 ${errors.phone ? 'border-red-500' : ''}`} />
          </div>
        </div>

        {/* Location Grids - Increased py-2.5 for dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="country" className="form-label text-sm font-semibold mb-1 block">Country</label>
            <select id="country" onChange={handleCountryChange} value={selectedCountry} required className={`form-input py-2.5 ${errors.country ? 'border-red-500' : ''}`}>
              <option value="">Select</option>
              {countries.map((country) => (
                <option key={country.isoCode} value={country.isoCode}>{country.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="state" className="form-label text-sm font-semibold mb-1 block">State</label>
            <select id="state" onChange={handleStateChange} value={selectedState} required disabled={!selectedCountry} className={`form-input py-2.5 ${errors.state ? 'border-red-500' : ''}`}>
              <option value="">Select</option>
              {states.map((state) => (
                <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="form-label text-sm font-semibold mb-1 block">City</label>
            <select id="city" onChange={handleCityChange} value={formData.city} required disabled={!selectedState} className={`form-input py-2.5 ${errors.city ? 'border-red-500' : ''}`}>
              <option value="">Select</option>
              {cities.map((city) => (
                <option key={city.name} value={city.name}>{city.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="university" className="form-label text-sm font-semibold mb-1 block">University</label>
            <input type="text" id="university" name="university" value={formData.university} onChange={handleTextChange} placeholder="Optional" className="form-input py-2.5" />
          </div>
        </div>
        
        {/* Submit Button: Restored to py-3 */}
        <button 
          type="submit" 
          disabled={isSubmitting} 
          className="w-full flex justify-center items-center py-3 px-4 text-md font-bold rounded-lg text-white bg-red-600 hover:bg-red-700 transition-all transform hover:scale-[1.01] disabled:opacity-50 mt-2"
        >
          {isSubmitting ? <Loader2 className="h-5 w-5 mr-2 animate-spin" /> : <Send className="h-5 w-5 mr-2" />}
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  );
}
































// // 'use client';

// // import React, { useState, useEffect } from 'react';
// // import { Mail, Send, Loader2 } from 'lucide-react'; // Add Loader2
// // import { Country, State, City }  from 'country-state-city';

// // // Define types for better code safety
// // interface ICountry { isoCode: string; name: string; }
// // interface IState { isoCode: string; name: string; }
// // interface ICity { name: string; }
// // interface FormData { name: string; email: string; phone: string; country: string; state: string; city: string; university: string; }
// // interface FormErrors { name?: string; email?: string; phone?: string; country?: string; state?: string; city?: string; }

// // export default function ApplyNowPage() {
// //   // State for form data and errors
// //   const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', country: '', state: '', city: '', university: '' });
// //   const [errors, setErrors] = useState<FormErrors>({});

// //   // State for dropdown options and selections
// //   const [countries, setCountries] = useState<ICountry[]>([]);
// //   const [states, setStates] = useState<IState[]>([]);
// //   const [cities, setCities] = useState<ICity[]>([]);
// //   const [selectedCountry, setSelectedCountry] = useState<string>('');
// //   const [selectedState, setSelectedState] = useState<string>('');

// //   // Effect to load countries on initial render
// //   useEffect(() => {
// //     setCountries(Country.getAllCountries());
// //   }, []);

// //   // Effect to update states when a country is selected
// //   useEffect(() => {
// //     const statesOfCountry = State.getStatesOfCountry(selectedCountry);
// //     setStates(statesOfCountry || []);
// //     setCities([]);
// //     setSelectedState('');
// //     setFormData(prev => ({ ...prev, state: '', city: '' }));
// //   }, [selectedCountry]);

// //   // Effect to update cities when a state is selected
// //   useEffect(() => {
// //     const citiesOfState = City.getCitiesOfState(selectedCountry, selectedState);
// //     setCities(citiesOfState || []);
// //     setFormData(prev => ({ ...prev, city: '' }));
// //   }, [selectedState, selectedCountry]);

// //   // Form validation logic
// //   const validateForm = () => {
// //     const newErrors: FormErrors = {};
// //     if (!formData.name.trim()) newErrors.name = 'Full Name is required.';
// //     if (!formData.email.trim()) newErrors.email = 'Email is required.';
// //     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address.';
// //     if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
// //     else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be exactly 10 digits.';
// //     if (!formData.country) newErrors.country = 'Country is required.';
// //     if (!formData.state) newErrors.state = 'State is required.';
// //     if (!formData.city) newErrors.city = 'City is required.';
// //     setErrors(newErrors);
    
// //     console.log("Validation errors: ", newErrors )
    
// //     return Object.keys(newErrors).length === 0;


// //   };

// //   // Handlers for form inputs and selections
// //   const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const { name, value } = e.target;
// //     setFormData(prevState => ({ ...prevState, [name]: value }));
// //   };

// //   const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
// //     const countryIsoCode = e.target.value;
// //     setSelectedCountry(countryIsoCode);
// //     const countryName = Country.getCountryByCode(countryIsoCode)?.name || '';
// //     setFormData(prev => ({...prev, country: countryName, state: '', city: ''}));
// //   };

// //   const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
// //     const stateIsoCode = e.target.value;
// //     setSelectedState(stateIsoCode);
// //     const stateName = State.getStateByCodeAndCountry(stateIsoCode, selectedCountry)?.name || '';
// //     setFormData(prev => ({...prev, state: stateName, city: ''}));
// //   };

// //   const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
// //     const cityName = e.target.value;
// //     setFormData(prev => ({...prev, city: cityName}));
// //   };


// // // ... inside ApplyNowPage, after other useState hooks
// // const [isSubmitting, setIsSubmitting] = useState(false);


// // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     if (!validateForm()) {
// //         return; // Stop if validation fails
// //     }

// //     setIsSubmitting(true);

// //     try {
// //         const response = await fetch('/api/leads', {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json',
// //             },
// //             body: JSON.stringify(formData),
// //         });

// //         const result = await response.json();

// //         if (response.ok) {
// //             alert('Thank you for your application! We will be in touch shortly.');
// //             // Reset form on success
// //             setFormData({ name: '', email: '', phone: '', country: '', state: '', city: '', university: '' });
// //             setSelectedCountry('');
// //             setSelectedState('');
// //             setErrors({});
// //         } else {
// //             // Show a specific error message from the server if one exists
// //             alert(`Error: ${result.error || 'Something went wrong.'}`);
// //         }
// //     } catch (error) {
// //         console.error('Submission failed:', error);
// //         alert('An unexpected error occurred. Please try again.');
// //     } finally {
// //         setIsSubmitting(false);
// //     }
// // };



// //   return (
// //     <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-lg mx-auto">
// //                 {/* CHANGE: Reduced margin below the heading */}
// //                 <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Apply Now</h2>
// //                 {/* CHANGE: Reduced spacing between form fields */}
// //                 <form onSubmit={handleSubmit} className="space-y-4 text-black" noValidate>
                  
// //                   {/* Name, Email, Phone (No Changes) */}
// //                   <div>
// //                     <label htmlFor="name" className="form-label">Full Name</label>
// //                     <input type="text" id="name" name="name" value={formData.name} onChange={handleTextChange} placeholder="e.g., John Doe" required className={`form-input ${errors.name ? 'border-red-500' : ''}`} />
// //                     {errors.name && <p className="error-message">{errors.name}</p>}
// //                   </div>
// //                   <div>
// //                     <label htmlFor="email" className="form-label">Email Address</label>
// //                     <input type="email" id="email" name="email" value={formData.email} onChange={handleTextChange} placeholder="e.g., john.doe@example.com" required className={`form-input ${errors.email ? 'border-red-500' : ''}`} />
// //                     {errors.email && <p className="error-message">{errors.email}</p>}
// //                   </div>
// //                   <div>
// //                     <label htmlFor="phone" className="form-label">Phone Number</label>
// //                     <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleTextChange} placeholder="e.g., 9876543210" required className={`form-input ${errors.phone ? 'border-red-500' : ''}`} />
// //                     {errors.phone && <p className="error-message">{errors.phone}</p>}
// //                   </div>
    
// //                   {/* Location Grids */}
// //                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                     {/* Country */}
// //                     <div>
// //                       <label htmlFor="country" className="form-label">Country</label>
// //                       <select id="country" onChange={handleCountryChange} value={selectedCountry} required className={`form-input ${errors.country ? 'border-red-500' : ''}`}>
// //                         <option value="">Select Country</option>
// //                         {countries.map((country) => (
// //                           <option key={country.isoCode} value={country.isoCode}>{country.name}</option>
// //                         ))}
// //                       </select>
// //                       {errors.country && <p className="error-message">{errors.country}</p>}
// //                     </div>
// //                     {/* State */}
// //                     <div>
// //                       <label htmlFor="state" className="form-label">State</label>
// //                       <select id="state" onChange={handleStateChange} value={selectedState} required disabled={!selectedCountry} className={`form-input ${errors.state ? 'border-red-500' : ''}`}>
// //                         <option value="">Select State</option>
// //                         {states.map((state) => (
// //                           <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
// //                         ))}
// //                       </select>
// //                       {errors.state && <p className="error-message">{errors.state}</p>}
// //                     </div>
// //                   </div>
    
// //                   {/* CHANGE: NEW GRID for City and University */}
// //                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                     {/* City */}
// //                     <div>
// //                       <label htmlFor="city" className="form-label">City</label>
// //                       <select id="city" onChange={handleCityChange} value={formData.city} required disabled={!selectedState} className={`form-input ${errors.city ? 'border-red-500' : ''}`}>
// //                         <option value="">Select City</option>
// //                         {cities.map((city) => (
// //                           <option key={city.name} value={city.name}>{city.name}</option>
// //                         ))}
// //                       </select>
// //                       {errors.city && <p className="error-message">{errors.city}</p>}
// //                     </div>
// //                     {/* University */}
// //                     <div>
// //                       <label htmlFor="university" className="form-label">University (Optional)</label>
// //                       <input type="text" id="university" name="university" value={formData.university} onChange={handleTextChange} placeholder="e.g., Kazan Federal" className="form-input" />
// //                     </div>
// //                   </div>
                  
// //                   {/* Submit Button */}
// //                  <button 
// //                   type="submit" 
// //                   disabled={isSubmitting} // Disable the button while submitting
// //                   className="w-full flex justify-center items-center py-3 px-4 text-md font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50"
// //                 >
// //                   {isSubmitting ? (
// //                     <Loader2 className="h-5 w-5 mr-2 animate-spin" />
// //                   ) : (
// //                     <Send className="h-5 w-5 mr-2" />
// //                   )}
// //                   {isSubmitting ? 'Submitting...' : 'Submit Application'}
// //                 </button>
// //                 </form>
// //               </div>
// //   );
// // }



