// src/App.jsx
import React from 'react';
import Hero from './components/Hero';
import HeroImage from './components/HeroImage';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/main.css';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div class='app'>
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
