// pages/employer-dashboard.js
export default function EmployerDashboard() {
  return (
    <div className="min-h-screen mt-4 text-black p-8">
      <div className="max-w-5xl border border-gray-500 mx-auto">
        <div className="bg-[white] p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-center mb-8">
            "Employer Dashboard"
          </h1>
          <h2 className="text-2xl font-semibold mb-4">Your Posted Jobs</h2>

          {/* Job List */}
          <div className="space-y-4">
            {/* Example Job Item */}
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-md shadow-md border border-gray-600 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold">
                    Job Title {index + 1}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Posted on: Jan {15 + index}, 2025
                  </p>
                  <p className="text-red-400 text-sm">
                    Deadline: Jan {15 + index}, 2025
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="px-4 py-2 bg-[#22C55E] text-[#0F1D43] font-medium rounded hover:bg-[#16A34A]">
                    Edit
                  </button>
                  <button className="px-4 py-2 bg-[#ebeb5a] text-[#0F1D43] font-medium rounded hover:bg-[#d3d34f]">
                    Pending
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white font-medium rounded hover:bg-red-700">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
