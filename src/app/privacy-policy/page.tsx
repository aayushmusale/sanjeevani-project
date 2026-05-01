import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sanjivani Education Consultancy',
  description: 'Understand how Sanjivani Education Consultancy collects, uses, and protects your personal data.',
};

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl bg-white">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 pt-16">Privacy Policy</h1>
      
      <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
        <p className="text-sm text-gray-500">Last Updated: April 2026</p>

        <h2 className="text-2xl font-semibold text-gray-800">1. Introduction</h2>
        <p>
          Welcome to Sanjivani Education Consultancy. We are committed to protecting your personal data and respecting your privacy. This policy explains how we collect, use, and safeguard your information when you use our website or services to apply for higher education in Russia.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">2. Information We Collect</h2>
        <p>We may collect the following types of personal information when you fill out our inquiry or contact forms:</p>
        <ul className="list-disc pl-6">
          <li>Identity Data: Full name, date of birth, gender.</li>
          <li>Contact Data: Email address, phone number, WhatsApp number, residential address.</li>
          <li>Academic Data: Previous educational records, transcripts, NEET scores.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800">3. How We Use Your Information</h2>
        <p>Your information is used strictly for the following purposes:</p>
        <ul className="list-disc pl-6">
          <li>To provide consultancy regarding medical admissions in Russia.</li>
          <li>To communicate with you regarding your application status.</li>
          <li>To facilitate the visa application process.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800">4. Third-Party Data Sharing</h2>
        <p>
          To process your university admission and travel, it is strictly necessary to share your data with trusted third parties. This includes <b>partnered Russian Medical Universities</b> for the purpose of issuing admission letters, and <b>the Embassy of the Russian Federation / Visa Processing Centers</b> for visa facilitation. We do not sell your data to marketing agencies.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">5. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at: <br />
          <strong>Email:</strong> {process.env.NEXT_PUBLIC_COMPANY_EMAIL}
        </p>
      </div>
    </main>
  );
}