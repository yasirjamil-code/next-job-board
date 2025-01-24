"use client";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function EmployerRegister() {
  const [phone, setPhone] = useState("");
  return (
    <div className="min-h-screen mt-10 mb-2 text-[black] flex items-center justify-center">
      <div className="mt-4 w-full max-w-lg border border-gray-500 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl text-black font-bold mb-6 text-center">
          Employer Registration
        </h1>
        <form>
          {/* name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-[#1E3A8A] mb-2 font-medium"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-[gray] rounded-md"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-[#1E3A8A] mb-2 font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-[gray] rounded-md text-black"
            />
          </div>

          {/* Contact */}
          <div className="mb-4">
            <label
              htmlFor="contact"
              className="block text-[#1E3A8A] mb-2 font-medium"
            >
              Contact
            </label>
            <PhoneInput
              country={"us"} // Default country
              onChange={(phone) => console.log(phone)} // Handle phone input changes
              inputStyle={{
                border: "1px solid gray",
                width: "100%",
                height: "3rem",
                borderRadius: "0.375rem",
                padding: "0 3rem",
                color: "black",
                fontSize: "1rem",
                outline:'1px'
              }}
              dropdownStyle={{
                background: "white",
                border: "1px solid gray",
                borderRadius: "0.375rem",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                padding: "0.5rem",
                userSelect: "none",
              }}
              containerStyle={{
                width: "100%",
                
              }}
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-[#1E3A8A] mb-2 font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border border-[gray] rounded-md "
            />
          </div>
          {/* Company */}
          <div className="mb-4">
            <label
              htmlFor="company"
              className="block text-[#1E3A8A] mb-2 font-medium"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full p-2 border border-[gray] rounded-md bg-[white] "
            />
          </div>
          {/* Country */}
          <div className="mb-4">
            <label
              htmlFor="country"
              className="block text-[#1E3A8A] mb-2 font-medium"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              className="w-full p-2 border border-[gray] rounded-md bg-[white] "
            />
          </div>

          {/* State or City */}
          <div className="mb-4">
            <label
              htmlFor="state"
              className="block text-[#1E3A8A] mb-2 font-medium"
            >
              State/City
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full p-2 border  border-[gray]  rounded-md  "
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full p-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-md transition"
            >
              Be An Employer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
