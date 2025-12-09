import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">GET IN TOUCH</h2>

        <div className="contact-grid">
          <div className="contact-item">Youtube</div>
          <div className="contact-item">Instagram</div>
          <div className="contact-item">Twitter</div>
          <div className="contact-item">TikTok</div>
        </div>

        <div className="newsletter">
          <h3>Stay Updated</h3>
          <p>최신 경기 소식과 이벤트 정보를 받아보세요!</p>

          <div className="newsletter-field">
            <input type="text" placeholder="Email Address" />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
}
