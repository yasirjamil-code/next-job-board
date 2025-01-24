import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="animate-spin h-16 w-16 border-4 border-blue-400 border-t-transparent rounded-full"></div>
      <p className="mt-4 text-xl text-gray-700 font-semibold">Loading...</p>
    </div>
  );
};

export default Loading;
