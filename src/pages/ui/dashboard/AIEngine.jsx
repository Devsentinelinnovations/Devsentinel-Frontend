import { ClockIcon } from "lucide-react";
import React from "react";
import { assets } from "../../../assets/assets";
import Button from "../../../components/LandingPage/Button";
import SemicircleProgress from "./SemicircleProgress";
const AIEngine = () => {
  const attendancePercentage = "30";
  const achievementPercentage = "40";
  return (
    <div className="bg-textBlue/10 flex gap-5 pl-8 pb-5 pt-2 rounded-2xl w-full">
      <div className="flex flex-col w-3/5 mr-5">
        <p className="text-textBlue font-lexend text-xl underline border-primary border-l-8 pl-3 mt-2">
          Artificial Intelligence Engineering
        </p>
        <div className="mt-20 ml-3 w-full">
          <p className="text-textGrey font-lexend text-[12px] underline ml-1">
            Attendance bar
          </p>
          <div className="flex justify-between">
            <p className="text-primary text-xl font-lexend ml-2">
              30% to complete
            </p>
            <div className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4" />
              <span className="text-sm">24/49.5hr</span>
            </div>
          </div>
          <div className="bg-textGrey w-full rounded-3xl h-4">
            <div
              className="bg-primary rounded-3xl w-[210px] h-full"
              style={{ width: `${attendancePercentage}%` }}
            />
          </div>

          <div className="mt-5 w-full">
            <p className="text-textGrey font-lexend text-[12px] underline mb-5 ml-1">
              Achievement
            </p>
            <div className="relative bg-yellow-100/60 w-full rounded-3xl h-4">
              <div
                className="bg-yellow-300 rounded-3xl w-[210px] h-full"
                style={{ width: `${achievementPercentage}%` }}
              />
              <div className="absolute inset-0 top-[-90%] flex justify-between">
                <img src={assets.goldStar1} alt="star" className="w-10 h-10" />
                <img src={assets.goldStar2} alt="star" className="w-10 h-10" />
                <img src={assets.goldStar3} alt="star" className="w-10 h-10" />
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <span className="text-[10px] font-lexend ml-4 text-textGrey underline">
                I - Beginner
              </span>
              <span className="text-[10px] font-lexend text-textGrey underline">
                II - Intermediate
              </span>
              <span className="text-[10px] font-lexend text-textGrey underline">
                III - Expert
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-2/5 mr-3 ml-5">
        <div className="flex flex-col items-center w-full border-3 border-primary p-3 rounded-3xl mb-5">
          <p className="text-xl font-lexend text-textGrey underline mb-2">
            Course Progress
          </p>
          <div className="flex justify-between gap-12">
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
          <div className="my-3">
            <SemicircleProgress percentage={50} />
          </div>
        </div>
        <Button className="px-16 py-3 hover:underline">View course</Button>
      </div>
    </div>
  );
};

export default AIEngine;
