import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

const DayTimelineCalendar = ({ selectedDate, tasks }) => {
  const selectedDateStr = selectedDate.toISOString().split("T")[0];

  // filter tasks for selected date
  const tasksForDay = tasks.filter(
    (task) => task.date === selectedDateStr
  );

  // convert to calendar events
  const events = tasksForDay.map((task) => ({
    title: task.title,
    start: `${task.date}T${task.startTime}`,
    end: `${task.date}T${task.endTime}`,
  }));

  return (
    <div className="calendar-card">
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridDay"
        headerToolbar={false}
        initialDate={selectedDate}
        events={events}
        allDaySlot={false}
        height={500}
        slotDuration="00:30:00"
        nowIndicator
      />
    </div>
  );
};

export default DayTimelineCalendar;
