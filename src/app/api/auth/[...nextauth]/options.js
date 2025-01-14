import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { ConnectDb } from "@/lib/config/DB";
import User from "@/lib/models/User";

export const authOptions = {
  providers: [
    // Credentials Provider
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        role: { label: "Role", type: "text" }, // Role field for credentials
      },
      async authorize(credentials) {
        await ConnectDb();

        const { email, password, role } = credentials;

        let user = await User.findOne({ email });
        if (user) {
          const isValidPassword = bcrypt.compareSync(password, user.password);
          if (!isValidPassword) throw new Error("Invalid credentials");
        } else {
          if (!["Employer", "Job Seeker"].includes(role)) {
            throw new Error("Invalid role");
          }
          const hashedPassword = bcrypt.hashSync(password, 10);
          user = await User.create({ email, password: hashedPassword, role });
        }

        return { id: user._id, email: user.email, role: user.role };
      },
    }),

    // GitHub Provider
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    // Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.role = user.role || null; // Role may not exist for GitHub/Google
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user.id = token.id;
      session.user.role = token.role || "N/A";
      return session;
    },
  },
};

export default NextAuth(authOptions);
