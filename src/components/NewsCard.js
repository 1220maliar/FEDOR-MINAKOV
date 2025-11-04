import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewsCard = ({ id, title, category, date, image, excerpt }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/article/${id}`);
  };

  return (
    <div className="news-card" onClick={handleClick}>
      <div className="news-image-container">
        <div 
          className="news-image-background"
          style={{ backgroundImage: 'url(' + image + ')' }}
        />
      </div>
      
      <div className="news-info-container">
        <div className="news-meta">
          <span className="news-category">{category}</span>
          <span className="news-date">{date}</span>
        </div>
        <span className="news-title">{title}</span>
        {/* Добавляем текст описания */}
        {excerpt && <p className="news-excerpt">{excerpt}</p>}
      </div>
    </div>
  );
};

export default NewsCard;