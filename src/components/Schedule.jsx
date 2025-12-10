import React from "react";
import "../styles/Schedule.css";
import { FaDragon, FaGhost } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";

export default function Schedule() {
  return (
    <section id="schedule" className="schedule">
      <div className="container">
        <h2 className="section-title">MATCH SCHEDULE & RESULTS</h2>

        <div className="schedule-wrapper">
          <div className="upcoming">
            <h3 className="sub-title">📅 Upcoming Matches</h3>

            <div className="match-card">
              <div className="match-tag">Championship</div>

              <div className="match-body">
                <div className="team">
                  <img src="/img/logo.png" alt="" />
                  <span className="team-name">SOO CURRENT</span>
                </div>

                <span className="vs">VS</span>

                <div className="team dragon">
                  <span className="team-name">Dragon Force</span>
                  <FaDragon />
                </div>
              </div>

              <div className="match-info">
                <span>DEC 5</span>
                <span>•</span>
                <span>18:00 KST</span>
                <span>•</span>
                <span>Seoul Arena</span>
              </div>
            </div>

            <div className="match-card">
              <div className="match-tag blue">League Match</div>

              <div className="match-body">
                <div className="team">
                  <img src="/img/logo.png" alt="" />
                  <span className="team-name">SOO CURRENT</span>
                </div>

                <span className="vs">VS</span>

                <div className="team thunder">
                  <span className="team-name">Thunder Wolves</span>
                  <AiOutlineThunderbolt />
                </div>
              </div>

              <div className="match-info">
                <span>DEC 12</span>
                <span>•</span>
                <span>20:00 KST</span>
                <span>•</span>
                <span>Online</span>
              </div>
            </div>

            <div className="match-card">
              <div className="match-tag purple">Playoffs</div>

              <div className="match-body">
                <div className="team">
                  <img src="/img/logo.png" alt="" />
                  <span className="team-name">SOO CURRENT</span>
                </div>

                <span className="vs">VS</span>

                <div className="team ghost">
                  <span className="team-name">Shadow Legends</span>
                  <FaGhost />
                </div>
              </div>

              <div className="match-info">
                <span>DEC 19</span>
                <span>•</span>
                <span>19:00 KST</span>
                <span>•</span>
                <span>Busan Stadium</span>
              </div>
            </div>
          </div>

          <div className="results">
            <h3 className="sub-title">📘 Recent Results</h3>

            <div className="result-card">
              <span className="date">NOV 28</span>
              <div className="result-body">
                <span className="team">SOO CURRENT</span>
                <span className="score">3 - 1</span>
                <span className="team">Storm Riders</span>
              </div>
              <span className="badge win">WIN</span>
            </div>

            <div className="result-card">
              <span className="date">NOV 21</span>
              <div className="result-body">
                <span className="team">SOO CURRENT</span>
                <span className="score">3 - 0</span>
                <span className="team">Ice Giants</span>
              </div>
              <span className="badge win">WIN</span>
            </div>

            <div className="result-card">
              <span className="date">NOV 14</span>
              <div className="result-body">
                <span className="team">SOO CURRENT</span>
                <span className="score">2 - 3</span>
                <span className="team">Fire Hawks</span>
              </div>
              <span className="badge lose">LOSS</span>
            </div>

            <button className="view-all">전체 결과 보기</button>
          </div>
        </div>
      </div>
    </section>
  );
}
