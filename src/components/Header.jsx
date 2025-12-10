import React, { useEffect, useState } from "react";
import "../styles/Header.css";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-80px 0px",
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <img src="/img/logo_dark_background.png" alt="logo" />
        </div>

        <div className="nav-wrapper">
          <nav className="nav">
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </a>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </a>
            <a
              href="#roster"
              className={activeSection === "roster" ? "active" : ""}
            >
              Roster
            </a>
            <a
              href="#highlights"
              className={activeSection === "highlights" ? "active" : ""}
            >
              Highlights
            </a>
            <a
              href="#media"
              className={activeSection === "media" ? "active" : ""}
            >
              Media
            </a>
            <a
              href="#schedule"
              className={activeSection === "schedule" ? "active" : ""}
            >
              Schedule
            </a>
            <a
              href="#partners"
              className={activeSection === "partners" ? "active" : ""}
            >
              Partners
            </a>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact
            </a>
          </nav>

          <a href="#contact" className="btn-join">
            함께하기
          </a>
        </div>
      </div>
    </header>
  );
}
