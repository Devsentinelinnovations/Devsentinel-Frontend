import React from "react";
import AssesmentsUi from "./../dashboardUi/AssesmentsUi";

const Assesment = () => {
  return (
    <div className="bg-textBlue/10 flex flex-col gap-2 px-4 xl:px-8 pb-5 pt-2 rounded-2xl w-full">
      {/* mobile view */}
      <div className="flex flex-col gap-3 md:hidden">
        <p className="text-lg  font-lexend text-textGrey text-start">
          Assessments
        </p>
        <div className="flex gap-6 items-center">
          <AssesmentsUi percentage={68} />
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-[#93C5FD] rounded-full" />{" "}
              <p className="text-sm font-lexend text-textGrey hover:underline cursor-pointer">
                Achieved
              </p>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-primary/80 rounded-full" />{" "}
              <p className="text-sm font-lexend text-textGrey hover:underline cursor-pointer">
                Remaining
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* desktop view */}
      <div className="hidden md:flex gap-6">
        <AssesmentsUi percentage={68} />
        <div className="flex flex-col gap-3">
          <p className="text-lg xl:text-lg font-lexend text-textGrey underline mb-2 text-end">
            Assesments
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-[#93C5FD] rounded-full" />{" "}
              <p className="text-sm font-lexend text-textGrey hover:underline cursor-pointer">
                Achieved
              </p>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-primary/80 rounded-full" />{" "}
              <p className="text-sm font-lexend text-textGrey hover:underline cursor-pointer">
                Remaining
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assesment;
