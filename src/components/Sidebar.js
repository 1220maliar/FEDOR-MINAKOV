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

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <h3 className="sidebar-title">Социальные сети</h3>
          <div className="social-links-container">
            {socialItems.map((item) => (
              <button
                key={item.id}
                className="social-link"
                onClick={() => handleLinkClick(item.url)}
              >
                <i className={item.icon}></i>
                <span className="social-text">{item.text}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Перекрывающий блок для сайдбара */}
      <div className="sidebar-overlay-area"></div>

      {isOpen && <div className="overlay" onClick={onToggle}></div>}
    </>
  );
};

export default Sidebar;