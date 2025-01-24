import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export default async function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (token) {
    return NextResponse.redirect(new URL("/", req.url));

  }

  

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ["/jobs", "/employer", "/login", "/register"],
};
