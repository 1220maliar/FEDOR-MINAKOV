import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import NewsCard from './components/NewsCard';
import Article from './components/Article';
import card1 from './assets/images/card1.jpg';
import card2 from './assets/images/card2.jpg';
import card3 from './assets/images/card3.jpg';
import card4 from './assets/images/card4.jpg';
import card5 from './assets/images/card5.jpg';
import './App.css';

const news = [
  { 
    id: 1, 
    title: 'Kai Angel/Friendly Thug 52 Ngg', 
    category: 'Любимые исполнители Федора',
    image: card1
  },
  { 
    id: 2, 
    title: 'Свободное время', 
    category: 'Как федор любит проводить свое свободное время',
    image: card2
  },
  { 
    id: 3, 
    title: 'Школьные буднии', 
    category: 'Как федор проводит свою школьные дни вне спорта',
    image: card3
  },
  { 
    id: 4, 
    title: 'Детство федора', 
    category: 'Как началась жизнь Федора и его формирование',
    image: card4
  },
  { 
    id: 5, 
    title: 'Спорт', 
    category: 'Как Федор пришел в спорт и его успехи',
    image: card5
  }
];

// Компонент главной страницы
function HomePage({ isSidebarOpen, onMenuToggle }) {
  return (
    <div className="app">
      <Sidebar isOpen={isSidebarOpen} onToggle={onMenuToggle} />
      <main className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Header onMenuToggle={onMenuToggle} isSidebarOpen={isSidebarOpen} />
        <div className="page-content">
          <div className="content-header">
            <h2 className="section-title">Последние новости</h2>
          </div>
          <div className="news-grid">
            {news.map(item => (
              <NewsCard 
                key={item.id}
                {...item}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

// Компонент страницы статьи
function ArticlePage({ isSidebarOpen, onMenuToggle }) {
  return (
    <div className="app">
      <Sidebar isOpen={isSidebarOpen} onToggle={onMenuToggle} />
      <main className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Article />
      </main>
    </div>
  );
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuToggle = () => {
    const newState = !isSidebarOpen;
    setIsSidebarOpen(newState);
    
    // Блокируем скролл body при открытом сайдбаре
    if (newState) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                isSidebarOpen={isSidebarOpen} 
                onMenuToggle={handleMenuToggle} 
              />
            } 
          />
          <Route 
            path="/article/:id" 
            element={
              <ArticlePage 
                isSidebarOpen={isSidebarOpen} 
                onMenuToggle={handleMenuToggle} 
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;