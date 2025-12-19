import NextAuth, { DefaultSession } from "next-auth";
import { JWT as DefaultJWT } from "next-auth/jwt";

// Extend built-in types for Session and JWT to include custom fields
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      id: string;
      role?: string;
    };
  }

  interface User {
    id: string;
    role?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    sub: string; // user id
    role?: string;
    name?: string | null;
  }
}
