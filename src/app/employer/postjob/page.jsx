// pages/post-job.js
export default function PostJob() {
    return (
      <div className="min-h-screen bg-[#1E3A8A] text-black flex items-center justify-center">
        <div className="w-full max-w-3xl bg-[white] p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-center text-black">Post a Job</h1>
          <form>
            {/* Title */}
            <div className="mb-4">
              <label htmlFor="title" className="block mb-2 font-medium">Job Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full p-2 border border-gray-500 rounded-md bg-[white] text-black "
              />
            </div>
  
            {/* Description */}
            <div className="mb-4">
              <label htmlFor="description" className="block mb-2 font-medium">Description</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                className="w-full p-2 border border-gray-500 rounded-md bg-[white] text-black "
              />
            </div>
  
            {/* Job Type */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">Job Type</label>
              <select
                id="job-type"
                name="job-type"
                className="w-full p-2 border border-gray-500 rounded-md bg-[white] text-black "
              >
                <option value="">Select Job Type</option>
                <option value="full-time">Full-Time</option>
                <option value="part-time">Part-Time</option>
                <option value="contract">Contract</option>
              </select>
            </div>
  
            {/* Job Categories */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">Job Categories</label>
              <select
                id="job-categories"
                name="job-categories"
                className="w-full p-2 border border-gray-500 rounded-md bg-[white] text-black "
              >
                <option value="">Select Category</option>
                <option value="tech">Technology</option>
                <option value="health">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="education">Education</option>
              </select>
            </div>
  
            {/* Job Location */}
            <div className="mb-4">
              <label htmlFor="location" className="block mb-2 font-medium text-black">Job Location</label>
              <input
                type="text"
                id="location"
                name="location"
                className="w-full p-2 border border-gray-500 rounded-md bg-[white] text-black "
              />
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="remote"
                  name="remote"
                  className="h-4 w-4 text-[#22C55E] focus:ring-[#22C55E]"
                />
                <label htmlFor="remote" className="ml-2 font-medium">Work from Home</label>
              </div>
            </div>
  
            {/* Main Skills */}
            <div className="mb-4">
              <label htmlFor="skills" className="block mb-2 font-medium">Main Skills</label>
              <input
                type="text"
                id="skills"
                name="skills"
                placeholder="e.g., React, Node.js"
                className="w-full p-2 border border-gray-500 rounded-md bg-[white] text-black "
              />
            </div>
  
            {/* Company Name */}
            <div className="mb-4">
              <label htmlFor="company" className="block mb-2 font-medium">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full p-2 border border-gray-500 rounded-md bg-[white] text-black "
              />
            </div>
  
            {/* Salary */}
            <div className="mb-4">
              <label htmlFor="salary" className="block mb-2 font-medium">Salary</label>
              <input
                type="text"
                id="salary"
                name="salary"
                className="w-full p-2 border border-gray-500 rounded-md bg-[white] text-black "
              />
            </div>
  
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full p-2 bg-[#1E3A8A] text-[#22C55E] font-bold rounded-md hover:bg-[#1e3677] transition"
              >
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  