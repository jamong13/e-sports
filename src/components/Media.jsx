import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/Media.css";

const videos = [
  {
    id: 1,
    title: "챔피언십 우승 순간",
    thumbnail:
      "https://images.unsplash.com/photo-1553492206-f609eddc33dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwZ2FtaW5nJTIwYXJlbmF8ZW58MXx8fHwxNzY0NDMzNzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "5:32",
    views: "125K",
  },
  {
    id: 2,
    title: "전설의 팀파이트 분석",
    thumbnail:
      "https://images.unsplash.com/photo-1558008322-9793c57cb73b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjB0b3VybmFtZW50JTIwY3Jvd2R8ZW58MXx8fHwxNzY0NDE0NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "8:15",
    views: "89K",
  },
  {
    id: 3,
    title: "SHADOW 선수 스포트라이트",
    thumbnail:
      "https://images.unsplash.com/photo-1759701546662-b79f5d881124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBnYW1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDQ5MDI2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "12:45",
    views: "156K",
  },
  {
    id: 4,
    title: "시즌 하이라이트 모음",
    thumbnail:
      "https://images.unsplash.com/photo-1761751237570-b9b4e1412565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3BvbnNvciUyMGxvZ298ZW58MXx8fHwxNzY0NDkwMjY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "15:20",
    views: "203K",
  },
  {
    id: 5,
    title: "FLUX 선수 인터뷰",
    thumbnail:
      "https://images.unsplash.com/photo-1553492206-f609eddc33dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwZ2FtaW5nJTIwYXJlbmF8ZW58MXx8fHwxNzY0NDMzNzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "7:42",
    views: "67K",
  },
  {
    id: 6,
    title: "팀 전략 분석 - 최종전",
    thumbnail:
      "https://images.unsplash.com/photo-1558008322-9793c57cb73b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjB0b3VybmFtZW50JTIwY3Jvd2R8ZW58MXx8fHwxNzY0NDE0NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "10:33",
    views: "142K",
  },
];
const gallery = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1553492206-f609eddc33dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwZ2FtaW5nJTIwYXJlbmF8ZW58MXx8fHwxNzY0NDMzNzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1558008322-9793c57cb73b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjB0b3VybmFtZW50JTIwY3Jvd2R8ZW58MXx8fHwxNzY0NDE0NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1759701546662-b79f5d881124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBnYW1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDQ5MDI2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1761751237570-b9b4e1412565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3BvbnNvciUyMGxvZ298ZW58MXx8fHwxNzY0NDkwMjY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1553492206-f609eddc33dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwZ2FtaW5nJTIwYXJlbmF8ZW58MXx8fHwxNzY0NDMzNzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1558008322-9793c57cb73b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjB0b3VybmFtZW50JTIwY3Jvd2R8ZW58MXx8fHwxNzY0NDE0NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];
export default function Media() {
  const swiperRef = useRef(null);
  const galleryRef = useRef(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const goToPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const goToNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };
  return (
    <section id="media" className="media section">
      <div className="container">
        <h2 className="section-title">MEDIA & HIGHLIGHTS</h2>

        <h3 className="media-subtitle">Featured Videos</h3>

        <Swiper
          modules={[Pagination]}
          pagination={{
            el: ".media-pagination",
            clickable: true,
          }}
          slidesPerView={3}
          spaceBetween={28}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="media-swiper"
          breakpoints={{
            1100: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
          }}
        >
          {videos.map((video, i) => (
            <SwiperSlide key={i}>
              <div
                className="video-card"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="video-thumb">
                  <div className="video-img">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                  <span className="duration">{video.duration}</span>
                  <div className="play-btn">▶</div>
                </div>

                <h4 className="video-title">{video.title}</h4>
                <p className="video-views">{video.views} views</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="media-pagination-wrapper">
          <button className="custom-prev-btn" onClick={goToPrev}>
            ←
          </button>
          <div className="media-pagination"></div>{" "}
          <button className="custom-next-btn" onClick={goToNext}>
            →
          </button>
        </div>
        <h3 className="media-subtitle">Photo Gallery</h3>

        <Swiper
          modules={[Pagination]}
          pagination={{
            el: ".gallery-pagination",
            clickable: true,
          }}
          slidesPerView={4}
          spaceBetween={28}
          onSwiper={(swiper) => {
            galleryRef.current = swiper;
          }}
          className="gallery-swiper"
          breakpoints={{
            1100: {
              slidesPerView: 4,
              spaceBetween: 28,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
          }}
        >
          {gallery.map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className="photo-card"
                onClick={() => setSelectedImage(img.url)}
              >
                <img src={img.url} alt={`gallery-${i}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="gallery-pagination-wrapper">
          <button
            className="custom-prev-btn"
            onClick={() => galleryRef.current?.slidePrev()}
          >
            ←
          </button>

          <div className="gallery-pagination"></div>

          <button
            className="custom-next-btn"
            onClick={() => galleryRef.current?.slideNext()}
          >
            →
          </button>
        </div>
      </div>
      {selectedVideo && (
        <div className="modal-overlay" onClick={() => setSelectedVideo(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedVideo(null)}
            >
              ×
            </button>

            <img
              className="modal-video-img"
              src={selectedVideo.thumbnail}
              alt={selectedVideo.title}
            />
            <div className="modal-play-button">▶</div>
            <div className="modal-info">
              <h3>{selectedVideo.title}</h3>
              <p>
                {selectedVideo.views} views • {selectedVideo.duration}
              </p>
            </div>
          </div>
        </div>
      )}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>

            <img
              className="modal-photo-img"
              src={selectedImage}
              alt="Gallery"
            />
          </div>
        </div>
      )}
    </section>
  );
}
