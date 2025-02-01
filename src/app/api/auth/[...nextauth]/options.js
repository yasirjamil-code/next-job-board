import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/lib/models/User";
import { ConnectDb } from "@/lib/config/DB";

export const authOptions = {
  session: {
    strategy: "jwt", // Using JSON Web Tokens for session management
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      async profile(profile) {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
      async authorize(credentials) {
        await ConnectDb();

        // Find the user by email
        const user = await User.findOne({ email: credentials.email });
        if (user) {
          // If user exists, update with OAuth info if necessary
          if (!user.oauthProvider) {
            user.oauthProvider = "google";
            user.oauthId = credentials.id;
            user.save();
          }
          return user; // Return user if exists
        } else {
          // Create new user if they don't exist
          const newUser = new User({
            email: credentials.email,
            fullName: credentials.name,
            oauthProvider: "google",
            oauthId: credentials.id,
            profilePicture: credentials.image,
          });
          await newUser.save();
          return newUser;
        }
      },
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      async profile(profile) {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url,
        };
      },
      async authorize(credentials) {
        await ConnectDb();

        // Find the user by email
        const user = await User.findOne({ email: credentials.email });
        if (user) {
          // If user exists, update with OAuth info if necessary
          if (!user.oauthProvider) {
            user.oauthProvider = "github";
            user.oauthId = credentials.id;
            user.save();
          }
          return user; // Return user if exists
        } else {
          // Create new user if they don't exist
          const newUser = new User({
            email: credentials.email,
            fullName: credentials.name,
            oauthProvider: "github",
            oauthId: credentials.id,
          });
          await newUser.save();
          return newUser;
        }
      },
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await ConnectDb();

        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          throw new Error("No user found with that email");
        }

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.passwordHash
        );

        if (!isPasswordCorrect) {
          throw new Error("Incorrect password");
        }

        return { id: user.id, email: user.email }; // Return the user object
      },
    }),
  ],

  pages: {
    signIn: "/login", // Custom login page
    signOut: "/logout",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role || "Job Seeker";
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role || "Job Seeker";
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
