// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import WhatsAppWidget from "../../components/layout/WhatsAppWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanjivani Education Consultants - Study Abroad",
  description: "Find the best universities for your study abroad journey. Low fees, worldwide recognition. Apply now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}












// // src/app/layout.tsx
// import type { Metadata } from "next";
// import "./globals.css";
// import { Inter } from "next/font/google";
// // Import your header, footer, and WhatsApp widget
// import Header from "../../components/layout/Header";
// import Footer from "../../components/layout/Footer";
// import WhatsAppWidget from "../../components/layout/WhatsAppWidget";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Sanjeevani Education Consultants - Study Abroad",
//   description: "Find the best universities for your study abroad journey. Low fees, worldwide recognition. Apply now!",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Header />
//         <main className="h-[calc(100vh)] "> 
//           {/* pt-20 for fixed header */}
//           {children}
//         </main>
//         {/* <Footer/> */}
//         <WhatsAppWidget /> 
//       </body>
//     </html>
//   );
// }

// // NOTE: You would need to create a `src/app/globals.css` if you haven't already
// // and include the Tailwind CSS directives there:
// /*
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
// */