import React, { useEffect, useState } from "react";
import "../styles/Hero.css";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="waves">
        <div
          className="wave wave-back"
          style={{ transform: `translateY(${scrollY * -0.15}px)` }}
        ></div>

        <div
          className="wave wave-mid"
          style={{ transform: `translateY(${scrollY * -0.22}px)` }}
        ></div>

        <div
          className="wave wave-front"
          style={{ transform: `translateY(${scrollY * -0.3}px)` }}
        ></div>
      </div>

      <div className="hero-content">
        <h1>SOO CURRENT</h1>
        <p>
          우리는 최고의 플레이를 위해 노력하는 프로 e-sports 팀입니다.
          <br />
          승리를 위한 열정, 팀워크, 그리고 끝없는 도전을 이어갑니다.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">팀 소개</button>
          <button className="btn-outline">경기 일정</button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <h2>15+</h2>
            <p>우승 기록</p>
          </div>
          <div className="stat">
            <h2>92%</h2>
            <p>승률</p>
          </div>
          <div className="stat">
            <h2>50K+</h2>
            <p>팔로워</p>
          </div>
        </div>
        <div className="mouse-indicator">
          <div className="mouse"></div>
          <span className="wheel"></span>
        </div>
      </div>
    </section>
  );
}
