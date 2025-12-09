import React from "react";
import "../styles/Media.css";

export default function Media() {
  const videos = [
    {
      title: "챔피언십 우승 순간",
      thumbnail:
        "https://images.unsplash.com/photo-1553492206-f609eddc33dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwZ2FtaW5nJTIwYXJlbmF8ZW58MXx8fHwxNzY0NDMzNzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "5:32",
      views: "125K",
    },
    {
      title: "전설의 팀파이트 분석",
      thumbnail:
        "https://images.unsplash.com/photo-1558008322-9793c57cb73b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjB0b3VybmFtZW50JTIwY3Jvd2R8ZW58MXx8fHwxNzY0NDE0NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "8:15",
      views: "89K",
    },
    {
      title: "SHADOW 선수 스포트라이트",
      thumbnail:
        "https://images.unsplash.com/photo-1759701546662-b79f5d881124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBnYW1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDQ5MDI2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "12:45",
      views: "156K",
    },
    {
      title: "시즌 하이라이트 모음",
      thumbnail:
        "https://images.unsplash.com/photo-1761751237570-b9b4e1412565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3BvbnNvciUyMGxvZ298ZW58MXx8fHwxNzY0NDkwMjY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "15:20",
      views: "203K",
    },
    {
      title: "FLUX 선수 인터뷰",
      thumbnail:
        "https://images.unsplash.com/photo-1553492206-f609eddc33dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwZ2FtaW5nJTIwYXJlbmF8ZW58MXx8fHwxNzY0NDMzNzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "7:42",
      views: "67K",
    },
    {
      title: "팀 전략 분석 - 최종전",
      thumbnail:
        "https://images.unsplash.com/photo-1558008322-9793c57cb73b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjB0b3VybmFtZW50JTIwY3Jvd2R8ZW58MXx8fHwxNzY0NDE0NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "10:33",
      views: "142K",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1553492206-f609eddc33dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwZ2FtaW5nJTIwYXJlbmF8ZW58MXx8fHwxNzY0NDMzNzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1558008322-9793c57cb73b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjB0b3VybmFtZW50JTIwY3Jvd2R8ZW58MXx8fHwxNzY0NDE0NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1759701546662-b79f5d881124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBnYW1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDQ5MDI2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1761751237570-b9b4e1412565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3BvbnNvciUyMGxvZ298ZW58MXx8fHwxNzY0NDkwMjY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1553492206-f609eddc33dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwZ2FtaW5nJTIwYXJlbmF8ZW58MXx8fHwxNzY0NDMzNzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1558008322-9793c57cb73b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjB0b3VybmFtZW50JTIwY3Jvd2R8ZW58MXx8fHwxNzY0NDE0NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  ];
  return (
    <section id="media" className="section media">
      <div className="container">
        <h2 className="section-title">MEDIA & HIGHLIGHTS</h2>

        <div className="video-area">
          <div className="video-card">
            <img src="/img/video1.jpg" alt="video" />
            <p>Featured Match Highlights</p>
          </div>
          <div className="video-card">
            <img src="/img/video2.jpg" alt="video" />
            <p>Training Moments</p>
          </div>
        </div>

        <div className="photo-gallery">
          <img src="/img/photo1.jpg" alt="" />
          <img src="/img/photo2.jpg" alt="" />
          <img src="/img/photo3.jpg" alt="" />
          <img src="/img/photo4.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
