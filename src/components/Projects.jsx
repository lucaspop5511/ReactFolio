// src/components/Projects.jsx
import React, { useState } from 'react';
import '/src/styles/Projects.css';

function Projects() {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const projects = [
        {
            title: 'Ongoing Project',
            tags: ['React', 'JavaScript'],
            description: 'This is a description for the ongoing project.',
            image: 'https://via.placeholder.com/150',
        },
        {
            title: 'Past Project 1',
            tags: ['HTML', 'CSS', 'p5.js'],
            description: 'Description for past project 1.',
            image: 'https://via.placeholder.com/150',
        },
        {
            title: 'Past Project 2',
            tags: ['HTML', 'CSS', 'p5.js'],
            description: 'Description for past project 1.',
            image: 'https://via.placeholder.com/150',
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
        <section style={{ textAlign: 'left', marginBottom: '1rem' }}>
            <hr className="separator"></hr>
            <h2>Projects</h2>
            {projects.map((project, index) => (
                <div
                    className="project"
                    key={index}
                    onMouseEnter={(event) => handleMouseEnter(project, event)}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <h3>{project.title}</h3>
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
                        backgroundImage: `url(${hoveredProject.image})`,
                    }}
                />
            )}
        </section>
    );
}

export default Projects;
