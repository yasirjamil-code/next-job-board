"use client";
import axios from "axios";
import React, { useState } from "react";
export default function PostJob() {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    title: "",
    description: "",
    email: "",
    jobType: "",
    jobField: "",
    location: "",
    skills: "",
    company: "",
    availableSeats: "",
    salary: "",
    deadline: "",
  });

  // change Handler

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  // onsubmit handler

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  
    // Log data to check if salary is included
    console.log("Data being sent:", data);
  
    if (!data.salary) {
      setMessage("Salary is required");
      return;
    }
  
    try {
      setSubmitting(true);
      const response = await axios.post("/api/jobs/", data);
      if (response.data.success) {
        setMessage(response.data.msg);
        setData({
          title: "",
          description: "",
          email: "",
          jobType: "",
          jobField: "",
          location: "",
          skills: "",
          company: "",
          availableSeats: "",
          salary: "",
          deadline: "",
        });
      } else {
        setMessage(response.data.msg);
      }
    } catch (error) {
      setMessage("Something Went Wrong, Try Again");
    } finally {
      setSubmitting(false);
    }
  };
  

  return (
    <div className="min-h-screen text-black flex items-center justify-center mb-2">
      <div className=" mt-14 w-full max-w-3xl border border-gray-500 p-8 rounded-lg shadow-md">
        {message && <p className="text-center text-red-600">{message}</p>}
        <h1 className="text-3xl font-bold mb-6 text-center text-black">
          Post a Job
        </h1>
        <form onSubmit={onSubmitHandler}>
          {/* Title */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-[#1E3A8A] mb-2 font-medium"
            >
              Job Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={data.title}
              onChange={onChangeHandler}
              className="w-full p-2 border border-gray-500 rounded-md bg-[white] text-black "
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-[#1E3A8A] mb-2 font-medium"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={data.description}
              onChange={onChangeHandler}
              rows="4"
              className="w-full p-2 border border-gray-500 rounded-md bg-[white] text-black "
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-[#1E3A8A] mb-2 font-medium"
            >
              Email For Quries
            </label>
            <input
              placeholder="example@mail.com"
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={onChangeHandler}
              className="w-full p-2 border border-gray-500 rounded-md bg-[white] text-black "
            />
          </div>

          {/* Job Type */}
          <div className="mb-4">
            <label className="block text-[#1E3A8A] mb-2 font-medium">
              Job Type
            </label>
            <select
              id="job-type"
              name="jobType"
              value={data.jobType}
              onChange={onChangeHandler}
              className="w-full p-2 border border-gray-500 rounded-md bg-[white] text-black "
            >
              <option value="">Select Job Type</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="contract">Contract</option>
            </select>
          </div>

          {/* Job Fields */}
          <div className="mb-4">
            <label className="block text-[#1E3A8A] mb-2 font-medium">
              Job Field
            </label>
            <select
              id="jobField"
              name="jobField"
              value={data.jobField}
              onChange={onChangeHandler}
              className="w-full p-2 border border-gray-500 rounded-md bg-[white] text-black "
            >
              <option value="">Select Field</option>
              <option value="tech">Technology</option>
              <option value="health">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="education">Education</option>
            </select>
          </div>

          {/* Job Location */}
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-[#1E3A8A] mb-2 font-medium "
            >
              Job Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={data.location}
              onChange={onChangeHandler}
              className="w-full p-2 border border-gray-500 rounded-md bg-[white] text-black "
            />
            {/* // className="w-full p-2 border border-gray-500 rounded-md " */}
          </div>

          {/* Main Skills */}
          <div className="mb-4">
            <label
              htmlFor="skills"
              className="block text-[#1E3A8A] mb-2 font-medium"
            >
              Main Skills
            </label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={data.skills}
              onChange={onChangeHandler}
              placeholder="e.g., React, Node.js"
              className="w-full p-2 border border-gray-500 rounded-md bg-[white] text-black "
            />
          </div>

          {/* Company Name */}
          <div className="mb-4">
            <label
              htmlFor="company"
              className="block text-[#1E3A8A] mb-2 font-medium"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={data.company}
              onChange={onChangeHandler}
              className="w-full p-2 border border-gray-500 rounded-md bg-[white] text-black "
            />
          </div>
          {/* Available Seats */}
          <div className="mb-4">
            <label
              htmlFor="seats"
              className="block text-[#1E3A8A] mb-2 font-medium"
            >
              Available Seats
            </label>
            <input
              type="number"
              id="availableSeats"
              name="availableSeats"
              value={data.availableSeats}
              onChange={onChangeHandler}
              className="w-full p-2 border border-gray-500 rounded-md bg-[white] text-black "
            />
          </div>

          {/* Salary */}
          <div className="mb-4">
            <label
              htmlFor="salary"
              className="block text-[#1E3A8A] mb-2 font-medium"
            >
              Salary
            </label>
            <input
              type="number"
              id="salary"
              name="salary"
              value={data.salary}
              onChange={onChangeHandler}
              className="w-full p-2 border border-gray-500 rounded-md bg-[white] text-black "
            />
          </div>
          {/* deadline */}
          <div className="mb-4">
            <label
              htmlFor="deadline"
              className="block text-[#1E3A8A] mb-2 font-medium"
            >
              Deadline For Application
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={data.deadline}
              onChange={onChangeHandler}
              className="w-full p-2 border border-gray-500 rounded-md bg-[white] text-black "
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full p-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-md transition"
            >
              {submitting ? "Submitting..." : "Post Job"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
