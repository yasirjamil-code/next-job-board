import { ConnectDb } from "@/lib/config/DB";
import User from "@/lib/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const { email, password } = await req.json();

  await ConnectDb();

  // Check if the user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ message: "User already exists" }), { status: 400 });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save the new user
  const newUser = new User({ email, password: hashedPassword });
  await newUser.save();

  return new Response(JSON.stringify({ message: "User registered successfully" }), { status: 201 });
}