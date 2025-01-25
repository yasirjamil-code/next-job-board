"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import Link from "next/link";

export default function Custom404() {
  useEffect(() => {
    // const  = require('canvas-confetti');
    confetti.create(document.getElementById("confetti-canvas"), {
      resize: true,
      useWorker: true,
    })({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  }, []);

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 to-purple-100 text-[#1e3a8a]">
      {/* Confetti canvas */}
      <canvas
        id="confetti-canvas"
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      ></canvas>

      <div className="z-10 text-center space-y-4">
        <h1 className="text-6xl sm:text-8xl font-extrabold tracking-wide animate__animated animate__bounceInDown">
          404
        </h1>
        <p className="text-xl sm:text-3xl font-semibold">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-lg sm:text-xl">
          Don’t worry, we’ll get you back on track.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-white text-indigo-600 rounded-full text-lg font-semibold transition-all duration-300 border border-indigo-700 hover:bg-indigo-600 hover:text-white"
        >
          Go Home
        </Link>
      </div>

      <div className="absolute bottom-10 text-center text-sm text-white opacity-50">
        <p>Made with 💖 using Next.js & Tailwind CSS</p>
      </div>
    </div>
  );
}
