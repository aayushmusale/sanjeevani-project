'use client';

import React, { useState, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Country, State, City } from 'country-state-city';
import Link from 'next/link'; 
import { universityData } from '../../lib/universityData';

interface ICountry { isoCode: string; name: string; }
interface IState { isoCode: string; name: string; }
interface ICity { name: string; }
interface FormData { name: string; email: string; phone: string; country: string; state: string; city: string; university: string; }
// ADDED: terms to FormErrors
interface FormErrors { name?: string; email?: string; phone?: string; country?: string; state?: string; city?: string; terms?: string; }

export default function InquiryForm() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', country: '', state: '', city: '', university: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  // ADDED: State to track the checkbox
  const [termsAccepted, setTermsAccepted] = useState(false);

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
    
    // ADDED: Validation for the checkbox
    if (!termsAccepted) {
      newErrors.terms = 'You must accept the Terms and Privacy Policy.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
        setTermsAccepted(false); // Reset checkbox
        setErrors({});
      }
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-7 rounded-2xl shadow-2xl w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Apply Now</h2>
      
      <form onSubmit={handleSubmit} className="space-y-5 text-black" noValidate>
        
        <div>
          <label htmlFor="name" className="form-label text-sm font-semibold mb-1 block">Full Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleTextChange} placeholder="e.g., John Doe" required className={`form-input py-2.5 ${errors.name ? 'border-red-500' : ''}`} />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>

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
            <select 
              id="university" 
              name="university" 
              value={formData.university} 
              onChange={handleTextChange} 
              className="form-input py-2.5"
            >
              <option value="">Select (Optional)</option>
              {universityData.map((uni) => (
                <option key={uni.slug} value={uni.name}>
                  {uni.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* UPDATED LEGAL CONSENT CHECKBOX */}
        <div className="flex flex-col mt-4 mb-6">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className={`w-4 h-4 border rounded bg-gray-50 focus:ring-3 focus:ring-red-300 ${errors.terms ? 'border-red-500' : 'border-gray-300'}`}
              />
            </div>
            <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900">
              I agree to the{' '}
              <Link href="/terms-and-conditions" className="text-red-600 hover:underline">
                Terms and Conditions
              </Link>{' '}
              and{' '}
              <Link href="/privacy-policy" className="text-red-600 hover:underline">
                Privacy Policy
              </Link>.
            </label>
          </div>
          {/* Validation Error Message for Checkbox */}
          {errors.terms && <p className="text-xs text-red-500 mt-2">{errors.terms}</p>}
        </div>
        
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