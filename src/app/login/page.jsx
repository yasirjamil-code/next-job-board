"use client";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

const LoginPage = () => {
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [isPassword, setIsPassword] = useState(true);
  if (session) {
    redirect("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      name,
      redirect: false,
    });

    if (result?.error) {
      alert("Login failed: " + result.error);
    } else {
      alert("Login successful");
      setEmail("");
      setPassword("");
      setName("");
    }
  };

  const togglePasswordVisibility = () => {
    setIsPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1E3A8A]">
      {/* Form Section */}

      {/* Social Login Buttons */}
      <div className="mt-4 flex flex-col items-center gap-3 bg-white w-full max-w-sm p-4 rounded shadow-lg">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-lg w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold text-center mb-4 text-[#191a1d]">
            Login
          </h2>

          {/* Name Input */}
          <div className="mb-4">
            <label className="block mb-2 text-[#1E3A8A]">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block mb-2 text-[#1E3A8A]">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4 relative">
            <label className="block mb-2 text-[#1E3A8A]">Password</label>
            <input
              type={isPassword ? "password" : "text"}
              className="w-full p-2 border rounded"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-9 text-[#1E3A8A] underline"
            >
              {isPassword ? "Show" : "Hide"}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-2 bg-[#1E3A8A] text-[#22C55E] rounded font-semibold"
          >
            Login
          </button>
        </form>
        <button
          onClick={() => signIn("google")}
          className="mr-2 p-2 gap-7 items-center justify-center shadow-xl flex text-[gray] w-72 rounded"
        >
          Continue with Google
          <Image src="/google.png" height={22} width={22} alt="google" />
        </button>
        <button
          onClick={() => signIn("github")}
          className="p-2 gap-7 items-center justify-center shadow-xl flex w-72 text-[gray] rounded"
        >
          Continue with GitHub
          <Image src="/github.png" height={22} width={22} alt="github" />
        </button>
        {/* Register Link */}
        <p className="text-center mt-4 text-[#1E3A8A]">
          Don’t have an account?{" "}
          <Link href="/register" className="underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
