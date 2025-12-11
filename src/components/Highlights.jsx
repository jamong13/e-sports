import React from "react";
import "../styles/Highlights.css";
import { Trophy, Target, Users, TrendingUp } from "lucide-react";

export default function Highlights() {
  return (
    <section id="highlights" className="highlights section">
      <div className="container">
        <h2 className="section-title">HIGHLIGHTS & ACHIEVEMENTS</h2>

        <div className="highlight-stats">
          <div className="box">
            <Trophy className="icon" />
            <h3>15</h3>
            <p>우승 횟수</p>
          </div>

          <div className="box">
            <Target className="icon" />
            <h3>92%</h3>
            <p>승률 (2024)</p>
          </div>

          <div className="box">
            <Users className="icon" />
            <h3>50K+</h3>
            <p>커뮤니티 팔로워</p>
          </div>

          <div className="box">
            <TrendingUp className="icon" />
            <h3>#3</h3>
            <p>세계 랭킹</p>
          </div>
        </div>

        <h3 className="recent-title">Recent Achievements</h3>
        <div className="achievement-list">
          <div className="ach-card">
            <div className="rank">1st</div>
            <div className="ach-content">
              <span className="year">2024</span>
              <h4 className="title">Spring Championship</h4>
              <p className="desc">스프링 스플릿 결승전 우승</p>
            </div>
          </div>

          <div className="ach-card">
            <div className="rank">3rd</div>
            <div className="ach-content">
              <span className="year">2024</span>
              <h4 className="title">International Invitational</h4>
              <p className="desc">글로벌 토너먼트 TOP 3</p>
            </div>
          </div>

          <div className="ach-card">
            <div className="rank">1st</div>
            <div className="ach-content">
              <span className="year">2024</span>
              <h4 className="title">Summer Championship</h4>
              <p className="desc">서머 스플릿 완벽 우승</p>
            </div>
          </div>

          <div className="ach-card">
            <div className="rank">2nd</div>
            <div className="ach-content">
              <span className="year">2024</span>
              <h4 className="title">Worlds Qualifier</h4>
              <p className="desc">월드 챔피언십 진출 확정</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
