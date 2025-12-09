import React from "react";
import "../styles/Partners.css";

export default function Partners() {
  return (
    <section id="partners" className="section partners">
      <div className="container">
        <h2 className="section-title">PARTNERS & SPONSORS</h2>

        <div className="partner-grid">
          <div className="partner-card">
            <img src="/img/logo1.png" alt="" />
            <p>TechGear Pro</p>
          </div>
          <div className="partner-card">
            <img src="/img/logo2.png" alt="" />
            <p>Energy Boost</p>
          </div>
          <div className="partner-card">
            <img src="/img/logo3.png" alt="" />
            <p>StreamNation</p>
          </div>
        </div>

        <div className="partner-cta">
          <p>파트너로 참여하고 싶다면 문의해주세요!</p>
          <button className="btn-primary">Contact</button>
        </div>
      </div>
    </section>
  );
}
