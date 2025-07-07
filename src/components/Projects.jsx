import React, { useState, useRef, useEffect } from 'react';
import '/src/styles/Projects.css';

function Projects() {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const videoRef = useRef(null);

    const projects = [
        {
            title: 'Cinema Cloud',
            date: 'June 2025',
            tags: ['HTML', 'CSS', 'React', 'Next.js', 'TMDb API', 'Firebase'],
            description: 'Web application for searching movies and TV shows, creating watchlists, and viewing current cinema releases in Romania.',
            video: '/VideoPreviews/CinemaCloud.mov',
            link: 'https://cinema-cloud.vercel.app/'
        },
        {
            title: 'Guest List Sorting',
            date: 'June 2025',
            tags: ['HTML', 'CSS', 'React'],
            description: 'React app for sorting, filtering and combining multiple Google Sheets. A better option for viewing my wedding guests.',
            video: '/VideoPreviews/NuntaAnului.mov',
            link: 'https://github.com/lucaspop5511/NuntaAnului'
        },
        {
            title: 'Rock-Paper-Scissors Game',
            date: 'Janauary 2025',
            tags: ['HTML', 'CSS', 'Vue.js'],
            description: 'The famous rock-paper-scissors game redesigned in my own style. Made this to learn Vue.',
            video: '/VideoPreviews/RPS.mov',
            link: 'https://github.com/lucaspop5511/RPSWar'
        },
        {
            title: 'Honey Tunes',
            date: 'July 2024',
            tags: ['HTML', 'CSS', 'Javascript'],
            description: 'Ear training app, that tests your ability to recognize notes and chords only by hearing them.',
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
            description: 'Simple task manager as a school project.',
            video: '/VideoPreviews/TaskManager.mov',
            link: 'https://task-manager-lucaspop.vercel.app/'
        },
        {
            title: 'Sofi\'s Recipes',
            date: 'April 2024',
            tags: ['HTML', 'CSS', 'Javascript', 'Wordpress', 'PHP'],
            description: 'A website about my favourite recipes in Wordpress, as a part of Azimut Vision Web-Design Course.',
            video: '/VideoPreviews/sofi\'sRecipes.mov'
        },
        {
            title: 'Responsive Digital Clock',
            date: 'April 2024',
            tags: ['HTML', 'CSS', 'Javascript'],
            description: 'Telling time in style. This is just me playing with CSS and smooth responsiveness.',
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

    const getTagCategory = (tag) => {
    const categories = {
        'React': 'react',
        'Vue.js': 'vue',
        'p5.js': 'pfive',
        'HTML': 'html',
        'CSS': 'css',
        'Javascript': 'js',
        'PHP': 'php',
        'Wordpress': 'wp',
    };
    
    return categories[tag] || 'other'; // Default to 'other' if not found
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
                            <span className={`tag tag-${getTagCategory(tag)}`} key={i}>
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
