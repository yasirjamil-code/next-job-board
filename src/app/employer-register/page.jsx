// pages/employer-register.js
export default function EmployerRegister() {
  return (
    <div className="min-h-screen bg-[#1E3A8A] text-[#1E3A8A] flex items-center justify-center">
      <div className="w-full max-w-lg bg-[white] p-8 rounded-lg shadow-md">
        <h1 className="text-3xl text-black font-bold mb-6 text-center">
          Employer Registration
        </h1>
        <form>
          {/* name */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-[gray] rounded-md bg-[white] text-[#1E3A8A] focus:ring focus:ring-[black] outline-none"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-[gray] rounded-md bg-[white] text-[#1E3A8A] focus:ring focus:ring-[black] outline-none"
            />
          </div>
          {/* Gender */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Gender</label>
            <select
              id="gender"
              name="gender"
              className="w-full p-2 border border-[gray] rounded-md bg-[white] text-[#1E3A8A] focus:ring focus:ring-[black] outline-none"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Job Categories */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Job Types</label>
            <select
              id="job-types"
              name="job-types"
              className="w-full p-2 border border-[gray] rounded-md bg-[white] text-[#1E3A8A] focus:ring focus:ring-[black] outline-none"
            >
              <option value="">Select Job Type</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="freelance">Freelance</option>
            </select>
          </div>

          {/* Country */}
          <div className="mb-4">
            <label htmlFor="country" className="block mb-2 font-medium">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              className="w-full p-2 border border-[gray] rounded-md bg-[white] text-[#1E3A8A] focus:ring focus:ring-[black] outline-none"
            />
          </div>

          {/* State or City */}
          <div className="mb-4">
            <label htmlFor="state" className="block mb-2 font-medium">
              State/City
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full p-2 border border-[gray] rounded-md bg-[white] text-[#1E3A8A] focus:ring focus:ring-[black] outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full p-2 bg-[#1E3A8A] text-[#16A34A] font-bold rounded-md hover:bg-[#193172] transition"
            >
              Be An Employer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
