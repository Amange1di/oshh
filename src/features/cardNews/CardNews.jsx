import React from "react";
import "./cardNews.scss";

const newsItems = [
  {
    date: "20 фев",
    time: "19:00",
    title: "Концерт \"Музыкальные ритмы города\"",
    description: "Окунитесь в атмосферу живой музыки с участием популярных исполнителей.",
    image: "https://falstaff.b-cdn.net/storage/sites/2/2023/09/Bildschirmfoto_2023-09-28_um_16.52.07.png"
  },
  {
    date: "20 января 2025",
    time: "19:00",
    title: "Концерт \"Музыкальные ритмы города\"",
    description: "Окунитесь в атмосферу живой музыки с участием популярных исполнителей.",
    image: "https://falstaff.b-cdn.net/storage/sites/2/2023/09/Bildschirmfoto_2023-09-28_um_16.52.07.png"
  },
   {
    date: "20 фев",
    time: "19:00",
    title: "Концерт \"Музыкальные ритмы города\"",
    description: "Окунитесь в атмосферу живой музыки с участием популярных исполнителей.",
    image: "https://falstaff.b-cdn.net/storage/sites/2/2023/09/Bildschirmfoto_2023-09-28_um_16.52.07.png"
  },
  {
    date: "20 января 2025",
    time: "19:00",
    title: "Концерт \"Музыкальные ритмы города\"",
    description: "Окунитесь в атмосферу живой музыки с участием популярных исполнителей.",
    image: "https://falstaff.b-cdn.net/storage/sites/2/2023/09/Bildschirmfoto_2023-09-28_um_16.52.07.png"
  }, 
  {
    date: "20 фев",
    time: "19:00",
    title: "Концерт \"Музыкальные ритмы города\"",
    description: "Окунитесь в атмосферу живой музыки с участием популярных исполнителей.",
    image: "https://falstaff.b-cdn.net/storage/sites/2/2023/09/Bildschirmfoto_2023-09-28_um_16.52.07.png"
  },
  {
    date: "20 января 2025",
    time: "19:00",
    title: "Концерт \"Музыкальные ритмы города\"",
    description: "Окунитесь в атмосферу живой музыки с участием популярных исполнителей.",
    image: "https://falstaff.b-cdn.net/storage/sites/2/2023/09/Bildschirmfoto_2023-09-28_um_16.52.07.png"
  }, 
  {
    date: "20 фев",
    time: "19:00",
    title: "Концерт \"Музыкальные ритмы города\"",
    description: "Окунитесь в атмосферу живой музыки с участием популярных исполнителей.",
    image: "https://falstaff.b-cdn.net/storage/sites/2/2023/09/Bildschirmfoto_2023-09-28_um_16.52.07.png"
  },
  {
    date: "20 января 2025",
    time: "19:00",
    title: "Концерт \"Музыкальные ритмы города\"",
    description: "Окунитесь в атмосферу живой музыки с участием популярных исполнителей.",
    image: "https://falstaff.b-cdn.net/storage/sites/2/2023/09/Bildschirmfoto_2023-09-28_um_16.52.07.png"
  },
];

export function CardNews() {
  return (
    <div className="card-news">
      <h2>НОВОСТИ</h2>
      <div className="news-row">
        {newsItems.map((news, index) => (
          <div className="news-col-3" key={index}>
            <div className="news-card">
              <img src={news.image} alt={news.title} className="news-image" />
              <div className="news-content">
                <h3>{news.title}</h3>
                <hr />
                <span className="news-date">{news.date} - {news.time}</span>
                <p>{news.description}</p>
                <button className="news-button">Подробнее</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


