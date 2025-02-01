"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      router.push("/");
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm p-8 space-y-2 bg-white border-gray-500 border text-black rounded">
        <h2 className="text-center text-2xl font-bold">Login</h2>
        {error && <p className="text-red-600 text-center">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-[#1e3a8a]">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-[#1e3a8a]">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all py-2 px-4 rounded"
            disabled={submitting}
          >
            {submitting ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="space-y-2">
          <button
            onClick={() => signIn("google")}
            className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300 py-2 px-4 rounded"
          >
            Continue with Google
          </button>
          <button
            onClick={() => signIn("github")}
            className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300 py-2 px-4 rounded"
          >
            Continue with GitHub
          </button>
        </div>
        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
