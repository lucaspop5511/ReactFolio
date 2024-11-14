import React, { useState } from 'react';
import '/src/styles/Contact.css';

function Contact() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('lucaspop5511@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    };

    return (
        <section className="contact-container">
            <h2>Contact</h2>
            <p>Feel free to reach me via email</p>

            <div className="email-section">
                <span className="email">lucaspop5511@gmail.com</span>
                <button className="copy-button" onClick={handleCopyEmail}>
                {copied ? (
                    <>
                        <i className="fa-solid fa-clipboard-check"></i> Copied!
                    </>
                    ) : (
                    <>
                        <i className="fa-solid fa-clipboard"></i> Copy Me
                    </>
                )} 
                </button>
            </div>

            <div className="contact-links">
                <a href="https://www.linkedin.com/in/pop-lucas-lp51/" 
                   target="_blank"  
                   rel="noopener noreferrer">
                   <i className="fa-brands fa-linkedin"></i> <b>LinkedIn</b>
                </a>

                <a href="https://github.com/lucaspop5511" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   <i className="fa-brands fa-github"></i> <b>Github</b>
                </a>

                <a href="https://t.me/lukibuki" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   <i className="fa-brands fa-telegram"></i> <b>Telegram</b>
                </a>

                <a href="/PopLucas_CV.pdf" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   <i className="fa-solid fa-file-lines"></i> <b>View Resume</b>
                </a>
            </div>
        </section>
    );
}

export default Contact;
