import { auth } from "./auth";

export const proxy = auth;

// // import NextAuth from "next-auth";
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// // import { authConfig } from "./auth.config";

// // export const { auth: middleware } = NextAuth(authConfig);
// export function middleware(request: NextRequest) {
//   if (!request.cookies.get("sessionCartId")) {
//     const sessionCartId = crypto.randomUUID();
//     const response = NextResponse.next();
//     response.cookies.set({
//       name: "sessionCartId",
//       value: sessionCartId,
//       maxAge: 30 * 24 * 60 * 60, // 30 days
//     });
//     return response;
//   }
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };
