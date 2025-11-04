import React from 'react';

const Sidebar = ({ isOpen, onToggle }) => {
  const socialItems = [
    { 
      id: 1, 
      icon: 'fab fa-instagram', 
      text: 'Instagram', 
      url: 'https://www.instagram.com/.fedos.?igsh=d2M5Zmk4ZDNyYTk%3D&utm_source=qr' 
    },
    { 
      id: 2, 
      icon: 'fab fa-telegram', 
      text: 'Telegram', 
      url: 'https://t.me/fedos_minak' 
    },
    { 
      id: 3, 
      icon: 'fab fa-vk', 
      text: 'VK', 
      url: 'https://m.vk.com/fedos7ik' 
    },
    { 
      id: 4, 
      icon: 'fab fa-tiktok', 
      text: 'TikTok', 
      url: 'https://www.tiktok.com/@_.fedos._?_r=1&_t=ZS-9167etQbCaK' 
    }
  ];

  const handleLinkClick = (e, url) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <h3 className="sidebar-title">Социальные сети</h3>
          <div className="social-links-container">
            {socialItems.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className="social-link"
                onClick={(e) => handleLinkClick(e, item.url)}
                style={{ color: 'white' }} // Добавляем белый цвет
              >
                <i 
                  className={item.icon} 
                  style={{ color: 'white' }} // Принудительно белый для иконок
                ></i>
                <span className="social-text">{item.text}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="overlay" onClick={onToggle}></div>
      )}
    </>
  );
};

export default Sidebar;