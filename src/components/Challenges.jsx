import React from "react";
import "./Challenges.css";

function Challenges() {
  const challenges = [
    {
      title: "AI for Good",
      description: "Use AI/ML to solve real-world community problems.",
    },
    {
      title: "Sustainable Development",
      description: "Build solutions aligned with UN SDGs.",
    },
    {
      title: "Open Source Contribution",
      description: "Collaborate on open-source projects to make an impact.",
    },
  ];

  return (
    <section className="challenges" id="challenges">
      <h2>Challenges</h2>
      <div className="challenges-container">
        {challenges.map((challenge, index) => (
          <div className="challenge-card" key={index}>
            <h3>{challenge.title}</h3>
            <p>{challenge.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Challenges;
