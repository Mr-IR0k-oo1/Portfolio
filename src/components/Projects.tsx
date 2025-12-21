import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Reveal from './Reveal';
import Magnetic from './Magnetic';

interface Project {
    category: string;
    title: string;
    description: string;
    tech: string[];
}

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    
    // Tilt Motion Values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div 
            layout
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            style={{
                perspective: "1000px",
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
            }}
            className="project-card"
        >
            <div 
                className="project-image"
                style={{ transform: "translateZ(50px)" }}
            >
                <div className="placeholder-img" style={{ background: 'linear-gradient(45deg, #111, #222)' }}></div>
                <div className="project-overlay">
                    <button className="project-view-btn">
                        <i className="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            <div 
                className="project-content"
                style={{ transform: "translateZ(75px)" }}
            >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                    {project.tech.map(t => <span key={t}>{t}</span>)}
                </div>
                <div className="project-links">
                    <Magnetic>
                        <a href="#" className="project-link">
                            <i className="fas fa-external-link-alt"></i>
                            Live Demo
                        </a>
                    </Magnetic>
                    <Magnetic>
                        <a href="#" className="project-link">
                            <i className="fab fa-github"></i>
                            Source Code
                        </a>
                    </Magnetic>
                </div>
            </div>
        </motion.div>
    );
};

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
                <Reveal>
                    <h2 className="section-title">Featured Projects</h2>
                </Reveal>
                
                <div className="projects-filter">
                    {['all', 'web', 'mobile', 'enterprise'].map((f, i) => (
                        <motion.button 
                            key={f} 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className={`filter-btn ${filter === f ? 'active' : ''}`} 
                            onClick={() => setFilter(f)}
                            data-filter={f}
                        >
                            {f === 'all' ? 'All' : f === 'web' ? 'Web Apps' : f.charAt(0).toUpperCase() + f.slice(1)}
                        </motion.button>
                    ))}
                </div>
                
                <motion.div layout className="projects-grid grid-responsive">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard 
                                key={project.title}
                                project={project}
                                index={index}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
