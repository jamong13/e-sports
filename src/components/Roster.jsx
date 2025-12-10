import React from "react";
import "../styles/Roster.css";

export default function Roster() {
  const roster = [
    {
      name: "SHADOW",
      realname: "Kim Min-ho",
      kda: "8.5",
      games: "145",
      role: "TOP",
      img: "https://images.unsplash.com/photo-1759701546662-b79f5d881124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBnYW1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDQ5MDI2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "PHOENIX",
      realname: "Lee Jae-sung",
      kda: "9.2",
      games: "142",
      role: "JUNGLE",
      img: "https://images.unsplash.com/photo-1759701546662-b79f5d881124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBnYW1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDQ5MDI2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "TITAN",
      realname: "Park Jun-seo",
      kda: "7.8",
      games: "148",
      role: "MID",
      img: "https://images.unsplash.com/photo-1759701546662-b79f5d881124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBnYW1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDQ5MDI2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "ECHO",
      realname: "Choi Hyun-woo",
      kda: "8.1",
      games: "143",
      role: "ADC",
      img: "https://images.unsplash.com/photo-1759701546662-b79f5d881124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBnYW1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDQ5MDI2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "SUPRENT",
      realname: "Jung Woo-jin",
      kda: "9.0",
      games: "146",
      role: "SUPPORT",
      img: "https://images.unsplash.com/photo-1759701546662-b79f5d881124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBnYW1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDQ5MDI2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "NEXUS",
      realname: "Kang Dong-hyun",
      kda: "7.5",
      games: "60",
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
              <div className="card-image">
                <img src={p.img} alt={p.name} />

                <span className="role-badge">{p.role}</span>

                <div className="image-overlay"></div>
              </div>

              <div className="card-info">
                <h3>{p.name}</h3>
                <p className="player-name">{p.realname}</p>

                <div className="player-stats">
                  <div>
                    <span className="label">KDA</span>
                    <span className="value">{p.kda}</span>
                  </div>
                  <div>
                    <span className="label">Games</span>
                    <span className="value">{p.games}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
