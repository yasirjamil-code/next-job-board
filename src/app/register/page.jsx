"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Job Seeker");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role }),
    });

    const data = await res.json();

    if (res.status === 201) {
      alert("Registration successful");
    } else {
      alert("Error: " + data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E3A8A]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-[#1E3A8A]">
          Register
        </h2>
        <div className="mb-4">
          <label className="block mb-2 text-[#1E3A8A]">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-[#1E3A8A]">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-[#1E3A8A]">Role</label>
          <select
            className="w-full p-2 border rounded"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="Job Seeker">Job Seeker</option>
            <option value="Employer">Employer</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-[#1E3A8A] text-[#22C55E] rounded font-semibold"
        >
          Register
        </button>
        <div className="mt-4 flex flex-col items-center gap-3 justify-center">
          <button
            onClick={() => signIn("google")}
            className="mr-2 p-2 gap-7 items-center justify-center shadow-xl flex text-[gray] w-72  rounded"
          >
            Continue with Google
            <Image src={"/google.png"} height={22} width={22} alt="github" />
          </button>
          <button
            onClick={() => signIn("github")}
            className="p-2 gap-7 items-center justify-center shadow-xl flex w-72 text-[gray] rounded"
          >
            Continue with GitHub
            <Image src={"/github.png"} height={22} width={22} alt="github" />
          </button>
        </div>
        <p className="text-center mt-4 text-[#1E3A8A]">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
