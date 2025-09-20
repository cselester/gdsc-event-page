import React from "react";
import "./Schedule.css";

function Schedule() {
  const events = [
    { time: "10:00 AM", title: "Opening Keynote" },
    { time: "11:30 AM", title: "Workshop: AI/ML" },
    { time: "2:00 PM", title: "Team Hacking Begins" },
    { time: "5:00 PM", title: "Pitch Session" },
    { time: "6:30 PM", title: "Closing Ceremony" },
  ];

  return (
    <section className="schedule" id="schedule">
  <h2>Event Schedule</h2>
  <div className="timeline-wrapper">
    {events.map((event, index) => (
      <div className="timeline-item" key={index}>
        <div className="timeline-time">{event.time}</div>
        <div className="timeline-dot"></div>
        <div className="timeline-title">{event.title}</div>
      </div>
    ))}
  </div>
</section>
  );
}

export default Schedule;
