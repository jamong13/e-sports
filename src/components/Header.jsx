import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <img src="/img/logo_dark_background.png" alt="logo" />
        </div>

        <div className="nav-wrapper">
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#roster">Roster</a>
            <a href="#highlights">Highlights</a>
            <a href="#media">Media</a>
            <a href="#schedule">Schedule</a>
            <a href="#partners">Partners</a>
            <a href="#contact">Contact</a>
          </nav>

          <button className="btn-join">함께하기</button>
        </div>
      </div>
    </header>
  );
}
