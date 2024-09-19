// components/RecentNews.js

import React from 'react';
import './RecentNews.css';

const newsItems = [
  {
    title: "Some Explanation Expected From Registry When Case Isn't Listed",
    imageUrl: "https://dummyimage.com/300x200/000/fff", // Placeholder image URL
  },
  {
    title: "Supreme Court files complaint against social media handle...",
    imageUrl: "https://dummyimage.com/300x200/000/fff", // Placeholder image URL
  },
  {
    title: "Reconsider compulsory attendance requirement in...",
    imageUrl: "https://dummyimage.com/300x200/000/fff", // Placeholder image URL
  },
  {
    title: "Reconsider compulsory attendance requirement in...",
    imageUrl: "https://dummyimage.com/300x200/000/fff", // Placeholder image URL
  }

  // Add more news items as necessary
];

const RecentNews = () => {
  return (
    <div className="recent-news">
      <h3>Recent News</h3>
      <div className="news-container">
        {newsItems.map((item, index) => (
          <div key={index} className="news-item">
            <div className="news-item-image">
              <img src={item.imageUrl} alt={`News ${index + 1}`} />
            </div>
            <div className="news-item-text">
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentNews;
