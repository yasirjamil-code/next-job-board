import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export default async function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const issuedAt = new Date(token?.iat * 1000);
  const expiresAt = new Date(token?.exp * 1000);

  console.log("Issued At:", issuedAt.toLocaleString());
  console.log("Expires At:", expiresAt.toLocaleString());
  // If no token (user not signed in), redirect to "/"
  if (token?.role === "Employer") {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (token?.role === "Job Seeker") {
    if (pathname.startsWith("/employer")) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ["/jobs", "/employer"],
};
