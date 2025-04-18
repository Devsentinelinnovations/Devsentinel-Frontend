import React from "react";
import Button from "../../LandingPage/Button";
import { assets } from "../../../assets/assets";
import { ClockIcon } from "lucide-react";

const DataScience = () => {
  const achievementPercentage = "40";
  return (
    <div className="bg-textBlue/10 p-3 md:pl-3 xl:pl-5 md:pb-5 md:pt-2 rounded-2xl w-full">
      <h1 className="text-textGrey font-lexend text-2xl border-primary border-l-8 pl-2 xl:pl-3 mt-2">
        Data Science
      </h1>
      <div className="flex flex-col gap-3 my-3 xl:mt-3 ml-2 xl:ml-5 w-full">
        <p className="text-textGrey font-lexend">
          Current Module: Power BI Essentials
        </p>
        <div className="mb-3 md:mb-5">
          <h3 className="text-primary underline text-base font-lexend mb-3">
            What you'll learn
          </h3>
          <p className="text-textGrey font-lexend text-sm max-w-xl">
            In this module you'll learn how, Power BI is used for analyzing data
            and the advantages of using power BI
          </p>
        </div>
        <div className="flex gap-2 items-center w-[330px] md:w-[380px] lg:w-[400px] xl:w-[500px]">
          <span className="text-textGrey font-lexend text-lg">Beginner:</span>

          <div className="relative bg-yellow-100/60 w-full rounded-3xl h-3 xl:h-4">
            <div
              className="bg-yellow-300 rounded-3xl h-full"
              style={{ width: `${achievementPercentage}%` }}
            />
            <img
              src={assets.goldStar1}
              alt="star"
              className="absolute -top-4 left-0 w-8 h-8 xl:w-10 xl:h-10"
            />
            <div className="flex items-center absolute -top-6 right-0 text-textGrey font-bold gap-2">
              <ClockIcon className="h-3 w-3 xl:h-4 xl:w-4" />
              <span className="lg:text-sm text-xs">24/49.5hr</span>
            </div>
            <span className="absolute -top-6 right-30 md:right-30 xl:right-50 text-primary text-xs xl:text-base md:text-sm font-bold">
              {achievementPercentage}%
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start mt-0 md:mt-3">
          <p className="text-textGrey font-lexend text-sm md:text-base">
            Duration:{" "}
            <span className="text-primary text-sm md:text-base font-lexend">
              6 - 7 Months
            </span>
          </p>
          <p className="text-textGrey font-lexend text-sm md:text-base">
            Mode of Learning:{" "}
            <span className="text-primary text-sm md:text-base font-lexend">
              Instructor Led
            </span>
          </p>
          <p className="text-textGrey font-lexend text-sm md:text-base">
            Certification Details:{" "}
            <span className="text-primary text-sm md:text-base font-lexend">
              Certified Data Scientist
            </span>
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <Button className="!rounded-lg py-3 px-4 md:px-6 xl:px-10 hover:bg-primary/80 transition duration-300 ease-in-out">
            Continue Learning
          </Button>
          <div className="relative inline-block">
            <span className="absolute -top-[14px] right-6">
              <span className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-emerald-500"></span>
              </span>
            </span>
            <Button className="!rounded-lg py-3 px-10 md:px-12 xl:px-16 bg-transparent !text-primary border border-primary hover:bg-primary/10 hover:text-white transition duration-300 ease-in-out">
              Join Class
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataScience;
