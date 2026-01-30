// src/app/api/leads/route.ts
import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

// Define the structure of your incoming lead data
interface LeadRequestBody {
  name: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  university: string;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body: LeadRequestBody = await request.json();

    const { data, error } = await supabase
      .from('leads')
      .insert([
        { 
          name: body.name,
          email: body.email,
          phone: body.phone,
          country: body.country,
          state: body.state,
          city: body.city,
          university: body.university,
        }
      ]);

    if (error) {
      console.error('Supabase error:', error.message);
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: data }, { status: 201 });

  } catch (error: unknown) {
    // We cast to Error to safely access the .message property
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    
    return NextResponse.json(
      { success: false, error: errorMessage }, 
      { status: 500 }
    );
  }
}



























// // src/app/api/leads/route.ts
// import { createClient } from '@supabase/supabase-js';
// import { NextRequest, NextResponse } from 'next/server';

// // Create a Supabase client for server-side operations
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();

//     // Insert the form data into the 'leads' table
//     const { data, error } = await supabase
//       .from('leads')
//       .insert([
//         { 
//           name: body.name,
//           email: body.email,
//           phone: body.phone,
//           country: body.country,
//           state: body.state,
//           city: body.city,
//           university: body.university,
//         }
//       ]);

//     if (error) {
//       // Handle potential errors, like a duplicate email
//       console.error('Supabase error:', error.message);
//       return NextResponse.json({ success: false, error: error.message }, { status: 400 });
//     }

//     return NextResponse.json({ success: true, data: data }, { status: 201 });

//   } catch (error: any) {
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }