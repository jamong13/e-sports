import React, { useEffect, useState } from "react";
import "../styles/Header.css";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1100) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <img src="/img/logo_dark_background.png" alt="logo" />
          </div>

          {/* 데스크탑 네비 */}
          <div className="nav-wrapper">
            <nav className="nav">
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

          <button
            className={`hamburger ${menuOpen ? "is-open" : ""}`}
            onClick={handleToggleMenu}
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* 모바일 메뉴*/}
      {menuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
              onClick={handleLinkClick}
            >
              About
            </a>

            <a
              href="#roster"
              className={activeSection === "roster" ? "active" : ""}
              onClick={handleLinkClick}
            >
              Roster
            </a>

            <a
              href="#highlights"
              className={activeSection === "highlights" ? "active" : ""}
              onClick={handleLinkClick}
            >
              Highlights
            </a>

            <a
              href="#media"
              className={activeSection === "media" ? "active" : ""}
              onClick={handleLinkClick}
            >
              Media
            </a>

            <a
              href="#schedule"
              className={activeSection === "schedule" ? "active" : ""}
              onClick={handleLinkClick}
            >
              Schedule
            </a>

            <a
              href="#partners"
              className={activeSection === "partners" ? "active" : ""}
              onClick={handleLinkClick}
            >
              Partners
            </a>

            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
              onClick={handleLinkClick}
            >
              Contact
            </a>
          </nav>

          <a href="#contact" className="mobile-join" onClick={handleLinkClick}>
            함께하기
          </a>
        </div>
      )}
    </>
  );
}
