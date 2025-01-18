"use client";
import React, { useState } from "react";

const Jobs = () => {
  const [role, setRole] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === "") {
      alert("role is empty");
    } else {
      alert(role);
    }
    console.log(role);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 *:text-black">
        <label className="block mb-2 text-[#1E3A8A]">Role</label>
        <select
          className="w-full p-2 border rounded"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="">--Please Select--</option>
          <option value="Employer">Employer</option>
          <option value="Job Seeker">Job Seeker</option>
        </select>
        <button className="text-white bg-white" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Jobs;
