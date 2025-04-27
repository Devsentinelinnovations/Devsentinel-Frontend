import React from "react";
import DataScience from "../components/ui/course-details/DataScience";
import CourseContent from "../components/ui/course-details/CourseContent";
import InstructorProfile from "../components/ui/course-details/InstructorProfile";
import Assignment from "../components/ui/course-details/Assignment";
import DownloadCert from "../components/ui/course-details/DownloadCert";
import Header from "../components/dashboard/Header";

function Course() {
  return (
    <main>
      <Header/> 
      {/* Desktop view */}
      <div className="hidden md:flex gap-5 mt-8">
        {/* left section of the dashboard */}
        <div className="flex flex-col mb-3 gap-5 w-3/5">
          <DataScience />
          <CourseContent />
        </div>

        {/* Right section of the dashboard */}
        <div className="flex flex-col gap-5 w-1/3 ">
          <InstructorProfile />
          <Assignment />
          <DownloadCert />
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden flex flex-col gap-5 mb-3 mt-8 mx-5">
        <DataScience />
        <InstructorProfile />
        <CourseContent />
        <Assignment />
        <DownloadCert />
      </div>
    </main>
  );
    // <div>
    //   <Header/>
    // </div>
  
}

export default Course;
