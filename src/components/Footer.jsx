import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img
            src="/img/logo_dark_background.png"
            alt="SOO CURRENT"
            className="footer-logo"
          />
          <h4 className="footer-brand-title">SOO CURRENT</h4>

          <p className="footer-brand-desc">
            정확한 플레이와 팀워크, 그리고 타의 추종을 불허하는 실력으로 e스포츠
            씬을 장악합니다.
          </p>

          <p className="footer-team">ESPORTS TEAM</p>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Quick Links</h4>
          <a href="#about">About</a>
          <a href="#roster">Roster</a>
          <a href="#schedule">Schedule</a>
          <a href="#partners">Partners</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Code of Conduct</a>
        </div>
      </div>

      <div className="footer-divider"></div>

      <p className="footer-copy">© SOO CURRENT Esports. All rights reserved.</p>
    </footer>
  );
}
