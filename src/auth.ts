import NextAuth, { Session } from "next-auth";
import Github from "@auth/core/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./db";
import { JWT } from "@auth/core/jwt";
import { AdapterUser } from "@auth/core/adapters";

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

if (!GITHUB_CLIENT_SECRET || !GITHUB_CLIENT_ID) {
  throw new Error("Missing github oath credentials!");
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Github({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({
      session,
      token,
      user,
    }: {
      session: Session;
      token: JWT;
      user: AdapterUser;
    }) {
      if (session && session.user && user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
});
