// src/components/Hero.jsx
import React from 'react';
import '/src/styles/Hero.css';

function Hero() {
    return (
        <section className='hero-container' style={{ textAlign: 'center', marginBottom: '0' }}>
            <h1>Hi there! I'm <i>Lucas</i></h1>
            <p>Web Designer and Student, Romania 🇷🇴</p>
        </section>
    );
}

export default Hero;
