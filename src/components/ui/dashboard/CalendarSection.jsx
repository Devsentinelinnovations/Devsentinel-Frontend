import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./../dashboardUi/calendar.css";

const CalendarSection = () => {
  const [value, setValue] = useState(new Date());
  return (
    <div className="bg-white w-full p-3 rounded-2xl">
      <p className="text-textGrey font-lexend underline text-base">Calendar</p>
      <Calendar onChange={setValue} value={value} />
    </div>
  );
};

export default CalendarSection;
