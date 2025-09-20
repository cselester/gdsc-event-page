import React from "react";
import "./Highlights.css";

function Highlights() {
  const highlights = [
    { title: "Solve SDGs", desc: "Build real-world solutions aligned with UN Sustainable Development Goals." },
    { title: "Workshops & Mentorship", desc: "Learn from Googlers and industry experts with hands-on sessions." },
    { title: "Global Showcase", desc: "Pitch your project to international judges and the Google community." },
  ];

  return (
    <section className="highlights" id="highlights">
      <h2>Event Highlights</h2>
      <div className="cards">
        {highlights.map((item, idx) => (
          <div className="card" key={idx}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Highlights;
