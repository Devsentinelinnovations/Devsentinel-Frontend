import React, { useState } from "react";
import { assets } from "../../../assets/assets";
import Button from "../../LandingPage/Button";
const InstructorProfile = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="flex flex-col font-lexend bg-white rounded-2xl p-3 w-full">
      <p className="text-lg font-lexend text-textGrey underline text-start ml-2">
        Instructor Profile
      </p>
      <div className="flex gap-2 mt-3 ml-2 mb-5">
        <img src={assets.account2} alt="account icon" className="w-16 h-16" />
        <div className="flex flex-col">
          <p className="font-bold text-sm">Sage Emperor</p>
          <p className="text-primary font-bold text-sm ml-1">Data Analyst</p>
          <p className="text-textGrey text-xs ml-2 mb-1">
            5 years experience in Data Science
          </p>
          <div className="flex items-center gap-2">
            <img src={assets.github} alt="github icon" className="w-3 h-3" />
            <img
              src={assets.linkedin}
              alt="linkedin icon"
              className="w-4 h-4"
            />
          </div>
        </div>
      </div>
      <div className="border-4 border-primary overflow-hidden rounded-2xl w-[300px] h-[150px] md:w-[230px] md:h-[120px] xl:w-[320px] xl:h-[170px] self-center mb-6">
        {!isPlaying ? (
          <div
            className="relative cursor-pointer"
            onClick={() => setIsPlaying(true)}>
            <img
              src="/thumbnail.webp"
              alt="video thumbnail"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 rounded-full p-3">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/dJmg4ODH0YY?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>

          // For Local Video
          // <video
          //   src="/video.mp4"
          //   controls
          //   autoPlay
          //   className="w-full h-auto"
          //   onEnded={() => setIsPlaying(false)}
          // />
        )}
      </div>
      <Button className="px-10 py-2 self-center hover:bg-primary/80 transition duration-300 ease-in-out">
        Manage Instructor
      </Button>
    </div>
  );
};

export default InstructorProfile;
