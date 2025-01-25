import { ConnectDb } from "@/lib/config/DB";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/lib/models/User";

export async function POST(req) {
  try {
    await ConnectDb();
    const { name, email, password } = await req.json();

    // Check input fields
    if (!name || !email || !password) {
      return NextResponse.json({
        success: false,
        msg: "Please provide name, email, and password.",
      });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({
        success: false,
        msg: "User already registered.",
      });
    }

    // Check password length
    if (password.length < 6) {
      return NextResponse.json({
        success: false,
        msg: "Password must contain at least 6 characters.",
      });
    }

    // Hash password and create user
    const hashedPassword = bcrypt.hashSync(password, 10);
    await User.create({ name, email, password: hashedPassword, role: "job seeker" });

    return NextResponse.json({
      success: true,
      msg: "User registered successfully.",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      msg: "An error occurred. Please try again later.",
    });
  }
}
