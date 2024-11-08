// src/components/Contact.jsx
import React from 'react';
import '/src/styles/Contact.css';

function Contact() {
    return (
        <section class='contact-container'>
            <hr className="separator"></hr>
            <h2>Contact</h2>
            <p>Email: <span onClick={() => navigator.clipboard.writeText('your.email@example.com')}>Copy Me</span></p>
            <div>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
            </div>
        </section>
    );
}

export default Contact;
