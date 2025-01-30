import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import HeroImage from './components/HeroImage';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/main.css';
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='app'>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
      <div className='main'>
        <Hero />
        <HeroImage />
        <About />
      </div>
      <Projects />
      <Contact />
      <Analytics />
    </div>
  );
}

export default App;
