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
            description: 'This is a description for the ongoing project.',
            video: '/VideoPreviews/EEG.mov',
        },
        {
            title: 'Honey Tunes',
            date: 'July 2024',
            tags: ['HTML', 'CSS', 'Javascript'],
            description: 'Description for past project 1.',
            video: '/VideoPreviews/HoneyTunes.mov',
        },
        {
            title: 'My older Portfolio Page',
            date: 'May 2024',
            tags: ['HTML', 'CSS', 'Javascript', 'p5.js'],
            description: 'Description for past project 2.',
            video: '/VideoPreviews/OldWebsite.mov',
        },
        {
            title: 'Task Manager',
            date: 'May 2024',
            tags: ['HTML', 'CSS', 'Javascript'],
            description: 'Description for past project 3.',
            video: '/VideoPreviews/TaskManager.mov',
        },
        {
            title: 'Responsive Digital Clock',
            date: 'April 2024',
            tags: ['HTML', 'CSS', 'Javascript'],
            description: 'Description for past project 4.',
            video: '/VideoPreviews/DigitalClock.mov',
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
