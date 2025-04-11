import React from "react";
import { assets } from "../../../assets/assets";

const Learning = () => {
  return (
    <div>
      {/* // Mobile View */}
      <div className="bg-textBlue/10 flex md:hidden flex-col gap-5 px-8 py-5 rounded-2xl w-full">
        <div className="flex justify-between font-lexend">
          <p className="text-textGrey text-base border-primary border-l-6 pl-3">
            Continue Learning
          </p>
        </div>
        <div className="flex justify-start gap-5 mt-5 ml-3">
          <div className="flex flex-col items-center hover:underline cursor-pointer gap-3">
            <img
              src={assets.googledocsIcon}
              alt="googledoc icon"
              className="w-24 h-24"
            />
            <p className="font-montserrat font-semibold text-xs text-center max-w-44">
              Module 1: What is an AI Engineer
            </p>
          </div>
          <div className="flex flex-col items-center hover:underline cursor-pointer gap-3">
            <img
              src={assets.googledocsIcon}
              alt="googledoc icon"
              className="w-24 h-24"
            />
            <p className="font-montserrat font-semibold text-xs text-center max-w-44">
              Module 1: What is an AI Engineer
            </p>
          </div>
          <div className="flex flex-col items-center hover:underline cursor-pointer gap-3">
            <img
              src={assets.googledocsIcon}
              alt="googledoc icon"
              className="w-24 h-24"
            />
            <p className="font-montserrat font-semibold text-xs text-center max-w-44">
              Module 1: What is an AI Engineer
            </p>
          </div>
        </div>
        <p className="text-primary hover:underline cursor-pointer text-sm font-lexend text-end mr-5">
          View all
        </p>
      </div>
      {/* // Desktop view */}
      <div className="bg-textBlue/10 hidden md:flex flex-col gap-5 px-8 py-5 rounded-2xl w-full">
        <div className="flex justify-between font-lexend">
          <p className="text-textBlue text-base underline border-primary border-l-8 pl-3">
            Continue Learning
          </p>
          <p className="text-primary hover:underline cursor-pointer text-sm font-lexend">
            View all
          </p>
        </div>
        <div className="flex justify-start gap-5 mt-5 ml-3">
          <div className="flex flex-col items-center hover:underline cursor-pointer gap-3">
            <img
              src={assets.googledocsIcon}
              alt="googledoc icon"
              className="w-32 h-32 xl:w-40 xl:h-40"
            />
            <p className="font-montserrat font-semibold text-sm xl:text-base text-center max-w-42">
              Module 1: What is an AI Engineer
            </p>
          </div>
          <div className="flex flex-col items-center hover:underline cursor-pointer gap-3">
            <img
              src={assets.googledocsIcon}
              alt="googledoc icon"
              className="w-32 h-32 xl:w-40 xl:h-40"
            />
            <p className="font-montserrat font-semibold text-sm xl:text-base text-center max-w-42">
              Module 2: What is an AI Engineer
            </p>
          </div>
          <div className="flex flex-col items-center hover:underline cursor-pointer gap-3">
            <img
              src={assets.googledocsIcon}
              alt="googledoc icon"
              className="w-32 h-32 xl:w-40 xl:h-40"
            />
            <p className="font-montserrat font-semibold text-sm xl:text-base text-center max-w-42">
              Module 3: What is an AI Engineer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
