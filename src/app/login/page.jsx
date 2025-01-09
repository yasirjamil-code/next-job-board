"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result.error) {
      alert("Login failed: " + result.error);
    } else {
      alert("Login successful");
      setEmail("");
      setPassword("");
    }
  };

  const changeState = () => {
    setIsPassword((val) => !val);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E3A8A]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-[#1E3A8A]">
          Login
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
        <div className="mb-4 relative">
          <label className="block mb-2 text-[#1E3A8A]">Password</label>
          <input
            type={isPassword ? "password" : "text"}
            className="w-full p-2 border rounded"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={changeState}
            className="absolute right-3 top-9 text-[#1E3A8A] underline"
          >
            {isPassword ? "Show" : "Hide"}
          </button>
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-[#1E3A8A] text-[#22C55E] rounded font-semibold"
        >
          Login
        </button>
        <div className="mt-4 flex flex-col items-center gap-3">
          <button
            onClick={() => signIn("google")}
            className="mr-2 p-2 gap-7 items-center justify-center shadow-xl flex text-[gray] w-72  rounded "
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
          Don’t have an account?{" "}
          <Link href="/register" className="underline">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
