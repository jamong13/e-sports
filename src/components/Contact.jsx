import React from "react";
import "../styles/Contact.css";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">GET IN TOUCH</h2>
        <p className="contact-desc">
          소셜 미디어를 팔로우하고 커뮤니티에 참여하세요
        </p>

        {/* SNS GRID */}
        <div className="contact-grid">
          <div className="contact-card facebook">
            <FaFacebookF className="sns-icon" />
            <h4>Facebook</h4>
            <span>SooCurrentGG</span>
          </div>

          <div className="contact-card twitter">
            <FaXTwitter className="sns-icon" />
            <h4>X</h4>
            <span>@soocurrent</span>
          </div>

          <div className="contact-card instagram">
            <FaInstagram className="sns-icon" />
            <h4>Instagram</h4>
            <span>@soocurrent</span>
          </div>

          <div className="contact-card youtube">
            <FaYoutube className="sns-icon" />
            <h4>YouTube</h4>
            <span>SooCurrentTV</span>
          </div>
        </div>

        {/* Newsletter Box */}
        <div className="newsletter">
          <div className="mail-icon">✉️</div>

          <h3 className="newsletter-title">Stay Updated</h3>
          <p className="newsletter-desc">
            뉴스레터를 구독하고 독점 콘텐츠, 경기 업데이트, 비하인드 스토리를
            받아보세요
          </p>

          <div className="newsletter-field">
            <input type="email" placeholder="이메일을 입력하세요" />
            <button className="btn-subscribe">구독하기</button>
          </div>

          <div className="divider"></div>

          <p className="business-label">비즈니스 문의</p>
          <a className="business-mail" href="mailto:contact@soocurrent.gg">
            contact@soocurrent.gg
          </a>
        </div>
      </div>
    </section>
  );
}
