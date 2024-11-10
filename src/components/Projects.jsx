import React, { useState } from 'react';
import '/src/styles/Projects.css';

function Projects() {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const projects = [
        {
            title: 'Eco Engineering Group',
            date: 'Work in progress',
            tags: ['HTML', 'CSS'],
            description: 'This is a description for the ongoing project.',
            video: 'public/VideoPreviews/EEG.mov',
        },
        {
            title: 'Honey Tunes',
            date: 'July 2024',
            tags: ['HTML', 'CSS', 'Javascript'],
            description: 'Description for past project 1.',
            video: 'public/VideoPreviews/HoneyTunes.mov',
        },
        {
            title: 'My older Portfolio Page',
            date: 'May 2024',
            tags: ['HTML', 'CSS', 'Javascript','p5.js'],
            description: 'Description for past project 2.',
            video: 'public/VideoPreviews/OldWebsite.mov',
        },
        {
            title: 'Task Manager',
            date: 'May 2024',
            tags: ['HTML', 'CSS', 'Javascript'],
            description: 'Description for past project 3.',
            video: 'public/VideoPreviews/TaskManager.mov',
        },
        {
            title: 'Responsive Digital Clock',
            date: 'April 2024',
            tags: ['HTML', 'CSS', 'Javascript'],
            description: 'Description for past project 4.',
            video: 'public/VideoPreviews/DigitalClock.mov',
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
                        top: mousePosition.y + 20,
                        left: mousePosition.x + 20,
                    }}
                >
                    <video
                        src={hoveredProject.video}
                        width="2980"
                        height="1844"
                        loop
                        autoPlay
                        muted
                        style={{ objectFit: 'cover', borderRadius: '8px' }}
                        playbackRate={4}
                    />
                </div>
            )}
            <hr className="separator" id="bot"></hr>
        </section>
    );
}

export default Projects;
