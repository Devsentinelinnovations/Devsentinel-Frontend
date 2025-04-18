import React from "react";
import { assets } from "../../../assets/assets";
import Button from "../../LandingPage/Button";

const DownloadCert = () => {
  const achievementPercentage = "40"; // This should be dynamically calculated based on the course progress
  return (
    <div className="bg-textBlue/10 gap-5 flex flex-col justify-center items-center px-3 py-5 rounded-2xl w-full">
      <img src={assets.certificate} alt="certificate" className="w-44 h-44" />
      <div className="bg-yellow-100/60 w-[300px] xl:w-[300px] lg:w-[180px] md:w-[200px] rounded-3xl h-3 xl:h-4 mb-3">
        <div
          className="bg-yellow-300 rounded-3xl h-full"
          style={{ width: `${achievementPercentage}%` }}
        />
      </div>
      <Button className="px-10 md:px-8 xl:px-14 py-3 md:py-2 xl:py-3 hover:bg-primary/80 transition duration-300 ease-in-out">
        Download Certificate
      </Button>
      <p className="text-xs font-lexend text-textGrey text-center max-w-[350px] leading-4">
        certificate will be available for download after course has been
        completed
      </p>
    </div>
  );
};

export default DownloadCert;
