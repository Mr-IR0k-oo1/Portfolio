import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects: React.FC = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            category: 'web',
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and analytics dashboard.',
            tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
        },
        {
            category: 'enterprise',
            title: 'Enterprise Dashboard',
            description: 'Comprehensive analytics platform with real-time data visualization, reporting, and team collaboration tools.',
            tech: ['Vue.js', 'Python', 'PostgreSQL', 'Docker']
        },
        {
            category: 'mobile',
            title: 'Task Management App',
            description: 'Cross-platform mobile application for team collaboration with real-time sync and offline capabilities.',
            tech: ['React Native', 'Firebase', 'Redux', 'TypeScript']
        }
    ];

    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="projects">
            <div className="container">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Featured Projects
                </motion.h2>
                <div className="projects-filter">
                    {['all', 'web', 'mobile', 'enterprise'].map(f => (
                        <button 
                            key={f} 
                            className={`filter-btn ${filter === f ? 'active' : ''}`} 
                            onClick={() => setFilter(f)}
                            data-filter={f}
                        >
                            {f === 'all' ? 'All' : f === 'web' ? 'Web Apps' : f.charAt(0).toUpperCase() + f.slice(1)}
                        </button>
                    ))}
                </div>
                <motion.div layout className="projects-grid grid-responsive">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div 
                                layout
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="project-card"
                            >
                                <div className="project-image">
                                    <div className="placeholder-img" style={{ background: 'linear-gradient(45deg, #111, #222)' }}></div>
                                    <div className="project-overlay">
                                        <button className="project-view-btn">
                                            <i className="fas fa-eye"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-tech">
                                        {project.tech.map(t => <span key={t}>{t}</span>)}
                                    </div>
                                    <div className="project-links">
                                        <a href="#" className="project-link">
                                            <i className="fas fa-external-link-alt"></i>
                                            Live Demo
                                        </a>
                                        <a href="#" className="project-link">
                                            <i className="fab fa-github"></i>
                                            Source Code
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
