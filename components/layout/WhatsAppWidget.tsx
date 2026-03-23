// src/components/ui/WhatsAppWidget.tsx
'use client';
import { MessageSquareText } from 'lucide-react'; // Uses lucide-react dependency

const WhatsAppWidget = () => {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || 'Consultant';
  const message = `Hello ${companyName}, I would like to book a free counseling session.`;
  
  if (!whatsappNumber) return null;

  const url = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50 flex items-center justify-center"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageSquareText size={28} />
    </a>
  );
};

export default WhatsAppWidget;