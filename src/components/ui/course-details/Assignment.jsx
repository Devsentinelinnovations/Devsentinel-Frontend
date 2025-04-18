import React from "react";
import { assets } from "../../../assets/assets";

const Assignment = () => {
  return (
    <div className="bg-textBlue/10 flex flex-col px-3 py-5 rounded-2xl w-full">
      <p className="text-base xl:text-xl font-lexend text-textGrey underline ml-5 mb-5">
        Assignment
      </p>
      <div className="flex flex-col gap-4 justify-center">
        <div className="flex gap-2">
          <img
            src={assets.googledocsIcon}
            alt="googledocs icon"
            className="w-10 h-10"
          />
          <div className="flex flex-col">
            <p className="text-sm font-lexend text-textGrey ml-2">
              Sentiment Analysis on Social Media Data
            </p>
            <p className="text-textGrey font-lexend text-sm">
              Deadline:
              <span className="text-primary font-lexend ml-1">
                5th March, 2025
              </span>
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <img
            src={assets.googledocsIcon}
            alt="googledocs icon"
            className="w-10 h-10"
          />
          <div className="flex flex-col">
            <p className="text-sm font-lexend text-textGrey ml-2">
              Sentiment Analysis on Social Media Data
            </p>
            <p className="text-textGrey font-lexend text-sm">
              Deadline:
              <span className="text-primary font-lexend ml-1">
                5th March, 2025
              </span>
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <img
            src={assets.googledocsIcon}
            alt="googledocs icon"
            className="w-10 h-10"
          />
          <div className="flex flex-col">
            <p className="text-sm font-lexend text-textGrey ml-2">
              Sentiment Analysis on Social Media Data
            </p>
            <p className="text-textGrey font-lexend text-sm">
              Deadline:
              <span className="text-primary font-lexend ml-1">
                5th March, 2025
              </span>
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <img
            src={assets.googledocsIcon}
            alt="googledocs icon"
            className="w-10 h-10"
          />
          <div className="flex flex-col">
            <p className="text-sm font-lexend text-textGrey ml-2">
              Sentiment Analysis on Social Media Data
            </p>
            <p className="text-textGrey font-lexend text-sm">
              Deadline:
              <span className="text-primary font-lexend ml-1">
                5th March, 2025
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
