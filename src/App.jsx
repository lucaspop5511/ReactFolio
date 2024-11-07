// src/App.jsx
import React from 'react';
import Hero from './components/Hero';
import HeroImage from './components/HeroImage'; // Import the new HeroImage component
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/main.css';

function App() {
  return (
    <div class='app'>
      <Hero />
      <HeroImage />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
