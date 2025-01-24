"use client";
import Loading from "@/components/Loading";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { use } from "react"; // Importing `use` for unwrapping promises

const JobDetail = ({ params }) => {
  // Use React's `use()` to unwrap `params`
  const { id } = use(params); // Unwrap `params` here
  const [job, setJob] = useState(null);

  const fetchJobData = async () => {
    try {
      const response = await axios.get("/api/jobs", {
        params: { id },
      });
      if (response.data.success) {
        setJob(response.data.job);
      } else {
        alert("Something Went Wrong");
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchJobData();
  }, []);

  if (!job) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-md border border-gray-200">
        <h1 className="text-2xl font-bold text-[#1E3A8A] mb-4">{job.title}</h1>
        <p className="text-gray-700 mb-2">{job.description}</p>
        <p className="text-gray-500 mb-1">Location: {job.location}</p>
        <p className="text-gray-500 mb-1">Company: {job.company}</p>
        <p className="text-gray-500 mb-1">Salary: {job.salary}</p>
        <p className="text-gray-500 mb-1">Deadline: {job.deadline}</p>
        <p className="text-gray-500 mb-1">Skills: {job.skills}</p>
        <p className="text-gray-500">Available Seats: {job.availableSeats}</p>
        <Link
          href={"/jobs"}
          className="mt-4 bg-[#1E3A8A] text-white px-4 py-2 rounded hover:bg-[#374f9e]"
        >
          Back to Jobs
        </Link>
      </div>
    </div>
  );
};

export default JobDetail;
