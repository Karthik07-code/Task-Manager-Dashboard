import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const MiniMonthCalendar = ({ selectedDate, onDateChange }) => {
  return (
    <div className="calendar-card">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        height="auto"
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "next",
        }}
        initialDate={selectedDate}
        dateClick={(info) => onDateChange(info.date)}
      />
    </div>
  );
};

export default MiniMonthCalendar;
