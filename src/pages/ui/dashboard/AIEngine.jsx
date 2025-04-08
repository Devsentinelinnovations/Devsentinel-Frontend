import { ClockIcon, LucideUploadCloud } from "lucide-react";
import React from "react";
import { assets } from "../../../assets/assets";
import Button from "../../../components/LandingPage/Button";
import SemicircleProgress from "./../dashboardUi/SemicircleProgress";
const AIEngine = () => {
  const attendancePercentage = "30";
  const achievementPercentage = "40";
  return (
    <div className="bg-textBlue/10 flex flex-col md:flex-row gap-5 p-5 md:pl-8 md:pb-5 md:pt-2 rounded-2xl w-full">
      <div className="flex flex-col gap-5 md:hidden w-full">
        {/* Mobile Course Progress (on top) */}
        <div className="flex justify-between items-center">
          <p className="text-textGrey font-lexend text-base border-primary border-l-8 pl-3 mt-2">
            Artificial Intelligence Engineering
          </p>
          {/* <img
            src={assets.uploadCloudIcon}
            alt="upload cloud icon"
            className="w-4 h-4"
          /> */}
          <LucideUploadCloud className="w-5 h-5 text-primary" />
        </div>

        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col gap-3 w-2xs items-center p-5 border-dashed border-3 border-primary rounded-3xl mx-auto mt-3">
            <p className="text-lg font-lexend text-textGrey underline mb-2">
              Course Progress
            </p>
            <SemicircleProgress percentage={50} />
            <div className="flex justify-center gap-6">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />{" "}
                <p className="text-sm font-lexend text-textGrey underline">
                  Achieved
                </p>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-[#d9e5f8] rounded-full" />{" "}
                <p className="text-sm font-lexend text-textGrey underline">
                  Remaining
                </p>
              </div>
            </div>
          </div>

          <div className="my-6 ml-3 w-full">
            <p className="text-textGrey font-lexend text-xs underline ml-1">
              Attendance bar
            </p>
            <div className="flex justify-between">
              <p className="text-primary text-lg font-lexend ml-2">
                30% to complete
              </p>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-3 w-3" />
                <span className="text-xs">24/49.5hr</span>
              </div>
            </div>
            <div className="bg-textGrey w-full rounded-3xl h-4">
              <div
                className="bg-primary rounded-3xl w-[210px] h-full"
                style={{ width: `${attendancePercentage}%` }}
              />
            </div>
          </div>
          <Button className="px-20 py-3 !rounded-xl hover:underline">
            View course
          </Button>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:flex flex-col w-full md:w-3/5 mr-5">
        <p className="text-textBlue font-lexend xl:text-xl md:text-base underline border-primary border-l-8 pl-3 mt-2">
          Artificial Intelligence Engineering
        </p>

        <div className="mt-6 xl:mt-16 ml-3 w-full">
          <p className="text-textGrey font-lexend text-[12px] underline ml-1">
            Attendance bar
          </p>
          <div className="flex justify-between">
            <p className="text-primary xl:text-2xl md:text-base font-lexend ml-2">
              30% to complete
            </p>
            <div className="flex items-center gap-2">
              <ClockIcon className="h-3 w-3 xl:h-4 xl:w-4" />
              <span className="xl:text-sm md:text-xs">24/49.5hr</span>
            </div>
          </div>
          <div className="bg-textGrey w-full rounded-3xl h-3 xl:h-4">
            <div
              className="bg-primary rounded-3xl w-[210px] h-full"
              style={{ width: `${attendancePercentage}%` }}
            />
          </div>

          {/* Achievement — hidden on mobile */}
          <div className="mt-5 w-full hidden md:block">
            <p className="text-textGrey font-lexend text-xs underline mb-3 xl:mb-5 ml-1">
              Achievement
            </p>
            <div className="relative bg-yellow-100/60 w-full rounded-3xl h-3 xl:h-4">
              <div
                className="bg-yellow-300 rounded-3xl w-[210px] h-full"
                style={{ width: `${achievementPercentage}%` }}
              />
              <div className="absolute inset-0 top-[-90%] flex justify-between">
                <img
                  src={assets.goldStar1}
                  alt="star"
                  className="w-8 h-8 xl:w-10 xl:h-10"
                />
                <img
                  src={assets.goldStar2}
                  alt="star"
                  className="w-8 h-8 xl:w-10 xl:h-10"
                />
                <img
                  src={assets.goldStar3}
                  alt="star"
                  className="w-8 h-8 xl:w-10 xl:h-10"
                />
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <span className="text-xs xl:text-sm font-lexend text-textGrey underline">
                I - Beginner
              </span>
              <span className="text-xs xl:text-sm font-lexend text-textGrey underline">
                I - Beginner
              </span>
              <span className="text-xs xl:text-sm font-lexend text-textGrey underline">
                I - Beginner
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop Course Progress (right side) */}
      <div className="hidden md:flex flex-col items-center w-2/5 mr-3 ml-5">
        <div className="flex flex-col items-center w-full border-3 border-primary p-3 rounded-3xl mb-3 xl:mb-5">
          <p className="text-lg xl:text-xl font-lexend text-textGrey underline mb-2">
            Course Progress
          </p>
          <div className="flex justify-between gap-6 xl:gap-12">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-orange-500 rounded-full" />{" "}
              <p className="text-xs xl:text-sm font-lexend text-textGrey underline">
                Achieved
              </p>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-[#d9e5f8] rounded-full" />{" "}
              <p className="text-xs xl:text-sm font-lexend text-textGrey underline">
                Remaining
              </p>
            </div>
          </div>
          <div className="my-2 xl:my-3">
            <SemicircleProgress percentage={50} />
          </div>
        </div>
        <Button className="px-12 py-2 xl:px-16 xl:py-3 hover:underline">
          View course
        </Button>
      </div>
    </div>
  );
};

export default AIEngine;
