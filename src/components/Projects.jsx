import React, { useState, useRef, useEffect } from 'react';
import '/src/styles/Projects.css';

function Projects() {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const videoRef = useRef(null); // Create a reference to the video element

    const projects = [
        {
            title: 'Rock-Paper-Scissors Game',
            date: 'Janauary 2025',
            tags: ['Vue.js' ,'HTML', 'CSS'],
            description: 'The famous rock-paper-scissors game redesigned in my own style. Made this to learn Vue.',
            video: '/VideoPreviews/RPS.mov',
            link: 'https://github.com/lucaspop5511/RPSWar'
        },
        {
            title: 'Eco Engineering Group',
            date: 'October 2024',
            tags: ['HTML', 'CSS'],
            description: 'Landing page for a romanian eco company. Currently working on it!',
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
            title: 'Sofi\'s Recipes',
            date: 'April 2024',
            tags: ['Wordpress', 'HTML', 'PHP', 'Javascript', 'CSS'],
            description: 'A website about my favourite recipes in Wordpress, as a part of Azimut Vision Web-Design Course',
            video: '/VideoPreviews/sofi\'sRecipes.mov'
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
        updateMousePosition(event);
    };

    const handleClick = (link) => {
        window.open(link, '_blank'); // Open the project link in a new tab
    };

    const updateMousePosition = (event) => {
        const previewWidth = 500; // Max width of the preview (clamped in CSS)
        const previewHeight = (previewWidth / 298) * 184; // Maintain aspect ratio
        const padding = 15; // Padding to prevent edge overflow
        const { clientX, clientY } = event;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Calculate x position (ensuring the preview doesn’t go out of viewport)
        const x = clientX + previewWidth + padding > viewportWidth
            ? viewportWidth - previewWidth - padding
            : clientX + padding;

        // Calculate y position similarly
        const y = clientY + previewHeight + padding > viewportHeight
            ? viewportHeight - previewHeight - padding
            : clientY - 5;

        setMousePosition({ x, y });
    };

    useEffect(() => {
        if (videoRef.current && hoveredProject) {
            videoRef.current.playbackRate = 2.5; // Set the playback rate when the video is hovered
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
                    onClick={() => handleClick(project.link)}
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
                        top: mousePosition.y,
                        left: mousePosition.x,
                    }}
                >
                    <video
                        ref={videoRef}
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
