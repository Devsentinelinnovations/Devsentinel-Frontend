import React from "react";
import Header from "../components/Library/Header";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

function Library() {
  const recentlyViewed = [
    {
      id: 1,
      title: "Data science, Module 3: Mastering Power BI",
      icon: assets.zoom,
    },
    {
      id: 2,
      title: "Cybersecurity, Module 3: Internet of things",
      icon: assets.googledocsIcon,
    },
    {
      id: 3,
      title: "Cybersecurity, Module 3: Internet of things",
      icon: assets.googledocsIcon,
    },
  ];

  const continueLearning = [
    {
      id: 1,
      title: " Cybersecurity,Module 3 : Internet of things II ",
      icon: assets.zoom,
    },
    {
      id: 2,
      title: "Cybersecurity, Module 3: Internet of things",
      icon: assets.googledocsIcon,
    },
    {
      id: 3,
      title: "Cybersecurity, Module 3: Internet of things",
      icon: assets.zoom,
    },
    {
      id: 4,
      title: "Data science, Module 3: Mastering Power BI",
      icon: assets.googledocsIcon,
    },
    {
      id: 5,
      title: "Data science, Module 3: Mastering Power BI III ",
      icon: assets.zoom,
    },
    {
      id: 6,
      title: "Cybersecurity,Module 2 : Career paths in Cyberops",
      icon: assets.googledocsIcon,
    },
    {
      id: 7,
      title: "Data science, Module 3: Mastering Power BI III",
      icon: assets.zoom,
    },
    {
      id: 8,
      title: "Data science, Module 2: Data as a whole",
      icon: assets.googledocsIcon,
    },
    {
      id: 9,
      title: " Cybersecurity,Module 3 : Internet of things II ",
      icon: assets.zoom,
    },
    {
      id: 10,
      title: "Cybersecurity, Module 3: Internet of things",
      icon: assets.googledocsIcon,
    },
    {
      id: 11,
      title: "Cybersecurity, Module 3: Internet of things",
      icon: assets.zoom,
    },
    {
      id: 12,
      title: "",
      icon: assets.googledocsIcon,
    },
  ];

  return (
    <div>
      <Header />
      <div className="mt-8 font-lexend bg-white h-full rounded-xl mx-6">
        {/* Recently Viewed */}
        <div>
          <Link>
            <h2 className="ml-4 pt-4 text-blueHover text-[20px] font-semibold">
              Recently Viewed
            </h2>
          </Link>
          <div className="flex flex-col md:flex-row space-x-4 mt-4 mx-4">
            {recentlyViewed.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center hover:underline cursor-pointer"
              >
                <img src={item.icon} alt="icon" className="w-20 h-20" />
                <p className="font-semibold text-[13px] text-center max-w-44">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-b-8 border-blueHover mt-8 mx-30"></div>

        {/* Continue Learning */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-6 mx-8">
          {continueLearning.map((item) => (
            <div
              key={item.id}
              className="flex flex-col mt-4 items-center hover:underline cursor-pointer"
            >
              <img src={item.icon} alt="icon" className="w-20 h-20" />
              <p className="font-semibold text-[13px] text-center max-w-44">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Library;