// src/components/About.jsx
import React from 'react';
import '/src/styles/About.css';

function About() {
    return (
        <section className='about'>
            <p>
                I'm Lucas, a 21 years old web designer and a final year student at <a href='https://econ.ubbcluj.ro/departamente/departament.php?c=4'>UBB FSEGA</a>. 
                I enjoy creating unique web interfaces, I like the way solving a problem feels and 
                I'm also a friendly guy with too much creativity.
            </p>
            <i className='learning'>
                Currently learning React, 
                and experimenting with visual Javascript Libraries.
            </i>
        </section>
    );
}

export default About;
