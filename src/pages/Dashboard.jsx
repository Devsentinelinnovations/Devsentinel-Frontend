import React from "react";
import AIEngine from "./ui/dashboard/AIEngine";
import Learning from "./ui/dashboard/Learning";
import Assignment from "./ui/dashboard/Assignment";
import Assesment from "./ui/dashboard/Assesment";
import Projects from "./ui/dashboard/Projects";
import CalendarSection from "./ui/dashboard/CalendarSection";

function Dashboard() {
  return (
    <main>
      {/* Desktop view */}
      <div className="hidden md:flex gap-5 ">
        {/* left section of the dashboard */}
        <div className="flex flex-col mb-3 gap-5 w-3/5">
          <AIEngine />
          <Learning />
          <Assignment />
        </div>

        {/* Right section of the dashboard */}
        <div className="flex flex-col gap-5 w-1/3 ">
          <Assesment />
          <Projects />
          <CalendarSection />
        </div>
      </div>
      {/* Mobile view */}
      <div className="md:hidden flex flex-col mr-5 gap-5 mb-3">
        <AIEngine />
        <Assesment />
        <Learning />
        <Projects />
        <CalendarSection />
      </div>
    </main>
  );
}

export default Dashboard;
