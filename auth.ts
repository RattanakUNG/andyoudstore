import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/db/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import { verify } from "@/lib/encrypt";
import type { NextAuthConfig } from "next-auth";

export const config = {
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email as string,
          },
        });

        if (!user) {
          return null;
        }

        if (typeof credentials.password !== "string") {
          return null;
        }

        if (!user.password) {
          return null;
        }

        const isValid = await verify(credentials.password, user.password);

        if (!isValid) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, user, trigger, token }) {
      // Set the user ID from the token
      session.user.id = token.sub;
      session.user.role = token.role;
      session.user.name = token.name;

      // console.log(token);

      // If there is an update, set the user name
      if (trigger === "update" && user?.name) {
        session.user.name = user.name;
      }

      return session;
    },
    async jwt({ token, user, trigger, session }) {
      // Assign user fields to token
      if (user) {
        token.id = user.id;
        token.role = user.role;

        // If user has no name then use the email
        if (user.name === "NO_NAME") {
          token.name = user.email!.split("@")[0];

          // Update database to reflect the token name
          await prisma.user.update({
            where: { id: user.id },
            data: { name: token.name },
          });
        }

        // if (trigger === 'signIn' || trigger === 'signUp') {
        //   const cookiesObject = await cookies();
        //   const sessionCartId = cookiesObject.get('sessionCartId')?.value;

        //   // if (sessionCartId) {
        //   //   const sessionCart = await prisma.cart.findFirst({
        //   //     where: { sessionCartId },
        //   //   });

        //   //   if (sessionCart) {
        //   //     // Delete current user cart
        //   //     await prisma.cart.deleteMany({
        //   //       where: { userId: user.id },
        //   //     });

        //   //     // Assign new cart
        //   //     await prisma.cart.update({
        //   //       where: { id: sessionCart.id },
        //   //       data: { userId: user.id },
        //   //     });
        //   //   }
        //   // }
        // }
      }

      // Handle session updates
      if (session?.user.name && trigger === "update") {
        token.name = session.user.name;
      }

      return token;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
