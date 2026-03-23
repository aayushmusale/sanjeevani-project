import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Sanjeevani</h1>
          <p className="text-lg text-gray-600">
            Have questions about MBBS in Russia? Our consultancy team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="text-red-600 h-6 w-6" />
                <span className="text-gray-700">info@sanjeevaniedu.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-red-600 h-6 w-6" />
                <span className="text-gray-700">+91 98765 43210</span>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="text-red-600 h-6 w-6 mt-1" />
                <span className="text-gray-700">
                  Pune, Maharashtra, India
                </span>
              </div>
            </div>
          </div>

          {/* Business Hours or Quick Note */}
          <div className="bg-red-600 p-8 rounded-2xl shadow-lg text-white">
            <h2 className="text-2xl font-semibold mb-4">Working Hours</h2>
            <p className="mb-4">Monday - Saturday: 10:00 AM to 7:00 PM</p>
            <p className="text-red-100 italic">
             &quot;roviding authentic guidance for your medical career abroad.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}