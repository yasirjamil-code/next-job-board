// pages/contact-us.js
export default function ContactUs() {
  return (
    <div className="min-h-screen mt-6 text-black flex items-center justify-center p-8">
      <div className="w-full max-w-lg border border-gray-500 p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>
        <form>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-md bg-white "
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-md "
            />
          </div>

          {/* Subject */}
          <div className="mb-4">
            <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full p-3 border border-gray-300 rounded-md "
            />
          </div>

          {/* Query */}
          <div className="mb-4">
            <label htmlFor="query" className="block mb-2 font-medium">Your Query</label>
            <textarea
              id="query"
              name="query"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-md "
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full p-3 bg-gray-200 text-gray-700 hover:bg-gray-300  rounded-md transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
