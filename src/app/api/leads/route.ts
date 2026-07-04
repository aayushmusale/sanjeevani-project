import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, country, state, city, university } = body;

    // 1. Authenticate with Google Sheets
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        // The replace() function is required to fix newline characters when deployed on Vercel
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Format the current time for Pune, India
    const submissionDate = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // 2. Append the new lead to the Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:H', // This assumes your tab is named "Sheet1"
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, email, phone, country, state, city, university || 'Not specified', submissionDate]],
      },
    });

    // 3. Send the Gmail Notification
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `🚨 New Lead Alert: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #dc2626;">New Student Inquiry Received!</h2>
          <p>A new student has just filled out the application form. Here are their details:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="tel:${phone}">${phone}</a></td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Location:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${city}, ${state}, ${country}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>University:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${university || 'Not specified'}</td></tr>
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #777;">View all leads in your shared Google Sheet.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Lead saved to Google Sheets and email sent!" });
    
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}




// import { NextResponse } from 'next/server';
// import { createClient } from '@supabase/supabase-js';
// import nodemailer from 'nodemailer';

// // Initialize your Supabase client
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!; 
// const supabase = createClient(supabaseUrl, supabaseKey);

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const { name, email, phone, country, state, city, university } = body;

//     // 1. Save the lead to Supabase first
//     const { data, error } = await supabase
//       .from('leads')
//       .insert([{ name, email, phone, country, state, city, university }]);

//     if (error) throw error;

//     // 2. Set up the Gmail transporter
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_APP_PASSWORD,
//       },
//     });

//     // 3. Format the email the client will receive
//     const mailOptions = {
//       from: process.env.GMAIL_USER,
//       to: process.env.GMAIL_USER, // Sending it to the client's own inbox
//       subject: `🚨 New Lead Alert: ${name}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
//           <h2 style="color: #dc2626;">New Student Inquiry Received!</h2>
//           <p>A new student has just filled out the application form on sanjivanieducation.com. Here are their details:</p>
//           <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
//             <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td></tr>
//             <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td></tr>
//             <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="tel:${phone}">${phone}</a></td></tr>
//             <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Location:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${city}, ${state}, ${country}</td></tr>
//             <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>University:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${university || 'Not specified'}</td></tr>
//           </table>
//           <p style="margin-top: 20px; font-size: 12px; color: #777;">Log in to your Supabase dashboard to view the full database.</p>
//         </div>
//       `,
//     };

//     // 4. Send the email
//     await transporter.sendMail(mailOptions);

//     return NextResponse.json({ success: true, data });
    
//   } catch (error: any) {
//     console.error('API Error:', error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }