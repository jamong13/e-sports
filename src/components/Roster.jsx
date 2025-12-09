import React from "react";
import "../styles/Roster.css";

export default function Roster() {
  const roster = [
    {
      name: "SHADOW",
      role: "TOP",
      img: "https://images.unsplash.com/photo-1759701546662-b79f5d881124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBnYW1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDQ5MDI2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "SPERION",
      role: "JUNGLE",
      img: "https://images.unsplash.com/photo-1759701546662-b79f5d881124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBnYW1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDQ5MDI2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "TFAW",
      role: "MID",
      img: "https://images.unsplash.com/photo-1759701546662-b79f5d881124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBnYW1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDQ5MDI2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "ECHO",
      role: "ADC",
      img: "https://images.unsplash.com/photo-1759701546662-b79f5d881124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBnYW1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDQ5MDI2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "SUPRENT",
      role: "SUPPORT",
      img: "https://images.unsplash.com/photo-1759701546662-b79f5d881124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBnYW1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDQ5MDI2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "NEXUS",
      role: "Sub",
      img: "https://images.unsplash.com/photo-1759701546662-b79f5d881124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBnYW1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDQ5MDI2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="roster" className="roster">
      <div className="container">
        <h2 className="section-title">OUR ROSTER</h2>

        <div className="roster-grid">
          {roster.map((p, idx) => (
            <div key={idx} className="player-card">
              <img src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
              <p>{p.role}</p>

              <div className="player-stats">
                <span>KDA: 3.5</span>
                <span>WIN: 82%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
