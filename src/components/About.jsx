import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">ABOUT US</h2>

        <div className="about-inner">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1558008322-9793c57cb73b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjB0b3VybmFtZW50JTIwY3Jvd2R8ZW58MXx8fHwxNzY0NDE0NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="team"
            />
          </div>

          <div className="about-info">
            <h3>TEAM IDENTITY</h3>
            <p>
              SOO CURRENT는 전 세계 무대에서 활약하는 e-sports 팀으로, 뛰어난
              집중력과 전략적인 플레이를 바탕으로 꾸준히 성과를 내고 있습니다.
            </p>
            <p className="about-description">
              우리는 단순히 게임을 플레이하는 것이 아니라, e스포츠의 미래를
              만들어갑니다. 팀워크, 헌신, 그리고 끊임없는 개선을 통해 최고의
              자리에 오르기 위해 노력합니다.
            </p>

            <div className="about-details">
              <div className="detail-box">
                <h4>Precision</h4>
                <p>정확한 플레이와 전략적 판단</p>
              </div>
              <div className="detail-box">
                <h4>Teamwork</h4>
                <p>완벽한 팀 시너지와 협력</p>
              </div>
              <div className="detail-box">
                <h4>Innovation</h4>
                <p>혁신적인 메타 개척과 도전</p>
              </div>
              <div className="detail-box">
                <h4>Excellence</h4>
                <p>최고를 향한 끊임없는 여정</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
