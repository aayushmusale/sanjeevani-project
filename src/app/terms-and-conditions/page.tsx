import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Sanjivani Education Consultancy',
  description: 'Read the terms and conditions for using Sanjivani Education Consultancy consultancy services.',
};

export default function TermsAndConditions() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl bg-white">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 pt-16">Terms and Conditions</h1>
      
      <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
        <p className="text-sm text-gray-500">Last Updated: April 2026</p>

        <h2 className="text-2xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
        <p>
          By accessing the website of Sanjivani Education Consultancy and utilizing our consultancy services, you agree to comply with and be bound by the following terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">2. Scope of Services</h2>
        <p>
          Sanjivani Education Consultancy acts exclusively as an <b>intermediary educational consultant</b>. We assist students with university selection, document preparation, and the application process for universities in Russia. 
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">3. No Guarantee Clause</h2>
        <p>
          While we strive to provide accurate guidance and diligent assistance, <b>Sanjivani Education Consultancy does not guarantee university admission or visa approval.</b> The final decision regarding admission rests solely with the respective Russian university, and the issuance of a visa rests entirely with the Embassy of the Russian Federation. We are not liable for any rejections by these sovereign entities.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">4. User Responsibilities</h2>
        <p>
          The applicant is responsible for providing completely authentic, unaltered, and valid academic and identity documents. Any submission of forged documents will result in immediate termination of our services without a refund.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">5. Governing Law and Jurisdiction</h2>
        <p>
          These terms and conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Pune, Maharashtra.
        </p>
      </div>
    </main>
  );
}