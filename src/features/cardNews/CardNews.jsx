import React, { useState, useEffect } from "react";
import "./cardNews.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

const newsItems = [
  {
    date: "20 фев",
    time: "19:00",
    title: 'Концерт "Музыкальные ритмы города"',
    description:
      "Окунитесь в атмосферу живой музыки с участием популярных исполнителей.",
    image:
      "https://falstaff.b-cdn.net/storage/sites/2/2023/09/Bildschirmfoto_2023-09-28_um_16.52.07.png",
  },
  {
    date: "20 фев",
    time: "19:00",
    title: 'Концерт "Музыкальные ритмы города"',
    description:
      "Окунитесь в атмосферу живой музыки с участием популярных исполнителей.",
    image:
      "https://falstaff.b-cdn.net/storage/sites/2/2023/09/Bildschirmfoto_2023-09-28_um_16.52.07.png",
  },
  {
    date: "20 фев",
    time: "19:00",
    title: 'Концерт "Музыкальные ритмы города"',
    description:
      "Окунитесь в атмосферу живой музыки с участием популярных исполнителей.",
    image:
      "https://falstaff.b-cdn.net/storage/sites/2/2023/09/Bildschirmfoto_2023-09-28_um_16.52.07.png",
  },
  {
    date: "20 фев",
    time: "19:00",
    title: 'Концерт "Музыкальные ритмы города"',
    description:
      "Окунитесь в атмосферу живой музыки с участием популярных исполнителей.",
    image:
      "https://falstaff.b-cdn.net/storage/sites/2/2023/09/Bildschirmfoto_2023-09-28_um_16.52.07.png",
  },
  {
    date: "20 фев",
    time: "19:00",
    title: 'Концерт "Музыкальные ритмы города"',
    description:
      "Окунитесь в атмосферу живой музыки с участием популярных исполнителей.",
    image:
      "https://falstaff.b-cdn.net/storage/sites/2/2023/09/Bildschirmfoto_2023-09-28_um_16.52.07.png",
  },
];
export function CardNews() {
  const getIsTabletop = () =>
    window.innerWidth >= 768 && window.innerWidth <= 1200;
  const [isTabletop, setIsTabletop] = useState(getIsTabletop());

  useEffect(() => {
    const handleResize = () => setIsTabletop(getIsTabletop());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="card-news">
      <h2>НОВОСТИ</h2>
      <div className="news-row">
        {isTabletop ? (
          <Swiper
            spaceBetween={24}
            loop={true}
            breakpoints={{
              1200: { slidesPerView: 3 }, 
              1000: { slidesPerView: 3 }, 
              992: { slidesPerView: 2 }, 
              786: { slidesPerView: 2 }, 

            }}
          >
            {newsItems.map((news, index) => (
              <SwiperSlide key={index}>
                <div className="news-card">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="news-image"
                  />
                  <div className="news-content">
                    <h3>{news.title}</h3>
                    <hr />
                    <span className="news-date">
                      {news.date} - {news.time}
                    </span>
                    <p>{news.description}</p>
                    <button className="news-button">Подробнее</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          newsItems.map((news, index) => (
            <div className="news-col-3" key={index}>
              <div className="news-card">
                <img src={news.image} alt={news.title} className="news-image" />
                <div className="news-content">
                  <h3>{news.title}</h3>
                  <hr />
                  <span className="news-date">
                    {news.date} - {news.time}
                  </span>
                  <p>{news.description}</p>
                  <button className="news-button">Подробнее</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
