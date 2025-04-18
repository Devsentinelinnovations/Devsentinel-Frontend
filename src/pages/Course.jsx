import React from "react";
import DataScience from "../components/ui/course-details/DataScience";
import CourseContent from "../components/ui/course-details/CourseContent";
import InstructorProfile from "../components/ui/course-details/InstructorProfile";
import Assignment from "../components/ui/course-details/Assignment";
import DownloadCert from "../components/ui/course-details/DownloadCert";

function Course() {
  return (
    <main>
      {/* Desktop view */}
      <div className="hidden md:flex gap-5 ">
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
      <div className="md:hidden flex flex-col mr-5 gap-5 mb-3">
        <DataScience />
        <InstructorProfile />
        <CourseContent />
        <Assignment />
        <DownloadCert />
      </div>
    </main>
  );
}

export default Course;
