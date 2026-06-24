// import {NextResponse} from 'next/server';
// import { auth } from '@/lib/auth'; // path to your auth file
// import {headers} from 'next/headers';
// export async function proxy(request) {
//     const session = await auth.api.getSession({
//         headers: await headers(),
//     })
//     console.log(session);
//     //  if(session?.user?.role == "freelancer" && session?.user?.plan === "free" ) {
//     //     return NextResponse.redirect(new URL('/pricing', request.url));
//     // }
//     if (!session) {
//         return NextResponse.redirect(new URL('/login', request.url));
//     }
// }
// export const config = {
//     // matcher: ['/dashboard/freelancer']
// };



import { NextResponse } from "next/server";

export async function proxy(request) {
return NextResponse.next();
}

export const config = {
matcher: [],
};






