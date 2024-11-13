import React, { useState, useRef, useEffect } from 'react';
import '/src/styles/Projects.css';

function Projects() {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const videoRef = useRef(null); // Create a reference to the video element

    const projects = [
        {
            title: 'Eco Engineering Group',
            date: 'Work in progress',
            tags: ['HTML', 'CSS'],
            description: 'Landing page for a romanian eco company. Currently working on in!',
            video: '/VideoPreviews/EEG.mov',
            link: 'https://eegro.vercel.app/#'
        },
        {
            title: 'Honey Tunes',
            date: 'July 2024',
            tags: ['HTML', 'CSS', 'Javascript'],
            description: 'Ear training app, that tests your ability to recognize notes and chords only by hearing them',
            video: '/VideoPreviews/HoneyTunes.mov',
            link: 'https://honey-tunes.vercel.app/'
        },
        {
            title: 'My older Portfolio Page',
            date: 'May 2024',
            tags: ['HTML', 'CSS', 'Javascript', 'p5.js'],
            description: 'Personal single page webapp with more information about me, and also a cool minigame. This is the first big project that I made.',
            video: '/VideoPreviews/OldWebsite.mov',
            link: 'https://lucaspop51.vercel.app/'
        },
        {
            title: 'Task Manager',
            date: 'May 2024',
            tags: ['HTML', 'CSS', 'Javascript'],
            description: 'Simple task manager as a project for my school',
            video: '/VideoPreviews/TaskManager.mov',
            link: 'https://task-manager-lucaspop.vercel.app/'
        },
        {
            title: 'Responsive Digital Clock',
            date: 'April 2024',
            tags: ['HTML', 'CSS', 'Javascript'],
            description: 'Telling time in style. This is just me playing with CSS and smooth responsiveness',
            video: '/VideoPreviews/DigitalClock.mov',
            link: 'https://responsive-digital-clock.vercel.app/'
        },
    ];

    const handleMouseEnter = (project, event) => {
        setHoveredProject(project);
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseLeave = () => {
        setHoveredProject(null);
    };

    const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleClick = (link) => {
        window.open(link, '_blank'); // Open the project link in a new tab
    };

    useEffect(() => {
        if (videoRef.current && hoveredProject) {
            videoRef.current.playbackRate = 1.5; // Set the playback rate when the video is hovered
        }
    }, [hoveredProject]); // Only run when hoveredProject changes

    return (
        <section className='projects-container' style={{ textAlign: 'left', marginBottom: '1rem' }}>
            <hr className="separator" id='top'></hr>
            <h2>Projects</h2>
            {projects.map((project, index) => (
                <div
                    className="project"
                    key={index}
                    onMouseEnter={(event) => handleMouseEnter(project, event)}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(project.link)} // Open link on click
                    style={{ cursor: 'pointer' }}
                >
                    <h3>{project.title} | <i>{project.date}</i></h3>
                    <p>{project.description}</p>
                    <div className="tags">
                        {project.tags.map((tag, i) => (
                            <span className="tag" key={i}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
            {hoveredProject && (
                <div
                    className="project-preview"
                    style={{
                        top: mousePosition.y - 5,
                        left: mousePosition.x + 15,
                    }}
                >
                    <video
                        ref={videoRef} // Attach the ref to the video element
                        src={hoveredProject.video}
                        width="2980"
                        height="1844"
                        loop
                        autoPlay
                        muted
                        style={{ objectFit: 'cover', borderRadius: '8px' }}
                    />
                </div>
            )}
            <hr className="separator" id="bot"></hr>
        </section>
    );
}

export default Projects;
