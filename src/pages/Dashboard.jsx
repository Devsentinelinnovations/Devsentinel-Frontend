import React from "react";
import AIEngine from "./ui/dashboard/AIEngine";
import Learning from "./ui/dashboard/Learning";
import Assignment from "./ui/dashboard/Assignment";
import Assesment from "./ui/dashboard/Assesment";

function Dashboard() {
  return (
    <main>
      <div className="flex gap-5 ">
        {/* left section of the dashboard */}
        <div className="flex flex-col mb-3 gap-5 w-3/5">
          <AIEngine />
          <Learning />
          <Assignment />
        </div>

        {/* Right section of the dashboard */}
        <div className="flex flex-col w-1/3 ">
          <Assesment />
          <div></div>
          <div></div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
