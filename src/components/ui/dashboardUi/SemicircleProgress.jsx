import React from "react";

const SemicircleProgress = ({ percentage }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percentage / 100);

  return (
    <div
      className="relative w-36 h-36 md:w-32 md:h-32 xl:w-40 xl:h-40"
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin="0"
      aria-valuemax="100">
      {/* Background track */}
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#d9e5f8"
          strokeWidth="8"
        />
        {/* Progress arc */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#F97316"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 50 50)"
        />
      </svg>
      {/* Center text */}
      <div className="absolute inset-0 bottom-[-50px] flex flex-col items-center justify-center">
        <span className="text-lg xl:text-xl text-primary font-bold underline">
          {percentage}%
        </span>
        {/* <span className="text-sm text-gray-500">Achieved</span> */}
      </div>
    </div>
  );
  // const radius = 50; // Circle radius
  // const strokeWidth = 10; // Stroke thickness
  // const circumference = Math.PI * radius; // Half-circle circumference
  // const progress = (percentage / 100) * circumference; // Progress length

  // return (
  //   <div className="relative flex items-center justify-center w-40 h-40">
  //     <svg width="120" height="60" viewBox="0 -5 120 60">
  //       {/* Background Arc */}
  //       <path
  //         d="M 10 50 A 50 50 0 0 1 110 50"
  //         stroke="#E5E7EB"
  //         strokeWidth={strokeWidth}
  //         fill="transparent"
  //         strokeLinecap="round"
  //       />
  //       {/* Progress Arc */}
  //       <path
  //         d="M 10 50 A 50 50 0 0 1 110 50"
  //         stroke="#F97316" // Orange color
  //         strokeWidth={strokeWidth}
  //         fill="transparent"
  //         strokeLinecap="round"
  //         strokeDasharray={circumference}
  //         strokeDashoffset={circumference - progress}
  //         className="transition-all duration-700 ease-in-out"
  //       />
  //     </svg>
  //     {/* Percentage Text */}
  //     <div className="absolute text-xl font-bold text-blue-600">
  //       {percentage}%
  //     </div>
  //   </div>
  // );
};

export default SemicircleProgress;
