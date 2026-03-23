// src/components/ui/Card.tsx
import React from 'react';

export default function Card({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`bg-white p-8 rounded-xl shadow-lg ${className}`}>
      {children}
    </div>
  );
}









// import React from 'react';

// interface CardProps {
//   children: React.ReactNode;
//   className?: string;
//   hover?: boolean;
// }

// export default function Card({ children, className = '', hover = false }: CardProps) {
//   return (
//     <div className={`bg-white rounded-xl shadow-md p-6 ${hover ? 'hover:shadow-xl transition-shadow duration-300 cursor-pointer' : ''} ${className}`}>
//       {children}
//     </div>
//   );
// }
