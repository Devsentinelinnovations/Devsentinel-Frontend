import React from "react";

const AssesmentsUi = ({ percentage }) => {
  const radius = 40; // Circle size
  const strokeWidth = 10; // Thickness of progress
  const circumference = 2 * Math.PI * radius; // Full circle circumference
  const progress = (percentage / 100) * circumference; // Progress length

  return (
    <div className="relative w-40 h-40 md:w-32 md:h-32 xl:w-40 xl:h-40 flex items-center justify-center">
      <svg width="170" height="170" viewBox="0 0 100 100">
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#93C5FD" // Light blue
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress Circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#1E40AF" // Dark blue
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          className="transition-all duration-700 ease-in-out"
        />
      </svg>
      {/* Percentage Label */}
      <div className="absolute text-sm font-bold text-blue-800">
        {percentage}%
      </div>
    </div>
  );
};

export default AssesmentsUi;
