import React from "react";
import "../styles/Schedule.css";

export default function Schedule() {
  return (
    <section id="schedule" className="section schedule">
      <div className="container">
        <h2 className="section-title">MATCH SCHEDULE & RESULTS</h2>

        <div className="schedule-wrapper">
          <div className="match-upcoming">
            <h3>Upcoming Matches</h3>

            <div className="match-card">
              <span>SOO CURRENT</span>
              <span>VS</span>
              <span>Red Wolves</span>
              <p>2025.01.15 18:00</p>
            </div>

            <div className="match-card">
              <span>SOO CURRENT</span>
              <span>VS</span>
              <span>NightCore</span>
              <p>2025.01.22 19:00</p>
            </div>
          </div>

          <div className="match-results">
            <h3>Recent Results</h3>

            <div className="result-card win">
              <span>승</span>
              <p>SOO CURRENT 2 : 1 Blue Flame</p>
            </div>

            <div className="result-card lose">
              <span>패</span>
              <p>SOO CURRENT 0 : 2 IronFang</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
