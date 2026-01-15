import { useState } from "react";
import MiniMonthCalendar from "./MiniMonthCalendar";
import DayTimelineCalendar from "./DayTimelineCalendar";
import "@/styles/mini-calendar.css";


const CalendarPanel = ({ tasks }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  return (
    <div className="calendar-panel">
      <MiniMonthCalendar
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
      />

      <DayTimelineCalendar
        selectedDate={selectedDate}
        tasks={tasks}
      />
    </div>
  );
};

export default CalendarPanel;
