import React from 'react';

const Header = ({ onMenuToggle, isSidebarOpen }) => {
  return (
    <header className="header">
      {/* Кнопка с тремя полосками - без контура */}
      <button 
        className="menu-toggle-button"
        onClick={onMenuToggle}
      >
        <span className="menu-icon"></span>
        <span className="menu-icon"></span>
        <span className="menu-icon"></span>
      </button>
      
      {/* Поиск УБРАН */}
      
      {/* Надпись FEDOR MINAKOV остается */}
      <div className="header-title">
        FEDOR MINAKOV
      </div>
    </header>
  );
};

export default Header;