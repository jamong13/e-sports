import React from "react";
import "../styles/Highlights.css";

export default function Highlights() {
  return (
    <section id="highlights" className="section highlights">
      <div className="container">
        <h2 className="section-title">HIGHLIGHTS & ACHIEVEMENTS</h2>

        <div className="highlight-stats">
          <div className="box">
            <h3>15+</h3>
            <p>우승</p>
          </div>
          <div className="box">
            <h3>92%</h3>
            <p>승률</p>
          </div>
          <div className="box">
            <h3>50K+</h3>
            <p>팔로워</p>
          </div>
          <div className="box">
            <h3>#3</h3>
            <p>세계 랭킹</p>
          </div>
        </div>

        <h3 className="recent-title">Recent Achievements</h3>
        <div className="achievement-list">
          <div className="ach-card">2024 Global Championship - 2위</div>
          <div className="ach-card">2024 Asia Invitational - 우승</div>
          <div className="ach-card">2023 Winter Cup - 3위</div>
          <div className="ach-card">2023 Summer League - 우승</div>
        </div>
      </div>
    </section>
  );
}
