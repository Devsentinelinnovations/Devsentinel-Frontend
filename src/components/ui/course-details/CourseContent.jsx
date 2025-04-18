import React from "react";
import { assets } from "../../../assets/assets";

const CourseContent = () => {
  return (
    <div className="bg-white p-3 md:pl-3 xl:pl-5 md:pr-5 md:pb-5 font-lexend md:pt-2 rounded-2xl w-full">
      <h1 className="text-primary font-lexend text-2xl underline border-primary border-l-8 pl-3 mt-2">
        Course Content
      </h1>
      <div className="flex flex-col gap-8 mt-3 ml-1 md:ml-2 xl:mt-3 xl:ml-5 w-full">
        <p className="text-textGrey text-sm md:text-base font-lexend max-w-[650px]">
          This course is designed to provide a foundational understanding of
          data science, focusing on key concepts, tool and techniques.
          Participants will learn about the data science process, from problem
          definition to data collection, cleaning, and analysis.
        </p>
        <div>
          <p className="text-primary hover:underline cursor-pointer text-sm md:text-base font-lexend text-end mr-5 xl:mr-15">
            View all
          </p>
          <div className="flex justify-start gap-5 mt-5 ml-0 xl:ml-3">
            <div className="flex flex-col items-center hover:underline cursor-pointer gap-3">
              <img
                src={assets.googledocsIcon}
                alt="googledoc icon"
                className="w-30 h-30 md:w-32 md:h-32 xl:w-40 xl:h-40"
              />
              <p className="font-montserrat font-semibold text-xs md:text-sm xl:text-base text-center max-w-42">
                Module 1: What is an AI Engineer
              </p>
            </div>
            <div className="flex flex-col items-center hover:underline cursor-pointer gap-3">
              <img
                src={assets.googledocsIcon}
                alt="googledoc icon"
                className="w-30 h-30 md:w-32 md:h-32 xl:w-40 xl:h-40"
              />
              <p className="font-montserrat font-semibold text-xs md:text-sm xl:text-base text-center max-w-42">
                Module 1: What is an AI Engineer
              </p>
            </div>
            <div className="flex flex-col items-center hover:underline cursor-pointer gap-3">
              <img
                src={assets.googledocsIcon}
                alt="googledoc icon"
                className="w-30 h-30 md:w-32 md:h-32 xl:w-40 xl:h-40"
              />
              <p className="font-montserrat font-semibold text-xs md:text-sm xl:text-base text-center max-w-42">
                Module 1: What is an AI Engineer
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-primary underline cursor-pointer text-base font-lexend mb-3">
            Skills To Acquire
          </h2>
          <p className="text-textGrey text-sm md:text-base font-lexend max-w-[600px]">
            Programming Akills, Statistical Knowledge, Data Manipulation and
            Analysis Data Visualization, Machine Learning, Database Management,
            Data Wrangling, Critical Thinking, Domain Knowledge
          </p>
        </div>
        <div>
          <h2 className="text-primary underline cursor-pointer text-base font-lexend mb-3">
            Tools
          </h2>
          <div className="flex flex-wrap gap-3">
            <p className="inline text-primary font-bold border-3 border-primary py-1 px-5 rounded-lg">
              Python
            </p>
            <p className="inline text-primary font-bold border-3 border-primary py-1 px-5 rounded-lg">
              Github
            </p>
            <p className="inline text-primary font-bold border-3 border-primary py-1 px-5 rounded-lg">
              Pandas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
