"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Register() {
  const router = useRouter();
  const [isPassword, setIsPassword] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(""); // For displaying errors or success
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setIsPassword((prev) => !prev);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);
      const response = await axios.post("/api/auth/register", data);

      if (response.data.success) {
        setMessage(response.data.msg);
        setTimeout(() => router.push("/login"), 2000); // Navigate after success
      } else {
        setMessage(response.data.msg);
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm p-8 space-y-2 mt-8 bg-white border-gray-500 border text-black rounded">
        <h2 className="text-center text-2xl font-bold">Register</h2>
        {message && <p className="text-center text-red-600">{message}</p>}
        <form onSubmit={onSubmitHandler} className="space-y-4">
          <div>
            <label className="block text-[#1e3a8a]">Name</label>
            <input
              onChange={onChangeHandler}
              name="name"
              value={data.name}
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-[#1e3a8a]">Email</label>
            <input
              onChange={onChangeHandler}
              name="email"
              value={data.email}
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block mb-2 text-[#1E3A8A]">Password</label>
            <input
              type={isPassword ? "password" : "text"}
              className="w-full p-2 border rounded"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={onChangeHandler}
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

          <button
            type="submit"
            className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all py-2 px-4 rounded"
          >
            {submitting ? "Submitting..." : "Register"}
          </button>
        </form>
        <button
          onClick={() => signIn("google")}
          className="mr-2 p-2 gap-7 items-center justify-center flex text-[gray] w-72 rounded"
        >
          Continue with Google
          <Image src="/google.png" height={22} width={22} alt="google" />
        </button>
        <button
          onClick={() => signIn("github")}
          className="p-2 gap-7 items-center justify-center flex w-72 text-[gray] rounded"
        >
          Continue with GitHub
          <Image src="/github.png" height={22} width={22} alt="github" />
        </button>
        <p className="text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
