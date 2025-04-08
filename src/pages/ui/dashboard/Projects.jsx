import React from "react";
import { assets } from "../../../assets/assets";

const Projects = () => {
  return (
    <div>
      {/* Mobile View */}
      <div className="bg-textBlue/10 flex md:hidden flex-col gap-5 px-4 xl:px-8 py-5 rounded-2xl w-full">
        <div className="flex justify-between items-center font-lexend">
          <p className="text-base font-lexend text-textGrey mb-2">
            Assignment and Projects
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-white rounded-3xl p-3 flex gap-3">
            <img
              src={assets.googledocsIcon}
              alt="google docs icon"
              className="w-6 h-6 items-start"
            />
            <div className="flex items-center justify-center">
              <p className="text-xs font-lexend text-textGrey underline text-center">
                Sentiment Analysis on Social Media Data
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-3 flex gap-3">
            <img
              src={assets.googledocsIcon}
              alt="google docs icon"
              className="w-6 h-6 items-start"
            />
            <div className="flex items-center justify-center">
              <p className="text-xs font-lexend text-textGrey underline text-center">
                Sentiment Analysis on Social Media Data
              </p>
            </div>
          </div>
        </div>
        <p className="text-primary hover:underline cursor-pointer text-end mr-5 text-sm font-lexend">
          View all
        </p>
      </div>

      {/* Desktop View */}
      <div className="bg-textBlue/10 hidden md:flex flex-col px-4 xl:px-8 py-5 rounded-2xl w-full">
        <div className="flex justify-between items-center font-lexend">
          <p className="text-base xl:text-xl font-lexend text-textGrey underline mb-2 xl:text-end">
            Assignment and Projects
          </p>
          <p className="text-primary hover:underline cursor-pointer text-xs xl:text-sm font-lexend">
            View all
          </p>
        </div>
        <div className="flex flex-col gap-3 mt-5">
          <div className="bg-white rounded-3xl p-3 flex gap-1 xl:gap-3">
            <img
              src={assets.googledocsIcon}
              alt="google docs icon"
              className="w-6 xl:w-8 h-6 xl:h-8 items-start"
            />
            <div className="flex items-center justify-center">
              <p className="text-xs font-lexend text-textGrey underline mb-0 xl:mb-2 text-center">
                Sentiment Analysis on Social Media Data
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-3 flex gap-1 xl:gap-3">
            <img
              src={assets.googledocsIcon}
              alt="google docs icon"
              className="w-6 xl:w-8 h-6 xl:h-8 items-start"
            />
            <div className="flex items-center justify-center">
              <p className="text-xs font-lexend text-textGrey underline mb-0 xl:mb-2 text-center">
                Sentiment Analysis on Social Media Data
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
