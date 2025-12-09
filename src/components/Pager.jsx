import React, { useEffect, useState } from "react";
import "../styles/Pager.css";

export default function Pager() {
  const sections = [
    { id: "home", label: "HERO" },
    { id: "about", label: "ABOUT" },
    { id: "roster", label: "ROSTER" },
    { id: "highlights", label: "HIGHLIGHTS" },
    { id: "media", label: "MEDIA" },
    { id: "schedule", label: "SCHEDULE" },
    { id: "partners", label: "PARTNERS" },
    { id: "contact", label: "CONTACT" },
  ];

  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      let current = "home";

      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop - window.innerHeight * 0.4;
          if (window.scrollY >= top) current = sec.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pager">
      {sections.map((s) => (
        <div
          key={s.id}
          className={`pager-item ${active === s.id ? "active" : ""}`}
          onClick={() => scrollTo(s.id)}
        >
          {active === s.id && <span className="pager-label">{s.label}</span>}
          <span className="pager-dot"></span>
        </div>
      ))}
    </div>
  );
}
