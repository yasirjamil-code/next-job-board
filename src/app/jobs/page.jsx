"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

const Jobs = () => {
  const [search, setSearch] = useState("");
  const [minSalary, setMinSalary] = useState(0);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchJobs = async (params) => {
    try {
      setLoading(true);
      const response = await axios.get("/api/jobs");

      if (response.data.success) {
        console.log(response.data.jobs);
        setJobs(response.data.jobs);
      } else {
        alert(response.data.msg);
      }
    } catch (error) {
      alert("Something Went Wrong!");
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchJobs();
  }, []);
  
  if (loading) {
    return <Loading />;
  }
  // const filteredJobs = jobs.filter(
  //   (job) =>
  //     job.title.toLowerCase().includes(search.toLowerCase()) &&
  //     job.salary >= minSalary
  // );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center text-[#1E3A8A] mb-4">
        Available Jobs
      </h1>

      <div className="max-w-4xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
        />

        <input
          type="number"
          placeholder="Minimum Salary"
          value={minSalary}
          onChange={(e) => setMinSalary(Number(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
        />
      </div>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-white p-4 shadow-md rounded-md border border-gray-200 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-[#1E3A8A] mb-2">
              {job.title}
            </h2>
            <p className="text-gray-700 mb-1">{job.description}</p>
            <p className="text-gray-500 mb-1">Location: {job.location}</p>
            <p className="text-gray-500 mb-1">Company: {job.company}</p>
            <p className="text-gray-500 mb-1">Salary: ${job.salary}</p>
            <p className="text-gray-500">Deadline: {job.deadline}</p>
            <Link
              className="block mt-4 text-green-500 hover:underline"
              href={`/jobs/${job._id}`}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
